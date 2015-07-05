/**
* TaskRow.js
* 
* Created on July 4, 2015
*
* @author Javier Quevedo-Fernandez
**/


var jqf = jqf || {};

(function (jqf){

	var TaskRow = React.createClass({
		handleHourSpent: function(e){
			e.preventDefault();
			var task = this.props.task;
			this.props.onTaskTimeIncrement(task);
		},
		render: function(){
			var className = this.props.task.getRemaining() > 0 ? "ontrack" : "overbudget";
			className = this.props.task.getRemaining() === 0 ? "completed" : className;
			
			return(
					<tr className={className}>
					<td>{this.props.task.getName()}</td>
					<td>{this.props.task.getEstimate()}</td>
					<td>{this.props.task.getSpent()} </td>
					<td>{this.props.task.getRemaining()}</td>
					<td><a href="#" onClick={this.handleHourSpent}><img src="assets/sq_plus.png" /></a></td>
					</tr>
				);
		}
	})

	jqf.TaskRow = TaskRow;
})(jqf);