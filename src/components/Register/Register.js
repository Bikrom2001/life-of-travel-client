import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { setAuthToken } from '../../Api/Auth';
import { AuthContext } from '../../contexts/UserContext';
import UserTitle from '../UserTitle/UserTitle';

const Register = () => {

    UserTitle('Register-pages');

    const { createUser, updateUserProfile , signInWithGoogle} = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        // create a user
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setAuthToken(user);
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                setError('');
                toast.success('Create an account Success !', { autoClose: 1000 });
            })
            .catch(error => {
                console.error(error)
                const errorMessage = error.message;
                setError(errorMessage);
            })

    }


    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
        .then(() => {})
        .catch(error => console.error(error))
    }


    // google login
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
                setAuthToken(user);
                toast.success('Create an account Success !', { autoClose: 1000 });
            })
            .catch(error => console.error(error))
    }



    return (
        <section className='bg-gray-600 pb-6 pt-6'>
            <div className="w-full max-w-md mx-auto p-4 rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100">

                <h1 className="text-2xl font-bold text-center mb-5">Create an account</h1>

                <form onSubmit={handleSubmit} className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="name" className="block text-left dark:text-gray-400">Your Name</label>
                        <input type="text" name="name" id="name" placeholder="Your Name" className="w-full px-4 py-3 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="photo-URL" className="block text-left dark:text-gray-400">Photo URL</label>
                        <input type="text" name="photo" id="photo-URL" placeholder="Photo URL" className="w-full px-4 py-3 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-left dark:text-gray-400">Email address</label>
                        <input type="email" name="email" id="username" placeholder="Email address" className="w-full px-4 py-3 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block dark:text-gray-400">Password</label>
                        <input type="password" name="password" id="password" placeholder="*********" className="w-full px-4 py-3 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required />
                        <div className="flex justify-end text-xs dark:text-red-500">
                            <Link rel="noopener noreferrer" to='/'>{error}</Link>
                        </div>
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400 uppercase">Create an account</button>
                </form>

                <p className="px-6 mt-3 text-sm text-center dark:text-gray-400">Already have an account yet?
                    <Link rel="noopener noreferrer" to='/login' className="hover:underline dark:text-violet-400"> Login</Link>.
                </p>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                    <p className="px-3 text-sm dark:text-gray-400">Create with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                </div>


                <div className="my-6 space-y-4">
                    <button onClick={handleGoogleLogin} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                        <p>Continue with Google</p>
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Register;