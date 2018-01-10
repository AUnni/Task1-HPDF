import React from 'react';







import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';

import SearchBar from 'material-ui-search-bar';
import {grey50} from 'material-ui/styles/colors';

const toolbarStyle = {
  backgroundColor: grey50,
}


  const searchStyle = {
    float       : 'center', 
    width       : '600px',
    marginLeft  : 'auto',
    marginRight : 'auto'
  }

export default class Appbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <Toolbar style={toolbarStyle} >
        <ToolbarGroup firstChild={true} float="right">
        <ToolbarTitle text="" />
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 18 18">
          <path d="M9 1C4.58 1 1 4.58 1 9s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 2.75c1.24 0 2.25 1.01 2.25 2.25S10.24 8.25 9 8.25 6.75 7.24 6.75 6 7.76 3.75 9 3.75zM9 14.5c-1.86 0-3.49-.92-4.49-2.33C4.62 10.72 7.53 10 9 10c1.47 0 4.38.72 4.49 2.17-1 1.41-2.63 2.33-4.49 2.33z"/></svg>								
        
        </ToolbarGroup>

        <ToolbarGroup style={searchStyle} > 
        <SearchBar
        onChange={() => console.log('onChange')}
        onRequestSearch={() => console.log('onRequestSearch')}
        style={{
        margin: '0 auto',
        maxWidth: 600,
        innerHeight: 40,
        }}
        />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}


