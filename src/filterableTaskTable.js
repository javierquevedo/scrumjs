/**
* FilterableTaskTable.js
* 
* Created on July 4, 2015
*
* @author Javier Quevedo-Fernandez
**/

var jqf = jqf || {};
(function(jqf){
	var FilterableTaskTable = React.createClass({
		getInitialState: function(){
			return {
				filterText : ""
			};
		},
		handleFilterInput: function(filterText){
			this.setState({
				filterText: filterText
			});
		},
		render: function(){
			return (
				<div className="spacer">
				<p><jqf.SearchBar onFilterInput={this.handleFilterInput} filterText={this.state.filterText} /></p>
				<p><TaskTable filterText={this.state.filterText} tasks={this.props.tasks} /></p>
				</div>
			)
		}
	});

	jqf.FilterableTaskTable = FilterableTaskTable; 
})(jqf);