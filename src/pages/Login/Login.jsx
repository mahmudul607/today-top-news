import { Link,  useLocation,  useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Login = () => {
    const {logInUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()
    console.log("Login page", location);


    
    const handleSubmitData = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        logInUser(email, password)
        .then(() => {
            {
                navigate(location?.state ? location.state : '/');
            }
        
        })
        .catch(err => console.log(err));
    }
    return (
        <div className="md:max-w-6xl mx-auto">
            <Navbar></Navbar>
            <div className="hero text-center min-h-screen  bg-base-200">
            
            <div className="hero-content  flex-col w-full">
                <div className="text-center w-1/2 mx-auto">
                    <h1 className="text-5xl font-bold my-2">Login now!</h1>
                </div>
                <div className="card  shadow-2xl w-1/2 bg-base-100 mx-auto">
                    <form className="card-body pb-0" onSubmit={handleSubmitData}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered w-full" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className="text-left  ml-8 pb-4 text-sm">Dont Have an Account? <Link to='/register' className="font-bold">Register</Link></p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Login;