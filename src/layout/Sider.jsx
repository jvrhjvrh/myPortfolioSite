import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { ExperimentOutlined, HomeOutlined, AppstoreOutlined } from '@ant-design/icons';
import propTypes from 'proptypes';
import { useHistory } from 'react-router-dom';

const { Content, Sider } = Layout;

const SiderComponent = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const history = useHistory();

    const onCollapse = (collapse) => {
        setCollapsed(collapse);
    };

    const onSelectMenu = ({ key }) => {
        switch (key) {
            case '2':
                history.push('/brainfuck');
                break;
            case '3':
                history.push('/pixelart');
                break;
            default:
                history.push('/');
        }
    };

    return (
        <Layout style={{ height: '100vh' }}>
            <Sider collapsed={collapsed} collapsible onCollapse={onCollapse}>
                <Menu theme="dark" mode="inline" onClick={onSelectMenu}>
                    <Menu.Item key="1">
                        <HomeOutlined />
                        <span>home.js</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <ExperimentOutlined />
                        <span>Brainfuck.js</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <AppstoreOutlined />
                        <span>Pixelart.js</span>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Content style={{ margin: '0 16px' }}>
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};

SiderComponent.propTypes = {
    children: propTypes.node.isRequired,
};

export default SiderComponent;
