import React from 'react';
import { useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import useFocusEffect from '@/hooks/useFocusEffect';
import { showModal, closeModal } from '@/data/modal';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import { composeValidators, required, validEmail } from '@/validators';
import Alert from 'react-bootstrap/Alert';

const INITIAL_VALUES = {
  email: '',
  password: '',
};

export default function LoginModal({ show }) {
  const dispatch = useDispatch();
  const handleHide = () => {
    dispatch(closeModal());
  };

  const handleSignupClick = (event) => {
    event.preventDefault();
    dispatch(closeModal());
    dispatch(showModal('SignupModal'));
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  const ref = useFocusEffect();

  return (
    <React.Fragment>
      <Modal show={show} onHide={handleHide} className="login-signup">
        <Modal.Header>
          <button type="button" onClick={handleHide} className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </Modal.Header>
        <Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit}>
          {({ errors }) => (
            <Form>
              <div className="modal-body p-5">
                <h4 className="modal-title mb-5">Login</h4>
                <div className="form-group">
                  <label htmlFor="login-email">EMAIL</label>
                  <Field
                    innerRef={ref}
                    validate={composeValidators(required, validEmail)}
                    name="email"
                    type="email"
                    className="form-control email"
                    placeholder="Email"
                  />
                  {errors.email && (
                    <Alert className="mt-3" variant="danger">
                      {errors.email}
                    </Alert>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="login-password">PASSWORD</label>
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
                  <a href="" className="navy-link">
                    Login Lost your password?
                  </a>
                </div>
              </div>
              <div className="modal-footer flex-column p-0">
                <button type="submit" className="btn btn-primary align-self-end mr-5">
                  Login
                </button>
                <div className="signup-today text-center align-self-stretch flex-fill m-0 mt-3">
                  <p>Don’t have an account?</p>
                  <a onClick={handleSignupClick} className="navy-link">
                    Sign Up Today
                  </a>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </Modal>
      <style jsx global>{`
        .login-signup label {
          display: inline-block;
          max-width: 100%;
          margin-bottom: 5px;
          font-weight: 700;
        }
        .login-signup .modal-dialog {
          width: 420px;
        }
        .login-signup .modal-content {
          border-radius: 0;
        }
        .login-signup .modal-header {
          border-bottom: none;
        }
        .login-signup .modal-footer {
          border-top: none;
        }
        .login-signup .modal-title {
          font-size: 18px;
          font-weight: bold;
          color: #4a4a4a;
        }
        .login-signup .form-horizontal .form-group {
          margin-left: 0;
          margin-right: 0;
        }
        .login-signup .signup-today {
          padding: 36px;
          background-color: #f3f3f4;
        }
        .login-signup button:focus {
          outline: none;
        }
      `}</style>
    </React.Fragment>
  );
}
