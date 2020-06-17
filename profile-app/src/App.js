import React, { Fragment } from 'react'
import classes from './View/Styles/modules/App.module.scss'
import ContentContainer from './View/Components/Content/ContentContainer'
import ProfileContainer from './View/Components/Profile/ProfileContainer'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'
import Footer from './View/Components/Profile/Footer/Footer'

function App (props) {
  const scrollingRef = React.createRef()
  const scrolling = () => {
    const scrollTop = scrollingRef.current.scrollTop
    props.setCurrentScrollTop(scrollTop)
  }
  return (
    <div onScroll={scrolling} ref={scrollingRef} className={classes.container}>
      <div className={classes.empty}></div>
      <div className={classes.main}><ProfileContainer/></div>
      <div className={classes.content}><ContentContainer/></div>
      <div className={classes.empty}></div>
      {!isWidthUp('md', props.width) && <Footer />}
    </div>
  )
}

export default withWidth()(App)
