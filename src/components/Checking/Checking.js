import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import Eyes from '../Eyes/Eyes';

import { processingMessages } from '../../data';

const Wrapper = styled.div``;

const dots = keyframes`
  0%, 12.5% {
        opacity: 0;
    }
    25% {
        opacity: 1;
    }
    37.5% {
        text-shadow: .5em 0;
    }
    50% {
        text-shadow: .5em 0, 1em 0;
    }
    62.5% {
        text-shadow: .5em 0, 1em 0, 1.5em 0;
    }
    75% {
        text-shadow: .5em 0, 1em 0, 1.5em 0, 2em 0;
    }
    87.5%, 100%{
        text-shadow: .5em 0, 1em 0, 1.5em 0, 2em 0, 2.5em;
    }
`;

const Text = styled.div`
  line-height: 25px;
  &:after {
    content: ' .';
    animation: ${dots} 3s steps(1, end) infinite;
  }
`;

class Checking extends Component {
  state = {
    message: processingMessages[0],
  }

  componentDidMount() {
    this.handleMessage();
  }

  handleMessage = () => {
    setTimeout(() => {
      this.setState({ message: processingMessages[1] });
    }, 3000);
    setTimeout(() => {
      this.setState({ message: processingMessages[2] });
    }, 6000);
    setTimeout(() => {
      const { showResults } = this.props;
      showResults();
    }, 9000);
  }

  render() {
    const { message } = this.state;
    return (
      <Wrapper>
        <Eyes type="checking" />
        <Text>{message}</Text>
      </Wrapper>
    );
  }
}

Checking.propTypes = {
  showResults: PropTypes.func.isRequired,
};

export default Checking;
