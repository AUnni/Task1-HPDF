import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
//import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import {blue300,indigo900,grey400, darkBlack, lightBlack, blue900, blue400, blue500, blue800,} from 'material-ui/styles/colors';



const style = {
  display: 'flex',
  float: 'left',
  margin: '0px 32px 8px 8px',
    height: 350,
    width: 290,
    textAlign: 'left',
    display: 'inline-block',
    paddingLeft: 10,
   
  };  
  const Avtarstyle = {
    float: 'left',
    margin: 10,
    padding: 1,
   
};

const FollowMenu = () => (
  <div>
    <Paper style={style}>
    <p>
    <span style={{color: darkBlack, fontWeight: 'bolder', fontSize:20}}>Who to follow </span><span style={{color: blue400, fontSize: 10}}>. Refresh</span> <span style={{color: blue400, fontSize: 10}}>. View all</span>
    </p>
    <div>
        <Avatar src="/Images.jpg/Hongkong.jpg" 
        color={blue300}
        
        size={50}
        style={Avtarstyle} /> 
    <p>
    <span style={{color: darkBlack, fontWeight: 'bolder', fontSize:14}}>Hong Kong </span><span style={{color: lightBlack, fontSize: 12}}>@discoverhk</span> <span style={{color: blue400, fontSize: 12}}>. View all</span>
    <RaisedButton
      label ="Follow"
      borderColor={blue900}
      buttonStyle={{ borderRadius: 25 }}
      style={{ marginRight:16, borderRadius: 25, fontSize: 14, borderColor: blue800, }}
      labelColor={blue500}
      backgroundColor={"white"}
    />
    <span style={{color: lightBlack, fontSize: 12}}>Promoted</span>
    </p>
    </div>
    <Divider/>
     
    <div>
        <Avatar src="/Images.jpg/Akshaykumar.jpg" 
        color={blue300}
        
        size={50}
        style={Avtarstyle} /> 
    <p>
    <span style={{color: darkBlack, fontWeight: 'bolder', fontSize:14}}>Akshay Kumar </span><span style={{color: lightBlack, fontSize: 12}}>@akshaykumar</span>
    <RaisedButton
      label ="Follow"
      borderColor={blue900}
      buttonStyle={{ borderRadius: 25 }}
      style={{ marginRight:16, borderRadius: 25, fontSize: 14, borderColor: blue800, }}
      labelColor={blue500}
      backgroundColor={"white"}
    />
    
    <span style={{color: lightBlack, fontSize: 12}}>Promoted</span>

    
    </p>

    </div>
    <Divider/>
     
    <div>
        <Avatar src="/Images.jpg/Fedex.jpg" 
        color={blue300}
        
        size={50}
        style={Avtarstyle} /> 
    <p>
    <span style={{color: darkBlack, fontWeight: 'bolder', fontSize:14}}>Roger Federer</span><span style={{color: lightBlack, fontSize: 12}}>@rogerfederer</span> 
    <RaisedButton
      label ="Follow"
      borderColor={blue900}
      buttonStyle={{ borderRadius: 25 }}
      style={{ marginRight:16, borderRadius: 25, fontSize: 14, borderColor: blue800, }}
      labelColor={blue500}
      backgroundColor={"white"}
    />
    
    <span style={{color: lightBlack, fontSize: 12}}>Promoted</span>

    
    </p>

    </div>
    <Divider/>
    <Menu>
        <MenuItem style={{fontSize: 14, fontWeight: 'bolder'}} primaryText="Find people you know" leftIcon={<img src='/images.jpg/Email.png'/>} />
        
    </Menu>    
    </Paper>
    
  </div>
);

export default FollowMenu;