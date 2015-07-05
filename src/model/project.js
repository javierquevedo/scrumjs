	
/**
* Project.js
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
 	* Project Constructor
 	* 
 	* @constructor
 	*/
	var Project = function(){
		this._name = "Unnamed Project";
		this._tasks = [];
		this._workers = [];
	}

	/**
 	* Sets the name of the project
 	* @param {string} The new name for the project
 	*/
	Project.prototype.setName = function(name){
		this._name = name;
	}

	/**
 	* Provides the name of the project
 	* @return {string} The name of the project
 	*/
	Project.prototype.getName = function(){
		return this._name;
	}

	/**
 	* Provides all tasks that that are part of the project
 	* @return {Array} Collection of tasks
 	*/
	Project.prototype.getTasks = function(){
		return this._tasks;
	}

	/**
 	* Adds a task to the project
 	* @param {Task} task - Task to be added
 	*/
	Project.prototype.addTask = function(task){
		this._tasks.push(task);
	}

	/**
 	* Creates and adds a task to the project
 	* @param {string} name -  Name of the task
 	* @param {number} estimate - Amount of hours estimated to complete the task
 	*/
	Project.prototype.createTask = function(name, estimate){
		var aTask = new jqf.Task(name, estimate);
		this.addTask(aTask);
	}

	/**
 	* Provides the workers engaged in the project
 	* @param {Array} Collection of workers
 	*/
	Project.prototype.getWorkers = function(){
		return this._workers;
	}

	/*
	* Provides the complete time spent on a project
 	* @return {Number} The time spent
 	*/
	Project.prototype.getSpentTime = function(){
		var time = 0;
		for (var i = 0; i++; i < this._tasks.length){
			var task = this._tasks[i];
			time += task.getSpent();
		}
		return time;
	}

	/*
	* Provides the time remaining to complete a project
 	* @return {Number} The remaining time
 	*/
	Project.prototype.getRemainingTime = function(){
		var time = 0;
		for (var i = 0; i < this._tasks.length; i++){
			var task = this._tasks[i];
			var remaining = task.getRemaining();
			time += remaining >= 0 ? remaining : 0;
		}
		return time;
	}

	/*
	* Provides the amount of time that the project 
	* went over budget
 	* @return {Number} Amount of time over budget
 	*/
	Project.prototype.getOverBudget = function(){
		var time = 0;
		for (var i = 0; i < this._tasks.length; i++){
			var task = this._tasks[i];
			var remaining = task.getRemaining();
			time += remaining < 0 ? remaining : 0;
		}
		return time;
	}

	jqf.Project = Project;

})(jqf);
