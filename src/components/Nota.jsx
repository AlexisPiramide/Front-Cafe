import "./../style/Nota.css";

function Nota({nota}) {

    console.log(nota)
    return (
    <div className="nota">
        <p>{nota>= 1?"★":""}</p>
        <p>{nota>= 2?"★":""}</p>
        <p>{nota>= 3?"★":""}</p>
        <p>{nota>= 4?"★":""}</p>
        <p>{nota>= 5?"★":""}</p>
    </div>
  );
}

export default Nota;