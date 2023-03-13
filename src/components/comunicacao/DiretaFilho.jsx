import React from 'react';

export default props => {
    return (
        <div>
            <span><strong>{props.nome}</strong> </span>
            <span><strong>{props.idade}</strong> </span>
            <span>{props.nerd ? 'Verdadeiro' : 'Falso'}!</span>
        </div>
    )
}