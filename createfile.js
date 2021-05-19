const fs=require('fs');
fs.appendFile('current date-time.txt','current timestamp',function(err){
    if(err) throw err;
    console.log('File created');
})


