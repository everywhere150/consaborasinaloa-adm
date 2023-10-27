"use client"
import React, { useContext, useEffect, useState } from 'react';

import { RecipeContext } from '../../context/RecipesContext';
import RecipesHome from '@/app/components/recipesHome';
import '../../../app/css/recipeDetail.css'
import { useRouter } from 'next/navigation';

function RecipeDetails() {
  const router = useRouter();
  const [recipeDetail, setRecipeDetail] = useState("");
  const { selectedRecipe } = useContext(RecipeContext);

  useEffect(() => {
    setRecipeDetail(selectedRecipe);

  }, []);

  const handleClick = () => {
      router.push('/recipes');
  }

  return (
    <section className='recipe-detail-container-principal'>

      {
        recipeDetail ? (

          <RecipesHome imagen={selectedRecipe.imagen} titulo={selectedRecipe.titulo} descripcion={selectedRecipe.descripcion} />

        ) :
        <div className="error-container-detail">
<div>Ha ocurrido un error</div>
            <button onClick={handleClick}>Regresar</button>
        </div>
          

      }

    </section>
  );
}

export default RecipeDetails;