
import {Row, Col} from "antd";
import styled from "styled-components";

cosnt Title = styled.div`
font-weight: 800;
letter-spacing:0.5px;
`;

const 

export const columns = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    }
  }
];

export const expandedRowRender = (record, index, indent, expanded) => {
  const { address, company } = record;
  const { city, suite, street } = address;
  const { catchPhrase, bs, nanc } = company;
  return (
    <div className="px-md-5 py-md-2">
    <Row>
    <Col>
    <Title className=""/>
    </Col>
    </Row>
    </div>
  );
};
