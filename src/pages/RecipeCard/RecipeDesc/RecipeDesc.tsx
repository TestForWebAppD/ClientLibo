import React from 'react';
import { Link } from "react-router-dom";
import { slugify } from "../../../utils/slugify";

interface RecipeProp {
    recipe: Recipe;
}

interface Recipe {
    name: string;
    description: string;
    category: string;
    season: string;
    compound: [{ name: string, weight: string }];
    cooking: [{ step: number, stepDescription: string }];
    img: string;
    difficult: string;
    time: string;
    portion: number;
    country: string;
    kcal: number;
    veget: boolean;
    lightness: string;
    meal: string;
    story: [{ year: string, history: string }];
    slugName: string;
}

export const RecipeDesc: React.FC<RecipeProp> = ({ recipe }) => {
    return (
        <section className="flex flex-col justify-start">
            <div className="w-full h-full rounded-br-xl px-[15px] py-[5px]">
                <h2 className="text-[22px] pb-2 mb-2 border-b-2 border-EIO text-lightblack">
                    {recipe.description}
                </h2>
                <ul>
                    <li className="text-lightblack text-[18px]">
                        <span>Category: </span>
                        <Link to={`/categories/${slugify(recipe.category)}`} className="text-darkred underline" title={`Go to category ${recipe.category}`}>
                            {recipe.category}
                        </Link>
                    </li>
                    <li className="text-lightblack text-[18px]">
                        <span>Difficulty: </span>
                        <b>{recipe.difficult}</b>
                    </li>
                    <li className="text-lightblack text-[18px]">
                        <span>Season: </span>
                        <Link to={`/categories/seasons/${slugify(recipe.season)}`} className="text-darkred underline" title={`Go to recipes of the season ${recipe.season}`}>
                            {recipe.season}
                        </Link>
                    </li>
                    <li className="text-lightblack text-[18px]">
                        <span>Time to cook: </span>
                        <b>{recipe.time}</b>
                    </li>
                    <li className="text-lightblack text-[18px]">
                        <span>{recipe.country === "Russia" ? "Motherland: " : "Country: "}</span>
                        <Link to={`/categories/international-cuisine/${recipe.country}`} className="text-darkred underline" title={`Go to recipes of the country ${recipe.country}`}>
                            {recipe.country}
                        </Link>
                    </li>
                    <li className="text-lightblack text-[18px]">
                        <span>Recommended meal: </span>
                        <b>{recipe.meal}</b>
                    </li>
                </ul>
            </div>
        </section>
    );
};
