

var inquirer = require("inquirer");
var fs= require("fs");
var goodWords = ["Good Stuff!","You're Amazing!","Your Impressive!","Bam!...that's the one"];
var badWords = ["Idiot!","why are you so dumb!","Come on dude....","Absolutely Not!"];
var good= goodWords[Math.floor(Math.random() * goodWords.length)];
var bad= badWords[Math.floor(Math.random() * badWords.length)];
var index=0;
var a="...";


// var Question1= new BasicCard("How are old are you?","31");
// var Question2= new BasicCard("When is your Birthady?","april 9th");
// var Question3= new BasicCard("What is Trumps first name?","donald");

// var clzQ1= new ClozeCard("Eminem is the best rapper of all time","...is the best rapper all time","eminem")
// var clzQ2= new ClozeCard("You'll shoot your eye out","You'll shoot your ____ out","eye")
// var clzQ3= new ClozeCard("Abraham Lincoln was the 16th president of the United States","...was the 16th president of the United States","abraham lincoln")

// var ObgArray= [];
// var ClzArray=[];
// ObgArray.push(Question1,Question2,Question3);
// ClzArray.push(clzQ1,clzQ2,clzQ3);



//  function BasicCard(front,back){
// 	this.front=front, 
//  	this.back=back
// }

// function ClozeCard(fullText,suffix,prefix){
// 	this.fullText=fullText,
// 	this.prefix=prefix,
// 	this.suffix=suffix
// }
var BCquestions=function(){
    fs.readFile("bc.txt","utf8",function(error,data){
        data= data.split("0");
        data.splice(0,1);
        console.log(data.length)

	if(index===data.length){
		console.log(" ")
        console.log("Good Job...")
        setTimeout(Reset,2000);
    }
    else{
	console.log(" ")
	console.log(" ")         	 		
	  inquirer.prompt([
	   {
    type: "input",
    message: index+1 +") "+ JSON.parse(data[index]).front+"\n",
    name: "name"
  		} 
                	]).then(function(resp) {
                			if(JSON.parse(data[index]).back.toLowerCase()===resp.name.toLowerCase()) {
                				console.log(good+ "\n"+ "\n"+JSON.parse(data[index]).back+" it is")
                				index++
                				setTimeout(BCquestions,1000);
                			}
                			else{
                				console.log(bad+ "\n"+"\n"+"it's "+JSON.parse(data[index]).back+"\n");
                				if(index+1===data.length){
                					console.log("Next Time...");
                					index++;
                					setTimeout(BCquestions,1000)
                				}

                				else{
                					console.log("wipe those tears...");
                					index++
                					setTimeout(BCquestions,1000);
                				}
                	 		
                	   		}
               
               	 	})
                	
            }

      })
}


var Clozequestions=function(){
 fs.readFile("clz.txt","utf8",function(err,data){
        data=data.split("0");
        data.splice(0,1);

	if(index===data.length){
		console.log(" ")
		console.log("Thats all folks")
		setTimeout(Reset,2000)
	}
	else{
	console.log(" ")
	console.log(" ")
	  inquirer.prompt([
	   {
    type: "input",
    message: index+1 +") "+a+JSON.parse(data[index]).suffix+"\n",
    name: "name"
  		} 

                	]).then(function(answers) {
                            if(JSON.parse(data[index]).prefix.toLowerCase()===answers.name.toLowerCase()) {
                				console.log(good+ "\n"+"\n"+ JSON.parse(data[index]).fullText)
                				index++
                				setTimeout(Clozequestions,1000);
                			}
                			else{
                				console.log(bad+ "\n"+"\n"+JSON.parse(data[index]).fullText+"\n");
                				if(index+1===data.length){
                					console.log("Ohhh well...")
          							index++;
                					setTimeout(Clozequestions,1000);
                				}
                				else{
                					index++;
                					console.log("moving on...");	
                					setTimeout(Clozequestions,1000);
                				}
                	 		}
                	 	
                	})
        }        	
    })
}			



function Begin(){
	 inquirer.prompt([
	   {
    type: "list",
    name:"mode",
    message: "Choose your difficulty level",
    choices: ["Easy","Hard"]
  		} 
                	 ]).then(function(result){
                	 
                	 	if(result.mode.toLowerCase()==="easy"){
                	 		console.log("Are you ready,Here we go...")
                	 		setTimeout(BCquestions,2000);

                	 	}
                	 	if(result.mode.toLowerCase()==="hard"){
                	 		console.log("Are you ready,Here we go...")
                	 		setTimeout(Clozequestions,2000);
                	 	}
                 })

          }

function Reset(){
	index=0;
	inquirer.prompt([
	   {
    type: "list",
    name:"choice",
    message: "Would You like to see another card?",
    choices: ["Yes","NO","Make More Cards"]
  	  } ]).then(function(result){
                	 	if(result.choice.toLowerCase()==="yes"){
                	 		Begin();
                	 	}
                	 	if(result.choice.toLowerCase()==="no"){
                	 		console.log("Your a loser")
                	 
                	 	}
                        if(result.choice==="Make More Cards"){
                            var java = require("./java.js");
                        }
        })
}


module.exports = Begin;

 
