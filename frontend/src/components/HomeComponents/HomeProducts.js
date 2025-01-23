import React, { useEffect } from 'react'
import Products from '../Product/Products';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { fetchProducts } from '../../Reducers/ProductsReducer';
function HomeProducts() {
   const { products } = useSelector((state) => state.getProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts({keyword:'',page:1}));
  }, [dispatch]);
  return (
    <>
    <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">Our Products</h2>
    
   {products && <Products products={products} />}
    <div className="flex mb-10 justify-center">
    <Link to="/shop" className="text-center   px-10 font-semibold m py-2 border border-gold text-gold">Show More</Link>
    </div>
    </div>
    </>
  )
}

export default HomeProducts