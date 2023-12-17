import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";


const Register = () => {
    const handleRegisterData = (e) => {
        e.preventDefault();

    }
    return (
        <div className="md:max-w-6xl mx-auto">
            <Navbar></Navbar>
            <div className="hero text-center min-h-screen  bg-base-200">
            
            <div className="hero-content  flex-col w-full">
                <div className="text-center w-1/2 mx-auto">
                    <h1 className="text-5xl font-bold my-2">Register Now!</h1>
                </div>
                <div className="card  shadow-2xl w-1/2 bg-base-100 mx-auto">
                    <form className="card-body pb-0" onSubmit={handleRegisterData}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Photo URL" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered w-full" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p className="text-left  ml-8 pb-4 text-sm">Do not Have an Account? <Link to='/login' className="font-bold">Login</Link></p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Register;