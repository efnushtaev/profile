import React from 'react';
import { Content } from './Content';
import styles from './content.module.scss';
import { myWorksData } from '../../../mock';

export const ContentContainer = () => {
  return <Content myWorksData={myWorksData} className={styles.contentBody} />;
};
