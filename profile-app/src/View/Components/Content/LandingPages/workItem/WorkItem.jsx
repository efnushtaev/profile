import React from 'react';
import s from './workItem.module.scss';

export const WorkItem = ({ item }) => (
  <div className={s.container}>
    <a target="_bind" href={item.url}>
      <div className={s.tags}>
        <span>spa</span>
        <span>landing</span>
      </div>
      {/* <div>
        <p className={s.title}>{item.title}</p>
        <p className={s.technology}>{item.technology}</p>
        <p className={s.describe}>{item.describe}</p>
        <p className={s.year}>{item.year}</p>
        <a target="_bind" className={s.gitHubLink} href={item.gitHubRepoURL}>{item.gitHubRepoURL !== '#' ? "Посмотреть код на GitHub" : null}</a>
      </div> */}
      <img src={item.picture} alt="" />
    </a>
  </div>
);
