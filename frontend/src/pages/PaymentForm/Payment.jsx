import React from "react";
import { NavLink } from "react-router-dom";
import "./Payment.scss";
import {
  FaCcVisa,
  FaCcApplePay,
  FaCcMastercard,
  FaCcPaypal,
} from "react-icons/fa";

function Payment() {
  return (
    <>
      <div className="main-form">
        <form
          name="contact"
          method="post"
          data-netlify="true"
          onSubmit="submit"
        >
          <div className="content-first-payment">
            <div className="billing">
              <h2>Billing address</h2>
              <input type="hidden" name="form-name" value="contact" />
              <label htmlFor="FullName">
                Full Name <br />
                <input
                  type="text"
                  name="FullName"
                  id="FullName"
                  placeholder="Full Name"
                />
              </label>

              <label htmlFor="Email">
                Email
                <br />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                />
              </label>

              <label htmlFor="Address">
                Address <br />
                <input
                  type="text"
                  name="Address"
                  id="Address"
                  placeholder="Address"
                />
              </label>

              <label htmlFor="City">
                City <br />
                <input
                  type="text"
                  name="City"
                  id="Address"
                  placeholder="City"
                />
              </label>
              <div className="zip">
                <div className="content-zip">
                  <label htmlFor="Zip">
                    Zip <br />
                    <input type="text" name="Zip" id="Zip" placeholder="Zip" />
                  </label>
                </div>
                <div className="content-zip">
                  <label htmlFor="State">
                    State <br />
                    <input
                      type="text"
                      name="State"
                      id="State"
                      placeholder="City"
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="payment">
              <h2>Payment</h2>
              <p>Accept Card</p>
              <div className="icon-container">
                <ul>
                  <li>
                    <FaCcVisa />
                  </li>
                  <li>
                    <FaCcApplePay />
                  </li>
                  <li>
                    <FaCcMastercard />
                  </li>
                  <li>
                    <FaCcPaypal />
                  </li>
                </ul>
              </div>
              <label htmlFor="cname">Name on Card</label>
              <input
                type="text"
                id="cname"
                name="cardname"
                placeholder="John More Doe"
              />
              <label htmlFor="ccnum">Credit card number</label>
              <input
                type="text"
                id="ccnum"
                name="cardnumber"
                placeholder="1111-2222-3333-4444"
              />
              <label htmlFor="expmonth">Exp Month</label>
              <input
                type="text"
                id="expmonth"
                name="expmonth"
                placeholder="September"
              />
              <div className="cvv">
                <div className="exp">
                  <label htmlFor="expyear">Exp Year</label> <br />
                  <input
                    type="text"
                    id="expyear"
                    name="expyear"
                    placeholder="2018"
                  />
                </div>
                <div className="csv">
                  <label htmlFor="cvv">CVV</label> <br />
                  <input type="text" id="cvv" name="cvv" placeholder="352" />
                </div>
              </div>
            </div>
          </div>
          <div className="btn-payment">
            <button type="submit">Confirm</button>
          </div>
        </form>
      </div>
      <NavLink to="/">Retour</NavLink>
    </>
  );
}

export default Payment;
