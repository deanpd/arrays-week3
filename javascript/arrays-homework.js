//Create an array.
var colorList = ["Red", "Black", "White", "Blue", "Green", "Purple", "Orange", "Pantone", "CMYK"];

var imageListWC = new Array();
imageListWC[0] = "images/watercolor/thumbs/artwork_1.jpg";
imageListWC[1] = "images/watercolor/thumbs/artwork_2.jpg";
imageListWC[2] = "images/watercolor/thumbs/artwork_3.jpg";
imageListWC[3] = "images/watercolor/thumbs/artwork_4.jpg";
imageListWC[4] = "images/watercolor/thumbs/artwork_5.jpg";
imageListWC[5] = "images/watercolor/thumbs/artwork_6.jpg";
imageListWC[6] = "images/watercolor/thumbs/artwork_7.jpg";
imageListWC[7] = "images/watercolor/thumbs/artwork_8.jpg";
imageListWC[8] = "images/watercolor/thumbs/artwork_9.jpg";
imageListWC[9] = "images/watercolor/thumbs/artwork_10.jpg";

var imageListOil = new Array();
imageListOil[0] = "images/oil/thumbs/artwork_1.jpg";
imageListOil[1] = "images/oil/thumbs/artwork_2.jpg";
imageListOil[2] = "images/oil/thumbs/artwork_3.jpg";
imageListOil[3] = "images/oil/thumbs/artwork_4.jpg";
imageListOil[4] = "images/oil/thumbs/artwork_5.jpg";
imageListOil[5] = "images/oil/thumbs/artwork_6.jpg";
imageListOil[6] = "images/oil/thumbs/artwork_8.jpg";
imageListOil[7] = "images/oil/thumbs/artwork_7.jpg";

var imageListDraw = new Array();
imageListDraw[0] = "images/drawing/thumbs/artwork_1.jpg";
imageListDraw[1] = "images/drawing/thumbs/artwork_2.jpg";
imageListDraw[2] = "images/drawing/thumbs/artwork_3.jpg";
imageListDraw[3] = "images/drawing/thumbs/artwork_4.jpg";
imageListDraw[4] = "images/drawing/thumbs/artwork_5.jpg";
imageListDraw[5] = "images/drawing/thumbs/artwork_6.jpg";
imageListDraw[6] = "images/drawing/thumbs/artwork_7.jpg";
imageListDraw[7] = "images/drawing/thumbs/artwork_8.jpg";
imageListDraw[8] = "images/drawing/thumbs/artwork_9.jpg";
imageListDraw[9] = "images/drawing/thumbs/artwork_10.jpg";
imageListDraw[10] = "images/drawing/thumbs/artwork_11.jpg";
imageListDraw[11] = "images/drawing/thumbs/artwork_12.jpg";
imageListDraw[12] = "images/drawing/thumbs/artwork_13.jpg";
imageListDraw[13] = "images/drawing/thumbs/artwork_14.jpg";
imageListDraw[14] = "images/drawing/thumbs/artwork_15.jpg";
imageListDraw[15] = "images/drawing/thumbs/artwork_16.jpg";
imageListDraw[16] = "images/drawing/thumbs/artwork_17.jpg";
imageListDraw[17] = "images/drawing/thumbs/artwork_18.jpg";
imageListDraw[18] = "images/drawing/thumbs/artwork_19.jpg";
imageListDraw[19] = "images/drawing/thumbs/artwork_20.jpg";
imageListDraw[20] = "images/drawing/thumbs/artwork_21.jpg";
imageListDraw[21] = "images/drawing/thumbs/artwork_22.jpg";
imageListDraw[22] = "images/drawing/thumbs/artwork_23.jpg";
imageListDraw[23] = "images/drawing/thumbs/artwork_24.jpg";
imageListDraw[24] = "images/drawing/thumbs/artwork_25.jpg";

function buildThumbnails()
{
  //WATERCOLOR
  var thumbsDivWC = document.getElementById("thumbs-wc");
  var output = "";
  for(var i=0; i < imageListWC.length; i++)
    {
      output += '<img src="' + imageListWC[i] + '" />';
    }
  thumbsDivWC.innerHTML = output;
  
  //OIL
  var thumbsDivOil = document.getElementById("thumbs-oil");
  var output = "";
  for(var i=0; i < imageListOil.length; i++)
    {
      output += '<img src="' + imageListOil[i] + '" />';
    }
  thumbsDivOil.innerHTML = output;
  
  //DRAWING
  var thumbsDivDraw = document.getElementById("thumbs-draw");
  var output = "";
  for(var i=0; i < imageListDraw.length; i++)
    {
      output += '<img src="' + imageListDraw[i] + '" />';
    }
  thumbsDivDraw.innerHTML = output;
}

window.onload = function()
{
  buildThumbnails();
}