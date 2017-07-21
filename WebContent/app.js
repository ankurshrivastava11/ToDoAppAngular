var app = angular.module("todoApp",[]);
	app.controller("todoctrl",todoctrl);


	function todoctrl()
	
	{ 
		this.editMode = false;

		this.todos = [
		"Laundry", 
		"Workout",
		"Running",
		"Car Service"
		];

		this.add = function(){
			this.todos.push(this.input);
			this.input = "";
		}

		this.triggerEdit = function(){
			this.editMode = !this.editMode;

		}

		this.deleteTodo = function (index) {
			this.todos.splice(index,1);
		}

	}
