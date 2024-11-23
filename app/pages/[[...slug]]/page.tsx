
import React from 'react'

interface Props{
    params: Promise<{ slug: string[] }>;
    searchParams: Promise<{ sortOrder: string; }>;
}

const ProductPage = async ({ params, searchParams }: Props) => {
  const { slug } = await params; // Await params if it's a Promise
  const { sortOrder } = await searchParams || { sortOrder: '' };

  return (
      <div>
          ProductPage
          <p>Slug: {slug ? slug.join('/') : 'No slug provided'}</p>
          <p>Sort Order: {sortOrder}</p>
      </div>
  );
};


export default ProductPage