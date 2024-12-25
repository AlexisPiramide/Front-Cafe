
export default function Nota({nota}) {
    const estrellas = ["☆", "⯨", "★"];

    function displayRating(nota) {
        const fullStars = Math.floor(nota);
        const halfStar = (nota % 1 >= 0.5) ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStar;
    
        return estrellas[2].repeat(fullStars) + estrellas[1].repeat(halfStar) + estrellas[0].repeat(emptyStars);
    }
    

    return (
        <div className="nota">
            {displayRating(nota)}
        </div>
    );
}
