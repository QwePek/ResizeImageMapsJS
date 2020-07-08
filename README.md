# Resize Image Maps JS
Resizing image maps using java script. This script is a conversion of "jQuery RWD Image Maps" into JS.

https://github.com/stowball/jQuery-rwdImageMaps#jquery-rwd-image-maps

To make this work you will have to append this script to your page and when creating ```area``` tag you have to add ```data-coords``` atribute which hold the same value as original ```coords```. 

For example:
```
<map name="Map"">
  <area shape="circle" data-coords="600,291,178" coords="600,291,178" href="#"/>
</map>
```
