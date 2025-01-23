import React from 'react'

import { CiShare2 } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoIosGitCompare } from "react-icons/io";
import { Link } from 'react-router-dom';
import { addItem } from '../../Reducers/CartReducer';
import { useDispatch } from 'react-redux';
function ProductCard({ product }) {
  const dispatch = useDispatch();
  return (
   <>
   
   <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
   <Link
            to={`/product/${product._id}`}
            key={product._id}
            className="block "
          >
      <img src={product.images[0].url} alt={product.name} className="w-full h-48  object-cover" />
      </Link>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        {/* <p className="text-gray-600">{product.description}</p> */}
        <div className="flex items-center justify-between mt-4">
          {product.discount && (
            <span className="bg-red-100 text-red-500 rounded-full px-2 py-1 text-xs font-semibold">
              -{product.discount}%
            </span>
          )}
          <span className="text-gray-500">Rp {product.price}</span>
          {product.oldPrice && (
            <span className="text-gray-400 line-through">Rp {product.oldPrice}</span>
          )}
        </div>
        <div className="flex items-center justify-between mt-2">
          <button onClick={()=>{dispatch(addItem({
                          name: product.name,
                          price: product.price,
                          quantity: 1,
                          image: product.images[0],
                          product: product._id,
                          stock: product.stock,
                          id: product._id,
                        }))}} className="bg-gold  text-white font-bold py-2 px-4 rounded">
            Add to Cart
          </button>
          <div className="flex gap-2">
          <CiShare2 className="text-xl hover:text-blue-500 cursor-pointer" />
      <IoIosGitCompare className="text-xl hover:text-gray-600 cursor-pointer" />
      <CiHeart className="text-xl hover:text-red-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
   </>
  )
}

export default ProductCard