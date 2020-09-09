import React from 'react';
import { RouteProps, Route, Redirect } from 'react-router-dom';
import { URLS } from '../constants';
import { selectUser } from '../store/user';
import { useSelector, shallowEqual } from 'react-redux';
import { AppState } from '../store';
import { isAuth } from '../utils';

const PrivateRoute: React.FC<RouteProps> = (props: RouteProps) => {
  const user = useSelector((state: AppState) => selectUser(state), shallowEqual);
  return isAuth(user) ? <Route {...props} /> : <Redirect to={URLS.SIGNIN} />;
};

export default PrivateRoute;
