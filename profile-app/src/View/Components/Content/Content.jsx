import React from 'react'
import styles from './Content.module.scss'
import { Route, Switch } from 'react-router-dom'
import Main from './Main'
import Placeholder from './Placeholder.js'

import preloader from './../../Assets/img/main/preloader_gif.gif'

const LandingPages = React.lazy(() => import('./LandingPages/LandingPages'))
const Spa = React.lazy(() => import('./Spa/Spa'))

const Content = (props) => {
  const {spaItems, thumbnails} = props
  return (
    <React.Suspense fallback={<div style={{display:'flex', alignItems: 'center', justifyContent: 'center', width:'100%', height:'100%'}}><img src={preloader}/></div>}>
      <Switch>
        <Route path="/landing-pages" render={() => <LandingPages thumbnails={thumbnails}/>} />
        <Route path="/spa" render={() => <Spa spaItems={spaItems}/>} />
        <Route path="/design" render={() => <Placeholder/>} />
        <Route exact path="/" render={() => <Main />} />
        <Route path="*" render={() => <h1>404</h1>} />
      </Switch>
    </React.Suspense>
  )
}

export default Content
