import React from 'react';
import {Card, CardActions, CardHeader} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import {blue300,indigo900,grey400, darkBlack, lightBlack, blue900, blue400,} from 'material-ui/styles/colors';
import {List, ListItem} from 'material-ui/List';


const style = {
  height: 500,
  width: 290,
  textAlign: 'left',
  display: 'inline-block',
  paddingLeft: 10,
 
};

const Trendcards = () => (
  <div>
  <Paper style={style} zDepth={1}>
         
            <p>
            <span style={{color: darkBlack, fontWeight: 'bold', fontSize:18}}>Trends for you </span><span style={{color: blue400, fontSize: 10}}>. Change</span>
            </p> 
              
            <p>
            <span style={{color: blue400, fontWeight:'bolder', fontSize: 14}}>#OnePlus5TLavaRed</span>
            </p> 
            <p>
            <span style={{color: blue400, fontWeight:'bolder', fontSize: 14}}>#SLvZIM</span><br/>
            <span style={{color: lightBlack, fontWeight:'normal', fontSize: 12}}>2,660 Tweets</span>
            </p>
            
            <p>
            <span style={{color: blue400, fontWeight:'bolder', fontSize: 14}}>#PrajaSankalpaYatra</span>
            </p>
            
            <p>
            <span style={{color: blue400, fontWeight:'bolder', fontSize: 14}}>#AUSvEng</span><br/>
            <span style={{color: lightBlack, fontWeight:'normal', fontSize: 12}}>England secure victory over Australia</span>
            </p>
            <p>
            <span style={{color: blue400, fontWeight:'bolder', fontSize: 14}}>#PursuitOfHappiness</span><br/>
            <span style={{color: lightBlack, fontWeight:'normal', fontSize: 12}}>5,487 Tweets</span>
            </p>
            <p>
            <span style={{color: blue400, fontWeight:'bolder', fontSize: 14}}>#FilmfareAwards2018</span><br/>
            <span style={{color: lightBlack, fontWeight:'normal', fontSize: 12}}>5,552 Tweets</span>
            </p>
            <p>
            <span style={{color: blue400, fontWeight:'bolder', fontSize: 14}}>#KERGOA</span><br/>
            </p>
            <p>
            <span style={{color: blue400, fontWeight:'bolder', fontSize: 14}}>#Election Commissioner</span><br/>
            <span style={{color: lightBlack, fontWeight:'normal', fontSize: 12}}>1,770 Tweets</span>
            </p>


  </Paper>        
      

  </div>
);
export default Trendcards;

