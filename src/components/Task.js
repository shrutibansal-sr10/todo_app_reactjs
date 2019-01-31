import React from 'react';
import { connect } from 'react-redux';
import  { bindActionCreators } from 'redux';
import { addTask } from '../actions/index';

class Task extends React.Component{
    render(){
        return(
            <div>
                <input type="text" ref="task" placeholder="Enter your task"/>
                <button onClick = {()=>this.props.addTask(this.refs.task.value)}>Add</button>
            </div>
        )
    } 
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ addTask }, dispatch)
}
export default connect(()=>{return{};}, mapDispatchToProps)(Task)