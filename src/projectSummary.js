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
			return (
					<div className="row">
						<div className="col-lg-4 col-lg-offset-4">
						<h1>{this.props.project.getName()}</h1>
						<h3>{this.props.project.getRemainingTime()} hours to completion</h3>
						</div>
					</div>
				)
		}
	})

	jqf.ProjectSummary = ProjectSummary;

})(jqf);