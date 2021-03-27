import styled from "styled-components";
const ContainerLayout = styled.div`
  background-color: ${(props) => props.backgroundColor || "transparent"};
  padding-left: ${(props) => props.paddingX || 0.5}em;
  padding-right: ${(props) => props.paddingX || 0.5}em;
  padding-top: ${(props) => props.paddingY || 0.5}em;
  padding-bottom: ${(props) => props.paddingY || 0.5}em;
  margin-left: ${(props) => props.marginX || 2}em;
  margin-right: ${(props) => props.marginX || 2}em;
  margin-top: ${(props) => props.marginY || 2}em;
  margin-bottom: ${(props) => props.marginY || 2}e;
`;
export default ContainerLayout;
