import React from 'react';
import PropTypes from 'prop-types';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import { composeValidators, required, validEmail } from '@/validators';

const INITIAL_VALUES = {
  cardNumber: '',
  fullName: '',
  expDate: '',
  cvc: '',
};

function PaymentForm(props, ref) {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit}>
      {({ errors }) => (
        <Form ref={ref} className="form-horizontal">
          <div className="form-group">
            <label className="control-label">Card Number</label>
            <Field
              validate={composeValidators(required)}
              name="cardNumber"
              type="text"
              className="form-control"
              autoComplete="cc-number"
              placeholder="**** **** **** ****"
            />
            {errors.cardNumber && <span className="text-danger ml-1">{errors.cardNumber}</span>}
          </div>
          <div className="form-group">
            <label className="control-label">Full Name</label>
            <Field
              validate={composeValidators(required)}
              name="fullName"
              type="text"
              className="form-control"
              autoComplete="cc-number"
              placeholder="Full Nmae"
            />
            {errors.fullName && <span className="text-danger ml-1">{errors.fullName}</span>}
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <label className="control-label">MM/YYYY</label>
                <Field
                  validate={composeValidators(required)}
                  name="expDate"
                  type="text"
                  className="form-control"
                  autoComplete="cc-exp"
                  placeholder="01/2019"
                />
                {errors.expDate && <span className="text-danger ml-1">{errors.expDate}</span>}
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <label className="control-label">CVC</label>
                <Field
                  validate={composeValidators(required)}
                  name="cvc"
                  type="text"
                  className="form-control"
                  autoComplete="cc-csc"
                  placeholder="***"
                />
                {errors.cvc && <span className="text-danger ml-1">{errors.cvc}</span>}
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default React.forwardRef(PaymentForm);
