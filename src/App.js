import React, { Component } from 'react';
import { set_collapsed, router_path } from './action/common.js';
import { connect } from 'react-redux';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import editor from './component/editor/index.js';
import PostList from './component/posts/list.js';
import HomePage from './component/home/index.js';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;


class App extends Component {

    render() {
        return (
            <Router>
            <Layout style={{ minHeight: '100vh' }}>
                <Header>
                    <div className="logo" />
                </Header>
                <Layout>
                    <Sider
                        collapsible
                        collapsed={this.props.collapsed}
                        onCollapse={ c => this.props.dispatch(set_collapsed(c)) }
                    >
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1"  onClick={ () => this.props.dispatch(router_path(['首页'])) }>
                                <Link to="/">
                                    <Icon type="global" />
                                    <span>首页</span>
                                </Link>
                            </Menu.Item>
                        </Menu>

                        <Menu theme="dark" mode="inline">
                            <Menu.Item key="2">
                                <Icon type="database" />
                                <span>文章列表</span>
                            </Menu.Item>
                        </Menu>

                        <Menu theme="dark" mode="inline">
                            <Menu.Item key="3">
                                <Icon type="edit" />
                                <span>撰写文章</span>
                            </Menu.Item>
                        </Menu>

                        <Menu theme="dark" mode="inline">
                            <Menu.Item key="4">
                                <Icon type="user" />
                                <span>你自己</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Content style={{ margin: '0 16px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                {this.props.router_path.map((r, i) => <Breadcrumb.Item key={i}>{r}</Breadcrumb.Item>)}
                            </Breadcrumb>
                            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                                <Route path="/" exact component={ HomePage } />
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                            renshan ©2018
                        </Footer>
                    </Layout>
                </Layout>
            </Layout>
            </Router>
        );
    }
}

const mapStateToProps = state => {

    return {
        collapsed: state.collapsed,
        router_path: state.router_path
    }
}

const mapDispatchToProps = dispatch => { return { dispatch } };

export default connect(mapStateToProps, mapDispatchToProps)(App);
