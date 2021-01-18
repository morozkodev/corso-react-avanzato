import {Button} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const ButtonBack = withRouter(({history}) => (
    <Button variant="primary" type="button" onClick={ () => history.push('/') }>Torna alla lista</Button>
));

export default ButtonBack;