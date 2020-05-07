const namesArr = [];
const todoArr = [];
const favoriteDishArr = [];
const sayHi = new RegExp("Hello my name is");
const addTodo = new RegExp("Add ([a-z]+) to my todo");
const addArr = ["Add", "to", "my", "todo"];
const removeTodo = new RegExp("Remove ([a-z]+) from my todo");
const addTimer = new RegExp("Set a timer for ([0-9]+)");
const deleteArr = ["Remove", "from", "my", "todo"];
const getMyName = new RegExp("What is my name");

function getReply(command) {
  const clearTodo = command.split(" ");
  const matches = command.match(/(\d+)/g);
  if (matches) {
    var firstNum = Number(matches[0]);
    var secondNum = Number(matches[1]);
    if (command.includes("+")) {
      console.log(firstNum + secondNum);
      return;
    } else if (command.includes("-")) {
      console.log(firstNum - secondNum);
      return;
    } else if (command.includes("/")) {
      console.log(firstNum / secondNum);
      return;
    } else if (command.includes("*")) {
      console.log(firstNum * secondNum);
      return;
    }
  }
  if (sayHi.test(command)) {
    const name = command.slice(17);
    if (namesArr.includes(name)) {
      console.log(`I know you from before ${name}`);
      return;
    } else if (command.endsWith("name")) {
      console.log(`Your name is ${name}`);
    } else {
      namesArr.push(name);
      console.log(`Nice to meet you ${name}`);
      return;
    }
  } else if (addTodo.test(command)) {
    const todo = clearTodo.filter((el) => !addArr.includes(el)).toString();
    todoArr.push(todo);
    console.log(`${todo} added to your todo`);
  } else if (removeTodo.test(command)) {
    const todoToDelete = clearTodo.filter((el) => !deleteArr.includes(el));
    const filteredTodoArr = todoArr.filter((el) => el != todoToDelete);
    console.log(`Removed ${todoToDelete} from your todo`);
  } else if (command == "What is on my todo?") {
    if (todoArr.length === 0) {
      console.log("There's no todos to do for you");
    } else {
      console.log(todoArr);
    }
  } else if (command == "What day is it today?") {
    const today = new Date();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    console.log(
      `Today is ${today.getDate()} of ${
        months[today.getMonth()]
      } of ${today.getFullYear()}`
    );
  } else if (addTimer.test(command)) {
    const unit = clearTodo[5];
    const amount = Number(clearTodo[4]);
    const timer = (unit == "minutes") ? amount * 10000 : amount * 1000;
    console.log(`Timer set for ${amount} ${unit}`);
    setTimeout(() => {
      console.log("Timer done");
    }, timer);
  } else {
    console.log("Sorry, I did not understand your request");
  }
}


//Test

getReply("Hello my name is Lucha");
getReply("Hello my name is Lucha");
getReply("What is my name");
getReply("Add fishing to my todo");
getReply("Add singing to my todo");
getReply("Add cooking to my todo");
getReply("What is on my todo?");
getReply("Remove fishing from my todo");
getReply("What day is it today?");
getReply("Set a timer for 1 minutes");
getReply("What is 2 + 2");
getReply("What is 2 - 2");
getReply("What is 5 * 2");
getReply("What is 10/2");
