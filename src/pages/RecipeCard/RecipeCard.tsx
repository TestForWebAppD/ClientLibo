import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

import Error from '../Error/ErrorContent';

import RecipeCrumbs from './RecipeCrumbs';
import RecipeDesc from './RecipeDesc';
import Compound from './Compound';
import Cooking from './Cooking';
import History from './History';

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

export const RecipeCard = () => {
    const { recipe } = useParams<{ recipe: string }>();
    const [data, setData] = useState<Recipe | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch('http://217.114.8.68:5000/recipes/Recipe', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ slugName: recipe }),
                });

                if (!response.ok) {
                    console.log('Failed to fetch recipe');
                }

                const recipeData: Recipe = await response.json();
                setData(recipeData);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRecipe();
    }, [recipe]);

    if (loading) return <div>Loading...</div>;
    if (error) return <Error />;
    if (!data) return <p>No recipe found</p>;

    const { name, description, img, slugName, story, compound, cooking } = data;

    return (
        <div>
            <Helmet>
                <meta property="og:title" content={name} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={img} />
                <meta property="og:url" content={slugName} />
                <meta property="og:type" content="article" />
                <meta name="telegram:card" content="summary_large_image" />
                <meta name="telegram:title" content={name} />
                <meta name="telegram:description" content={description} />
                <meta name="telegram:image" content={img} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={name} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={img} />
            </Helmet>

            <RecipeCrumbs recipeName={name} />

            <div className="grid gap-2 grid-cols-2 mt-[20px] bg-white rounded-b-xl md:flex md:flex-col md:justify-center md:items-center">
                <img
                    src={img ? img : '/not_found.svg'}
                    alt={`${name} recipe`}
                    className={`w-full h-auto rounded-bl-xl ${!img ? 'max-w-[410px]' : null}`}
                    sizes="(max-width: 616px) 100vw, 616px"
                    width="610"
                    height="410"
                />
                <RecipeDesc recipe={data} />
            </div>

            <History story={story} />
            <Compound compound={compound} />
            <Cooking cooking={cooking} />
        </div>
    );
};
