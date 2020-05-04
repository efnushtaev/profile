import React from 'react';
import classes from './../../Styles/modules/Content.module.scss';
import { Route } from 'react-router-dom';
import MyWorksContainer from './MyWorks/MyWorksContainer';
import Snippets from './Snippets/Snippets';
import Blog from './Blog/Blog';
import Main from './Main';



let Content = (props) => {
   
    return (
        <>
            <Route exact path="/" render={() => <Main />} />
            <Route path="/my-works" render={() => <MyWorksContainer />} />
           
        </>
    )
}

export default Content