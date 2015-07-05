var tasks = [{
	title: "Build Personas",
	estimate: "6",
	discipline: "design"
},{
	title: "Create wireframes",
	estimate: "7",
	discipline: "design"
},{
	title: "Push messages POC",
	estimate: "6",
	discipline: "tech"
}];



function init(){
	React.render(<jqf.FilterableTaskTable tasks={tasks} />, document.getElementById('content'));

}
//React.render(<TaskRow task={{title: "feo"}} />, document.getElementById('content'));

$( document ).ready( init )