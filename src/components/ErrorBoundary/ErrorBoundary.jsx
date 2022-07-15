import React from 'react';
import {
  ErrorContainer,
  ErrorImageContainer,
  ErrorText
} from './ErrorBoundary.styles';
class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false
    };
  }

  static getDerivedStateFromError(_) {
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
