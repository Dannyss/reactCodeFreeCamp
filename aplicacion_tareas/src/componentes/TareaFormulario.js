import React from 'react';

function tareaFormulario(props){
    return(
        <form className='tarea-formulario'>
            <input
            className='tarea-input'
            type='text'
            placeholder='Escribe una tarea'
            name='texto'
            />
            <button className='tarea-boton'>
                Agregar Tarea
            </button>
        </form>
    );

}
export default tareaFormulario;