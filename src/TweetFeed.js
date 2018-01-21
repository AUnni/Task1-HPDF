import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import {blue300,indigo900,grey400, darkBlack, lightBlack,} from 'material-ui/styles/colors';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';


const style = {
  height: 2000,
  width: 560,
  
  textAlign: 'center',
  display: 'inline-block',
  
};
const Avtarstyle = {
    float: 'left',
    margin: 10,
    padding: 1,
   
};

const tweetstyle = {
    height: 80,
    width: 560,
    textAlign: 'left',
    display: 'inline-block',

}

const TweetFeed = () => (
  <div>
    <Paper style={style} zDepth={1}>
    <div className = 'TwitterFeed'>
    <Paper style={tweetstyle} zDepth={0}>
    <div>
        <Avatar src="/Images.jpg/Rafa.jpg" 
        color={blue300}
        backgroundColor={indigo900}
        size={50}
        style={Avtarstyle} />  
        <List>
        <ListItem
            primaryText={<span style={{color: darkBlack}}>Rafa Nadal @RafaelNadal 4h</span>} 
            secondaryText={
            <p>
                           
            <span style={{color:lightBlack}}>Tough match to go into the QF! Vamosssssssssssssss!</span>
            </p>
          }
          secondaryTextLines={2}
          />
          </List>
    
    </div>    
    </Paper>
    <img src="/Images.jpg/Rafa.jpg" width="500" height="400"  alt = "Rafael Nadal moves to the round of 16 AO 2017"/>
    <Paper style={tweetstyle} zDepth={0}>
    <div>
            <Avatar src="/Photo.jpg" 
            color={blue300}
            backgroundColor={indigo900}
            size={50}
            style={Avtarstyle} />
        <List>
        <ListItem
            primaryText={<span style={{color: darkBlack}}>sachin tendulkar @sachin_rt . 21h </span>} 
            secondaryText={
            <p>
                           
            <span style={{color:lightBlack}}>Determination will get you through everything. A big salute to our entire team. Hearty congratulations on winning the #BlindCricketWorldCup. #TeamIndia🇮🇳</span>
            </p>
          }
          secondaryTextLines={2}
          />
          </List>
    </div>
    </Paper>
    <img src="/Images.jpg/Sachinp.jpg" width="500" height="400"  alt = "Sachin Tendulkar acknowledges the feats of India's Blind cricket team"/>
    <Paper style={tweetstyle} zDepth={0}>
    <div>
    <Avatar src="/Images.jpg/Amitabh.jpg" 
        color={blue300}
        backgroundColor={indigo900}
        size={50}
        style={Avtarstyle} />
    <List>
    <ListItem
            primaryText={<span style={{color: darkBlack}}>Amitabh Bachchan @SrBachchan 9h</span>} 
            secondaryText={
            <p>
                           
            <span style={{color:lightBlack}}>The distance between understanding and not is application  </span>
            </p>
          }
          secondaryTextLines={2}
          />
    </List>
    </div>
    </Paper>
    <img src="/Images.jpg/Amitabh.jpg" width="400" height="500"  alt = "Amitabh Bachan - A Complete Human Being"/>
    </div>
    </Paper>
    
  </div>
);

export default TweetFeed;