import React from 'react';
export default class MantraForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: ''
        };
    }
    render(){
        return (
            <div>Hello
                <form onSubmit= {this._handleSubmit}>
                    <input 
                    onChange = {this._handleChange}
                    value ={this.state.text}
                    />
                    <input type= 'submit' value='go!'/>
                </form>
            </div>
        )
    }

    _handleSubmit = (event)=>{
        event.preventDefault();
        this.props.handleSubmit(this.state.text);
        this.setState({
            text: ''
        })
    }

    _handleChange = (event) =>{
        this.setState({
            text: event.target.value
        });
    }
}
