import React from 'react';
import s from './workItem.module.scss';

export const WorkItem = ({ item }) => {
  const { title, describe, picture, technology } = item;

  return (
    <div className={s.container}>
      <a target="_bind" className={s.link} href={item.url}>
        <div className={s.content}>
          <div>
            <div className={s.title}>{title}</div>
            <div className={s.technology}>
              <span> • </span>
              {technology.map(item => (
                <span>{item} • </span>
              ))}
            </div>
          </div>
          <div className={s.describe}>{describe}</div>
        </div>
        <a className={s.gitHubLink} href={item.url}></a>
      </a>
      {<img src={picture} alt="" />}
    </div>
  );
};
