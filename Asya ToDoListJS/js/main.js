document.addEventListener("DOMContentLoaded", function(event) { 
	
	(function() {

		var input = document.getElementById("input");
		var btnAdd = document.getElementById("btnAdd");
		var list = {todo: document.getElementById("todo")};
		

		var makeTask = function(str) {
			var el = document.createElement("li");
			var checkbox = document.createElement("input");
			var textTask = document.createElement("span");

			var btnDel = document.createElement("BUTTON");
			var deleteLabel = document.createTextNode("delete");
			btnDel.appendChild(deleteLabel);
			btnDel.addEventListener('click', onDelete);
			
			checkbox.type = "checkbox";
			checkbox.addEventListener("click", onCheck);
			textTask.textContent = str;
	
			el.appendChild(checkbox);
			el.appendChild(textTask);
			el.appendChild(btnDel);

			return el;
		};



		var addTask = function(task) {
			list.todo.appendChild(task);
		};



		var onCheck = function(event) { 

			if (event.target.checked == true) {
				var x = document.createElement("DEL");
				var task = event.target.parentElement.getElementsByTagName("span");
				var t = task[0].childNodes[0];
				x.appendChild(t);
				task[0].appendChild(x);
			} else {
				var task = event.target.parentElement.getElementsByTagName("span");
				var t = task[0].childNodes[0].childNodes[0];
				task[0].removeChild(task[0].firstChild);
				console.log(t)
				task[0].appendChild(t);
				
			};

			input.focus();

		};



		var onInput = function() {
			var str = input.value.trim();

			if (str.length > 0) {
				addTask(makeTask(str));
				
				input.value = '';
				input.focus();
			};
		};


		btnAdd.addEventListener('click', onInput);
		
		input.addEventListener('keyup', function(event) {
			var code = event.keyCode;

			if (code === 13) {
				onInput();
			};
		});

		input.focus();


		var onDelete = function(event) {
			var delTask = event.target.parentElement;
			delTask.parentElement.removeChild(delTask);

		};
	
	}());
});