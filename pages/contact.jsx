import {Form, Input, Button, TextArea, Message, Container} from "semantic-ui-react";
import {withFormik} from "formik";
import * as yup from "yup";
import axios from "axios";

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
        setValues,
        isSubmitting,
        status
    } = props;

    // add the current time in milliseconds that they started filling out the form to values object
    function setStartTime() {
        setValues({...values, startTime: new Date().getTime()}, false);
    }

    return (
        <Container style={styles}>
            <Form onSubmit={handleSubmit}>
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
                {status !== undefined && <Message content={status}/>}
                {isSubmitting ? <Button loading>submitting</Button> : <Button type="submit">Submit</Button>}
            </Form>
        </Container>
    );
}

const yupSchema = yup.object().shape({
    email: yup.string().email().required(),
    name: yup.string().required(),
    message: yup.string().required()
});

export default withFormik({
    mapPropsToValues: () => ({
        name: "",
        email: "",
        message: "",
        startTime: null
    }),
    validationSchema: yupSchema,
    handleSubmit: (values, { setSubmitting, setStatus }) => {
        // some crude anti-spam
        if(new Date().getTime() - values.startTime < 2000) 
            return;

        axios.post("/api/send_mail", values)
            .then(response => {
                if(response.status === 200) {
                    setStatus("Message received.");
                } else {
                    setStatus("Message could not be sent.");
                    console.log(response.data)
                }
                setSubmitting(false);
            })
            .catch(error => {
                console.log(error);
                setStatus("Message could not be sent.");
                setSubmitting(false);
            });
    },    
    displayName: 'BasicForm'
})(ContactForm);