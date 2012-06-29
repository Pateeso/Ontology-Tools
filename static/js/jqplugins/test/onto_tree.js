
function echoFunction(message) {
	return "Received: " + message;
}
//replace OntoTree with the correct name;
(function($){
	//private functions
	var debuglevel=1;
	var inspect=function(objData,objName){
		if (debuglevel==0) return;
		var toString=function(obj,title){
			if (title===undefined) title='';
			var $s= title + ': ';
			if (typeof obj == 'function')
				$s += 'function () ...';
			else if (typeof obj == 'object'){
				$s += '{'+ '\n';
				for (var i in obj)
					$s +=toString(obj[i], i );
				$s += '}' + '\n';
			} else
				$s += obj;
			return $s + "\n";
		}
		var str=toString(objData,objName)
		if (window.console)
			console.log(str);
		else
			alert(str);
	}
	//protected functions
	var levelTwo={
		createTreeNodeObject:function(el,item){
			var s='<img class="treeItem" src="'+el.config.conceptGroupIcon+'" />'
			s+='<span class="treeItemText" item-title="true"><span>'+ item.pt
			s+='</span><span class="treeCounter" data-conceptid="'+item.id+'"'
			s+='>('+item.kids+') </span></span>'
			return {html:s, expanded:item.open=='true'}			
		},
		addNodesToTree:function(el,tree,nodes,parent){
			for (i in nodes)
				tree.jqxTree
					('addTo',levelTwo.createTreeNodeObject(el,nodes[i]),parent);				
		},
		setTreeHeader:function(el,data){
			$('div.jqx-expander-header-content',el).html(data.ontologyFSN);
		},
		getParentForKids:function(tree){
			return tree.jqxTree('getItems')[0].element
		}
	}
	var helpers ={
		createSkeletonDivs:function(el){
			if($(el).attr('id'))
				el.divid='treeBodyOf' + $(el).attr('id');
			else
				el.divid='treeBody';
			var s='<div class="treeFrame">'
				s+='<div class="treeTitle">Title</div>'
				s+='<div id="'+el.divid+'">'
				        s+='<ul></ul>'
				s+='</div>'
			s+='</div>'
			$(s).appendTo(el);
		},
		createExpander:function(el){
			$('div#'+el.divid,el).jqxTree(el.config.jqxTreeConfig)
			$('div.treeFrame',el).jqxExpander(el.config.jqxExpanderConfig)
		},
		dblClick:function(event){
			var parent=$(this).parents('li');
			var parId;
			var curId=$(this).find('span.treeCounter').attr('data-conceptid')
			if (parent.length>1)
				parId=$(parent[1]).children('div')
						.find('span.treeCounter').attr('data-conceptid')
			else
				parId=curId						
			var data={
				curId:$('span.treeCounter',this).attr('data-conceptid'),
				parId:parId
			}
			helpers.ajaxCall(helpers.el,data)
		},
		ajaxSuccess:function(data,textStatus,jqXHR){
			var el=helpers.el;
			$.data(helpers.el,'ajaxData',data)
			$('div#'+el.divid).remove();
			$('<div id="'+el.divid+'"><ul></ul></div>').appendTo('div.treeFrame',el);
			var tree=$('div#'+el.divid,el).jqxTree(el.config.jqxTreeConfig)
			levelTwo.setTreeHeader(el,data)
			levelTwo.addNodesToTree(el,tree,data.parents)
			var parent=levelTwo.getParentForKids(tree)
			levelTwo.addNodesToTree(el,tree,data.kids,parent)
			$('span.treeItemText',tree).bind('dblclick',helpers.dblClick);
		},
		ajaxCall:function(el,data){
			if (data==undefined) data={curId:'Root Concept', parId:'Root Concept'}
			$.ajax({
				url:'/ajax/',
				data:{
					'command':'browseSnomed',
					'curId':data.curId,
					'parId':data.parId,
					'csrfmiddlewaretoken':'{{ csrf_token }}'
				},
				dataType:'json',
				type:'POST',
				success:helpers.ajaxSuccess,
				error: function(jqXHR,textStatus,errorThrown){
					console.log('error\n'+textStatus +'\n'+errorThrown+'\n'+jqXHR.responseText);
				}
			});

		}
	}
	//public functions
	var methods = {
		init : function( options ) {
			var that=this;
			that.config= $.meta ? $.extend({},options,$(that).data()):options;
			$.data(that,'methods',methods);
			$.data(that,'helpers',helpers);
			helpers.el=this;
			helpers.createSkeletonDivs(this);
			helpers.createExpander(this);
			helpers.ajaxCall(this)
		}
	};
	//main loop, chaining enabled
	$.fn.OntoTree = function( args ) {
		var masterargs=arguments;
		if ( methods[args] )
			return this.each(function(){
				methods[ args ].apply( this, Array.prototype.slice.call( masterargs, 1 ));
			});
		else if ( !args || typeof args === 'object'){
			var opts=new Array($.extend({},$.fn.OntoTree.defaults,args));
			return this.each(function(){
				methods.init.apply( this, opts );
			});
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.OntoTree' );
			return this;
		}
	}
	//externally accessible default options.
	$.fn.OntoTree.defaults={
		jqxExpanderConfig:{showArrow:false,toggleMode:'none',width:'390px',height:'auto', float:'left'}
		,jqxTreeConfig:{}
		,conceptGroupIcon:"/static/images/folder.png"
	}
	//externally accessible for unit testing and debugging
	$.fn.OntoTree.unitTest=function(command){
		switch(command){
			case 'setup':
				break;
			case 'teardown':
				break;
		}
	}
})(jQuery)