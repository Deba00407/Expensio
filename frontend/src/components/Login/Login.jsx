import React from 'react'
import { useForm } from 'react-hook-form'
import Input from '../Input';
import Button from '@mui/material/Button';

function SignUp() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const signUp = (data) => {
        console.log(data);
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6">
                <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Create an Account</h1>
                <form onSubmit={handleSubmit(signUp)} className="space-y-6">
                    <div className='mb-4'>
                        <Input
                            type="text"
                            name="username"
                            label="Username:"
                            register={register("username", {
                                required: "Please enter a username",
                                validate: {
                                    matchPattern: (value) =>
                                        /^(?!.*\..)(?!.*\.$)[^\W][\w.]{0,29}$/igm.test(value) ||
                                        "Please enter a valid username",
                                },
                            })}
                        />

                        {errors.username && (
                            <p className="text-red-500 text-sm mt-2">{errors.username.message}</p>
                        )}
                    </div>

                    <div className='mb-4'>
                        <Input
                            type="email"
                            name="email"
                            label="Email:"
                            register={register("email", {
                                required: "Please enter email",
                                validate: {
                                    matchPattern: (value) =>
                                        /^[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z\d-]+\.)+[a-zA-Z]{2,7}$/gm.test(value) ||
                                        "Please enter a valid email",
                                },
                            })}
                        />

                        {errors.email && (
                            <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>
                        )}
                    </div>

                    <div className='mb-4'>
                        <Input
                            hideAttr={true}
                            type="password"
                            name="password"
                            label="Password:"
                            register={register("password", {
                                required: "Please enter password",
                                validate: {
                                    matchPattern: (value) =>
                                        /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/g.test(value) || "Please enter a valid password",
                                },
                            })}
                        />

                        {errors.password && (
                            <p className="text-red-500 text-sm mt-2">{errors.password.message}</p>
                        )}
                    </div>

                    <Button
                        variant="contained"
                        type="submit"
                        className="w-fit bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
                    >
                        Sign Up
                    </Button>
                </form>

                <p className="text-sm text-gray-600 text-center mt-6">
                    Already have an account? <a href="/login" className="text-blue-500 hover:underline">Log in</a>
                </p>

                <div className="oauth"></div>
            </div>
        </div>
    )
}

export default SignUp
