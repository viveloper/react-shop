import React from 'react';
import { useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import { closeModal } from '@/data/modal';
import useFocusEffect from '@/hooks/useFocusEffect';

export default function SignupModal({ show }) {
  const dispatch = useDispatch();
  const handleHide = () => {
    dispatch(closeModal());
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
        <form action="" method="POST" className="form-horizontal p-5" role="form">
          <div className="modal-body">
            <h4 className="modal-title mb-5">Sign Up</h4>
            <div className="form-group">
              <label htmlFor="signup-email">EMAIL</label>
              <input
                ref={ref}
                type="text"
                id="signup-email"
                name="email"
                className="form-control email"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="signup-password">PASSWORD</label>
              <input
                type="password"
                id="signup-password"
                name="email"
                className="form-control email mb-xxs-sm"
                placeholder="example@gmail.com"
              />
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary">
              Sign Up
            </button>
          </div>
        </form>
      </Modal>
    </React.Fragment>
  );
}
