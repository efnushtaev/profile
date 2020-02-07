import React from 'react';
import classes from './../../../Styles/modules/Landings.module.scss';

let Landings = (props) => {


    return (
        <div> 
           { props.landingItems.content.landings.map(e => <span>{e.title}</span>) }
        </div>

    )
}

export default Landings;