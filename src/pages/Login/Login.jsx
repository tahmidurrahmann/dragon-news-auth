import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../shared/AuthProvider/AuthProvider";

const Login = () => {

    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        signIn(email, password)
        .then(result => {
            console.log(result.user);
            navigate(location?.state ? location.state : '/')
        })
        .catch(error => {
            console.error(error);
        })
    }

    return (
        <div>
            <Navbar></Navbar>
            <form onSubmit={handleLogin} className="w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" required placeholder="Email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" required placeholder="Password" className="input input-bordered" />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-neutral btn-outline">Login</button>
                </div>
            </form>
            <p className="text-center mt-4">Do not Have An Account ? <Link className="text-blue-600 font-bold" to='/register'>Register</Link></p>
        </div>
    );
};

export default Login;