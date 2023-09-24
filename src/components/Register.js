import "../components/main.css"
import "../components/utils.css"
import  "../components/reset.css"
import Validation from "../components/Validation/Validation"
import {useEffect, useState} from "react";
import axios from "axios";


//axios post to Node Server


const Register = () => {


    function SendRequest()  {
        axios.post('http://localhost:5000/auth/registration', {

            username: "string",
            password: "string"

        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });


    }


    const [values, setValues] = useState({
        username:'',
        password:''
    })

    const  [errors,setErrors] = useState({})
    function handleInput(event) {
    const newObject  = {...values, [event.target.username]: event.target.value}
        setValues(newObject)
    }


    function handleValidation(event) {
        event.preventDefault();
        setErrors(Validation(values));
    }



    return(
        <div className="limiter">
        <div className="container-login100">
            <div className="wrap-login100">
                <form className="login100-form validate-form p-l-55 p-r-55 p-t-178" onSubmit={handleValidation}>
                <span className="login100-form-title">
                    Sign In
                </span>

                    <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
                        <input className="input100" type="text" name="username" placeholder="Username" onBlur={handleInput}/>
                            <span className="focus-input100"></span>
                        {errors.username && <p style={{color:"red"}}>{errors.username}</p>}
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Please enter password">
                        <input className="input100" type="password" name="pass" placeholder="Password" onBlur={handleInput}/>
                            <span className="focus-input100"></span>
                        {errors.password && <p style={{color:"red"}}>{errors.password}</p>}

                    </div>

                    <div className="text-right p-t-13 p-b-23">
                    <span className="txt1">
                        Forgot
                    </span>

                        <a href="#" className="txt2">
                            Username / Password?
                        </a>
                    </div>

                    <div className="container-login100-form-btn">
                        <button className="login100-form-btn" onClick={SendRequest}>
                            Sign in
                        </button>
                    </div>

                    <div className="flex-col-c p-t-170 p-b-40">

                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}


export default Register;