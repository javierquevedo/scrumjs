/**
* UUIDGenerator.js
* 
* Created on July 5, 2015
*
* @author Javier Quevedo-Fernandez
**/

var jqf = jqf || {};

(function(jqf){
	jqf.UUIDGenerator = {};
	jqf.UUIDGenerator.generate = function(){
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
   		 var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
   		 return v.toString(16);
		});
	}


})(jqf);

