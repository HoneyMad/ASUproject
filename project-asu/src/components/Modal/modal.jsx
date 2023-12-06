import React from 'react';
import cl from './modal.module.css'

const Modal = ({children,visible, setVisible}) => {
    const rootClasess = [cl.modalFrame]
    if(visible){
        rootClasess.push(cl.active)
    }


    return (
        <div className={rootClasess.join(" ")} onClick={()=> setVisible(false)}>
            <div className={cl.modalFrameContent} onClick={(e)=>e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;