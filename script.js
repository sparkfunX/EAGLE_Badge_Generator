var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function updateName(name){

	var firstName = name.split(',')[0].trim();
  var lastName = name.split(',')[1].trim();

	var firstDerate = 0;
  var lastDerate = 0;

	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'black';
  ctx.font = (90 - firstDerate) + "px Arial";
  ctx.textAlign = "center";
  ctx.fillText(firstName, 185, 70);
  ctx.font = (50 - lastDerate) + "px Arial";
  ctx.fillText(lastName, 185, 110);  

while(topOverrun(ctx)){ 
		ctx.clearRect(0, 0, canvas.width, canvas.height);
    firstDerate++;
    ctx.fillStyle = 'black';
    ctx.font = (90 - firstDerate) + "px Arial";
    ctx.textAlign = "center";
    ctx.fillText(firstName, 185, 70-(firstDerate/2));
    ctx.font = (50 - lastDerate) + "px Arial";
    ctx.fillText(lastName, 185, (110-lastDerate/2)); 
}

while(bottomOverrun(ctx)){ 
		ctx.clearRect(0, 0, canvas.width, canvas.height);
    lastDerate++;
    ctx.fillStyle = 'black';
    //console.log((90 - firstDerate) + "px Arial");
    ctx.font = (90 - firstDerate) + "px Arial";
    ctx.textAlign = "center";
    ctx.fillText(firstName, 185, 70-(firstDerate/2));
    ctx.font = (50 - lastDerate) + "px Arial";
    ctx.fillText(lastName, 185, 110-(lastDerate/2));  
}

if(lastName == ''){
		ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'black';
    ctx.font = (90 - firstDerate) + "px Arial";
    ctx.textAlign = "center";
    ctx.fillText(firstName, 185, 95-(firstDerate/2));
}

convert1bit(ctx);
 
}

function topOverrun(ctx){
	//Detect overrun in the top row by looking for altered pixels at the 
  //left edge from y=0 to y=70
  
  var imgData = ctx.getImageData(0, 0, 30, 70);
  
  var overrun = false;
  
  imgData.data.forEach(function(element){
  	if(element>0){
    	overrun = true;
    }
  });

  return overrun;
  
}

function bottomOverrun(ctx){

	//Detect overrun in the bottom row by looking for altered pixels at the 
  //left edge from y=71 to y=115
  
  var imgData = ctx.getImageData(0, 71, 30, 115);
  
  var overrun = false;
  
  imgData.data.forEach(function(element){
  	if(element>0){
    	overrun = true;
    }
  });

  return overrun;  
  
}

function convert1bit(ctx) {

  var threshold = 80;

  var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  // invert colors
  for (var i = 0; i < imgData.data.length; i += 4) {
    if (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 3] < threshold) {
      imgData.data[i] = 0;
      imgData.data[i + 1] = 0;
      imgData.data[i + 2] = 0;
      imgData.data[i + 3] = 0;
    } else {
      imgData.data[i] = 255;
      imgData.data[i + 1] = 255;
      imgData.data[i + 2] = 255;
      imgData.data[i + 3] = 255;
    }
  }

  ctx.putImageData(imgData, 0, 0);

}

// 1.15 x 3.70

function processToLib(nameList){
  var head = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!DOCTYPE eagle SYSTEM \"eagle.dtd\">\n<eagle version=\"7.7.0\">\n<drawing>\n<settings>\n<setting alwaysvectorfont=\"no\"\/>\n<setting verticaltext=\"up\"\/>\n<\/settings>\n<grid distance=\"1\" unitdist=\"mm\" unit=\"mm\" style=\"lines\" multiple=\"1\" display=\"yes\" altdistance=\"0.1\" altunitdist=\"mm\" altunit=\"mm\"\/>\n<layers>\n<layer number=\"1\" name=\"Top\" color=\"4\" fill=\"1\" visible=\"yes\" active=\"yes\"\/>\n<layer number=\"2\" name=\"Route2\" color=\"1\" fill=\"3\" visible=\"no\" active=\"yes\"\/>\n<layer number=\"3\" name=\"Route3\" color=\"4\" fill=\"3\" visible=\"no\" active=\"yes\"\/>\n<layer number=\"4\" name=\"Route4\" color=\"1\" fill=\"4\" visible=\"no\" active=\"yes\"\/>\n<layer number=\"5\" name=\"Route5\" color=\"4\" fill=\"4\" visible=\"no\" active=\"yes\"\/>\n<layer number=\"6\" name=\"Route6\" color=\"1\" fill=\"8\" visible=\"no\" active=\"yes\"\/>\n<layer number=\"7\" name=\"Route7\" color=\"4\" fill=\"8\" visible=\"no\" active=\"yes\"\/>\n<layer number=\"8\" name=\"Route8\" color=\"1\" fill=\"2\" visible=\"no\" active=\"yes\"\/>\n<layer number=\"9\" name=\"Route9\" color=\"4\" fill=\"2\" visible=\"no\" active=\"yes\"\/>\n<layer number=\"10\" name=\"Route10\" color=\"1\" fill=\"7\" visible=\"no\" active=\"yes\"\/>\n<layer number=\"11\" name=\"Route11\" color=\"4\" fill=\"7\" visible=\"no\" active=\"yes\"\/>\n<layer number=\"12\" name=\"Route12\" color=\"1\" fill=\"5\" visible=\"no\" active=\"yes\"\/>\n<layer number=\"13\" name=\"Route13\" color=\"4\" fill=\"5\" visible=\"no\" active=\"yes\"\/>\n<layer number=\"14\" name=\"Route14\" color=\"1\" fill=\"6\" visible=\"no\" active=\"yes\"\/>\n<layer number=\"15\" name=\"Route15\" color=\"4\" fill=\"6\" visible=\"no\" active=\"yes\"\/>\n<layer number=\"16\" name=\"Bottom\" color=\"1\" fill=\"1\" visible=\"yes\" active=\"yes\"\/>\n<layer number=\"17\" name=\"Pads\" color=\"2\" fill=\"1\" visible=\"yes\" active=\"yes\"\/>\n<layer number=\"18\" name=\"Vias\" color=\"2\" fill=\"1\" visible=\"yes\" active=\"yes\"\/>\n<layer number=\"19\" name=\"Unrouted\" color=\"6\" fill=\"1\" visible=\"yes\" active=\"yes\"\/>\n<layer number=\"20\" name=\"Dimension\" color=\"15\" fill=\"1\" visible=\"yes\" active=\"yes\"\/>\n<layer number=\"21\" name=\"tPlace\" color=\"7\" fill=\"1\" visible=\"yes\" active=\"yes\"\/>\n<layer number=\"22\" name=\"bPlace\" color=\"7\" fill=\"1\" visible=\"yes\" active=\"yes\"\/>\n<layer number=\"23\" name=\"tOrigins\" color=\"15\" fill=\"1\" visible=\"yes\" active=\"yes\"\/>\n<layer number=\"24\" name=\"bOrigins\" color=\"15\" fill=\"1\" visible=\"yes\" active=\"yes\"\/>\n<layer number=\"25\" name=\"tNames\" color=\"7\" fill=\"1\" visible=\"yes\" active=\"yes\"\/>\n<layer number=\"26\" name=\"bNames\" color=\"7\" fill=\"1\" visible=\"yes\" active=\"yes\"\/>\n<layer number=\"27\" name=\"tValues\" color=\"7\" fill=\"1\" visible=\"yes\" active=\"yes\"\/>\n<layer number=\"28\" name=\"bValues\" color=\"7\" fill=\"1\" visible=\"yes\" active=\"yes\"\/>\n<layer number=\"29\" name=\"tStop\" color=\"7\" fill=\"3\" visible=\"no\" active=\"yes\"\/>\n<layer number=\"30\" name=\"bStop\" color=\"7\" fill=\"6\" visible=\"no\" active=\"yes\"\/>\n<layer number=\"31\" name=\"tCream\" color=\"7\" fill=\"4\" visible=\"no\" active=\"yes\"\/>\n<layer number=\"32\" name=\"bCream\" color=\"7\" fill=\"5\" visible=\"no\" active=\"yes\"\/>\n<layer number=\"33\" name=\"tFinish\" color=\"6\" fill=\"3\" visible=\"no\" active=\"yes\"\/>\n<layer number=\"34\" name=\"bFinish\" color=\"6\" fill=\"6\" visible=\"no\" active=\"yes\"\/>\n<layer number=\"35\" name=\"tGlue\" color=\"7\" fill=\"4\" visible=\"no\" active=\"yes\"\/>\n<layer number=\"36\" name=\"bGlue\" color=\"7\" fill=\"5\" visible=\"no\" active=\"yes\"\/>\n<layer number=\"37\" name=\"tTest\" color=\"7\" fill=\"1\" visible=\"no\" active=\"yes\"\/>\n<layer number=\"38\" name=\"bTest\" color=\"7\" fill=\"1\" visible=\"no\" active=\"yes\"\/>\n<layer number=\"39\" name=\"tKeepout\" color=\"4\" fill=\"11\" visible=\"yes\" active=\"yes\"\/>\n<layer number=\"40\" name=\"bKeepout\" color=\"1\" fill=\"11\" visible=\"yes\" active=\"yes\"\/>\n<layer number=\"41\" name=\"tRestrict\" color=\"4\" fill=\"10\" visible=\"yes\" active=\"yes\"\/>\n<layer number=\"42\" name=\"bRestrict\" color=\"1\" fill=\"10\" visible=\"yes\" active=\"yes\"\/>\n<layer number=\"43\" name=\"vRestrict\" color=\"2\" fill=\"10\" visible=\"yes\" active=\"yes\"\/>\n<layer number=\"44\" name=\"Drills\" color=\"7\" fill=\"1\" visible=\"no\" active=\"yes\"\/>\n<layer number=\"45\" name=\"Holes\" color=\"7\" fill=\"1\" visible=\"no\" active=\"yes\"\/>\n<layer number=\"46\" name=\"Milling\" color=\"3\" fill=\"1\" visible=\"no\" active=\"yes\"\/>\n<layer number=\"47\" name=\"Measures\" color=\"7\" fill=\"1\" visible=\"no\" active=\"yes\"\/>\n<layer number=\"48\" name=\"Document\" color=\"7\" fill=\"1\" visible=\"yes\" active=\"yes\"\/>\n<layer number=\"49\" name=\"Reference\" color=\"7\" fill=\"1\" visible=\"yes\" active=\"yes\"\/>\n<layer number=\"51\" name=\"tDocu\" color=\"7\" fill=\"1\" visible=\"yes\" active=\"yes\"\/>\n<layer number=\"52\" name=\"bDocu\" color=\"7\" fill=\"1\" visible=\"yes\" active=\"yes\"\/>\n<layer number=\"90\" name=\"Modules\" color=\"5\" fill=\"1\" visible=\"yes\" active=\"yes\"\/>\n<layer number=\"91\" name=\"Nets\" color=\"2\" fill=\"1\" visible=\"yes\" active=\"yes\"\/>\n<layer number=\"92\" name=\"Busses\" color=\"1\" fill=\"1\" visible=\"yes\" active=\"yes\"\/>\n<layer number=\"93\" name=\"Pins\" color=\"2\" fill=\"1\" visible=\"no\" active=\"yes\"\/>\n<layer number=\"94\" name=\"Symbols\" color=\"4\" fill=\"1\" visible=\"yes\" active=\"yes\"\/>\n<layer number=\"95\" name=\"Names\" color=\"7\" fill=\"1\" visible=\"yes\" active=\"yes\"\/>\n<layer number=\"96\" name=\"Values\" color=\"7\" fill=\"1\" visible=\"yes\" active=\"yes\"\/>\n<layer number=\"97\" name=\"Info\" color=\"7\" fill=\"1\" visible=\"yes\" active=\"yes\"\/>\n<layer number=\"98\" name=\"Guide\" color=\"6\" fill=\"1\" visible=\"yes\" active=\"yes\"\/>\n<\/layers>\n";
  var tail = "<\/drawing>\n<\/eagle>\n";

  var lbrFile = head + "<library>\n<packages>\n";

	var serialNum;

  // Write package

		serialNum = 0;
		nameList.split('\n').forEach(function(element){
      updateName(element);
      lbrFile += "<package name=\"" + serialNum + cleanName(element) + "\">\n";
      lbrFile += eaglify(document.getElementById("canvas"), 29); //tStop
      lbrFile += eaglifyInverse(document.getElementById("canvas"), 1); //TOP
      lbrFile += eaglifyInverse(document.getElementById("canvas"), 16); //BOTTOM
      lbrFile += eagleRect(document.getElementById("canvas"), 30); //bStop
      lbrFile += "</package>\n";
      serialNum++;
		});
    lbrFile += "</packages>\n<symbols>\n";
    
  // Write symbols

		serialNum = 0;
		nameList.split('\n').forEach(function(element){
    	updateName(element);
      lbrFile += "<symbol name=\"" + serialNum + cleanName(element) + "\">\n";
      lbrFile += "<text x=\"0\" y=\"0\" size=\"1.778\" layer=\"94\">" + serialNum + cleanName(element) + "<\/text>\n<\/symbol>\n";
      serialNum++;
		});
    lbrFile += "</symbols>\n<devicesets>\n";

  // Write devicesets

		serialNum = 0;
		nameList.split('\n').forEach(function(element){
      updateName(element);
      lbrFile += "<deviceset name=\"" + serialNum + cleanName(element) + "\">\n";
      lbrFile += "<gates>\n<gate name=\"G$1\" symbol=\"" + serialNum + cleanName(element) + "\" x=\"0\" y=\"0\"\/>\n<\/gates>\n<devices>\n";
      lbrFile += "<device name=\"\" package=\"" + serialNum + cleanName(element) + "\">\n<technologies>\n<technology name=\"\"\/>\n<\/technologies>\n<\/device>\n<\/devices>\n<\/deviceset>\n";
      serialNum++;
    });
    lbrFile += "<\/devicesets>\n<\/library>\n";

  // Write Tail
  
    lbrFile += tail;

  var filename = "buzzard_labels.lbr";

  var blob = new Blob([lbrFile], {
    type: "text/plain;charset=utf-8"
  });
  
  saveAs(blob, filename, true);

}

function eaglify(canvas, layer) {

  var outString = "";
  var scaleFactor = 0.255;

  var ctx = canvas.getContext("2d");
  var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  // for every row in the image
  for (var i = 0; i < imgData.height; i++) {

    var prevPx = 0;
    var tagOpen = false;

    // for each pixel in the row
    for (var j = 0; j < imgData.width; j++) {

      // if this pixel is opaque
      if (imgData.data[(i * imgData.width * 4) + (j * 4) + 3] > 128) {

        // ...and previous pixel was translucent
        if (prevPx < 128) {
          tagOpen = true;
          outString += "<rectangle x1=\"" + dectwo((j * scaleFactor) - 0.5 * (canvas.width * scaleFactor)) + "\" y1=\"" + dectwo(i * (0 - scaleFactor) + 0.5 * (canvas.height * scaleFactor)) + "\" ";
        } else { // ...and previous pixel was opaque
          // do nothing, keep cruising
        }

      } else { // if this pixel is translucent

        // ...and previous pixel was translucent
        if (prevPx < 128) {
          // do nothing, keep cruising
        } else { // ...and previous pixel was opaque
          tagOpen = false;
          outString += "x2=\"" + dectwo((j * scaleFactor) - 0.5 * (canvas.width * scaleFactor)) + "\" y2=\"" + dectwo((i * (0 - scaleFactor) - scaleFactor) + 0.5 * (canvas.height * scaleFactor)) + "\" layer=\"" + layer + "\"/>\n";
        }

      }

      prevPx = imgData.data[(i * imgData.width * 4) + (j * 4) + 3];

    }

    //check if last tag was open, close it with corner at width of picture
    if (tagOpen == true) {
      outString += "x2=\"" + dectwo((j * scaleFactor) - 0.5 * (canvas.width * scaleFactor)) + "\" y2=\"" + dectwo((i * (0 - scaleFactor) - scaleFactor) + 0.5 * (canvas.height * scaleFactor)) + "\" layer=\"" + layer + "\"/>\n";
    }

  }

  return outString;

}

function eaglifyInverse(canvas, layer) {

  var outString = "";
  var scaleFactor = 0.255;

  var ctx = canvas.getContext("2d");
  var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  // for every row in the image
  for (var i = 0; i < imgData.height; i++) {

    var prevPx = 255;
    var tagOpen = false;

    // for each pixel in the row
    for (var j = 0; j < imgData.width; j++) {

      // if this pixel is translucent
      if (imgData.data[(i * imgData.width * 4) + (j * 4) + 3] < 128) {

        // ...and previous pixel was opaque
        if (prevPx > 128) {
          tagOpen = true;
          outString += "<rectangle x1=\"" + dectwo((j * scaleFactor) - 0.5 * (canvas.width * scaleFactor)) + "\" y1=\"" + dectwo(i * (0 - scaleFactor) + 0.5 * (canvas.height * scaleFactor)) + "\" ";
        } else { // ...and previous pixel was translucent
          // do nothing, keep cruising
        }

      } else { // if this pixel is opaque

        // ...and previous pixel was opaque
        if (prevPx > 128) {
          // do nothing, keep cruising
        } else { // ...and previous pixel was translucent
          tagOpen = false;
          outString += "x2=\"" + dectwo((j * scaleFactor) - 0.5 * (canvas.width * scaleFactor)) + "\" y2=\"" + dectwo((i * (0 - scaleFactor) - scaleFactor) + 0.5 * (canvas.height * scaleFactor)) + "\" layer=\"" + layer + "\"/>\n";
        }

      }

      prevPx = imgData.data[(i * imgData.width * 4) + (j * 4) + 3];

    }

    //check if last tag was open, close it with corner at width of picture
    if (tagOpen == true) {
      outString += "x2=\"" + dectwo((j * scaleFactor) - 0.5 * (canvas.width * scaleFactor)) + "\" y2=\"" + dectwo((i * (0 - scaleFactor) - scaleFactor) + 0.5 * (canvas.height * scaleFactor)) + "\" layer=\"" + layer + "\"/>\n";
    }

  }

  return outString;

}

function eagleRect(canvas, layer){

  var outString = "";
  var scaleFactor = 0.255;

  var ctx = canvas.getContext("2d");

  outString += "<rectangle x1=\"" + dectwo(-0.5 * (canvas.width * scaleFactor)) + "\" y1=\"" + dectwo(0.5 * (canvas.height * scaleFactor)) + "\" x2=\"" + dectwo(0.5 * (canvas.width * scaleFactor)) + "\" y2=\"" + dectwo(-0.5 * (canvas.height * scaleFactor)) + "\" layer=\"" + layer + "\"/>\n";
  
  return outString;

}

function dectwo(x) {
  return Number.parseFloat(x).toFixed(2);
}

function cleanName(name) {

  name = name.replace(/ /g, '_');
	name = name.replace(/\W/g, '#');
  return name;

}

document.getElementById("fileIn").onchange = processFile;

function processFile(event) {

  var file = event.target.files[0];
  var reader = new FileReader();
  reader.onload = function(event) {
    var inputTxt = event.target.result.replace(/",/g,'').replace(/"/g,'');
    console.log(inputTxt);
    processToLib(inputTxt);
  };

  reader.readAsText(file);

}
