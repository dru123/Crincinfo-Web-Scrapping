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
        // console.log("html",html);d
     dataExtracter(html);
        
    }
}
function dataExtracter(html)
 {
     //search
     let searchTool=cheerio.load(html);
     //selector
    //  let ele=searchTool(".match-comment-wrapper .match-comment-long-text");
    //  //print text
    //  let lbc=searchTool(ele[0]).text();
    //  console.log(lbc);
    let tableRow=searchTool(".table.bowler tbody tr");//get all row from bowling table
    let hwt=0;
    let name="";

    for(let i=0;i<tableRow.length;i++){
         let tableCol=searchTool(tableRow[i]).find("td");//get all column
         //get name from table column
         let tableNamme=searchTool(tableCol[0]).text();
         //get wicket from table column
         let tableWicket=searchTool(tableCol[4]).text();
       
          if(tableWicket>hwt){

           
              hwt=tableWicket;
   name=tableNamme;
          }
         
    }
    console.log(name+" "+hwt);


 }
