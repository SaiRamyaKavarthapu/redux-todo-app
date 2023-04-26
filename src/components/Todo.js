import React from 'react';
import AddTodo from './AddTodo';


class Todo extends React.Component {
    constructor(props){
        super(props);
        this.state={
            todoLists:[]
        }
    }

    addItem(){

    }

    render(){
        return(
            <div className='todo-app'>
                <div className='header'>
                    <h1>Todo List</h1>
                </div>
                <AddTodo addItem={this.addItem}/>

            </div>
        )
    }

}
export default Todo;