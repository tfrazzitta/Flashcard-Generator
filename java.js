var app = require("./app.js");
var x = require("./obj.js");
//var easy=require("./easy.js")
var fs= require("fs");
var inquirer = require("inquirer");
var ObgArray= [];
var ClzArray=[];
var index=0;



var EasyCards= function(){
	inquirer.prompt([
  {
    name: "front",
    message: "Create a question"
  },
  {
   name: "back",
    message: "What is the answer"
  }
  					]).then(function(answer){
  						fs.appendFile("bc.txt",+"\n"+JSON.stringify({
					   	   	 	front:answer.front,
					   	   	 	back:answer.back
					   	   	 }));
  					   ObgArray.push(new x.BasicCard(answer.front,answer.back));
					   index++;

					 	inquirer.prompt([
							  {
	  					    	type:"list",
								name: "another",
								message: "Would you like to make another card",
								choices: ["Yes", "No","Play Game"]
							   }
					 		]).then(function(resp){
					   		    if(resp.another==="Yes"){
					   	   		    EasyCards();
					   	    }

					   	   if(resp.another==="No"){
					   	   	   for(j=0;j<ObgArray.length;j++){
					   	   	   	  ObgArray[j].printInfo();
					   	   		}	  
					   	   }
					   	   if(resp.another==="Play Game"){
								app();
					   	   }
					   	})
					})



}


var HardCards = function(){
	inquirer.prompt([
	  {
	    name: "fullText",
	    message: "Create a question"
	  },
	  {
	   name: "prefix",
	    message: "Write the answer"
	  },
	   {
	    name: "suffix",
	    message: "What is the snippet"
	  }
	  					]).then(function(answer){
	  					    fs.appendFile("clz.txt",+"\n"+JSON.stringify({
					   	   	 	fullText:answer.fullText,
					   	   	 	prefix:answer.prefix,
					   	   	 	suffix:answer.suffix
					   	   	}));
	  					    	ClzArray.push(new x.ClozeCard(answer.fullText,answer.prefix,answer.suffix));
	  					    	index++;
	  					    		inquirer.prompt([
											{
	  					    				 	type:"list",
											    name: "another",
											    message: "Would you like to make another card",
											    choices: ["Yes", "No","Play Game"]
										     }

	  					    			]).then(function(resp){
	  					    				if(resp.another==="Yes"){
	  					    					HardCards();
	  					    				}
	  					    				if(resp.another==="No") {
	  					    					for(p=0;p<ClzArray.length;p++){
	  					    						ClzArray[p].printInfo();
	  					    					 }
	  					    				}
	  					    				if(resp.another==="Play Game"){
	  					    				app();
	  					    				}

								})
						})
	  			
   }


function Start(){
	 inquirer.prompt([
	   {
    type: "list",
    name:"mode",
    message: "Choose the type of cards you would like to create",
    choices: ["Create Basic Cards","Create Cloze Cards"]
  		} 
  		]).then(function(response){
  			if(response.mode==="Create Basic Cards"){
  				EasyCards();
  			}
  			if(response.mode==="Create Cloze Cards"){
  				HardCards();
  				//var app = require("./app.js");
  			}
  		})
}



Start();