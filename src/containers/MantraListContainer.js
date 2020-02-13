import {
    connect
} from 'react-redux';

import MantraList from '../components/MantraList';


function mapStateToProps(state){
    console.table(state)
    return{
        mantras: state
    }
}

const reduxConnector= connect(mapStateToProps);
export default reduxConnector(MantraList);