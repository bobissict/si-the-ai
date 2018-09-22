import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Eyes from '../Eyes/Eyes';

import { results } from '../../data';

const Wrapper = styled.div``;

const Text = styled.div`
  line-height: 25px;
  margin-bottom: 60px;
`;

const Button = styled.button`
  background: black;
  line-height: 55px;
  color: white;
  border: 1px solid black;
  padding: 0px 40px;
  font-size: 20px;
  font-family: 'Andale Mono', monospace;
  transition: all 0.1s ease;
  &:hover {
    cursor: pointer;
    background: white;
    color: black;
    transition: all 0.1s ease;
  }
`;

class Result extends Component {
  state = {
    resultNumber: 0,
    message: '',
  }

  componentDidMount() {
    this.generateResult();
  }

  generateResult = () => {
    const randomNumber = Math.floor((Math.random() * 4) + 1);
    const randomMessageList = results[randomNumber];
    const randomMessage = randomMessageList[Math.floor(Math.random() * randomMessageList.length)];
    this.setState({
      resultNumber: randomNumber,
      message: randomMessage,
    });
  };

  handleEyes = () => {
    const { resultNumber } = this.state;
    switch (resultNumber) {
      case 1:
        return 'result-01';
      case 2:
        return 'result-02';
      case 3:
        return 'result-03';
      case 4:
        return 'result-04';
      default:
        return null;
    }
  }

  render() {
    const { resultNumber, message } = this.state;
    const { onRestart } = this.props;
    return (
      <Wrapper>
        {resultNumber && <Eyes type={this.handleEyes(resultNumber)} />}
        <Text>{message}</Text>
        <Button onClick={onRestart}>Push back?</Button>
      </Wrapper>
    );
  }
}

Result.propTypes = {
  onRestart: PropTypes.func.isRequired,
};

export default Result;
