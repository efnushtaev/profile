import React from 'react';
import classes from './../../Styles/modules/Content.module.scss';
import { Route } from 'react-router-dom';
import Landings from './Landings/Landings';
import Snippets from './Snippets/Snippets';
import Blog from './Blog/Blog';

let Content = () => {
    return (
        <div className={classes.container}>
            <Route path="/landings" render={() => <Landings />} />
            <Route path="/snippets" render={() => <Snippets />} />
            <Route path="/blog" render={() => <Blog />} />
            {/* <Route exact to="" render={() => { return <div style={{backgroundColor:"red"}}>askhjdhakjdshkjadhjksdahkjsadhjkasdkhasdkh ajlsaljdasdlk</div>}} /> */}
        </div>
    )
}

export default Content