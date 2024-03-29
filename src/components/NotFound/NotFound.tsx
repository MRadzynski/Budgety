import CustomButton from '../CustomButton/CustomButton';
import { connect } from 'react-redux';
import { ICurrentUser } from '../../utils/interfaces';
import {
  NotFoundContainer,
  NotFoundImageContainer,
  NotFoundText
} from './NotFound.styles';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { useNavigate } from 'react-router-dom';

interface NotFoundProps {
  currentUser: ICurrentUser;
}

const NotFound = ({ currentUser }: NotFoundProps) => {
  const navigate = useNavigate();

  const handleClick = () => (currentUser ? navigate('/') : navigate('/signin'));

  return (
    <NotFoundContainer>
      <NotFoundImageContainer>
        <img alt="Dog eating paper" src="https://i.imgur.com/lKJiT77.png" />
      </NotFoundImageContainer>
      <NotFoundText>A Dog Ate this Page</NotFoundText>

      <CustomButton
        bgColor="var(--white-shade)"
        hoverColor="var(--secondary-color)"
        onClick={handleClick}
        textColor="var(--black-shade)"
      >
        {currentUser ? 'Go Home!' : 'Go Sign In!'}
      </CustomButton>
    </NotFoundContainer>
  );
};

const mapStateToProps = (state: NotFoundProps) => ({
  currentUser: selectCurrentUser(state)
});

export default connect(mapStateToProps)(NotFound);
