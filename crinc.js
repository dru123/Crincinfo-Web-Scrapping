let request=require("request");
let cheerio=require("cheerio")
let url="https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/ball-by-ball-commentary";

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
     let ele=searchTool(".match-comment-wrapper .match-comment-long-text");
     //print text
     let lbc=searchTool(ele[0]).text();
     console.log(lbc);


 }
