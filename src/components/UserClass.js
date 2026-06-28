import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)
        console.log(props);

        this.state = {
            count:0,
            count2:2
 
        }
    }
    render(){
        return(
            <div>
            <h1>Count : {this.state.count}</h1>
            <button onClick={()=> this.setState({count:this.state.count+1})}>INC</button>
            <h2>Name: {this.props.name}</h2>
            <h3>Location: Sambhal</h3>
            <h4>Contact: mdanadil32@gmail.com</h4>
            </div>
        )
    }
}


export default UserClass;