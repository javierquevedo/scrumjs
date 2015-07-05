

function init(){

	var project = jqf.ProjectFactory.getProject();

	React.render(<jqf.FilterableTaskTable tasks={project.getTasks()} />, document.getElementById('content'));

}
//React.render(<TaskRow task={{title: "feo"}} />, document.getElementById('content'));

$( document ).ready( init )