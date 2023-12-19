import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Register = () => {
   
    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate(null);

    const handleRegisterData = (e) => {
      
        
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        // const name = form.get('name');
        // const photo = form.get('photo');
        createUser(email, password)
        .then(result =>  {
                console.log(result.user)
                navigate('/login')
            }
            )
            .catch(error => console.error(error))

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
                            <input type="text" placeholder="Name" name="name" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered w-full" required />
                        </div>
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
                           
                        </div>
                        <div className="form-control">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p className="text-left  ml-8 pb-4 text-sm">Already Have an Account? <Link to='/login' className="font-bold">Login</Link></p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Register;