
var project;
var contentProject;

QUnit.module( "Empty Project", {
  setup: function() {
   project = new jqf.Project();
  }
});

QUnit.test( "Project should have a default name", function( assert ) {
	assert.ok( project.getName() === "Unnamed Project", "Passed!" );
});

QUnit.test( "Should be able to create a project", function( assert ) {
	assert.ok( project !== undefined, "Passed!" );
});


QUnit.test( "Project should have a default name", function( assert ) {
	assert.ok( project.getName() === "Unnamed Project", "Passed!" );
});

QUnit.test( "A new project should have no tasks and times", function( assert ) {
	assert.ok( project.getTasks().length === 0, "No tasks" );
	assert.ok( project.getSpentTime() === 0, "Spent time is 0" );
	assert.ok( project.getRemainingTime() === 0, "Remaining time is 0" );
});


QUnit.module( "Stub Project", {
  setup: function() {
   project = new jqf.Project();
  }
});

QUnit.test( "Project Factory should return project with tasks", function( assert ) {
	contentProject = jqf.ProjectFactory.getProject();
	assert.ok( contentProject.getTasks().length > 0, "Stub project has at least one task" );
	assert.ok( contentProject.getSpentTime() === 0, "Spent time should be 0" );
	assert.ok( contentProject.getRemainingTime() !== 0, "Remaining time is bigger than 0: " + contentProject.getRemainingTime() );
});