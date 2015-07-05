/**
* TaskCreator.js
* 
* Created on July 5, 2015
*
* @author Javier Quevedo-Fernandez
**/

var jqf = jqf || {};

(function(jqf){
	var TaskCreator = React.createClass({
		handleSubmit: function(e) {
			e.preventDefault();
			
			var taskName = React.findDOMNode(this.refs.name).value.trim();
			var taskEstimate = parseInt(React.findDOMNode(this.refs.estimate).value.trim());
			this.props.onNewTask(taskName, taskEstimate);
		},
		render: function(){
			return(
			<div className="row">
				<div className="col-lg-4 col-lg-offset-4">
				<form onSubmit={this.handleSubmit}>
				<table width="100%"> 
				<thead>
							<tr>
								<th>Task Name</th>
								<th>Task Estimate</th>
							</tr>
						</thead>
				<tbody>
				<tr><td>
				<input id="name" type="text" placeholder="Task Name" ref="name" />
				</td>
				<td>
        		<input id="estimate" type="number" id="" placeholder="Estimate" defaultValue="8" ref="estimate"  />
        		</td></tr>
        		</tbody>
				</table>
        		<input type="submit" value="Create Task" />
        		</form>
        		</div>
			</div>
			)
		}
	});

	jqf.TaskCreator = TaskCreator;
})(jqf);