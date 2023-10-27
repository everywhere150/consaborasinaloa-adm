import '../css/recipesHome.css'
import Image from 'next/image';
function RecipesHome({imagen,titulo,descripcion}) {
    return (
        <div className="contendedor-receta-recipeshome">
            <div className="imagen-receta-recipeshome">
               <Image src={imagen} alt="" />
            </div>
            <div className="contenedor-descripcion-recipeshome">
                <div className="titulo-receta-recipeshome">
                    <p>{titulo}</p>
                </div>
                <div className="descripcion-receta-recipeshome">
                <p>{descripcion}</p>
                </div>
            </div>

        </div>

    );
}
export default RecipesHome;