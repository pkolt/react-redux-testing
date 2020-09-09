import React from 'react';
import Button from './Button';

export interface SignInFormData {
    login: string;
    password: string;
}

interface SignInFormProps {
    onSubmit: (data: SignInFormData) => void;
}

const SignInForm: React.FC<SignInFormProps> = (props: SignInFormProps) => {
    const {onSubmit} = props;
    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSubmit({login, password});
    };

    const handleInputLogin = (event: React.FormEvent<HTMLInputElement>) => setLogin(event.currentTarget.value);
    const handleInputPassword = (event: React.FormEvent<HTMLInputElement>) => setPassword(event.currentTarget.value);

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="login">Пользователь</label>
              <input
                type="text"
                name="login"
                id="login"
                className="form-control"
                onChange={handleInputLogin}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Пароль</label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                onChange={handleInputPassword}
              />
            </div>
            <div className="d-flex justify-content-center">
              <Button modifier="btn-primary">Войти</Button>
            </div>
          </form>
    );
}

export default SignInForm;
