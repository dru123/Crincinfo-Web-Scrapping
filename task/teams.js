let  request=require("request");
let cheerio=require("cheerio");
let fs=require("fs");
const { text } = require("cheerio/lib/api/manipulation");
console.log("Before");
function playMatch(url){
request(url,cb);
}
function cb(err,response,html){
    if(err){
        console.log(err);
    }
    else if(response.statusCode==404){
        console.log("page not found");
    }
    else{
        
     dataExtracter(html);
        
    }
}
function dataExtracter(html)
{
    //search
    let searchTool=cheerio.load(html);
    
    let abc=searchTool('.Collapsible');
    for(let i=0;i<abc.length;i++){
        let teamName=searchTool(abc[i]).find("h5");
        teamName=teamName.text().split("INNINGS")[0].trim();

    console.log(teamName);
    console.log("**************************************************");

    let teamTr=searchTool(abc[i]).find(".table.batsman tbody tr ");
    
    for(let j=0;j<teamTr.length;j++){
  
             let teamTd=searchTool(teamTr[j]).find("td");
            
             if(teamTd.length==8){

               let playerName=searchTool(teamTd[0]).text();
               let noOfFour=searchTool(teamTd[5]).text();
               let noOfSix=searchTool(teamTd[5]).text();
               console.log(playerName+"  4's-> "+noOfFour+"  6's -> "+noOfSix);
             }

    }
console.log("**************************************************");

    }
}
module.exports={
    psm:playMatch
}
