import React from 'react'
import Products from '../Product/Products';
import { Link } from 'react-router-dom';

const products = [
    {
      id: 1,
      name: 'Syltherine',
      description: 'Stylish cafe chair',
      price: 2500000,
      oldPrice: 3500000,
      discount: 30,
      image: 'http://localhost:3000/static/media/Mask%20Group.3a9f48774be217933ba5.png',
    },
    {
      id: 2,
      name: 'Leviosa',
      description: 'Stylish cafe chair',
      price: 2500000,
      image: '/images/product2.jpg',
    },
    {
      id: 3,
      name: 'Lolito',
      description: 'Luxury big sofa',
      price: 7000000,
      oldPrice: 14000000,
      discount: 50,
      image: '/images/product3.jpg',
    },
    {
      id: 4,
      name: 'Lolito',
      description: 'Luxury big sofa',
      price: 7000000,
      oldPrice: 14000000,
      discount: 50,
      image: '/images/product3.jpg',
    },
    {
      id: 5,
      name: 'Lolito',
      description: 'Luxury big sofa',
      price: 7000000,
      oldPrice: 14000000,
      discount: 50,
      image: '/images/product3.jpg',
    },  {
      id: 6,
      name: 'Lolito',
      description: 'Luxury big sofa',
      price: 7000000,
      oldPrice: 14000000,
      discount: 50,
      image: '/images/product3.jpg',
    },  {
      id: 7,
      name: 'Lolito',
      description: 'Luxury big sofa',
      price: 7000000,
      oldPrice: 14000000,
      discount: 50,
      image: '/images/product3.jpg',
    }, {
        id: 8,
        name: 'Lolito',
        description: 'Luxury big sofa',
        price: 7000000,
        oldPrice: 14000000,
        discount: 50,
        image: '/images/product3.jpg',
      },
    // Add more products here
  ];
function HomeProducts() {
  return (
    <>
    <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Our Products</h2>
    
    <Products products={products} />
    <div className="flex mb-10 justify-center">
    <Link to="/shop" className="text-center   px-10 font-semibold m py-2 border border-gold text-gold">Show More</Link>
    </div>
    </div>
    </>
  )
}

export default HomeProducts