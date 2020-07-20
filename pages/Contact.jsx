import {Form, Input, Button, Radio, TextArea} from "semantic-ui-react";
import {useState} from "react";
import {withFormik} from "formik";
import * as yup from "yup";

const styles = {
    maxWidth: "800px",
    margin: "0 auto"
}

function ContactForm(props) {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        setValues
    } = props;


    // add the current time in milliseconds that they started filling out the form to values object
    function setStartTime() {
        setValues({...values, startTime: new Date().getTime()}, false);
        console.log("values =",values);
    }

    return (
        <Form onSubmit={handleSubmit} style={styles}>
            <Form.Group widths="equal">
                <Form.Field
                    required
                    id="form-control-name"
                    control={Input}
                    label="First name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.name && errors.name}
                    onFocus={setStartTime}
                />
                <Form.Field
                    required
                    id="form-control-email"
                    control={Input}
                    label="Email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && errors.email}
                />                
            </Form.Group>
            <Form.Field
                required
                id="form-control-message"
                label="Enter a message"
                control={TextArea}
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.message && errors.message}
            />
            <Button type="submit">Submit</Button>
        </Form>
    );
}

const yupSchema = yup.object().shape({
    email: yup.string().email().required(),
    name: yup.string().required(),
    message: yup.string().required()
});

//setStatus: https://formik.org/docs/api/formik#setstatus-status-any--void

export default withFormik({
    mapPropsToValues: () => ({
        name: "",
        email: "",
        message: "",
        startTime: null
    }),
    validationSchema: yupSchema,
    handleSubmit: (values, { setSubmitting }) => {
        // a human should take at least 2 seconds to fill out the form
        if(new Date().getTime() - values.startTime < 2000) 
            return;

        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },    
    displayName: 'BasicForm'
})(ContactForm);