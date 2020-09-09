import React from 'react';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import Button from '../components/Button';
import { useDispatch } from 'react-redux';
import { userActions } from '../store/user';
import { useHistory } from 'react-router-dom';
import { URLS } from '../constants';

const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data: Record<string, string>) => {
    const {login, password} = data;
    if (password === '12345') {
        dispatch(userActions.changedData({login, password}));
        history.replace(URLS.DASHBOARD);
    }
  };
  const loginClsName = classNames('form-control', { 'is-invalid': errors.login });
  const passwordClsName = classNames('form-control', { 'is-invalid': errors.password });

  return (
    <div className="bg-light d-flex h-100 align-items-center justify-content-center">
      <div className="card w-25">
        <h4 className="card-header text-center">Авторизация</h4>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="login">Пользователь</label>
              <input
                type="text"
                name="login"
                id="login"
                className={loginClsName}
                ref={register({ required: true })}
              />
              <div className="invalid-feedback">Обязательное поле</div>
            </div>
            <div className="form-group">
              <label htmlFor="password">Пароль</label>
              <input
                type="password"
                name="password"
                id="password"
                className={passwordClsName}
                ref={register({ required: true })}
              />
              <div className="invalid-feedback">Обязательное поле</div>
            </div>
            <div className="d-flex justify-content-center">
              <Button modifier="btn-primary">Войти</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
