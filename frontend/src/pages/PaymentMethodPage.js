import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

const PaymentMethodPage = (props) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  if (!shippingAddress.address) {
    props.history.push('/shipping');
  }
  const [paymentMethod, setPaymentMethod] = useState('PayPal');
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    props.history.push('/placeorder');
  };
  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Payment Method</h1>
        </div>
        <div>
          <div>
            <input type="radio" id="paypal" value="PayPal" 
                name="paymentMethod" required checked 
                onChange={(e)=> setPaymentMethod(e.target.value)}           
             />
             <label htmlFor="paypal">PayPal</label>
          </div>
        </div>

        <div>
          <div>
            <input type="radio" id="visa" value="Visa" 
                name="paymentMethod" required  
                onChange={(e)=> setPaymentMethod(e.target.value)}           
             />
             <label htmlFor="visa">Visa</label>
          </div>
        </div>  
        <div>
          <label/>
          <button className="primary" type="submit">Coninue</button>
        </div>

      </form>



    </div>
  );
}


export default PaymentMethodPage