import React from 'react';
import PropTypes from 'prop-types';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import { composeValidators, required, validEmail } from '@/validators';
import Alert from 'react-bootstrap/Alert';

const INITIAL_VALUES = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  state: '',
  city: '',
  street: '',
  postCode: '',
  orderNote: '',
};

function ShippingForm(props, ref) {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit}>
      {({ errors }) => (
        <Form ref={ref} className="form-horizontal mt-4">
          <div className="form-group">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <label className="control-label">Customer Info</label>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <Field
                  validate={composeValidators(required)}
                  name="firstName"
                  type="text"
                  className="form-control"
                  placeholder="Firtst Name"
                />
                {errors.firstName && <span className="text-danger ml-1">{errors.firstName}</span>}
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <Field
                  validate={composeValidators(required)}
                  name="lastName"
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                />
                {errors.lastName && <span className="text-danger ml-1">{errors.lastName}</span>}
              </div>
            </div>
          </div>
          <div className="form-group">
            <Field
              validate={composeValidators(required, validEmail)}
              name="email"
              type="email"
              className="form-control"
              placeholder="Email"
            />
            {errors.email && <span className="text-danger ml-1">{errors.email}</span>}
          </div>
          <div className="form-group">
            <Field
              validate={composeValidators(required)}
              name="phone"
              type="text"
              className="form-control"
              placeholder="Phone Number"
            />
            {errors.phone && <span className="text-danger ml-1">{errors.phone}</span>}
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <label className="control-label">Address</label>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <Field
                  validate={composeValidators(required)}
                  name="state"
                  type="text"
                  className="form-control"
                  placeholder="State"
                />
                {errors.state && <span className="text-danger ml-1">{errors.state}</span>}
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <Field
                  validate={composeValidators(required)}
                  name="city"
                  type="text"
                  className="form-control"
                  placeholder="City"
                />
                {errors.city && <span className="text-danger ml-1">{errors.city}</span>}
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                <Field
                  validate={composeValidators(required)}
                  name="street"
                  type="text"
                  className="form-control"
                  placeholder="Street Address"
                />
                {errors.street && <span className="text-danger ml-1">{errors.street}</span>}
              </div>
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <Field
                  validate={composeValidators(required)}
                  name="postCode"
                  type="text"
                  className="form-control"
                  placeholder="Postal Code"
                />
                {errors.postCode && <span className="text-danger ml-1">{errors.postCode}</span>}
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="orderNote" className="control-label">
              Order Notes
            </label>
            <textarea
              className="form-control"
              name="orderNote"
              id="orderNote"
              cols="20"
              rows="5"
              placeholder="Note your order"></textarea>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default React.forwardRef(ShippingForm);
