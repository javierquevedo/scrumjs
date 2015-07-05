

function init(){

	var project = jqf.ProjectFactory.getProject();
	//React.render(<jqf.FilterableTaskTable tasks={project.getTasks()} />, document.getElementById('content'));
	React.render(<jqf.ProjectManager project={project} />, document.getElementById('content'));

}

$( document ).ready( init )