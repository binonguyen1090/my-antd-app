import React from 'react';
import Button from "antd/es/button";
import './App.css';
import Layout from "antd/es/layout";
import Title from 'antd/lib/typography/Title';
import Avatar from "antd/es/avatar";
import { UserOutlined } from "@ant-design/icons";


const { Header, Footer, Sider, Content } = Layout;


function App() {
  
  return (
    <div className="App">
      <Layout>
        <Header style={{ background: "green" }}>

          <Avatar style={{ float: "right"}} icon={<UserOutlined />} />
          
          
          <Title style={{ color: "white" }} level={3}>
            Brand
          </Title>
        </Header>
        <Layout>
          <Sider style={{ background: "red" }}>Sider</Sider>
          <Layout>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </Layout>
      <Button type="primary">Button</Button>
    </div>
  );
}

export default App;
