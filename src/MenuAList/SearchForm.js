import React from "react";
import Icon from 'antd/es/icon'
import Form from "antd/es/form";
import Col from "antd/es/col";
import Row from "antd/es/row";
import Input from "antd/es/input";
import Button from "antd/es/button";
import Card from "antd/es/card";
import { UpOutlined, DownOutlined } from "@ant-design/icons";
const FormItem = Form.Item;
// const form = Form.create;
// @Form.create()
export default class SearchForm extends React.Component {
  constructor() {
    super();
    this.state = {
      expand: false,
    };
    this.toggle = this.toggle.bind(this)
  }

//   handleSearch(e) {
//     e.preventDefault();
//     this.props.form.validateFields((error, values) => {
//       console.log("Received values of form: ", values);
//     });
//   }

//   handleReset() {
//     this.props.form.resetFields();
//   }

  toggle() {
    const { expand } = this.state;
    this.setState({ expand: !expand });
  }

  render() {
    // const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 19 },
    };
    const expand = this.state.expand;
    const rowGutter = 40;
    const collapse = (
      <Button onClick={this.toggle}>
         Collapse { expand ? <UpOutlined /> : <DownOutlined />}
      </Button>
    );
    return (
        // <h2>From search form</h2>
      <Card title="Search" extra={collapse} className="panel">
        <Form
          className="ant-advanced-search-form"
          onSubmit={this.handleSearch}
        >
          <Row gutter={rowGutter}>
            <Col span={8} key={1}>
              <FormItem {...formItemLayout} label="item1">
                {/* {getFieldDecorator(`field-item1`)( */}
                  <Input placeholder="placeholder" />
                {/* )} */}
              </FormItem>
            </Col>
            <Col span={8} key={2}>
              <FormItem {...formItemLayout} label="item2">
                {/* {getFieldDecorator(`field-item2`)( */}
                  <Input placeholder="placeholder" />
                {/* )} */}
              </FormItem>
            </Col>
          </Row>
          {expand ? (
            <Row gutter={rowGutter}>
              <Col span={8} key={1}>
                <FormItem {...formItemLayout} label="item1">
                  {/* {getFieldDecorator(`field-item1`)( */}
                    <Input placeholder="placeholder" />
                  {/* )} */}
                </FormItem>
              </Col>
              <Col span={8} key={2}>
                <FormItem {...formItemLayout} label="item2">
                  {/* {getFieldDecorator(`field-item2`)( */}
                    <Input placeholder="placeholder" />
                  {/* )} */}
                </FormItem>
              </Col>
            </Row>
          ): ""}
          <Row>
            <Col span={12} style={{ textAlign: "left" }}>
              <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                Clear
              </Button>
            </Col>
            <Col span={12} style={{ textAlign: "right" }}>
              <Button type="primary" htmlType="submit">
                Search
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>
    );
  }
}


