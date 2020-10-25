import React from 'react';
import s from './workItem.module.scss';

export const WorkItem = ({ item }) => {
  const { title, describe } = item;

  const tags = ['landings', 'spa'];
  const technology = ['HTML5', 'CSS3'];

  return (
    <div className={s.container}>
      <a target="_bind" className={s.link} href={item.url}>
        <div className={s.tags}>
          {tags.map(item => <span>{item}</span>)}
        </div>
        <div className={s.content}>
          <div>
            <div className={s.title}>
              {title}
            </div>
            <div className={s.technology}>
              <span> • </span>{technology.map(item => <span>{item} • </span>)}
            </div>
          </div>
          <div className={s.describe}>{describe}</div>
        </div>
        <a className={s.gitHubLink} href={item.url}></a>
      </a>
      <img src={item.picture} alt="" />
    </div>);
};
