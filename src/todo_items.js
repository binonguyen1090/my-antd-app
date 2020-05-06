import React from "react";
import { ScissorOutlined } from '@ant-design/icons';
import List from 'antd/es/list';



export default class TodoItem extends React.Component {
    remove = () => {
        this.props.removeTodo(this.props.index);
    };

    render() {
        return (
          <List.Item
            actions={[
              <ScissorOutlined onClick={this.remove} />
            ]}
          >
            {this.props.content}
          </List.Item>
        );
    }
}
