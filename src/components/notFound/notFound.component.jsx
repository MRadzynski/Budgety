import React from 'react';

import { Link } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';

import {
  NotFoundContainer,
  NotFoundImageContainer,
  NotFoundText,
} from './notFound.styles';

const NotFound = () => (
  <NotFoundContainer>
    <NotFoundImageContainer>
      <img alt="Dog eating paper" src="https://i.imgur.com/lKJiT77.png" />
    </NotFoundImageContainer>
    <NotFoundText>A Dog Ate this Page</NotFoundText>
    <Link to="/">
      <CustomButton textColor="var(--black-shade)" hoverColor="#4285f4">
        Go Home!
      </CustomButton>
    </Link>
  </NotFoundContainer>
);

export default NotFound;
