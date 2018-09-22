import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Dropzone from 'react-dropzone';

import Eyes from '../Eyes/Eyes';

const Wrapper = styled.div``;

const Title = styled.div`
  line-height: 46px;
  margin-bottom: 20px;
  @media (min-width: 992px) {
    margin-bottom: 50px;
  }
`;

const Text = styled.div`
  line-height: 25px;
`;

const Landing = ({ onDrop }) => {
  return (
    <Wrapper>
      <Dropzone
        onDrop={onDrop}
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <Title>Welcome to Ai.Si</Title>
        <Eyes type="" />
        <Text>
          Ready to review?
          <br />
          <br />
          Drag and drop your art into here <br />
          or click to upload.
        </Text>
      </Dropzone>
    </Wrapper>
  );
};

Landing.propTypes = {
  onDrop: PropTypes.func.isRequired,
};

export default Landing;
