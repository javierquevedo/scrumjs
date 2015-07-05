var task;

QUnit.module( "Sinlge Task", {
  setup: function() {
   task = new jqf.Task();
  }
});

QUnit.test( "Task should have a default name", function( assert ) {
	assert.ok( task.getName() === "Unnamed Task", "Task has unnamed" );
	var taskName = "A name for a task";
	task.setName(taskName);
	assert.ok( task.getName() === taskName, "Task has the given name" );
});

QUnit.test( "Task should have the right times after setting the estimate", function( assert ) {
	var estimate = 8;
	task.setEstimate(estimate);
	assert.ok( task.getEstimate() === estimate, "Task has the right estimate" );
	assert.ok( task.getRemaining() === estimate, "Task has the right remaining" );
	assert.ok( task.getSpent() === 0, "Task has the right spent" );
});

QUnit.test( "Task should have the right times after setting the estimate", function( assert ) {
	var estimate = 8;
	var spent =  2;
	task.setEstimate(estimate);
	task.spend(spent);
	assert.ok( task.getEstimate() === estimate, "Task has the right estimate" );
	assert.ok( task.getRemaining() === estimate - spent, "Task has the right remaining" );
	assert.ok( task.getSpent() === 2, "Task has the right spent" );
});