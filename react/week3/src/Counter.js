import React from 'react';


class Counter extends React.Component  {
    state = { seconds: 0};

componentDidMount() {
    setInterval(() => {
        return this.setState((state, props) => {
            return {
                seconds: state.seconds + 1,
            };
        });
    }, 1000);
 
}
render() {
    return (
        <div>
            <h1>Things to work on:</h1>
            <h2>You been in this site for {this.state.seconds} seconds</h2>
        </div>
    )
}
}


export default Counter