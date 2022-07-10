import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { selectCurrentUser } from '../../redux/user/user.selectors';

import CustomButton from '../CustomButton/CustomButton';

import {
  NotFoundContainer,
  NotFoundImageContainer,
  NotFoundText
} from './NotFound.styles';

const NotFound = ({ currentUser }) => {
  const history = useHistory();
  return (
    <NotFoundContainer>
      <NotFoundImageContainer>
        <img alt="Dog eating paper" src="https://i.imgur.com/lKJiT77.png" />
      </NotFoundImageContainer>
      <NotFoundText>A Dog Ate this Page</NotFoundText>

      <CustomButton
        bgColor="var(--white-shade)"
        textColor="var(--black-shade)"
        hoverColor="var(--secondary-color)"
        onClick={() => {
          currentUser ? history.push('/') : history.push('/signin');
        }}
      >
        {currentUser ? 'Go Home!' : 'Go Sign In!'}
      </CustomButton>
    </NotFoundContainer>
  );
};

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state)
});

export default connect(mapStateToProps)(NotFound);
