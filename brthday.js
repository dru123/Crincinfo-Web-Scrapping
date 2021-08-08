let request=require("request");
let cheerio=require("cheerio");
const { table } = require("console");
let url="https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/full-scorecard";
request(url,cb);
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
   
    let tableRow=searchTool(".table.bowler tbody tr");//get all row from bowling table
    for(let i=0;i<tableRow.length;i++){
        let tableCol=searchTool(tableRow[i]).find("td");//get all column
        //get name from table column
        let tableName=searchTool(tableCol[0]).text();
        // console.log(tableName);
        let anchor=searchTool(tableCol).find("a");
        // console.log(anchor);
        let href=anchor.attr("href");
        // console.log(href);
        let fullLink=`https://www.espncricinfo.com/${href}`;
        // console.log(fullLink);
        request(fullLink,brthdayFinder);


    }



 }
function brthdayFinder(err,response,html){

if(err){
        console.log(err);
    }
    else if(response.statusCode==404){
        console.log("page not found");
    }
    else{
        // console.log("html",html);d
     bday(html);
        
    }

}
function bday(html){
    let searchTool=cheerio.load(html);
    
    let bdayName;
    let bdaydate;
    let table=searchTool(".player-card-description.gray-900");
    for(let i=0;i<table.length;i++){
          bdayName=searchTool(table[0]).text();

         bdaydate=searchTool(table[2]).text();

    }
    console.log(bdayName+" " +bdaydate);


}

















