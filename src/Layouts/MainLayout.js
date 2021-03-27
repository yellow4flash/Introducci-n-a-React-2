import React, { useState } from "react";
import { Layout, Menu, Row, Col } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BarsOutlined, MenuFoldOutlined } from "@ant-design/icons";

const { Header, Footer, Sider, Content } = Layout;

const HeaderStyled = styled(Header)`
  background: #fff;
  padding: 0.2rem;
`;

const MainLayout = props => {
  const { children } = props;
  console.log(children);
  const [collapsed, setCollapsed] = useState(true);
  const toggleMenuSide = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        collapsedWidth="0"
        breakpoint
        style={{
          overflow: "auto",
          minHeight: "100vh",
          background: "#FFF"
        }}
      >
        <div className="px-3 py-5">
          <Link to="/">
            <img
              src="https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png"
              alt="Logo"
              className="img-fluid"
            />
          </Link>
        </div>
        <Menu mode="inline" theme="light">
          <Menu.Item>
            <Link to="/users">Usuarios</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/todos">Todos</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <HeaderStyled>
          <Row type="flex" justify="space-between">
            {collapsed ? (
              <BarsOutlined
                className="trigger"
                onClick={toggleMenuSide}
                style={{ fontSize: "1.3rem" }}
              />
            ) : (
              <MenuFoldOutlined
                className="trigger"
                onClick={toggleMenuSide}
                style={{ fontSize: "1.3rem" }}
              />
            )}
          </Row>
        </HeaderStyled>
        <Content>{children}</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
