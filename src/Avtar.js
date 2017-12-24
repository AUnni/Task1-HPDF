import React from 'react';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors';
const containerStyle = {
    padding: 5,
};

const style = {
    margin: 0,
    padding: 0,
    top: '-50px',
    left: '5px',
    
};
const listStyle = {
    fontSize: 18,
    fontWeight: 'bold',
     margin: 0  ,
    padding: 0,
}

const tagStyle = {
        margin: 5,
        padding: 0,
    
}
const AvatarExampleSimple = () => (
  <List style={containerStyle}>
    <ListItem
      disabled={true}
      style={listStyle}
      leftAvatar={
        <Avatar src="/photo.jpg"
        color={blue300}
        backgroundColor={indigo900}
        size={80}
        style={style} />
      }
    >
      achuthan unni
    </ListItem>
    <ListItem 
    disabled={true}
    style={tagStyle}
    >
        @achutanunni
    </ListItem>
    </List>);

    
export default AvatarExampleSimple;