var randomImage = document.querySelector('.first_pic'); 
var randomImage2 = document.querySelector('.second_pic');
//var multiImage = document.querySelectorAll('ul')


//const first_pic = document.getElementById('first_pic');
//const second_pic = document.getElementById('second_pic');
//const pics = document.getElementById('pics')
//const first_btn = document.getElementById('first_btn');
//const second_btn = document.getElementById('second_btn');

first_btn.addEventListener('click', getRandomPic)
second_btn.addEventListener('click', getRandomPic2)
list_btn.addEventListener('click', getPicList)

function getRandomPic() {
fetch('https://picsum.photos/500/500') 
.then(function(response) {
  if (!response.ok){ 
    console.log(response);
    return new Error(response);
  } 
  console.log("Response:", response);
  return response.blob(); 
})
.then(function(photoBlob){
  console.log("My Blob;", photoBlob)
  var objectURL = URL.createObjectURL(photoBlob); 
  console.log("Object URL:", objectURL);
  randomImage.src = objectURL; 

  console.log("randomImage.src:", randomImage.src);
})
}
//this is a change to update github
function getRandomPic2() {
  fetch('https://picsum.photos/490/500') 
  .then(function(response) {
    if (!response.ok){ 
      console.log(response);
      return new Error(response);
    } 
    console.log("Response:", response);
    return response.blob(); 
  })
  .then(function(photoBlob){
    console.log("My Blob;", photoBlob)
    var objectURL = URL.createObjectURL(photoBlob); 
    console.log("Object URL:", objectURL);
    randomImage2.src = objectURL; 
  
    console.log("randomImage2.src:", randomImage2.src);
  })
  }