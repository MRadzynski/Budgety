import React from 'react';

import { useHistory } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';

import {
  NotFoundContainer,
  NotFoundImageContainer,
  NotFoundText,
} from './notFound.styles';

const NotFound = () => {
  const history = useHistory();
  return (
    <NotFoundContainer>
      <NotFoundImageContainer>
        <img alt="Dog eating paper" src="https://i.imgur.com/lKJiT77.png" />
      </NotFoundImageContainer>
      <NotFoundText>A Dog Ate this Page</NotFoundText>

      <CustomButton
        textColor="var(--black-shade)"
        hoverColor="#4285f4"
        onClick={() => history.push('/')}
      >
        Go Home!
      </CustomButton>
    </NotFoundContainer>
  );
};

export default NotFound;
