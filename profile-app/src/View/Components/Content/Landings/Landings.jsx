import React from 'react';
import classes from './../../../Styles/modules/Landings.module.scss';

let Landings = (props) => {
    return (
        <div>
            {props.landingItems.thumbnails.map(e =>
                <div>
                    <span>{e.title}</span>
                    <img src={e.picture} alt="" />
                </div>
            )}
        </div>)
}

export default Landings;