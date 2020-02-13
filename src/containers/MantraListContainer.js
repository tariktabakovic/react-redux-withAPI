import {
    connect
} from 'react-redux';

import MantraList from '../components/MantraList';
import {
    actionAddMantra
} from '../Actions';

function mapStateToProps(state){
    console.table(state)
    return{
        text: state
    }
}

const reduxConnect= connect(mapStateToProps);
export default reduxConnecter(MantraList);