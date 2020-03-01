import React from 'react';
import {
    NavLink
} from 'react-router-dom';
import classes from './../../Styles/modules/Content.module.scss'

class ContentHeader extends React.Component {

    render() {
        return <div className={classes.backBtn} >
            <NavLink to = "/" ><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAOCAYAAADABlfOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADuSURBVHgBrZPNbQIxEIXfmCi5Zjugg5AOwgGWY6gAx2kAKgAqgAoQdAA3fg6UAB0Ad9DQADZj0HJZLdKu+U6Wx3r2mzcGnvCj+bNmjho5UVmFhubyh8KmhFIZr6D+z634j3cNwxoFoJSg4a5samvRXI2jLQrwlix8/8TuQK6p0AVVEdyjIDdR3z+nsIbDbDGKvhEI1TRXSATF8tnBThCI11HJAi9D3YN62AemYr+DQB7p+6DeyQ4J6oscmvOAoFIjJbPZc0CLLKohwinqmn9jw7vYnNooAGUVkj7Lq8fLUdRHDjL/vrfuWyAHDsjJFbK1Tjx+Cft8AAAAAElFTkSuQmCC'/></NavLink>

            </div>
    }
}

export default ContentHeader