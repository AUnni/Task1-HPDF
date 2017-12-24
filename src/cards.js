import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {red500, yellow500, blue500, blue900,grey50} from 'material-ui/styles/colors'; 
import AvatarExampleSimple from './Avtar'
import ProfilStatsCard from './App.css'
import ProfileCardStatsstatValue from './App.css'

const cardStyle = {
    width:'290px',
    height: '209px',
    backgroundColor: grey50,

}
const profilecardStyle = {
    width:'185px',
    height: '42px',
    backgroundColor: grey50,
    position: 'absolute',
    left: '90px',
    textAlign: 'center',
    display: 'inline-block',
    margin: '16px 32px 16px 0',
    
}

const card2Style = {width:'290px',
height: '113px',
backgroundColor: blue900,}

const boxSize={
  width: '74',
  height: '37',
}

const cardActionsStyle={
  padding: 0,
}


const CardExampleWithAvatar = () => (
  <Card  style={cardStyle}>
    
    <Card style={card2Style}>
    
    </Card> 
    
    <AvatarExampleSimple/>
    <CardActions style={cardActionsStyle} >
      <FlatButton style={boxSize}>
      <span className="ProfilStatsCard" >Tweets</span>
      <span className="ProfileCardStatsstatValue">1</span>
      </FlatButton>
      <FlatButton style={boxSize}>
      <span className="ProfilStatsCard" >Following</span>
      <span className="ProfileCardStatsstatValue">6</span>
      </FlatButton>
      <FlatButton style={boxSize}>
      <span className="ProfilStatsCard" >Followers</span>
      <span className="ProfileCardStatsstatValue">4</span>
      </FlatButton>  
      
    </CardActions>
    
       

    
    
    
  </Card>
);

export default CardExampleWithAvatar;