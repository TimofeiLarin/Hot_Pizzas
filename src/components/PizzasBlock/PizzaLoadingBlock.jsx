import React from 'react';
import ContentLoader from 'react-content-loader';

const PizzaLoadingBlock = () => {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={460}
      viewBox='0 0 280 460'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <circle cx='140' cy='140' r='120' />
      <rect x='0' y='287' rx='3' ry='3' width='280' height='28' />
      <rect x='0' y='323' rx='6' ry='6' width='280' height='84' />
      <rect x='153' y='415' rx='20' ry='20' width='120' height='40' />
      <rect x='0' y='420' rx='3' ry='3' width='88' height='25' />
    </ContentLoader>
  );
};

export default PizzaLoadingBlock ;
