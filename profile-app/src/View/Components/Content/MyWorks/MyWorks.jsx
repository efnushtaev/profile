import React from 'react';
// import classes from './../../../Styles/modules/MyWorks.module.scss';

let MyWorks = (props) => {
    return (
        <div>
            {props.thumbnails.map(e =>
                <div>
                    <span>{e.title}</span>
                    <img src={e.picture} alt="" />
                </div>
            )}
        </div>)
}

export default MyWorks;