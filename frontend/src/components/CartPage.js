import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../Reducers/CartReducer';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Banner from './Banner';
import FooterBanner from './FooterBanner';
function CartPage() {
    const navigate = useNavigate();
  const { items, totalPrice } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <Fragment>
        <Banner text={"Cart"} />
      <div className="grid grid-cols-1 my-10 md:grid-cols-12">
        {/* Cart Items Section */}
        <div className="col-span-full md:col-span-8 p-4 bg-white
         rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
          <TableContainer>
            <Table>
              <TableHead className="bg-filter">
                <TableRow>
                  <TableCell className="py-4">Product</TableCell>
                  <TableCell className="py-4">Price</TableCell>
                  <TableCell className="py-4">Quantity</TableCell>
                  <TableCell className="py-4">Subtotal</TableCell>
                  <TableCell className="py-4">Remove</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="flex items-center py-4">
                      <img src={item.image.url} alt="product" className="w-16 h-16 object-cover mr-4" />
                      <p className="text-base font-medium">{item.name}</p>
                    </TableCell>
                    <TableCell className="py-4">Rs {item.price}</TableCell>
                    <TableCell className="py-4">{item.quantity}</TableCell>
                    <TableCell className="py-4">Rs {(item.price * item.quantity).toFixed(2)}</TableCell>
                    <TableCell className="py-4">
                      <button onClick={() => dispatch(removeItem(item.id))} className="text-red-500 hover:underline">Remove</button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        {/* Cart Summary Section */}
        <div className="col-span-full md:col-span-4 p-4 bg-filter rounded-lg shadow-md mt-4 md:mt-0 md:ml-4">
          <h2 className="text-xl font-bold mb-4">Cart Totals</h2>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <p>Subtotal</p>
              <p>Rs {totalPrice.toFixed(2)}</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Shipping</p>
              <p>Rs 1000</p>
            </div>
            <div className="flex justify-between items-center text-lg font-semibold">
              <p>Total</p>
              <p>Rs {(totalPrice + 1000).toFixed(2)}</p>
            </div>
            <button onClick={()=>{navigate('/checkout')}} className="bg-gold text-white px-4 py-2 rounded mt-4">Checkout</button>
          </div>
        </div>
      </div>
      <FooterBanner />
    </Fragment>
  );
}

export default CartPage;