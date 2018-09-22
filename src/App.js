import React, { Component } from 'react';
import styled from 'styled-components';

import Landing from './components/Landing/Landing';
import Checking from './components/Checking/Checking';
import Result from './components/Result/Result';

const Wrapper = styled.div`
  text-align: center;
  height: 100vh;
  padding: 50px 26px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Andale Mono', monospace;
  font-size: 14px;
  @media (min-width: 992px) {
    font-size: 20px;
  }
`;

class App extends Component {
  state = {
    isChecking: false,
    checked: false,
  }

  onDrop = () => {
    this.setState({ isChecking: true });
  }

  handleScreen = () => {
    const { isChecking, checked } = this.state;
    if (isChecking) {
      return <Checking showResults={this.showResults} />;
    }
    if (checked) {
      return <Result onRestart={this.onRestart} />;
    }
    return <Landing onDrop={this.onDrop} />;
  }

  showResults = () => {
    this.setState({ isChecking: false, checked: true });
  }

  onRestart = () => {
    this.setState({ checked: false });
  }

  render() {
    return (
      <Wrapper>
        {this.handleScreen()}
      </Wrapper>
    );
  }
}

export default App;
