import React from "react";
import Title from 'antd/lib/typography/Title';
import List from 'antd/es/list';
import Input from 'antd/es/input';

// const Todo = () => {
export default class Todo extends React.Component {
   constructor(){
       super();
       this.state = {
           todos: []
       }
    }
    handleEnter = (e) => {
        const todos = {
            index : this.state.todos.length,
            content : e.currentTarget.value
        }
        const newTodo = this.state.todos.concat(todos)
        this.setState({
            todos: newTodo
        })

        e.currentTarget.value = ""
    }
       
   
    render(){
        
    return (
        <div className="todoContainer">

            <Title level={2} >To do list</Title>
            <Input placeholder="Enter to do item"  onPressEnter={this.handleEnter} />
            <List
                size="small"
          
                bordered
                dataSource={this.state.todos}
                renderItem={item => <List.Item>{item.index + 1}: {item.content}</List.Item>}
            />

        </div>
    );
    }
};
