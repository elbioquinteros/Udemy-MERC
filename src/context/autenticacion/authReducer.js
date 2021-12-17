
import { 
    // eslint-disable-next-line
    REGISTRO_EXITOSO,
    // eslint-disable-next-line
    REGISTRO_ERROR,
    // eslint-disable-next-line
    OBTENER_USUARIO,
    // eslint-disable-next-line
    LOGIN_EXITOSO,
    // eslint-disable-next-line
    LOGIN_ERROR,
    // eslint-disable-next-line
    CERRAR_SESION
} from '../../types';


/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state, action) => {
   switch(action.type) {
        case REGISTRO_EXITOSO:
        case LOGIN_EXITOSO:
           localStorage.setItem('token', action.payload.token);
           return{
               ...state,
               autenticado: true,
               mensaje: null,
               cargando: false
           }

        case OBTENER_USUARIO: 
           return {
                ...state,
                autenticado: true,
                usuario: action.payload,
                cargando: false
           }
        case CERRAR_SESION:
        case LOGIN_ERROR:
        case REGISTRO_ERROR:
            localStorage.removeItem('token');
           return {
               ...state,
               token: null,
               usuario: null,
               autenticado: null,
               mensaje: action.payload,
               cargando: false
           }

       default:
           return state;
   } 
}