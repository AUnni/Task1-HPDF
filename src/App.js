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

          <GridListExampleSimple/>
          <br/>

          
          
          </div>
          <div class="dashboard-right">
          
          <FollowMenu/>
          <form action="/your-server-side-code" method="POST">
              <script
              src="https://checkout.stripe.com/checkout.js" class="stripe-button"
              data-key="pk_test_6pRNASCoBOKtIshFeQd4XMUh"
              data-amount="2000"
              data-name="Stripe.com"
              data-description="2 widgets"
              data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
              data-locale="auto"
              data-zip-code="true">
            </script>
            </form>
          </div>

          
        </div>
              
      </div>
      </div>
      </MuiThemeProvider>
      
      
    );
  }
}



export default App;
