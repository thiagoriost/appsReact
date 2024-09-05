import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/Store';
import './Login.css'; // Para los estilos
import Box from '@mui/material/Box';
import login_2 from '../../assets/backGrounds/Login_2.png'
import Capture5 from '../../assets/backGrounds/loginModal.png'
import Ingreso from '../../assets/backGrounds/Ingreso.png'
import CircularProgress from '@mui/material/CircularProgress';


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    color: 'black'
  };

const Login: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [activateLoading, setActivateLoading] = useState(true);
    const [login2, setLogin2] = useState(false);
    const [imgModal, setimgModal] = useState(false);
    const [imgDivCargando, setImgDivCargando] = useState(false);
    const [ingreso, setIngreso] = useState(false);


    const handleLogin = () => {
        dispatch(login());
        navigate('/home');
    };

    const handleOpen = () => setActivateLoading(true);
    const handleClose = () => setActivateLoading(false);

    const showModalLogin2 = () => {
        console.log("showModalLogin2")
        setActivateLoading(false)
        setLogin2(true);
        setTimeout(() => {
            console.log("renderizar modal");
            setLogin2(false);
            setimgModal(true);
            setTimeout(() => {
                setimgModal(false);
                setImgDivCargando(true);
                setTimeout(() => {
                    setImgDivCargando(false);
                    setIngreso(true);
                }, 3000);
            }, 4000);
        }, 3000);
    }

    useEffect(() => {
      console.log("hihi")
    
      return () => {}
    }, [])
    

    return (
        <div className="login-container">
            
                {/* <Button variant="contained" endIcon={<SendIcon />}>
                Iniciar Sesion
                </Button> */}

                {
                    activateLoading &&
                    <div className="divBtnInitSesion">
                        <button onClick={showModalLogin2} type="button" className='btnInitSesion'></button>
                    </div>
                }
                {
                    login2 &&
                    <div className="imgDiv">
                        <img src={login_2} alt="Blinking Logo" style={{width: '-webkit-fill-available'}}/>
                    </div>
                }
                {
                    imgModal &&
                    <div className="imgDiv">
                        <img src={Capture5} alt="Blinking Logo" style={{width: '-webkit-fill-available'}}/>
                    </div>
                }
                {
                    imgDivCargando &&
                    <div className="imgDivCargando">
                        {/* <img src={Capture5} alt="Blinking Logo" style={{width: '-webkit-fill-available'}}/> */}
                        <Box sx={{ display: 'flex' }}>
                            <CircularProgress style={{color:'gray'}} size={'70px'}/>
                        </Box>
                        <p style={{marginTop:'20px', fontSize:'large', color:'gray', fontFamily:'monospace'}}>Cargando...</p>
                    </div>
                }
                {
                    ingreso &&
                    <div className="imgDiv">
                        <img src={Ingreso} alt="Blinking Logo" style={{width: '-webkit-fill-available'}}/>
                    </div>
                }
                


            {/* 
                <Modal
                    open={imgModal}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>                       
                        <div className="row1">Ingresar con huella</div>
                        <div className="row2">Pon tu dedo sobre el lector del celulara para ingresar a la aplicación.</div>
                        <div className="row3">CANCELAR</div>
                    </Box>
                </Modal>
             */}
            
        </div>
    );
};

export default Login;
