import React from 'react'
import ProductCard from './ProductCard'
function Products({products}) {
  return (
  <>
   <div className="grid grid-cols-1  px-10 mt-10 justify-center items-center content-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </>
  )
}

export default Products