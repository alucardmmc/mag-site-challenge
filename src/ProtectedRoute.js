import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ hasSubmitted, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (hasSubmitted) {
          return <Component {...rest} {...props} />;
        } else {
          return <Redirect to='/' />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
