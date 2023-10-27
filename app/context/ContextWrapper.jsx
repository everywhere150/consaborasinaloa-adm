"use client"
import { RecipeProvider } from "./RecipesContext"

export const ContextWrapper = ({children}) =>{
    return (<RecipeProvider>{children}</RecipeProvider>)
}