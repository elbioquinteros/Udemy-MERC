import React, {Fragment, useContext} from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


const ListadoTareas = () => {
    // extraer proyectos de satate inicial
    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;

    // obtener las tareas del proyecto
    const tareasContext = useContext(tareaContext);
    const { tareasproyecto } = tareasContext;

    // Si no hay proyecto seleccionado
    if (!proyecto) return <h2>Seleccionar Proyecto</h2>;

    // aplicar Ayyay destructuri para extraer el proyecto actual
    const [proyectoActual] = proyecto;


    // Elimina un proyecto
    const onClickElimiar = () => {
        eliminarProyecto(proyectoActual.id)
    }

    return ( 
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre} </h2>

            <ul className="listado-tareas">
                {tareasproyecto.lengh === 0
                    ? (<li className="tarea"><p>No hay tareas</p></li>)
                    : <TransitionGroup>
                      {tareasproyecto.map(tarea =>(
                       <CSSTransition
                            key={tarea.id}
                            timeout={200}
                            className="tarea"
                       >
                            <Tarea                               
                                tarea={tarea}
                            />
                       </CSSTransition>
                    ))}
                    </TransitionGroup>
                }
            </ul>

            <button
                type="button"
                className="btn btn-eliminar"
                onClick={onClickElimiar}
            >Eliminar Proyecto &times;</button>
        </Fragment>
     );
}
 
export default ListadoTareas;