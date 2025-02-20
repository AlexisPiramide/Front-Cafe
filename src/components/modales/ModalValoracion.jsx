import { useState } from "react";
import "./../../style/modalvalorar.scss";

const ModalValoracion = ({ isOpen, onClose, onSubmit }) => {
    if (!isOpen) return null;

    const [valor, setValor] = useState(0);

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Valorar Café</h2>
                <div>
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span 
                            key={star} 
                            onClick={() => setValor(star)} 
                            style={{ 
                                cursor: 'pointer', 
                                fontSize: "24px",
                                color: star <= valor ? 'gold' : 'gray'
                            }}
                        >
                            ★
                        </span>
                    ))}
                </div>
                <button onClick={() => onSubmit(valor)}>Enviar</button>
                <button onClick={onClose}>Cancelar</button>
            </div>
        </div>
    );
};

export default ModalValoracion;
