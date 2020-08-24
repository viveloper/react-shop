import React from 'react';
import { useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import { closeModal } from '@/data/modal';
import useFocusEffect from '@/hooks/useFocusEffect';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import { composeValidators, required, validEmail } from '@/validators';
import Alert from 'react-bootstrap/Alert';

const INITIAL_VALUES = {
  email: '',
  password: '',
};

export default function SignupModal({ show }) {
  const dispatch = useDispatch();
  const handleHide = () => {
    dispatch(closeModal());
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  const ref = useFocusEffect();

  return (
    <React.Fragment>
      <Modal show={show} onHide={handleHide} className="login-signup">
        <Modal.Header>
          <button type="button" onClick={handleHide} className="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </Modal.Header>
        <Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit}>
          {({ errors }) => (
            <Form>
              <div className="modal-body p-5">
                <h4 className="modal-title mb-5">Sign Up</h4>
                <div className="form-group">
                  <label htmlFor="signup-email">EMAIL</label>
                  <Field
                    innerRef={ref}
                    validate={composeValidators(required, validEmail)}
                    name="email"
                    type="email"
                    className="form-control email"
                    placeholder="example@gmail.com"
                  />
                  {errors.email && (
                    <Alert className="mt-3" variant="danger">
                      {errors.email}
                    </Alert>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="signup-password">PASSWORD</label>
                  <Field
                    id="login-password"
                    name="password"
                    type="password"
                    className="form-control email"
                    validate={composeValidators(required)}
                  />
                  {errors.password && (
                    <Alert className="mt-3" variant="danger">
                      {errors.password}
                    </Alert>
                  )}
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary">
                  Sign Up
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </Modal>
    </React.Fragment>
  );
}
