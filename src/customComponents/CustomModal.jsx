import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';


const CustomModal = ({ title, onSubmit, initialValues, validationSchema }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShowModal}>
        Open Modal
      </Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ handleSubmit, handleChange, values, errors }) => (
              <Form>
                {/* Form fields go here */}
                <Field type="text" name="fname" onChange={handleChange} />
                <ErrorMessage name="fname" component="div" />
                <Field type="text" name="lname" onChange={handleChange} />
                <ErrorMessage name="lname" component="div" />
                {/* Add more fields as needed */}
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                  Submit
                </Button>
                <Button variant="secondary" onClick={handleCloseModal}>
                  Cancel
                </Button>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CustomModal;