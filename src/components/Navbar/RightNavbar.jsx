import React from 'react';
import { Ul } from './Style';

const RightNavbar = ({ isOpen }) => {
  return (
    <Ul isOpen={isOpen}>
      <li><a href="#!">Item</a></li>
      <li><a href="#!">Item</a></li>
      <li><a href="#!">Item</a></li>
      <li><a href="#!">Item</a></li>
      <li><a href="#!">Item</a></li>
    </Ul>
  )
}

export default RightNavbar;