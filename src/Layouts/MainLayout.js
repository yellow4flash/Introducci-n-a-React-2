import React from "react";
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
  console.log(props);

  const { children } = props;
  console.log(children);

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
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
              className="img-fluid"
            />
          </Link>
        </div>
        <Menu mode="inline" theme="light">
          <Menu.Item>Usuarios</Menu.Item>
          <Menu.Item>Todos</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <HeaderStyled>Encabezado</HeaderStyled>
        <Content>{children}</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
