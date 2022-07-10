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

  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorContainer>
          <ErrorImageContainer>
            <img alt="error" src="https://i.imgur.com/g3hgqe8.png" />
          </ErrorImageContainer>
          <ErrorText>Sorry page is broken!</ErrorText>
        </ErrorContainer>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
