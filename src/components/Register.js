import "../components/main.css"
import "../components/utils.css"
import  "../components/reset.css"
import Validation from "../components/Validation/Validation"
import {useEffect, useState} from "react";
import axios from "axios";
import username from "./Validation/Validation"
import password from "./Validation/Validation"

//axios post to Node Server


const Register = () => {

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

const configuration = {
    method:"post",
    url:"http://localhost:5000/auth/registration",
    data:{
        username,
        password,
    },
};
function SendRequest(){
axios(configuration)
}


    return(
        <div className="limiter">
        <div className="container-login100">
            <div className="wrap-login100">
                <form className="login100-form validate-form p-l-55 p-r-55 p-t-178" >
                <span className="login100-form-title">
                    Sign In
                </span>

                    <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
                        <input className="input100" type="text" name="username" value={username} onChange={(e) => setUsername((e.target.value))} placeholder="Username"  />
                            <span className="focus-input100"></span>
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Please enter password">
                        <input className="input100" type="password" name="pass" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
                            <span className="focus-input100"></span>


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