import React from 'react'
import {connect} from 'react-redux'
import TaskRow from './taskRow';

class TaskList extends React.Component{
    render(){
        return(
                <table>
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.tasks.map((task, index) => <TaskRow key={index} task={ task }/>)}
                    </tbody>
                </table>
        )
    }
}
function mapStateToProps(state){
    return{
        tasks : state.tasks
    }
}
export default connect(mapStateToProps)(TaskList);
