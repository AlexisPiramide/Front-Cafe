import { useNavigate } from "react-router";
import "../../style/error.scss";


export default function Error() {
  const navigate = useNavigate();

  return (
    <div className="background-error">
        <img src="/arbustorecortado.png" className="arbusto"/>
        <img src="/arbustorecortado.png" className="arbusto2"/>
        <img src="/arbustorecortado.png" className="arbusto3"/>
        <img src="/arbustorecortado.png" className="arbusto4"/>
        <img src="/arbustorecortado.png" className="arbusto5"/>
        <img src="/arbustorecortado.png" className="arbusto6"/>
        
        <img src="/error.png" alt="Error 404" />
        <p>Lo sentimos, pero parece que la página que buscas no existe.</p>

        <div className="falling-elements">
            {Array.from({ length: 50 }).map((_, i) => (
            <span id={i} key={i}>
                <img src="/grano1.svg" className="falling-elements" alt="Falling grain element" />
            </span>
            ))}
        </div>
        <button onClick={() => navigate("/cafes")}>
            Vuelve al mundo de los cafés
        </button>
        
    </div>
  );
}
