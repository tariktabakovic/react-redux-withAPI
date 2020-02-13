import {
    connect
} from 'react-redux';

import MantraForm from '../components/MantraForm';
import {
    actionAddMantra
} from '../Actions';

function mapDispatchToProps(dispatch){
    return {
        handleChange: ()=>{
            dispatch(actionAddMantra());
        }
    }
}

const reduxConnect= connect(mapDispatchToProps);
export default reduxConnecter(MantraForm);