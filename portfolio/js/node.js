let fs = require('fs');

let path = '../samples/print-samples';

makeDirArr(path);
function makeDirArr(dirPath) {
    fs.readdir(dirPath, function(err, fileNames) {
        console.log(fileNames);
    });
}

