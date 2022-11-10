import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/UserContext';
import UserTitle from '../UserTitle/UserTitle';


const Login = () => {

    UserTitle('login-page')

    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const locaton = useLocation();

    const from = locaton.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                const currentUser = {
                    email: user.email
                }
                console.log(currentUser);

                // get jwt token
                fetch('https://life-of-travel-server-three.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        // local storage 
                        localStorage.setItem('doctor-token', data.token);
                        form.reset();
                        setError('');
                        toast.success('Login Success !', { autoClose: 1000 });
                        navigate(from, { replace: true });
                    })




            })
            .catch(error => {
                console.error(error)
                const errorMessage = error.message;
                setError(errorMessage);
            })

        console.log(email, password);
    }

    //  google login
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);

                const currentUser = {
                    email: user.email
                }

                // get jwt token
                fetch('https://life-of-travel-server-three.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        // local storage 
                        localStorage.setItem('doctor-token', data.token);

                        toast.success('Login Success !', { autoClose: 1000 });
                        navigate(from, { replace: true });
                    })
            })
            .catch(error => console.error(error))
    }


    return (
        <section className='bg-gray-600 pb-6 pt-6'>
            <div className="w-full max-w-md mx-auto p-4 rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100">

                <h1 className="text-2xl font-bold text-center mb-2">Login</h1>
                <p className="text-sm dark:text-gray-400 text-center mb-5">Login to access your account</p>
                <form onSubmit={handleSubmit} className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-left dark:text-gray-400">Email address</label>
                        <input type="email" name="email" id="username" placeholder="Email address" className="w-full px-4 py-3 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block dark:text-gray-400">Password</label>
                        <input type="password" name="password" id="password" placeholder="*********" className="w-full px-4 py-3 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required />
                        <div className="flex justify-end text-xs dark:text-gray-400">
                            <Link rel="noopener noreferrer" to='/'>Forgot password?</Link>
                        </div>
                        <Link rel="noopener noreferrer" className='text-red-500'>{error}</Link>
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400 uppercase">Login</button>
                </form>

                <p className="px-6 mt-3 text-sm text-center dark:text-gray-400">Don't have an account yet?
                    <Link rel="noopener noreferrer" to='/register' className="hover:underline dark:text-violet-400">Sign up</Link>.
                </p>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                    <p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                </div>


                <div className="my-6 space-y-4">
                    <button onClick={handleGoogleLogin} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                        <p>Login with Google</p>
                    </button>


                </div>

            </div>
        </section>
    );
};

export default Login;