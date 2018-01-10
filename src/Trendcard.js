import React from 'react';
import {Card, CardActions, CardHeader} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


const Trendcards = () => (
        <Card>
          <CardHeader
            title="Trends for you"
            subtitle = "Change"/>
            <CardActions>
            <FlatButton label="Harry Kane" />   
            <FlatButton label="#Hegde insults Ambedkar" />
            <FlatButton label="#SA vs ZIM" />
            <FlatButton label="BJPMahadayiMosa" />
            <FlatButton label="Rs. 80,808" />
/>
            </CardActions>
        </Card>
      );

export default Trendcards;

