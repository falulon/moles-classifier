function dataURLtoFile(dataurl, filename) {
   var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), 
      n = bstr.length, 
      u8arr = new Uint8Array(n);
  while(n--){
      u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, {type:mime});
}

var el = x => document.getElementById(x);  //shortcut for getElementById

function showPicker() {
  el("file-input").click();
  el("result-label").classList.add('no-display');
}

// open the cropper once an image was chosen
function showPicked(input) {
  el("upload-label").innerHTML = input.files[0].name;
  var reader = new FileReader();
  reader.onload = function(e) {
    crop(e.target.result);
  };
  reader.readAsDataURL(input.files[0]);
}


async function analyze() {

  var croppedFile = await cropSave()  //get the cropped image
  var uploadFiles = [dataURLtoFile(croppedFile,'image.jpg')]; 
  if (uploadFiles.length !== 1) alert("Please select a file to analyze!");

  el("analyze-button").innerHTML = "Analyzing...";
  var xhr = new XMLHttpRequest();
  var loc = window.location;
  xhr.open("POST", `${loc.protocol}//${loc.hostname}:${loc.port}/analyze`,
    true);
  
    xhr.onerror = function() {
    alert(xhr.responseText);
  };
  
  xhr.onload = function(e) {
    if (this.readyState === 4) {
      var response = JSON.parse(e.target.responseText);
      el("result-label").innerHTML = `Result: Probably ${response["result"]}`;
      el("result-label").classList.remove('no-display');
    }
    el("analyze-button").innerHTML = "Inspect";
  };

  var fileData = new FormData();
  fileData.append("file", uploadFiles[0]);
  xhr.send(fileData);
}

