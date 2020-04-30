import React from 'react'


function fetchGithub(query) {
    const URL = `https://api.github.com/search/users?q=${query}`
    return fetch(URL).then((response) => response.json())
}

export default class GithubList extends React.Component {
    state = {
        users: [], 
        isLoading: true, 
        searchUser: '',
        errorMessage: null
    }


handleSubmit = (e) => {
    const searchTerm = e.target.value;
    console.log("Handle submit", searchTerm);   
    this.setState({ 
        searchUser: searchTerm });
        if(searchTerm.length === 0) {
            this.setState({
                users: [], 
                isLoading: false,
            }) 
            return
        } 
 fetchGithub(searchTerm).then((data) => {
     console.log("fetch data", data, searchTerm);    
     const users = data.items.map((user) => user); 
     console.log(users);
     this.setState({
         users: users, 
         isLoading: true, 
         errorMessage: null
     })
 }).catch(() => this.setState({ errorMessage: "Fail to fetch" }))
 .finally(() => this.setState({ isLoading: false}))
}

    render() {
        const { isLoading, users, searchUser, errorMessage } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name="searchUser" value={searchUser} autoComplete="off" onChange={this.handleSubmit} />
                    <input type="submit" />                    
                </form>
                {(!searchUser) ? 
                <h3>No results</h3>
            :
            null}
                {(isLoading && !searchUser)? 
                <h1>Loading... </h1> 
            : 
            <ul>
            {users.map((user) => <li key={user.id}>{user.login}</li>)}
            </ul>}
            {(errorMessage != null) ?
            <h1>{errorMessage}</h1> 
        : 
        null}
            </div>
        )
    }
}


