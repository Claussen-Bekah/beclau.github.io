//go to images/design-samples
//build array from image names
//check image end
//build display based on file type
let fs = require('fs');

let imgArray = [fs.readdir('samples/print-samples')];

console.log(imgArray);

for (let i = 0; i < imgArray.length; i++) {
    buildFile(imgArray[i]);
}


function buildFile(img) {

    let output = document.getElementById('display');

    let image = document.createElement('img');
    image.setAttribute('src', 'samples/print-samples/jpg1.jpg');
    image.setAttribute('alt', '');
    output.appendChild(image);


}
