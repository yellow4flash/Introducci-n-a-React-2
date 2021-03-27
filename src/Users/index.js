import React, { useState, useEffect } from "react";
import ContainerLayout from "../Layouts/ContainerLayout";
import {Row, Col, Table} from "antd";
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
<ContainerLayout>
<Row>
  <Col xs={24}>
    <Table 
    rowKey={()=>{}}
    columns={columns}
    dataSource={}
    size="mirror"
    expandable={{
      expandedRowRender,
      expandedRowByClick
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