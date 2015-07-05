/**
* ProjectSummary.js
* 
* Created on July 5, 2015
*
* @author Javier Quevedo-Fernandez
**/


var jqf = jqf || {};

(function(jqf){
	var ProjectSummary = React.createClass({
		render: function(){
			var text;
			var remainingTime =  this.props.project.getRemainingTime();
			if (remainingTime > 0){
				
			 	text = remainingTime + " hours to completion";
			}else{
				text = "Project complete with ";
				text += Math.abs(this.props.project.getOverBudget()) + " hours over budget!"
			}
			return (
					<div className="row">
						<div className="col-lg-4 col-lg-offset-4">
						<h1>{this.props.project.getName()}</h1>
						<h3>{text}</h3>
						</div>
					</div>
				)
		}
	})

	jqf.ProjectSummary = ProjectSummary;

})(jqf);