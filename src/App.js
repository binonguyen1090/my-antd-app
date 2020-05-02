import React from 'react';
import Button from "antd/es/button";
import './App.css';
import Layout from "antd/es/layout";
import Title from 'antd/lib/typography/Title';

const { Header, Footer, Sider, Content } = Layout;


function App() {
  
  return (
    <div className="App">
      <Button type="primary">Button</Button>
      <Layout>
        <Header style={{ background: "green" }}>
          <Title style={{ color: "white" }} level={3}>
            Title
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
    </div>
  );
}

export default App;
