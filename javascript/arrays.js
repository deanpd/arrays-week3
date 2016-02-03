//Create an array.
var colorList = ["Red", "Black", "White", "Blue", "Green", "Purple", "Orange", "Pantone", "CMYK"];


var imageList = new Array();
imageList[0] = "images/drawing/thumbs/artwork_1.jpg";
imageList[1] = "images/drawing/thumbs/artwork_2.jpg";
imageList[2] = "images/drawing/thumbs/artwork_3.jpg";
imageList[3] = "images/drawing/thumbs/artwork_4.jpg";
imageList[4] = "images/drawing/thumbs/artwork_5.jpg";
imageList[5] = "images/drawing/thumbs/artwork_6.jpg";
imageList[6] = "images/drawing/thumbs/artwork_7.jpg";
imageList[7] = "images/drawing/thumbs/artwork_8.jpg";
imageList[8] = "images/drawing/thumbs/artwork_9.jpg";
imageList[9] = "images/drawing/thumbs/artwork_10.jpg";
imageList[10] = "images/drawing/thumbs/artwork_11.jpg";
imageList[11] = "images/drawing/thumbs/artwork_12.jpg";
imageList[12] = "images/drawing/thumbs/artwork_13.jpg";
imageList[13] = "images/drawing/thumbs/artwork_14.jpg";
imageList[14] = "images/drawing/thumbs/artwork_15.jpg";
imageList[15] = "images/drawing/thumbs/artwork_16.jpg";
imageList[16] = "images/drawing/thumbs/artwork_17.jpg";
imageList[17] = "images/drawing/thumbs/artwork_18.jpg";
imageList[18] = "images/drawing/thumbs/artwork_19.jpg";
imageList[19] = "images/drawing/thumbs/artwork_20.jpg";
imageList[20] = "images/drawing/thumbs/artwork_21.jpg";
imageList[21] = "images/drawing/thumbs/artwork_22.jpg";
imageList[22] = "images/drawing/thumbs/artwork_23.jpg";
imageList[23] = "images/drawing/thumbs/artwork_24.jpg";
imageList[24] = "images/drawing/thumbs/artwork_25.jpg";

//Create the buildThumbnails function.
function buildThumbnails()
{
  //Hook onto the thumbs <div id="thumbs">
  var thumbsDiv = document.getElementById("thumbs");

  //Create an output variable.
  var output = "";
  //First part: Counter (we set up 0 to start counting the loop).
  //Second part: Condition (the loop will keep looping as long as the condition is true).
  //Third part: Incrementor (adds one to the counter AFTER the code is executed in the brackets).
  for(var i=0; i < imageList.length; i++)
  {
    //Concantenation assignment operator
    output += '<img src="' + imageList[i] + '" />';
  }
  thumbsDiv.innerHTML = output; 
  /*
  thumbsDiv.innerHTML = 
  '<img src="' + imageList[0] + '" />' + 
  '<img src="' + imageList[1] + '" />' + 
  '<img src="' + imageList[2] + '" />' + 
  '<img src="' + imageList[3] + '" />'
  ;
  */
}

window.onload = function()
{
  buildThumbnails();//Use or "fire off" this function.
  //Or invoke the function.
}