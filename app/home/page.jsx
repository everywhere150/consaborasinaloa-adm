"use client"
import enchiladas from '../../images/enchiladas.webp';
import '../css/home.css'
import React, { useContext } from 'react';
import RecipesHome from '../../app/components/recipesHome';
import receta1 from '../../images/receta1.webp';
import receta2 from '../../images/receta2.webp';
import receta3 from '../../images/receta3.webp';
import receta4 from '../../images/receta4.webp';
import receta5 from '../../images/receta5.webp';
import Image from 'next/image';
import { useRouter } from 'next/navigation'
import { RecipeContext } from '../context/RecipesContext';



function Main() {
  const recipes = [
    {
      id: 1,
      imagen: receta1,
      titulo: "Tacos de asada",
      descripcion: "Los tacos de asada son un platillo tradicional de la cocina mexicana que consiste en tiras de carne de res asada a la parrilla. La carne se sazona con una mezcla de especias, ajo, y jugo de limón para darle un sabor delicioso y se sirve en tortillas de maíz o harina."

    },
    {
      id: 2,
      imagen: receta2,
      titulo: "receta 2",
      descripcion: "Los tacos con queso y papas son una deliciosa variante de los tacos que combina ingredientes reconfortantes y sabrosos. Estos tacos suelen incluir tortillas de maíz o harina rellenas de papas, que se cocinan y se sazonan con una mezcla de especias. "

    },
    {
      id: 3,
      imagen: receta3,
      titulo: "receta 3",
      descripcion: "El arroz blanco es un plato básico y versátil que se disfruta en muchas culturas de todo el mundo. Consiste en granos de arroz cocidos que han sido hervidos y luego escurridos, de modo que cada grano queda suelto y separado. "

    },
    {
      id: 4,
      imagen: receta4,
      titulo: "receta 4",
      descripcion: "Los spaghetti, o espaguetis, son un tipo de pasta larga y delgada que se ha convertido en un plato emblemático de la cocina italiana. Están hechos de harina de trigo y agua, y su forma característica es la de largos hilos cilíndricos."

    },
    {
      id: 5,
      imagen: receta5,
      titulo: "receta 5",
      descripcion: "La combinación de carne con huevo y arroz es una preparación deliciosa y nutritiva que se disfruta en diversas culturas culinarias en todo el mundo."

    },
    {
      id: 6,
      imagen: receta1,
      titulo: "receta 6",
      descripcion: "La combinación de carne con huevo y arroz es una preparación deliciosa y nutritiva que se disfruta en diversas culturas culinarias en todo el mundo."

    }


  ]

  const router = useRouter();
  const { setSelectedRecipe } = useContext(RecipeContext);

  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
    router.push(`/recipes/${recipe.id}`);
  };


  return (
    <div className='container-home-main'>
      <section className='home-seccion-row1'>
        <div className="contenedor-imagen">
          <Image className='home-imagen-principal' src={enchiladas} alt="" />

          <p className="texto-superpuesto">
            Con sabor a sinaloa <br />
            Recetas al mero estilo sinaloense!
          </p>
        </div>
      </section>
      <section className='home-seccion-row2'>
        <div className="ultimas-6-recetas-home-container">
          <p className='ultima-receta-titulo'>
            Ultimas recetas
          </p>
        </div>
        <div className="contenedor-recetas-home">
          {
            recipes.map((item, key) => {
              return (
                <div key={key} onClick={() => handleRecipeSelect(item)}>
                  <RecipesHome imagen={item.imagen} titulo={item.titulo} descripcion={item.descripcion} />
                </div>
              )

            })

          }
        </div>

      </section>


    </div>
  );
}
export default Main;