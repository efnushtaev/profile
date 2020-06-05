import React from 'react';
import styles from './Content.module.scss';
import { Route, Switch } from 'react-router-dom';
import Snippets from './Snippets/Snippets';
import Blog from './Blog/Blog';
import Main from './Main';

const MyWorksContainer = React.lazy(() => import('./MyWorks/MyWorksContainer'));


let Content = (props) => {
   
    return (
        <React.Suspense fallback={<div>loading...</div>}>
            <Switch>
                <Route path="/landing-pages" render={() => <MyWorksContainer />} />
                <Route path="/design" render={() => <h1 className={styles.soon}>Скоро здесь будет контент</h1>} />
                <Route path="/spa" render={() => <h1 className={styles.soon}>Скоро здесь будет контент</h1>} />
                <Route exact path="/" render={() => <Main />} />
                <Route path="*" render={() => <h1>404</h1>} />
            </Switch>
        </React.Suspense>
    )
}

export default Content