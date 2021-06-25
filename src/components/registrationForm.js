import { useState } from "react";
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import logo from "../assets/logo.png";
import "../styles/registrationForm.css";

const checkValidation = yup.object({
  firstName: yup
    .string('Enter a valid name.')
    .required('This field is required.'),
  lastName: yup
    .string('Enter a valid name.')
    .required('This field is required.'),
    npiNumber: yup
    .string('Enter a valid number from 6 to 15 characters in length.')
    .required('This field is required.'),
    businessAddress: yup
    .string('Enter a valid address.')
    .required('This field is required'),
    phoneNumber: yup
    .string('Enter a valid phone number.')
    .required('This field is required'),
    emailAddress: yup
    .string('Enter a valid email address.')
    .required('This field is required')
})

export default function RegistrationForm() {

  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      npiNumber: "",
      businessAddress: "",
      phoneNumber: "",
      emailAddress: "",
    },
    validationSchema: checkValidation,
    onSubmit: (values) => {
      setSubmitted(true)
      console.log({values})
    }
  });

  return (
    <div className="container">
      <div>
        <img src={logo} alt="Availity Logo" className="logo" />
        <h1>Register to join Availity.</h1>
        <p>
          Already have an account? <a href="./">Log In</a>
        </p>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          className="text-field"
          id="firstName"
          label="First Name"
          variant="outlined"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
        <TextField
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          className="text-field"
          id="lastName"
          label="Last Name"
          variant="outlined"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
        <TextField
          error={formik.touched.npiNumber && Boolean(formik.errors.npiNumber)}
          className="text-field"
          id="npiNumber"
          label="NPI Number"
          variant="outlined"
          value={formik.values.npiNumber}
          onChange={formik.handleChange}
          helperText={formik.touched.npiNumber && formik.errors.npiNumber}
        />
        <TextField
          error={formik.touched.businessAddress && Boolean(formik.errors.businessAddress)}
          className="text-field"
          id="businessAddress"
          label="Business Address"
          variant="outlined"
          value={formik.values.businessAddress}
          onChange={formik.handleChange}
          helperText={formik.touched.businessAddress && formik.errors.businessAddress}
        />
        <TextField
          error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
          className="text-field"
          id="phoneNumber"
          label="Phone Number"
          variant="outlined"
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
        />
        <TextField
          error={formik.touched.emailAddress && Boolean(formik.errors.emailAddress)}
          id="emailAddress"
          label="Email"
          variant="outlined"
          value={formik.values.emailAddress}
          onChange={formik.handleChange}
          helperText={formik.touched.emailAddress && formik.errors.emailAddress}
        />
        {submitted ? (
          <h2>Thank you. Your information has been submitted.</h2>
        ) : (
          <Button
            type="submit"
            id="registerBtn"
            variant="contained"
            color="primary"
          >
            Register
          </Button>
        )}
      </form>
    </div>
  );
}
