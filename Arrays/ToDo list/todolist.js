var todos = ["Buy Ne Turtle"];

var input = prompt("What would you like to do?")

while(input !== "quit"){
    //handle input
    if(input === "list"){
        listTodos();
    } else if(input === "new"){
        addTodo();
    } else if (input === "delete"){
       deleteTodo();
    }
    //ask again for new input
    input = prompt("What would you like to do?")
}
console.log("Ok, you quit the app")

function listTodos(){
    console.log("**********")
    //loops through array and prints each to do on new line adding index of it
    todos.forEach(function(todo, i){
        console.log(i + ": " + todo);
    });
    console.log("**********")
}

function addTodo(){
    //ask for new todo
    var newTodo = prompt("Enter new todo");
    //add to todos array
    todos.push(newTodo);
    console.log("Added Todo");
}

function deleteTodo(){
     //ask for index of todo to be deleted
     var index = prompt("Enter index of todo to delete");
     //delete that to do
     //splice() - delete method
     todos.splice(index,1);
     console.log("Deleted Todo");
}