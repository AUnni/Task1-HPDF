import React from 'react';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import {red500, yellow500, blue500, blue900} from 'material-ui/styles/colors'; 
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';  
import CommunicationEmail from 'material-ui/svg-icons/communication/email';
import Avatar from 'material-ui/Avatar'; 
import ActionAssignment from 'material-ui/svg-icons/action/assignment';

const styles={
    height: 40,
}

const HomeButton = () => (
    <div >
       
    <FlatButton
      label="Home"
      labelPosition="after"
      primary={true} 
      icon={<ActionHome color={blue900}/>}
      />

    <FlatButton
      label="Moments"
      labelPosition="after"
      primary={true}
      style={styles.height}
      icon={<Avatar icon={<ActionAssignment />} backgroundColor={blue900}/>}
      />
    <FlatButton
      label="Notifications"
      labelPosition="after"
      primary={true}
      icon={<NotificationsIcon color={blue900}/>}
      />
    <FlatButton
      label="Messages"
      labelPosition="after"
      primary={true}
      icon={<CommunicationEmail color={blue900} />}
      />

     
      
        
        </div>


      );



      export default HomeButton;
      
