import React from 'react';
import LoadingSpinner from './LoadingSpinner';

interface WithLoadingProps {
  isLoading: boolean;
}

const withLoading = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  return class extends React.Component<P & WithLoadingProps> {
    render() {
      const { isLoading, ...props } = this.props;
      return isLoading ? <LoadingSpinner /> : <WrappedComponent {...props as P} />;
    }
  };
};

export default withLoading;
