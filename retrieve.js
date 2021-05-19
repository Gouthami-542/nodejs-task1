const fs=require('fs');
fs.readdir('./',function(err,files){
    if (err) throw error;
    console.log('Result',files);
});



