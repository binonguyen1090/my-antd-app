import React from 'react';
import Button from "antd/es/button";
import './App.css';
import Layout from "antd/es/layout";
import Title from 'antd/lib/typography/Title';
import Avatar from "antd/es/avatar";
import { UserOutlined } from "@ant-design/icons";
import Menu from "antd/es//menu";
import SubMenu from 'antd/lib/menu/SubMenu';
import {
  MailOutlined
} from "@ant-design/icons";
import  Breadcrumb from 'antd/es/breadcrumb';
import Tabs from 'antd/es/tabs';
import { Batsmen, Bowler } from "./Cricketer";

const { TabPane } = Tabs;



const { Header, Footer, Sider, Content } = Layout;


function App() {
  
  return (
    <div className="App">
      <Layout>
        <Header style={{ background: "green", padding: "10px" }}>
          <Avatar style={{ float: "right" }} icon={<UserOutlined />} />

          <Title style={{ color: "white" }} level={3}>
            Brand
          </Title>
        </Header>
        <Tabs defaultActiveKey="1" style={{ float: "right" }}>
          <TabPane tab="Tab 1" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
        <Layout>
          <Sider style={{ background: "red" }}>
            <Menu defaultSelectedKeys={["Dashboard"]} mode="inline">
              <Menu.Item key="Dashboard">Dashboard</Menu.Item>
              <SubMenu
                title={
                  <span>
                    <MailOutlined />
                    <span>About Us</span>
                  </span>
                }
              >
                <Menu.ItemGroup key="AboutUs" title="Country">
                  <Menu.Item>America</Menu.Item>
                  <Menu.Item>England</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ padding: "0 50px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>

                <Batsmen name="Smith" team="AUS" runs="6973" />
                <Bowler name="Pat" team="AUS" wickets="123" />
                
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2018 Created by practice
            </Footer>
          </Layout>
        </Layout>
      </Layout>
      <Button type="primary">Button</Button>
    </div>
  );
}

export default App;
