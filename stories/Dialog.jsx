import React, { useState } from 'react';
import './dialog.css';
import { Button } from './Button';



export const Dialog = ({ title, text, showModal }) => {

    let [show, setShow] = useState(showModal);
    function closeModal() {
        setShow(() => false);
        setTimeout(() => {
            setShow(() => true);
        }, 2000);
    }

    const saveChanges = () => {
        alert("Cambios guardados.");
    }

    return <>

        <div className="modal" style={{display: (showModal && show)? 'block': 'none'}}>
            <div className="modal-content">
                <div className="modal-title">
                    <h3 className='title'>{title}</h3>
                    <span className="close" id="closeModalBtn" onClick={closeModal} >&times;</span>
                </div>
                <p className='text-p'>{text}</p>
                <div className="modal-footer">
                    <Button size="small" onClick={saveChanges} label="Save Changes" />
                </div>
            </div>
        </div>

    </>
}