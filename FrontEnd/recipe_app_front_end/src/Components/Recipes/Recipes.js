import RecipeList from './RecipeList';

const Recipes = (props) => {
    return (
        <div className="pt-3 container text-center">
            <div className="d-inline-block">
                <h1 className="display-3 mb-4 mt-2 font-weight-bold text-white">Recipes</h1>
            </div>
            <RecipeList recipes={props.recipes}/>
        </div>
    )
};

export default Recipes;