fileStream.readFile( "code3/forwho" , "utf8" , function(error , file){
     if(error) {
          logWriter.writeInLog("Une erreur à été remontée : " + error , fileStream);
     }else{
          response.writeHead(200 , {"Content-Type" : "text/html" }); 
          response.write(file);
          response.end();
     }		
