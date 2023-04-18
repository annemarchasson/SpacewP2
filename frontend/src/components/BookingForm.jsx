import React, { useState } from "react";
import "./BookingFormScss.scss";

export default function BookingForm() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [checked, setChecked] = React.useState(false);
  const [health, setHealth] = useState("");
  const [seat, setSeat] = useState("--");
  // state seat
  const handleSeatChange = (e) => {
    setSeat(e.target.id);
  };

  // state firstname with
  const handleFirstNameChange = (e) => {
    setFirstname(e.target.value);
  };
  // state of Lastname
  const handleLastNameChange = (e) => {
    setLastname(e.target.value);
  };
  // state email
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  // state phone
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  // state Checkbox
  const handleCheckboxChange = () => {
    setChecked(!checked);
  };
  // state Health
  const handleHealthChange = (e) => {
    setHealth(e.target.value);
  };
  // submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!checked || health !== "nohealth") {
      // condition si age et santé pas ok
      alert(
        "Make an appointment with your doctor to obtain a medical certificate."
      );
    } else {
      alert();
      /*
   this.context.router.push({
     pathname: '/confirmation',
 })
   */
    }
  };

  return (
    <div className="form-booking">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="contenair-form-identity">
          <h2>Identity</h2>
          <div>
            <input
              className="input-class"
              type="text"
              name="First-Name"
              placeholder="First-Name"
              value={firstname}
              required
              onChange={(e) => {
                handleFirstNameChange(e);
              }}
            />
          </div>
          <div>
            <input
              className="input-class"
              type="text"
              name="Last-Name"
              placeholder="Last-Name"
              value={lastname}
              required
              onChange={(e) => {
                handleLastNameChange(e);
              }}
            />
          </div>
          <div>
            <input
              className="input-class"
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              required
              onChange={(e) => {
                handleEmailChange(e);
              }}
            />
          </div>
          <div>
            <input
              className="input-class"
              type="tel"
              name="phonenumber"
              placeholder="Phone Number"
              value={phone}
              required
              onChange={(e) => {
                handlePhoneChange(e);
              }}
            />
          </div>
        </div>
        <div className="contenair-form-condition">
          <h2>Access Requierement</h2>
          <div>
            <p className="label-18">I am over 18: </p>
            <input
              className="input-check"
              id="checkbox1"
              name="checkbox1"
              type="checkbox"
              checked={checked}
              required
              onChange={(e) => {
                handleCheckboxChange(e);
              }}
            />
          </div>
          <select
            className="option-health"
            name="health"
            id="health-select"
            defaultValue="DEFAULT"
            required
            onChange={(evt) => {
              handleHealthChange(evt);
            }}
          >
            <option className="option-health" value="DEFAULT">
              --Please choose an option--
            </option>
            <option className="option-health" value="nohealth">
              I have no health concerns
            </option>
            <option className="option-health" value="health">
              I have health concerns
            </option>
          </select>
        </div>
        <div className="contenair-form-seat">
          <h2>Seat</h2>
          <div className="box-total-seat">
            <div className="seat-img-text">
              <p className="label-style-seat">Seat n° {seat} </p>
              <p className="label-style-seat-price">Price 100 000€ </p>
            </div>
            <div className="box-img-navette">
              <div className="first-row">
                <button
                  type="button"
                  className="seatA"
                  id="A1"
                  onClick={(e) => {
                    handleSeatChange(e);
                  }}
                >
                  ⬒
                </button>
                <button
                  type="button"
                  className="seatA"
                  id="A2"
                  onClick={(e) => {
                    handleSeatChange(e);
                  }}
                >
                  ⬒
                </button>
              </div>
              <div className="second-row">
                <button
                  type="button"
                  className="seatA"
                  id="A3"
                  onClick={(e) => {
                    handleSeatChange(e);
                  }}
                >
                  ⬒
                </button>
                <button
                  type="button"
                  className="seatA"
                  id="A4"
                  onClick={(e) => {
                    handleSeatChange(e);
                  }}
                >
                  ⬒
                </button>
              </div>
              <div className="third-row">
                <button
                  type="button"
                  className="seatA"
                  id="A5"
                  onClick={(e) => {
                    handleSeatChange(e);
                  }}
                >
                  ⬒
                </button>
                <button
                  type="button"
                  className="seatA"
                  id="A6"
                  onClick={(e) => {
                    handleSeatChange(e);
                  }}
                >
                  ⬒
                </button>
                <button
                  type="button"
                  className="seatA"
                  id="A7"
                  onClick={(e) => {
                    handleSeatChange(e);
                  }}
                >
                  ⬒
                </button>
                <button
                  type="button"
                  className="seatA"
                  id="A8"
                  onClick={(e) => {
                    handleSeatChange(e);
                  }}
                >
                  ⬒
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="contenair-form-button">
          <button type="button" className="button-book">
            Book
          </button>
        </div>
      </form>
    </div>
  );
}
