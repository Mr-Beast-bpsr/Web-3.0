import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateError(error) {
    return {
      hasError: true,
    };
  }

  render() {
    if (this.state.hasError) {
      return <h1> Please activate request heroku to avoid Cors Error </h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
