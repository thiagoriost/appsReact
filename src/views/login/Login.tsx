import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Para los estilos
import { useDispatch } from 'react-redux';
import { login } from '../../redux/Store';

const Login: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(login());
        navigate('/home');
    };

    return (
        <div className="login-container">
            <div className="divBuenDia"></div>
            
        </div>
    );
};

export default Login;
