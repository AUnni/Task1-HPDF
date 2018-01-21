import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
//import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Profilecard from './Profilecards'
import Topbar from './Toolbar';
import GridListExampleSimple from './Grid'
import Trendcards from './Trendcard'
import AppBar from './Appbar'
import FollowMenu from './FollowCard'
import TweetFeed from './TweetFeed'
import TermsPaper from './Terms'

class App extends Component {
  render() {
    return (
     
      <MuiThemeProvider>
      <div className="App">
        <div id="kb-shortcuts-msg" className="visuallyhidden">
        <h2>Keyboard Shortcuts</h2>
        <p>
        <FlatButton 
           label="Disabled" disabled={true}
        />
        <br/>
        <br/>
        <FlatButton 
           label="Disabled" disabled={true}
        />
        </p>
        </div>
        <div id="doc">
        <Topbar/>
        </div>
        <br/>

        <div id="page-outer" className="App">
          <div id="page-container" class="container">
          <div class="dashboard-left">
          <Profilecard/>
          <br/>
                   
          <Trendcards/>

          </div>
          <div class="dashboard-centre">
              
          <AppBar/>
          <br/>

          <TweetFeed/>
          <br/>

          
          
          </div>
          <div class="dashboard-right">
          
          <FollowMenu/>
          <TermsPaper/>
         
          </div>

          
        </div>
              
      </div>
      </div>
      </MuiThemeProvider>
      
      
    );
  }
}



export default App;
