import React from 'react';
import { connect } from 'react-redux'
import { LOGOUT } from '../../redux/types/userType';
import {useHistory} from 'react-router-dom';

import './Home.css';

const HomeView = ( props ) => {

    let history = useHistory();

    const logOut =  () => {

        props.dispatch({ type: LOGOUT, payload : {}});
    
        setTimeout(()=> {
            history.push('/Home');
        },300);
    };

    console.log(props.email)

    // if(props.)

    return (
        <>
            <header>
                <h1>Welcome to iNuba box</h1>
            </header>
        </>
    )
};

const mapStateToProps = state => {
    return {
      user: state.userReducer.user,
    }
  };

export default connect(mapStateToProps)(HomeView);

