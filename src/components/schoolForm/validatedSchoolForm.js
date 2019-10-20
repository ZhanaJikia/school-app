import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import "./validated-form.css"
import {v4 as uuid} from 'uuid';

const ValidatedSchoolForm = props => (
  <Formik
    initialValues={{
      schoolName: "",
      address: "",
      students: []
    }}

    onSubmit={(values,  { setSubmitting, resetForm }) => {
      setTimeout(() => {
        values.id=uuid();
        values.students = [];
        props.handleAdd(values);
        setSubmitting(false);
        resetForm()
      }, 500);
    }}

    validationSchema={Yup.object().shape({
      schoolName: Yup.string()
      .required("Required"),

      address: Yup.string()
        .required("No address provided")
        .matches(/^[a-zA-Z 0-9]*$/, "No special character allowed"),
    })}>

    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
      } = props;

      return (
        <form onSubmit={handleSubmit}>
          <input
            name="schoolName"
            type="text"
            placeholder="Type School Name..."
            value={values.schoolName}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.schoolName && touched.schoolName && "error"}
          />
          {errors.schoolName && touched.schoolName && (
            <div className="input-feedback">{errors.schoolName}</div>
          )}

          <input
            name="address"
            type="text"
            placeholder="Type School Address..."
            value={values.address}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.address && touched.address && "error"}
          />
          {errors.address && touched.address && (
            <div className="input-feedback">{errors.address}</div>
          )}
          <button type="submit" disabled={isSubmitting}>
            Add
          </button>
        </form>
      );
    }}
  </Formik>
);

export default ValidatedSchoolForm;
