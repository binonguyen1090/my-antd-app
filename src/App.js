
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {
  LaptopOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import SearchForm from "./MenuAList/SearchForm";
// import SearchResult from "./MenuAList/SearchResult";
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
import Todo from './todo'
import Modal from 'antd/es/modal';
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
  const onModal = () => {
    Modal.info({
      title: "Hello",
      content: (
        <div>
          <p>Congratulations, button works</p>
        </div>
      ),
    });
  };
  return (
    <Router>
      <div className="App">
        <Layout>
          <Header style={{ background: "white" }}>ant-react-redux</Header>
        </Layout>

        <Layout style={{ padding: "10px" }}>
          <Sider width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <Menu.Item key="sub1" icon={<UserOutlined/> }>Menu A</Menu.Item>
              <SubMenu
                key="sub2"
                icon={<LaptopOutlined />}
                title="Navigation One"
              >
                <Menu.Item key="5">option 1</Menu.Item>
                <Menu.Item key="6">option 2</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout
            style={{
              padding: "10px 10px 24px 44px",
              margin: { top: 0, right: 0, bottom: 0, left: 10 },
            }}
          >
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>
                <HomeOutlined />
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <UserOutlined />
                Menu A
              </Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Title level={4}>Menu A</Title>
              
            </Content>
          </Layout>
        </Layout>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
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
                <div
                  style={{ background: "#fff", padding: 24, minHeight: 480 }}
                >
                  {/* <Batsmen name="Smith" team="AUS" runs="6973" />
                <Bowler name="Pat" team="AUS" wickets="123" /> */}
                  <Cricketer
                    name="Virat Kholi"
                    team="IND"
                    avatarSrc="./cat.png"
                  >
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
        <Button onClick={onModal} type="primary">
          Modal Button
        </Button>
        <Todo />
      </div>
    </Router>
  );
}

export default App;
