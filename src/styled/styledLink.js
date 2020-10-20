import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  color: #008080de;
  font-weight: bold;
  border: 1px solid #008080de;
  padding: 10px;
  text-decoration: none;
  :hover {
    text-decoration: none;
    color: #008080;
    border: 1px solid #008080de;
  }
`;
