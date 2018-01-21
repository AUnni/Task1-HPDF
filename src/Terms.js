import React from 'react';
import Paper from 'material-ui/Paper';
import {blue300,indigo900,grey400, darkBlack, lightBlack, blue900, blue400, blue500, blue800,} from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
const style = {
    display: 'flex',
    float: 'left',
    margin: '0px 32px 8px 8px',
      height: 180,
      width: 290,
      textAlign: 'left',
      display: 'inline-block',
      paddingLeft: 10,
     
    };  

const TermsPaper = () => (
    <div>
    <Paper style={style} zDepth={1}>
    <p>
    <span style={{color: lightBlack, fontSize: 11}}>© 2018 TwitterAboutHelp CenterTerms</span><br/>
    <span style={{color: lightBlack, fontSize: 11}}>Privacy policy CookiesAds infoBrandBlog</span><br/>
    <span style={{color: lightBlack, fontSize: 11}}>StatusAppsJobsMarketingBusinesses</span><br/>
    <span style={{color: lightBlack, fontSize: 11}}>Developers</span>
    </p>    
    <Divider/>
    <br/>
    <span style={{color: blue500, fontSize: 12}}>Advertise with Twitter</span>


    </Paper>
    </div>
);

    export default TermsPaper;