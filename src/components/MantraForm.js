import React from 'react';
export default class MantraForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            input: ''
        };
    }
    render(){
        return (
            <div>Hello
                <form>
                    <input 
                    onChange = {this._handleChange}
                    value ={this.state.input}></input>
                </form>
            </div>
        )
    }

    _handleChange = (event) =>{
        this.setState({
            text: event.target.value
        });
    }
}
