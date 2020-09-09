import React from 'react';
import {isAuth} from '../utils';
import { AppState } from '../store';
import { useSelector, shallowEqual } from 'react-redux';
import { selectUser } from '../store/user';
import { useHistory } from 'react-router-dom';
import { URLS } from '../constants';

const NotFound: React.FC = () => {
    const history = useHistory();
    const user = useSelector((state: AppState) => selectUser(state), shallowEqual);
    React.useEffect(() => {
        const url = isAuth(user) ? URLS.DASHBOARD : URLS.SIGNIN;
        history.replace(url);
    }, [history, user]);
    return null;
};

export default NotFound;
