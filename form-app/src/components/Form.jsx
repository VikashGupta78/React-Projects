import React from "react";
import './Form.css';
import { useState } from "react";

function Form() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        country: "",
        address: "",
        city: "",
        state: "",
        pinCode: "",
        emailComment: false,
        emailCandidate: false,
        emailOffers: false,
        smsNotify: "",
    })
    function changeHandler(event) {
        const { name, value, type, checked } = event.target;
        setFormData(prev => {
            return {
                ...prev,
                [name]: (type === "checkbox") ? checked : value
            }
        })
    }
    function submitHandler(e) {
        e.preventDefault();
        //console.log(formData);
    }
    return (
        <div className="form-container">
            <form className="form" onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="Pranay"
                        onChange={changeHandler}
                        value={formData.firstName}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Gupta"
                        onChange={changeHandler}
                        value={formData.lastName}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="abc@gmail.com"
                        onChange={changeHandler}
                        value={formData.email}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <select
                        name="country"
                        id="country"
                        onChange={changeHandler}
                        value={formData.country}
                    >
                        <option value="canada">Canada</option>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="Europe">Europe</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="address">Street address</label>
                    <textarea
                        name="address"
                        id="address"
                        placeholder="123, St. Lucia"
                        onChange={changeHandler}
                        value={formData.address}
                    ></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="Asansol"
                        onChange={changeHandler}
                        value={formData.city}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="state">State</label>
                    <input
                        type="text"
                        id="state"
                        name="state"
                        placeholder="West Bengal"
                        onChange={changeHandler}
                        value={formData.state}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="pinCode">ZIP / Postal code</label>
                    <input
                        type="text"
                        id="pinCode"
                        name="pinCode"
                        placeholder="220078"
                        onChange={changeHandler}
                        value={formData.pinCode}
                    />
                </div>

                <fieldset className="form-group">
                    <legend>By Email</legend>
                    <div className="form-checkbox">
                        <input
                            type="checkbox"
                            id="comments"
                            name="emailComment"
                            onChange={changeHandler}
                            checked={formData.emailComment}
                        />
                        <div>
                            <label htmlFor="comments">Comments</label>
                            <p>Get notified when someone posts a comment on a posting.</p>

                        </div>
                    </div>

                    <div className="form-checkbox">
                        <input
                            type="checkbox"
                            id="candidates"
                            name="emailCandidate"
                            onChange={changeHandler}
                            checked={formData.emailCandidate}
                        />
                        <div>
                            <label htmlFor="candidates">Candidates</label>
                            <p>Get notified when a candidate applies for a job.</p>
                        </div>

                    </div>

                    <div className="form-checkbox">
                        <input
                            type="checkbox"
                            id="offers"
                            name="emailOffers"
                            onChange={changeHandler}
                            checked={formData.emailOffers}
                        />
                        <div>
                            <label htmlFor="offers">Offers</label>
                            <p>Get notified when a candidate accepts or rejects an offer.</p>

                        </div>
                    </div>
                </fieldset>

                <fieldset className="form-group">
                    <legend>Push Notifications</legend>
                    <p>These are delivered via SMS to your mobile phone.</p>
                    <div className="form-radio">
                        <input
                            type="radio"
                            id="everything"
                            name="smsNotify"
                            onChange={changeHandler}
                            value="everything"
                            checked={formData.smsNotify === "everything"}
                        />
                        <label htmlFor="everything">Everything</label>
                    </div>

                    <div className="form-radio">
                        <input
                            type="radio"
                            id="same"
                            name="smsNotify"
                            onChange={changeHandler}
                            value="same-as-email"
                            checked={formData.smsNotify === "same-as-email"}
                        />
                        <label htmlFor="same">Same as email</label>
                    </div>

                    <div className="form-radio">
                        <input
                            type="radio"
                            id="none"
                            name="smsNotify"
                            onChange={changeHandler}
                            value="no-push-notification"
                            checked={formData.smsNotify === "no-push-notification"}
                        />
                        <label htmlFor="none">No push notifications</label>
                    </div>
                </fieldset>

                <button className="form-submit">Save</button>
            </form>
        </div>
    )
}

export default Form;