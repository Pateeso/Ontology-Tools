
describe("Jasmine Testing Framework For jQuery plugins", function() {
  describe("See that Jasmine is up and running", function() {
    it("test output is equal to input", function() {
      var messageResult = echoFunction("hello world");
      expect(messageResult.toString()).toEqual("Received: hello world");
    });
  });

  describe('Test OntoTree Jquery Plugin Environment',function(){
    it('test to see if jQuery is included',  function(){
      expect(jQuery).toBeDefined();
    });
    //also test any dependent jQuery plugins
    it ('test to see if OntoTree plugin is present', function(){
      expect($.fn.OntoTree).toBeDefined();
      expect($.fn.jqxExpander).toBeDefined();
    })
    //also test for presense of suitable elements and (perhaps) their DOM and css.
    describe('tests to check if an appropriate element exists',function(){
      var element;
      beforeEach(function(){
	element=$('.OntoTree');
      })
      it('tests for the parent div existance', function(){
	expect(element.length).toBeGreaterThan(0);
	expect(element.attr('id')).toEqual('instanceOne');
      })
    })
    
  });
  describe('Test OntoTree Jquery Plugin Functionality',function(){
	var element=undefined;
	beforeEach(function(){
	  if (element==undefined)
		element=$('.OntoTree').OntoTree();
	})
	it('tests to see if correct divs are created',function(){
	  expect($('div.treeFrame',element).length).toEqual(1);	  
	  expect($('div.treeFrame div.jqx-expander-header-content',element).length).toEqual(1);	  
	  expect($('div.treeFrame div#treeBodyOfinstanceOne',element).length).toEqual(1); //jqxTree worked!	  
	});
	it('tests to see if title was set correctly',function(){
	  runs(function(){});
	  waitsFor(function(){return $('div.treeFrame div.jqx-expander-header-content'
				       ,element).text()=='SNOMED CT Concept'}
		   ,'Title to be set',750)
	  runs(function(){
	    expect($('div.treeFrame div.jqx-expander-header-content',element).text()).toEqual('SNOMED CT Concept');
	  });
	});
	it('tests to see if data received from ajax call',function(){
	  runs(function(){});
	  waitsFor(function(){return $.data(element[0],'ajaxData')}
		   ,'ajaxData to be set',750)
	  runs(function(){
	    data=$.data(element[0],'ajaxData');
	    expect(data.parents.length).toEqual(1);
	    expect(data.parents[0].pt).toEqual('SNOMED CT Concept')
	  });
	});
	it('tests to see if root is specified correctly',function(){
	  runs(function(){});
	  waitsFor(function(){return $.data(element[0],'ajaxData')}
		   ,'ajaxData to be set',750)
	  runs(function(){
	    data=$.data(element[0],'ajaxData');
	    items=$('div#treeBodyOfinstanceOne').jqxTree('getItems');
	    expect(items[0].label.indexOf(data.parents[0].pt)).toEqual(0)
	  });
	});
	it('tests to see if all items where received',function(){
	  runs(function(){});
	  waitsFor(function(){return $.data(element[0],'ajaxData')}
		   ,'ajaxData to be set',750)
	  runs(function(){
	    data=$.data(element[0],'ajaxData');
	    items=$('div#treeBodyOfinstanceOne').jqxTree('getItems');
	    expect(items.length).toEqual(data.kids.length+data.parents.length)
	  });
	});
  });

});

