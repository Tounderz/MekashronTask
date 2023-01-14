import React from 'react';
import './css/ModalWindow.css';

const ModalWindow = ({ active, setActive, error, children }) => {
    return (
        <div className={active ? 'modalWindow active' : 'modalWindow'} onClick={() => setActive(false)}> 
            <div 
                className={ active ? 'modalWindow__content active' : 'modalWindow__content' }
                style={ error ? { backgroundColor: 'red' } : { backgroundColor: 'green' } } 
                onClick={e => e.stopPropagation()}
            > 
                {children}
            </div>
        </div>
    );
};

export default ModalWindow;