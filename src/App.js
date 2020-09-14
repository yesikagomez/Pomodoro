import React from 'react';
import 'bulma/css/bulma.min.css';
import './index.css';
import Pomodoro from './Componentes/Pomodoro';
export default class App extends React.Component {


  render() {
    return (
      <div className="App">
        <Pomodoro/>
      </div>
    );
  }
}