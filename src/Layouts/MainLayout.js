import React from "react";
import { Layout, Menu, Row, Col } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BarsOutlined, MenuFoldOutlined } from "@ant-design/icons";

const { Header, Footer, Sider, Content } = Layout;

/* const HeaderStyled = styled(header)`
  background: #fff;
  padding: 0.2rem
`; */

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
        <div>
          <Link>
            <img src="" />
          </Link>
        </div>
        <Menu>
          <Menu.Item>Usuarios</Menu.Item>
          <Menu.Item>Todos</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header>Encabezado</Header>
        <Content>{children}</Content>
        <Footer>Pie de Página</Footer>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
