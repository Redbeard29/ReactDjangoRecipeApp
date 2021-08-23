import RecipeItem from './RecipeItem';

const RecipeList = (props) => {
    return (
        <div className="recipe-list">
            {props.recipes.map((recipe) => (
                <RecipeItem
                    key={recipe.id}
                    title={recipe.title}
                    image={recipe.picture}
                    link={recipe.link_to_recipe}
                    desc={recipe.description}
                    meat={recipe.meat_type}
                    category={recipe.category}
                    best_quantity={recipe.best_quantity}
                    rating={recipe.rating}
                    comments={recipe.comments}
                    last_made_at={recipe.last_made_at}
                    quick_and_easy={recipe.quick_and_easy}
                    is_favorite={recipe.is_favorite}
                    have_made_before={recipe.have_made_before}
                    user={recipe.saved_by}
                />
            ))}
        </div>
    )
};

export default RecipeList;