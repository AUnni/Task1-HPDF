import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import CardExampleWithAvatar from './cards'
import Topbar from './Toolbar';
import GridListExampleSimple from './Grid'




const muiTheme = getMuiTheme({
  toolbar: {
    height: 50,
  }});

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

        <div id="page-outer" className="App">
          <div id="page-container" class="AppContent wrapper wrapper-home">
          <CardExampleWithAvatar/>
          </div>
          <div>
          <GridListExampleSimple/>
          
          </div>
          
        </div>
              
      </div>
      </MuiThemeProvider>
      
      
    );
  }
}



export default App;
