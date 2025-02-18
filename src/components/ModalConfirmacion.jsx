import React, { useState, useEffect } from 'react';
import './../style/confirmacion.scss';

export default function ModalConfirmacion({ isOpen, setIsOpen, mensaje, tipo }) {
  
  const closeModal = () => setIsOpen(false);

  // Automatically close the modal after 5 seconds when it opens
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setIsOpen(false);
      }, 5000); // 5 seconds
      
      // Cleanup timer when modal is closed or unmounted
      return () => clearTimeout(timer);
    }
  }, [isOpen, setIsOpen]);

  if (tipo) {
    return (
      <div className="modal-container">
        {isOpen && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-body">
                <h2>{mensaje}</h2>
                <img src="/carretilla.jpeg" alt="carretilla" />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="modal-container">
        {isOpen && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-body">
                <h2>{mensaje}</h2>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
