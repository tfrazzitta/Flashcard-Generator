
	var exports = module.exports = {};

	exports.BasicCard= function(front,back){
	this.front=front, 
 	this.back=back
	}
	
    exports.BasicCard.prototype.printInfo= function(){
    console.log("front: " + this.front + "\nback: " + this.back)
    }


    exports.ClozeCard=function(fullText,suffix,prefix){
 	this.fullText=fullText,
 	this.prefix=prefix,
 	this.suffix=suffix

  }

     module.exports.ClozeCard.prototype.printInfo= function(){
     console.log("fullText: " + this.fullText + "\nprefix: " + this.prefix+ "\nsuffix: " + this.suffix);
   }
