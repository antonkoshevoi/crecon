import { Suspense } from "react";

import { Loader } from "../../base";

const LoadingContainer = (LazyComponent) => {
  const WrappedComponent = (props) => (
    <Suspense fallback={<Loader />}>
      <LazyComponent {...props} />
    </Suspense>
  );

  WrappedComponent.displayName = `WithSuspense(${LazyComponent.name || 'Component'})`;

  return WrappedComponent;
};

export default LoadingContainer;
