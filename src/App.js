import React from 'react';
import Button from "antd/es/button";
import './App.css';
import Layout from "antd/es/layout";

const { Header, Footer, Sider, Content } = Layout;


function App() {
  
  return (
    <div className="App">
      <Button type="primary">Button</Button>
      <Layout>
        <Sider style={{background:'red'}}>Sider</Sider>
        <Layout>
          <Header style={{background:'green'}}>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
