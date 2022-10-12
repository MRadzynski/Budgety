import React from 'react';
import {
  ErrorContainer,
  ErrorImageContainer,
  ErrorText
} from './ErrorBoundary.styles';

interface Props {
  children?: React.ReactNode;
}

interface State {
  hasErrored: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      hasErrored: false
    };
  }

  static getDerivedStateFromError(_: Error) {
    return { hasErrored: true };
  }

  render() {
    const { children } = this.props;
    const { hasErrored } = this.state;

    return hasErrored ? (
      <ErrorContainer>
        <ErrorImageContainer>
          <img alt="error" src="https://i.imgur.com/g3hgqe8.png" />
        </ErrorImageContainer>
        <ErrorText>Sorry page is broken!</ErrorText>
      </ErrorContainer>
    ) : (
      children
    );
  }
}

export default ErrorBoundary;
