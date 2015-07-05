/**
* TaskTable.js
* 
* Created on July 4, 2015
*
* @author Javier Quevedo-Fernandez
**/

var TaskTable = React.createClass({
	render: function(){
		var props = this.props;
		var rows = this.props.tasks
		.filter(function(task){
			return  task.title.toLowerCase().indexOf(props.filterText.toLowerCase()) > -1;
		})
		.map(function(task){
				return <jqf.TaskRow key={task.title} task={task} />
		});
		return(
				<div className="row spacer">
					<div className="col-lg-4 col-lg-offset-4">
					<table width="100%">
						<thead>
							<tr>
								<th>Task Title</th>
								<th>Task Estimate</th>
								<th>View</th>
							</tr>
						</thead>
						<tbody>
							{rows  }
						</tbody>
					</table>

					</div>
				</div>
			)
	}
});
