import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';
import AlertaContext from '../../context/alertas/alertaContext';



const ListadoProyectos = () => {

    // Extraer proyectos de state inicial
    const proyectosContext = useContext(proyectoContext);
    const { mensaje, proyectos, obtenerProyectos } = proyectosContext;
    
    const alertaContext= useContext(AlertaContext);
    const { alerta, mostrarAlerta} = alertaContext;

    // Obtener proyectos cuando carga el componente
    useEffect(() => {

        // SI hay un error
        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
        obtenerProyectos();
        // eslint-disable-next-line
    }, [mensaje]);


    // revisar si proyectos tiene contenido
    if(proyectos.lenght === 0) return <p>No hay proyectos, comienza creando uno</p>;


    return ( 
        <ul className="listado-proyectos">

            { alerta ? ( <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div> ) : null}
            {proyectos.map(proyecto => (
                <Proyecto 
                    key={proyecto._id}
                    proyecto={proyecto}
                />
            ))}
        </ul>

     );
}
 
export default ListadoProyectos;