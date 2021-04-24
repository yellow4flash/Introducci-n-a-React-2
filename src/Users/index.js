import React, { useState, useEffect } from "react";
import {Row, Col, Table} from "antd";
// own components
import ContainerLayout from "../Layouts/ContainerLayout";
import PageHeaderStyled from "../Shared/Common/PageHeader";
// utils
import {columns, expandedRowRender} from "./utils.js";
const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    console.log("1ra vez renderizado");
    handleLoadUsers();
  }, []);
  const handleLoadUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    setUsers(users);
    console.log("response:", users);
  };
  return (
<ContainerLayout backgroundColor="#ffffff" paddingX={2} paddingY={2} marginX={2} marginY={2}>
<PageHeaderStyled title="Usuarios" className="ml-2 px-0 pt-0"/>
<Row>
  <Col xs={24}>
    <Table 
    rowKey={()=>{}}
    columns={columns}
    dataSource={}
    size="mirror"
    expandable={{
      expandedRowRender,
      expandedRowByClick: true,
    }}
    />
  </Col>
</Row>
</ContainerLayout>
  );
};

export default Users;

// niveles de developer
// trandy
// junior
// senior