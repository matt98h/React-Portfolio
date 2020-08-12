import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Matthew Huus',
      headerLinks: [
        {title:'Home', path:'/'},
        {title:'About', path:'/about'},
        {title:'Contact', path:'/contact'}
      ],
      home: {
        title: 'Some title',
        subTitle: 'some Subtitles about my projects',
        text: 'something about my projs'
      },
      about: {
        title: 'About Me',
        
      },
      contact: {
       title: 'Contact me!'
      }
    }
  }
  render() {
    return (
   <Router>
     <Container fluid={true}>
      Hello
     </Container>
     </Router>
  );
  }
}

export default App;
