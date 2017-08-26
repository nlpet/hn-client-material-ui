import React from "react";
import PropTypes from "prop-types";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import FlatButton from "material-ui/FlatButton";
import { Card, CardTitle, CardText } from "material-ui/Card";
import renderHTML from 'react-render-html';

const post = {
  by: "tel",
  descendants: 16,
  id: 121003,
  kids: [121016, 121109, 121168],
  score: 25,
  text:
    "<i>or</i> HN: the Next Iteration<p>I get the impression that with Arc being released a lot of people who never had time for HN before are suddenly dropping in more often. (PG: what are the numbers on this? I'm envisioning a spike.)<p>Not to say that isn't great, but I'm wary of Diggification. Between links comparing programming to sex and a flurry of gratuitous, ostentatious  adjectives in the headlines it's a bit concerning.<p>80% of the stuff that makes the front page is still pretty awesome, but what's in place to keep the signal/noise ratio high? Does the HN model still work as the community scales? What's in store for (++ HN)?",
  time: 1203647620,
  title: "Ask HN: The Arc Effect",
  type: "story",
  url: ""
};

const App = () => {
  const date = new Date(post.time).toUTCString();
  return (
    <MuiThemeProvider>
      <div>
        <AppBar />
        <Card style={{marginTop: "10px"}}>
          <CardTitle title={post.title} subtitle={date} />
          <CardText>
            {renderHTML(post.text)}
          </CardText>
        </Card>
      </div>
    </MuiThemeProvider>
  );
};

App.PropTypes = {
  match: PropTypes.string
};

export default App;
