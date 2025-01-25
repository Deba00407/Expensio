import React from 'react'
import { useForm } from 'react-hook-form';
import Input from '../Input';
import Button from "../Animated-Components/AnimatedButton"
import Typewriter from '../Animated-Components/Typewriter';

function SignUp() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleSignUp = (data) => {
        console.log(data);
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-4 max-w-4xl w-full flex">
                {/* Left Section */}
                <div className="w-1/2 p-6">
                    <h1 className="text-2xl font-bold mb-4">Track your expenses with ease</h1>

                    <Typewriter content="Get budget plans and insights to track spending." />

                    <img
                        src="https://res.cloudinary.com/dxrwmpshz/image/upload/v1737781132/electronic-documentation-man-with-registration-checking-repository-log-online-approval-screen-form-validation-page-expense-chronicles-vector-isolated-concept-metaphor-illustration_335657-4323_ygwhck.jpg"
                        alt="App Preview"
                        className="rounded-md"
                    />
                </div>

                {/* Right Section */}
                <div className="w-1/2 bg-gray-50 p-6 rounded-lg">
                    <h2 className="text-xl font-bold mb-4">Get started for free</h2>
                    <p className="text-gray-600 mb-6">
                        Unlock premium features for better financial management.
                    </p>
                    <form onSubmit={handleSubmit(handleSignUp)}>
                        <div className="space-y-4">
                            {/* Username */}
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

                            {/* Email */}
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

                            {/* Password */}
                            <div className='mb-0'>
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

                            <Button type="submit" content="Sign Up" />
                        </div>
                    </form>

                    {/* OAuth */}

                    <div className="flex items-center justify-center my-4">
                        <div className="flex-1 border-t border-gray-300"></div>
                        <p className="mx-4 text-gray-500">OR</p>
                        <div className="flex-1 border-t border-gray-300"></div>
                    </div>

                    <div className="flex justify-center space-x-4 mt-4">
                        <button className="flex items-center justify-center bg-gray-200 p-3 rounded-full hover:bg-gray-300">
                            Google
                        </button>
                        <button className="flex items-center justify-center bg-gray-200 p-3 rounded-full hover:bg-gray-300">
                            Facebook
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp
