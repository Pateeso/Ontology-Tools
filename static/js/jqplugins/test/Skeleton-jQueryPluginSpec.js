
describe("Jasmine Testing Framework For jQuery plugins", function() {
  describe("See that Jasmine is up and running", function() {
    it("test output is equal to input", function() {
      var messageResult = echoFunction("hello world");
      expect(messageResult.toString()).toEqual("Received: hello world");
    });
  });

  describe('Test myPluginName Jquery Plugin Environment',function(){
    it('test to see if jQuery is included',  function(){
      expect(jQuery).toBeDefined();
    });
    //also test any dependent jQuery plugins
    it ('test to see if myPluginName plugin is present', function(){
      expect($.fn.myPluginName).toBeDefined();
    })
    //also test for presense of suitable elements and (perhaps) their DOM and css.
    describe('tests to check if an appropriate element exists',function(){
      var element;
      beforeEach(function(){
	element=$('.myPluginName');
      })
      it('tests for the parent div existance', function(){
	expect(element.length).toBeGreaterThan(0);
      })
    })
    
  });

  describe('Test myPluginName Jquery Plugin Functionality',function(){
	var element;
	beforeEach(function(){
		//element=$('').myPluginName();
	})
  });

});

