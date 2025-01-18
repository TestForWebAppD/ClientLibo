import Categories from "../pages/Categories";
import RecipeCard from "../pages/RecipeCard";
import Category from "../pages/Category";
import Seasons from "../pages/Seasons";
import Season from "../pages/Season";
import Countrys from "../pages/International";
import Country from "../pages/Country";
import Error from '../pages/Error';
import Searched from "../pages/Searched";
import Recipes from "../pages/Recipes";
import Login from "../pages/auth/Login";
import Registration from "../pages/auth/Registration";
import Profile from "../pages/Profile";

const publicRout = [
    { path: "/login", component: <Login />, exact: true },
    { path: "/registration", component: <Registration />, exact: true },
    { path: "*", component: <Error />, exact: true },
]

const privateRout = [

    //Общее
    {path: "/categories", component: <Categories/>, exact: true},
    {path: "/recipes", component: <Recipes/>, exact: true},
    {path: "/recipes/:recipe", component: <RecipeCard/>, exact: true},

    //Категории рецептов
    {path: "/categories/:category", component: <Category/>, exact: true},
    {path: "/categories/:category/:recipe", component: <RecipeCard/>, exact: true},

    //Категория сезонов
    {path: "/categories/seasons", component: <Seasons/>, exact: true},
    {path: "/categories/seasons/:season", component: <Season/>, exact: true},
    {path: "/categories/seasons/:season/:recipe", component: <RecipeCard/>, exact: true},

    //Поисковик
    {path: "/search", component: <Searched/>, exact: true},
    {path: "/search/:recipe", component: <RecipeCard/>, exact: true},

    //Национальная кухня
    {path: "/categories/international-cuisine", component: <Countrys/>, exact: true},
    {path: "/categories/international-cuisine/:country", component: <Country/>, exact: true},
    {path: "/categories/international-cuisine/:country/:recipe", component: <RecipeCard/>, exact: true},

    //Профиль
    {path: "/profile", component: <Profile/>, exact: true},
    {path: "/profile/:recipe", component: <RecipeCard/>, exact: true},

    {path: "/", component: <Recipes/>, exact: true},
    {path: "*", component: <Error />, exact: true},
];

export { publicRout, privateRout };
