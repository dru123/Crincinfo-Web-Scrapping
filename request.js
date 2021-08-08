


let  request=require("request");
let cheerio=require("cheerio");
console.log("Before");
request("https://www.npmjs.com/package/cheerio",cb);
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
console.log("hello  m after");
//cheerio ek library h jo abstraact krne m kam ati h data ko....
//module->web scraping.......
//use ky a h  chijje dundhne asan hojaye bs

 function dataExtracter(html)
 {
     //search
     let searchTool=cheerio.load(html);
     //selector
     let ele=searchTool("#readme>h1");
     //print text
     let moduleName=ele.text().trim();
     console.log(moduleName);


 }
