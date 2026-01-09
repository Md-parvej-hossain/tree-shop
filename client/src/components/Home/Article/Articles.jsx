import React from 'react';
import ArticleCard from './ArticleCard';

const Articles = () => {
  return (
    <div>
      <div className="text-center items-center my-5">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold md:font-bold py-4">
          Read Our Article
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </div>
  );
};

export default Articles;
