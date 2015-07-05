	
/**
* Task.js
* 
* Created on July 4, 2015
*
*
* @desc A project is divided in tasks which have an initial estimate 
*		of time, and keep count of the remaining and spent time
* @author Javier Quevedo-Fernandez
**/

var jqf = jqf || {};

(function(jqf){

	/**
 	* Task Constructor
 	* 
 	* @constructor
 	* @param {string} name - The name of the task.
 	* @param {number} estimate - The estimate (hours) of the task
 	*/ 
	var Task = function(name, estimate){
		
		if (name === undefined)
			this._name = "Unnamed Task";
		else
			this._name = name;

		this._taskId = jqf.UUIDGenerator.generate();

		if (estimate === undefined){
			this._estimate = 0;
			this.remaining = 0;
		}else{
			this.setEstimate(estimate);
		}
		
		this._spent = 0;
	}

	/**
 	* Provides the id of the task
 	* @return {string} uuid of the task
 	*/
	Task.prototype.getID = function(){
		return this._taskId;
	}

	/**
 	* Provides the name of the task
 	* @return {string} Name of the task
 	*/
	Task.prototype.getName = function(){
		return this._name;
	}


	/**
 	* Sets the name of the task
 	* @param {string} name of the task
 	*/
	Task.prototype.setName = function(name){
		this._name = name;
	}

	/**
 	* Provides the estimate of the task
 	* @return {Number} Estimate of the task
 	*/
	Task.prototype.getEstimate = function(){
		return this._estimate;
	}

	/**
 	* Adds two numbers
 	* @param {Number} b
 	* @return {Number} sum
 	*/
	Task.prototype.setEstimate = function(estimate){
		this._estimate = estimate;
		this._remaining = estimate;
	}

	/**
 	* Adds two numbers
 	* @param {Number} hours - The amount of hours spent in the task
 	*/
	Task.prototype.spend = function(hours){
		this._remaining -= hours;
		this._spent += hours;
	}

	/**
 	* Provides the number of hours spent in the task
 	* @return {Number} Amount of hours spent
 	*/
	Task.prototype.getSpent = function(){
		return this._spent;
	}

	/**
 	* Provides the amount of hours remaining to complete the task
 	* @return {Number} Amount of hours remaining to complete the task
 	*/
	Task.prototype.getRemaining = function(){
		return this._remaining;
	}
	
	jqf.Task = Task;

})(jqf);