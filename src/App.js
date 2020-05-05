import React, { useState } from 'react';
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
import { Cricketer, ODICareer, Batting, Bowling, TestCareer } from "./Cricketer";
import CareerDetails from './CareerDetails';

const { TabPane } = Tabs;



const { Header, Footer, Sider, Content } = Layout;


function App() {
  // const [stateValue, setStateValue] = useState('')
  // const [stateBool, setStateBool] = useState(false)
  const [selectedPlayer, setselectedPlayer] = useState("");
  const [visible, setvisible] = useState(false);
  const onselect = name => {
    setselectedPlayer(name)
    setvisible(true)
  }
  const ViewProfileButton = ({name}) => {
    return <Button type="dashed" style={{float:'right'}} onClick={() => onselect(name)}> View Profile >>> </Button>
  }
  const onClose = () => {
    setvisible(false)
  }
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
              <div style={{ background: "#fff", padding: 24, minHeight: 480 }}>
                {/* <Batsmen name="Smith" team="AUS" runs="6973" />
                <Bowler name="Pat" team="AUS" wickets="123" /> */}
                <Cricketer name="Virat Kholi" team="IND" avatarSrc="./cat.png">
                  <ODICareer matches="239">
                    <Batting runs="11,520" score="183" />
                    <br></br>
                    <Bowling wickets="4" bowlingAvg="166.25" />
                  </ODICareer>
                  <TestCareer matches="79">
                    <Batting runs="6,749" score="243" />
                  </TestCareer>
                  <ViewProfileButton name="Virat Kholi" />
                </Cricketer>
                <Cricketer name="J Bumrah" team="IND" avatarSrc="./bb.jpg">
                  <TestCareer matches="12">
                    <Bowling wickets="62" bowlingAvg="20.63" />
                  </TestCareer>
                  <ViewProfileButton name="J Bumrah" />
                </Cricketer>
              </div>
            </Content>
            <CareerDetails
              player={selectedPlayer}
              visible={visible}
              onClose={onClose}
            />
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
