const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {

    const testFolder = './tests/';
    const fs = require('fs');
    var arquivos = []; var search = require('youtube-search');
    path = require('path');
    fs.readdirSync(testFolder).forEach(function (name) {
       

        var opts = {
          maxResults: 10,
          key: "AIzaSyAf-aoFSphArAQIb25ZjX6FYIVbI3pq4IY"
        };
        
        search(name.replace(".mp4", ""), opts, function(err, results) {
            if(err) return ;
            arquivos.push({title: results[0].title, thumbnail: results[0].thumbnails.high.url })
            console.log(arquivos);
            
         res.json({ message: "Hello from server!", arquivos: arquivos });
         });



        var filePath = path.join(testFolder, name);
        var stat = fs.statSync(filePath);
        if (stat.isFile()) {
            // console.log(filePath, stat);
        } else if (stat.isDirectory()) {
            // console.log(filePath, callback);
        }
        // console.log(name);
    });
    // files.forEach(file => {
    //     console.log(file);
    //     arquivos.push(file);
    // });
    

});


  

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});