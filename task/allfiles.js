let  request=require("request");
let cheerio=require("cheerio");
console.log("Before");
let score=require("./teams");
request("https://www.espncricinfo.com/series/ipl-2020-21-1210595",cb);
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
    let abc=searchTool('a[data-hover="View All Results"]');
   let link=abc.attr("href")
    let fulllink=`https://www.espncricinfo.com/${link}`;
    // console.log('33',fulllink);

   request(fulllink,getMatchScore);

}
function getMatchScore(err,response,html){
    if(err){
        console.log(err);
    }
    else if(response.statusCode==404){
        console.log("page not found");
    }
    else{
        
     allScoreBoard(html);
        
    }
}
function allScoreBoard(html){
    let searchTool=cheerio.load(html);
    
    let abc=searchTool('a[data-hover=Scorecard]');
    
     for(let i=0;i<abc.length;i++){
    let link=searchTool(abc[i]).attr("href");
    // console.log(link);
    let fulllink=`https://www.espncricinfo.com/${link}`;
    score.psm(fulllink);
    // request(fulllink,)
     }
}