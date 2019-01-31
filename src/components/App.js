import React from 'react'
import Header from './Header'
import Task from './Task'
import TaskList from './TaskList';



class App extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <Task />
                <TaskList/>
            </div>
        )
    }
}
export default App;