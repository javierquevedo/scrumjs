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
			return  task.getName().toLowerCase().indexOf(props.filterText.toLowerCase()) > -1;
		})
		.map(function(task){
				return <jqf.TaskRow key={task.getID()} task={task} />
		});
		return(
				<div className="row spacer">
					<div className="col-lg-4 col-lg-offset-4">
					<table width="100%">
						<thead>
							<tr>
								<th>Name</th>
								<th>Estimate</th>
								<th>Spent</th>
								<th>Remaining</th>
								<th>Edit</th>
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
