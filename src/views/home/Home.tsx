import React from 'react';
import './styles.css'; // Para los estilos
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../redux/Store';

const Home: React.FC = () => {

    const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
    const navigate = useNavigate();

    React.useEffect(() => {
        if (!isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, navigate]);
    
    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Buenos días</h1>
                <button className="login-button">Iniciar sesión</button>
            </header>

            <section className="dynamic-key">
                <div className="dynamic-key-label">Clave Dinámica</div>
                <div className="dynamic-key-value">579 852</div>
            </section>

            <section className="main-transactions">
                <h2>Transacciones principales</h2>
                <div className="transaction-buttons">
                    <button>Ver saldos y movimientos</button>
                    <button>Transferir dinero</button>
                    <button>Pagar tarjetas de crédito y créditos</button>
                    <button>Pagar y administrar facturas</button>
                </div>
            </section>

            <section className="explore-categories">
                <h2>Explora nuestras categorías</h2>
                <div className="categories">
                    <button>Gestionar día a día</button>
                    <button>Hogar y servicios</button>
                    <button>Transporte</button>
                    <button>Para ti</button>
                    <button>Trámites y solicitudes</button>
                </div>
            </section>

            <footer className="bottom-navigation">
                <button>Inicio</button>
                <button>Transacciones</button>
                <button>Explorar</button>
                <button>Trámites y solicitudes</button>
                <button>Ajustes</button>
            </footer>
        </div>
    );
};

export default Home;
