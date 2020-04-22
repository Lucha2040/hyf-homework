import React from "react";

function fetcher() {
  const todosURL =
    "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";
  return fetch(todosURL).then((response) => response.json());
}

function TodoItem(props) {
  return (
    <li>
      {props.description} || {props.deadline}
    </li>
  );
}
function TodosListItem(props) {
  return (
    <ul>
      {props.todosURL.map((todo) => (
        <TodoItem
          key={todo.id}
          description={todo.description}
          deadline={todo.deadline}
        />
      ))}
    </ul>
  );
}
class TodosFetcher extends React.Component {
  state = {
    todo: " ",
    dueDate: " ",
  };

  componentDidMount() {
    this.fetchTodos();
  }

  fetchTodos() {
    fetcher().then((fetchedTodo) => {
      this.setState({
        todo: fetchedTodo.description,
        dueDate: fetchedTodo.deadline,
      });
    });
  }

  render() {
    return TodosListItem;
  }
}

export default TodosFetcher