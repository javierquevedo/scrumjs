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
		render: function(){
			return(
					<tr>
					<td>{this.props.task.getName()}</td>
					<td>{this.props.task.getEstimate()}</td>
					<td><a href="#">View</a></td>
					</tr>
				);
		}
	})

	jqf.TaskRow = TaskRow;
})(jqf);