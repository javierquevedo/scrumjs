/**
* ProjectManager.js
* 
* Created on July 5, 2015
*
* @author Javier Quevedo-Fernandez
**/


var jqf = jqf || {};



(function(jqf){
	var ProjectManager = React.createClass({
		handleNewTask: function(name, estimate){
			var project = this.props.project;
			project.createTask(name, estimate);
			this.setProps({ project: project });
		},
		render: function(){
			var tasks = this.props.project.getTasks();
			return(
				<div>
				<jqf.ProjectSummary project={this.props.project} />
				<jqf.FilterableTaskTable tasks={tasks} />
				<jqf.TaskCreator project={this.props.project} onNewTask={this.handleNewTask} />
				</div>
			)
		}
	})

	jqf.ProjectManager = ProjectManager;

})(jqf);

