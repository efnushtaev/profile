import React from 'react';
import { withContentHeader } from '../../../Hoc/withContentHeader';

const Placeholder = () => {
  return <h1 style={{ fontFamily: 'Noto sans, sans-serif', marginTop: '40px', color: '#4762ef' }}>Скоро здесь будет контент</h1>
}

export default withContentHeader(Placeholder);
