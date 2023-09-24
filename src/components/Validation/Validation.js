export default function Validation (values) {
    const errors = {}



    const username_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;



    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;



    if(values.username === ""){
        errors.username = "UserName is Required";
    }
    

    if(values.password === "") {
        errors.password = 'Password is Required';
    }else if (!password_pattern.test(values.password)) {
        errors.password = "Password didn't match"
    }

    return errors

}