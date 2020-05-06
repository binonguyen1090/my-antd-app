import React from "react";
import Title from 'antd/lib/typography/Title';
import List from 'antd/es/list';
import Input from 'antd/es/input';
import TodoItem from './todo_items'

// const Todo = () => {
export default class Todo extends React.Component {
   constructor(){
       super();
       this.state = {
           todos: []
       }
    }
    handlePressEnter = (e) => {
        const todo = {
            index : this.state.todos.length,
            content : e.target.value
        }
        const newTodo = this.state.todos.concat(todo)
        this.setState({
            todos: newTodo
        })

        e.target.value = ""
    }
    
    removeTodo = index => {
        let newTodos = [...this.state.todos];

        newTodos.splice(index, 1);

        for (let i = index; i < newTodos.length; i++) {
            newTodos[i].index -= 1;
        }

        this.setState({
            todos: newTodos
        });
    };
   
    render(){
        
    return (
        <div className="todoContainer">

            <Title level={2} >To do list</Title>
            <Input
                placeholder="What needs to be done?"
                onPressEnter={this.handlePressEnter}
            />          
            <List
                ocale={{ emptyText: "No todo items" }}
                dataSource={this.state.todos}
                renderItem={item => (
                    <TodoItem
                        content={item.content}
                        index={item.index}
                        removeTodo={this.removeTodo}
                    />
                )}
            />

        </div>
    );
    }
};
