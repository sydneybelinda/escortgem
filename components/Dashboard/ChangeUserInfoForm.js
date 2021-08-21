import React from 'react';
import { DatePicker, Form, Input, Radio } from 'antd';

const FormChangeUserInformation = () => {
    return (
        <form className="ps-form--account-setting">
            <div className="ps-form__header">
                <h3>Account Information</h3>
            </div>
            <div className="ps-form__content">
                <div className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Username or email address"
                    />
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="First name"
                            />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Last name"
                            />
                        </div>
                    </div>

                    <div className="col-sm-6">
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Phone Number"
                            />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Email Address"
                            />
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Address"
                            />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="City"
                            />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Country"
                            />
                        </div>
                    </div>
                </div>

                <div className="form-group submit">
 
                    <button className="default-btn">Update profile</button>
                </div>
            </div>
        </form>
    );
};

export default FormChangeUserInformation;
