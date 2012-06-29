
function echoFunction(message) {
	return "Received: " + message;
}
//replace myPluginName with the correct name;
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
	var helpers ={
		
	}
	//public functions
	var methods = {
		init : function( options ) {
			var that=this;
			that.config= $.meta ? $.extend({},options,$(that).data()):options;
			$.data(that,'methods',methods);
			$.data(that,'helpers',helpers);
		}
	};
	//main loop, chaining enabled
	$.fn.myPluginName = function( args ) {
		var masterargs=arguments;
		if ( methods[args] )
			return this.each(function(){
				methods[ args ].apply( this, Array.prototype.slice.call( masterargs, 1 ));
			});
		else if ( !args || typeof args === 'object'){
			var opts=new Array($.extend({},$.fn.myPluginName.defaults,args));
			return this.each(function(){
				methods.init.apply( this, opts );
			});
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.myPluginName' );
			return this;
		}
	}
	//externally accessible default options.
	$.fn.myPluginName.defaults={
		
	}
	//externally accessible for unit testing and debugging
	$.fn.myPluginName.unitTest=function(command){
		switch(command){
			case 'setup':
				break;
			case 'teardown':
				break;
		}
	}
})(jQuery)