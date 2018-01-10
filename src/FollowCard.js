import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
//import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';


const style = {
  display: 'flex',
  float: 'left',
  margin: '0px 32px 8px 8px',
};

const FollowMenu = () => (
  <div>
    <Paper style={style}>
      <Menu desktop={true} width={256}>
        <MenuItem primaryText="Who To Follow" secondaryText=".Refresh.View all" />
        
        <MenuItem primaryText="CGTN" secondaryText="@CGTNOfficial" />
        <Divider />
        <MenuItem primaryText="Shah Rukh Khan" secondaryText="@iamsrk" />
        <Divider />
        <MenuItem primaryText="Abi" secondaryText="@abhijithrao" />
        <Divider />
        <MenuItem primaryText="Find people you know" />
        <MenuItem primaryText="import your contacts from Gmail" />
        <Divider />
        
      </Menu>
    </Paper>
    
  </div>
);

export default FollowMenu;