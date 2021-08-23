import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faBullseye } from '@fortawesome/free-solid-svg-icons';


const RecipeItem = (props) => {
    let quick_and_easy = null;
    let is_favorite = null;
    let have_made_before = null;

    if(props.quick_and_easy === true){
        quick_and_easy = <FontAwesomeIcon icon={ faStopwatch } size="3x" />
    }
    if(props.is_favorite === true){
        is_favorite = <FontAwesomeIcon icon={ faHeart } size="3x" />
    }
    if(props.have_made_before === false){
        have_made_before = <FontAwesomeIcon icon={ faBullseye } size="3x" />
    }

    return (
        <Card className="mb-3">
            <Card.Header>
                <h1>
                    {props.title}
                </h1>
            </Card.Header>
            <Card.Body>
                <div>
                    <h4>{props.image}</h4>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <h6 className="mx-1">{props.meat}</h6>
                    <h6 className="mx-1">{props.category}</h6>
                    <h6 className="mx-1">{props.rating}</h6>
                    <div className="text-success mx-2">{quick_and_easy}</div>
                    <div className="text-danger mx-2">{is_favorite}</div>
                    <div className="text-warning mx-2">{have_made_before}</div>
                </div>
            </Card.Body>
        </Card>
    )
}

export default RecipeItem;