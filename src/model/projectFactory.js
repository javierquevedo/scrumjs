	
/**
* ProjectFactory.js
* 
* Created on July 4, 2015
*
*
* @desc Factory for creating projects
* @author Javier Quevedo-Fernandez
**/

var jqf = jqf || {};

(function(jqf){

	jqf.ProjectFactory = {};


	/**
  	* @desc Factory for creating projects. Currently only creates a stub project 
  	*		for	demonstration purposes 
  	* @param {String} Project Type
  	* @return Project - Returns a project filled with stub data
	*/

	jqf.ProjectFactory.getProject = function(proyectType){

		var project = new jqf.Project();

		project.setName("Sample Project");
		
		for (var i = 0; i < 10; i++){
			var aTask = new jqf.Task();
			aTask.setName("Task " + i.toString());
			aTask.setEstimate(Math.round(Math.random()*8) + 1);
			aTask.spend(Math.round(Math.random()*8) + 1);
			project.addTask(aTask);

		}
		return project;

	}

})(jqf);