/**
* SearchBar.js
* 
* Created on July 4, 2015
*
* @author Javier Quevedo-Fernandez
**/


var jqf = jqf || {};
(function (jqf) {

var SearchBar = React.createClass({
		handleChange: function(){
			this.props.onFilterInput(
				this.refs.filterTextInput.getDOMNode().value
			)
		},
		render: function(){
			return(
				<div className="row">
					<div className="col-lg-4 col-lg-offset-4">
					<input type="search" ref="filterTextInput" onChange={this.handleChange} value = {this.props.filterText} className="form-control" placeholder="Search for task" />
					</div>
				</div>
				)
			}
	})
	jqf.SearchBar = SearchBar;
})(jqf);
//
//}(window.jqf = window.jqf || {}));