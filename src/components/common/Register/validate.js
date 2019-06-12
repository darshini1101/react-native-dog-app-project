export default values => {
    const errors = {};

    if (!values.password) {
        errors.password = 'Required';
    }

    if (!values.confirm_password) {
        errors.confirm_password = 'Required';
    } else if (values.confirm_password !== values.password) {
        errors.confirm_password = 'Password does not match';
    }
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    return errors;
};
