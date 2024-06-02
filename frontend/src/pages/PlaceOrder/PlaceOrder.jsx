import React, { useContext, useEffect, useState } from "react";
import "./Placeorder.css";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } =
    useContext(StoreContext);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });
  const onChnageHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id]) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    };
    let response = await axios.post(url + "/api/order/place", orderData, {
      headers: { token },
    });
    if (response.data.success) {
      const { session_url } = response.data;
      // to send user to payment page
      window.location.replace(session_url);
    } else {
      alert("Error");
    }
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/cart");
    } else if (getTotalCartAmount() == 0) {
      navigate("/cart");
    }
  }, [token]);

  return (
    <form className="place-order" onSubmit={placeOrder}>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input
            type="text"
            name="firstName"
            value={data.firstName}
            onChange={onChnageHandler}
            placeholder="First Name"
            required
          />
          <input
            type="text"
            name="lastName"
            value={data.lastName}
            onChange={onChnageHandler}
            placeholder="Last Name"
            required
          />
        </div>
        <input
          type="text"
          name="email"
          value={data.email}
          onChange={onChnageHandler}
          placeholder="Email Address"
          required
        />
        <input
          type="text"
          name="street"
          value={data.street}
          onChange={onChnageHandler}
          placeholder="Street"
          required
        />
        <div className="multi-fields">
          <input
            type="text"
            placeholder="City"
            name="city"
            value={data.city}
            onChange={onChnageHandler}
            required
          />
          <input
            type="text"
            placeholder="State"
            name="state"
            value={data.state}
            onChange={onChnageHandler}
            required
          />
        </div>
        <div className="multi-fields">
          <input
            type="text"
            placeholder="Zip code"
            name="zipcode"
            value={data.zipcode}
            onChange={onChnageHandler}
            required
          />
          <input
            type="text"
            placeholder="Coutry"
            name="country"
            value={data.country}
            onChange={onChnageHandler}
            required
          />
        </div>
        <input
          type="text"
          placeholder="Phone"
          name="phone"
          value={data.phone}
          onChange={onChnageHandler}
          required
        />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>
            </div>
          </div>

          <button type="submit">Proceed To Payment</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
