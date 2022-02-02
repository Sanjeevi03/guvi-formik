import React from 'react';
import { Formik } from 'formik';

function FormikComponent() {
  const data = {
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    courses: 'Angular',
  };
  const validate = (value) => {
    var errors = {};
    if (value.firstName === '') errors.firstName = 'First Name is Required';
    if (value.lastName === '') errors.lastName = 'Last Name is Required';
    if (value.email === '') errors.email = 'Email is Required';
    if (value.gender === '') errors.gender = 'Gender is Required';
    return errors;
  };
  const handleSubmit = (value) => {
    console.log(value);
  };
    return (
      <>
        <h3> Formik Component </h3>
        <Formik
          initialValues={data}
          validate={(value) => validate(value)}
          onSubmit={(value) => handleSubmit(value)}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            resetForm,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <label> First Name : </label>
                <input
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <br />
                <span style={{ color: 'red' }}>
                  {' '}
                  {touched.firstName && errors.firstName}{' '}
                </span>
              </div>
              <br />
              <div>
                <label> Last Name : </label>
                <input
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <br />
                <span style={{ color: 'red' }}>
                  {' '}
                  {touched.lastName && errors.lastName}{' '}
                </span>
              </div>
              <br />
              <div>
                <label>Email : </label>
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <br />
                <span style={{ color: 'red' }}>
                  {' '}
                  {touched.email && errors.email}{' '}
                </span>
              </div>
              <br />
              <div>
                <label> Gender : </label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                Male
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                Female
                <br />
                <span style={{ color: 'red' }}>
                  {' '}
                  {touched.gender && errors.gender}{' '}
                </span>
              </div>
              <br />
              <div>
                <label> Courses : </label>
                <select
                  name="courses"
                  value={values.courses}
                  onChange={handleChange}
                >
                  <option> React </option>
                  <option> Node </option>
                  <option> Mongo </option>
                  <option> Java </option>
                </select>
              </div>
              <br />
              <button type="submit"> Submit </button> &nbsp;
              <button type="button" onClick={resetForm}>
                {' '}
                Reset{' '}
              </button>{' '}
              &nbsp;
            </form>
          )}
        </Formik>
      </>
    );
  }
export default FormikComponent;
