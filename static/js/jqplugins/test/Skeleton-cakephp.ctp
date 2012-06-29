<?php
  echo $this->Html->css ("/tdd/spec/jasmine/lib/jasmine-core/jasmine.css",null,array('inline'=>false));
  echo $this->Html->script(array("/tdd/spec/jasmine/lib/jasmine-core/jasmine.js",
                                 "/tdd/Skeleton-jasmine-undefined.js",
                                  "/tdd/spec/jasmine/src/html/TrivialReporter.js",
                                  "/tdd/spec/jasmine/src/console/ConsoleReporter.js",
                                  "/tdd/my_plugin_name_spec.js",
                                  "/tdd/my_plugin_name.js"
                      ),array('inline'=>false,'once'=>true));
  ?>
<?php echo $this->Html->scriptStart(array('inline'=>false));?>
$(function(){
      var jasmineEnv = jasmine.getEnv();
      jasmineEnv.updateInterval = 1000;

      var trivialReporter = new jasmine.TrivialReporter();

      jasmineEnv.addReporter(trivialReporter);

      jasmineEnv.specFilter = function(spec) {
        return trivialReporter.specFilter(spec);
      };
  
});
$(window).load(function(){
  if (window.jasmine) window.jasmine.getEnv().execute();
  else alert("Jasmine is not installed!")
});

<?php echo $this->Html->scriptEnd();?>
<!-- Cut from here -->
<div class='myPluginName'>
</div>
<!-- Cut to here -->
<style>
label{
  display:inline;
}
input[type=checkbox]{
  float:none;
}
</style>

