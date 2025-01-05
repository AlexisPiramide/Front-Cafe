import React, { useState } from 'react';
import Modal from 'react-modal';
import "./../../style/modal.scss";

Modal.setAppElement('#root');

export default function Votos({ votoAntiguo }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [voto, setVoto] = useState(Math.ceil(votoAntiguo));

    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    function sendVoto(){
        console.log("Votaste con: ", voto);
        closeModal();
    }

    const buttonStyles = {
        position: "absolute",
        top: "10px",
        right: "10px"
    };

    return (
        <div>
            <button onClick={openModal}>Votar</button>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Votación Modal" centered className="modal">
                <button onClick={closeModal} style={buttonStyles}>X</button>
                <h2>Valorar café</h2>
                <div>
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} onClick={() => setVoto(star)} style={{ cursor: 'pointer', color: star <= voto ? 'gold' : 'gray' }}>
                            ★
                        </span>
                    ))}
                </div>
                <button onClick={sendVoto}>Votar</button>
            </Modal>
        </div>
    );
}
