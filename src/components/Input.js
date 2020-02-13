import React from 'react';
class Input extends React.Component{
    constructer(props){
        super(props);
        this.state = {
            input: ''
        };
    }
    render(){
        return (
            <div>
                <input>{input}</input>
            </div>
        )
    }
}
