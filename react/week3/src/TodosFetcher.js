import React from "react";

function fetcher() {
  const todosURL =
    "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";
  return fetch(todosURL).then((response) => response.json());
}

class TodosFetcher extends React.Component {
state = {
 todo: " ",
 dueDate: " "   
}

componentDidMount() {
    this.fetcher
}


    render() {
        return (
            <div>
                
            </div>
        )
    }
}
