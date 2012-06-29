<?php
/* script to instansiate a new jQuery plugin and unit test frame work from the skeletons
provided
*/
if(!isset($_GET['plugin'])) exit('No plugin name. usage: instantiate-new.php?plugin=MyPlugin&file=my_plugin');
$plugin=$_GET['plugin'];
if(!isset($_GET['file'])) exit('No Filen name');
$filename=$_GET['file'];
echo "plugin Name is <b>".$plugin."</b><br/>";
echo exec("cp Skeleton-jQueryPlugin.js $filename.js");
echo exec("sed -i 's/myPluginName/$plugin/g' $filename.js");
echo "plugin File is $filename.js</br>";
echo exec("cp Skeleton-jQueryPluginSpec.js {$filename}_spec.js");
echo exec("sed -i 's/myPluginName/$plugin/g' {$filename}_spec.js");
echo "plugin Spec File is {$filename}_spec.js</br>";
echo exec("cp Skeleton-runner.html {$filename}_runner.html");
echo exec("sed -i 's/myPluginName/$plugin/g' {$filename}_runner.html");
echo exec("sed -i 's/my_plugin_name/$filename/g' {$filename}_runner.html");
echo "plugin runner File is <a href='{$filename}_runner.html'>{$filename}_runner.html</a></br>";
/*
echo exec("cp Skeleton-cakephp.ctp test_suite_{$filename}.ctp");
echo exec("sed -i 's/myPluginName/$plugin/g' test_suite_{$filename}.ctp");
echo exec("sed -i 's/my_plugin_name/$filename/g' test_suite_{$filename}.ctp");
echo "CakePHP view element would be test_suite_{$filename}.ctp</br>";
*/
echo exec("chmod a+rw *{$filename}*");
