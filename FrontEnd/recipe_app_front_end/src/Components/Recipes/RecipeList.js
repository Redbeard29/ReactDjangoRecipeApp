import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RecipeItem from './RecipeItem';

const RecipeList = (props) => {
    return (
        <div className="recipe-list">
            <Container>
                <Row>
                    {props.recipes.map((recipe) => (
                        <Col xs={4} className="py-2">
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
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
};

export default RecipeList;