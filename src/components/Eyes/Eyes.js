import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import DefaultEyes from './default.gif';
import CheckingEyes from './checking.gif';
import ResultOneEyes from './result-01.gif';
import ResultTwoEyes from './result-02.gif';
import ResultThreeEyes from './result-03.gif';
import ResultFourEyes from './result-04.gif';

const Wrapper = styled.div`
  margin-left: -40px;
  margin-right: -40px;
  margin-bottom: 60px;
  width: calc(100% + 80px);
  @media (min-width: 992px) {
    margin-bottom: 100px;
  }
  img {
    max-width: 100%;
  }
`;

const handleImage = (type) => {
  switch (type) {
    case 'checking':
      return CheckingEyes;
    case 'result-01':
      return ResultOneEyes;
    case 'result-02':
      return ResultTwoEyes;
    case 'result-03':
      return ResultThreeEyes;
    case 'result-04':
      return ResultFourEyes;
    default:
      return DefaultEyes;
  }
};

const Eyes = ({ type }) => {
  return (
    <Wrapper>
      <img src={handleImage(type)} alt="si the ai" />
    </Wrapper>
  );
};

Eyes.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Eyes;
