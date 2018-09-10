import React from 'react';
import {Button, MenuLines, Bar } from '../styles/menuStyles';

const MenuButton = (props) => {
  return (
    <Button type="button" role="button" onMouseUp={props.handleMouseDown}>
      <MenuLines>
        <Bar></Bar>
        <Bar></Bar>
        <Bar></Bar>
      </MenuLines>
    </Button>
  )
};
export default MenuButton;