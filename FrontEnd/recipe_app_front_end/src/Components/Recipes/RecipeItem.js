import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import { faDrumstickBite } from '@fortawesome/free-solid-svg-icons';
import { faFish } from '@fortawesome/free-solid-svg-icons';
import { faCarrot } from '@fortawesome/free-solid-svg-icons';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faBullseye } from '@fortawesome/free-solid-svg-icons';


const RecipeItem = (props) => {
    let quick_and_easy, is_favorite, have_made_before, meat;
    quick_and_easy = is_favorite = have_made_before = meat = null;

    if(props.quick_and_easy === true){
        quick_and_easy = <FontAwesomeIcon icon={ faStopwatch } size="2x" />
    }
    if(props.is_favorite === true){
        is_favorite = <FontAwesomeIcon icon={ faHeart } size="2x" />
    }
    if(props.have_made_before === false){
        have_made_before = <FontAwesomeIcon icon={ faBullseye } size="2x" />
    }
    
    if(props.meat === 'RM'){
        meat = <FontAwesomeIcon icon={ faHamburger } size="2x" />
    }
    else if(props.meat === 'PL'){
        meat = <FontAwesomeIcon icon={ faDrumstickBite } size="2x" />
    }
    else if(props.meat === 'FI'){
        meat = <FontAwesomeIcon icon={ faFish } size="2x" />
    }
    else{
        meat = <FontAwesomeIcon icon={ faCarrot } size="2x" />
    }


    return (
        <Card className="h-100">
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
                    <h5 className="mx-1">{props.category}</h5>
                    <h5 className="mx-1">{props.rating}</h5>
                </div>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-center">
                <div className="mx-1">{meat}</div>
                <div className="text-success mx-2">{quick_and_easy}</div>
                <div className="text-danger mx-2">{is_favorite}</div>
                <div className="text-warning mx-2">{have_made_before}</div>
            </Card.Footer>
        </Card>
    )
}

export default RecipeItem;