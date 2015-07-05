	
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

	var Project = function(){
		this._name = "Unnamed Project";
		this._tasks = [];
		this._workers = [];
	}

	Project.prototype.setName = function(name){
		this._name = name;
	}

	Project.prototype.getName = function(){
		return this._name;
	}

	Project.prototype.getTasks = function(){
		return this._tasks;
	}

	Project.prototype.addTask = function(task){
		this._tasks.push(task);
	}

	Project.prototype.createTask = function(name, estimate){
		var aTask = new jqf.Task(name, estimate);
		this.addTask(aTask);
	}

	Project.prototype.getWorkers = function(){
		return this._workers;
	}

	Project.prototype.getSpentTime = function(){
		var time = 0;
		for (var i = 0; i++; i < this._tasks.length){
			var task = this._tasks[i];
			time += task.getSpent();
		}
		return time;
	}

	Project.prototype.getRemainingTime = function(){
		var time = 0;
		for (var i = 0; i < this._tasks.length; i++){
			var task = this._tasks[i];
			time += task.getRemaining();
		}
		return time;
	}

	jqf.Project = Project;

})(jqf);
