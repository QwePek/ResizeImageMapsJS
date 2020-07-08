window.onload = function() {
    var previousWidth = document.body.clientWidth;
    var currentWidth = document.body.clientWidth;

    function resizeMap() {
        var images = document.getElementsByTagName("img");

        previousWidth = currentWidth;
        currentWidth = document.body.clientWidth;

        for (var i = 0; i < images.length; i++) {
            var img = images[i];
            if (!img.hasAttribute("usemap")) {
                continue;
            }

            if (img.complete) {
                var defWidth = img.getAttribute("width");
                var defHeight = img.getAttribute("height");

                if (!defWidth || !defHeight) {
                    var temp = new Image();
                    temp.src = img.getAttribute("src")
                    if (!defWidth)
                        defWidth = temp.width;
                    if (!defHeight)
                        defHeight = temp.height;
                }
                var wProc = img.clientWidth / 100,
                    hProc = img.clientHeight / 100,
                    mapStr = img.getAttribute("usemap").replace("#", ""),
                    cStr = "coords";

                var maps = document.getElementsByTagName("map");

                for (var x = 0; x < maps.length; x++) {
                    var map = maps[x];
                    if (!map.hasAttribute("name")) {
                        console.log("Map name missing...");
                        continue;
                    }

                    if (map.getAttribute("name") == mapStr) {
                        var ar = map.children;
                        for (var y = 0; y < ar.length; y++) {
                            var arInd = ar[y];

                            if (arInd.tagName == "AREA") {
                                var arCoords = arInd.getAttribute("data-coords").split(",");
                                var coordsProc = new Array(arCoords.length);
                                for (var z = 0; z < coordsProc.length; z++) {
                                    if (z % 2 === 0) {
                                        coordsProc[z] = parseInt(((arCoords[z] / defWidth) * 100) * wProc);
                                    } else {
                                        coordsProc[z] = parseInt(((arCoords[z] / defHeight) * 100) * hProc);
                                    }
                                }
                                arInd.setAttribute(cStr, coordsProc.toString());
                            }
                        }
                        break;
                    }
                }
            }
        }
    }
    resizeMap();
    window.onresize = resizeMap;
}
