import React from 'react';
import SignInForm, {SignInFormData} from '../components/SignInForm';
import { useDispatch } from 'react-redux';
import { userActions } from '../store/user';
import { useHistory } from 'react-router-dom';
import { URLS } from '../constants';

const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (data: SignInFormData) => {
    const {login, password} = data;
    if (password === '12345') {
        dispatch(userActions.changedData({login, password}));
        history.replace(URLS.DASHBOARD);
    }
  };

  return (
    <div className="bg-light d-flex h-100 align-items-center justify-content-center">
      <div className="card w-25">
        <h4 className="card-header text-center">Авторизация</h4>
        <div className="card-body">
          <SignInForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
