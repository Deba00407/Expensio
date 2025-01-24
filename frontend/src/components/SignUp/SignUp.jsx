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
        <div className="p-4 w-full">
            <form onSubmit={handleSubmit(signUp)} className="space-y-4">
                <div className='mb-4'>
                    <Input
                        type="text"
                        name="username"
                        label="Username:"
                        register={register("username", {
                            required: "Please enter a username",
                            validate: {
                                matchPattern: (value) =>
                                    /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/igm.test(value) ||
                                    "Please enter a valid username",
                            },
                        })}
                    />

                    {errors.username && (
                        <p className="text-red-500 text-sm">{errors.username.message}</p>
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
                                    /^(?:(?:[\w`~!#$%^&*\-=+;:{}'|,?\/]+(?:(?:\.(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)*"|[\w`~!#$%^&*\-=+;:{}'|,?\/]+))*\.[\w`~!#$%^&*\-=+;:{}'|,?\/]+)?)|(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)+"))@(?:[a-zA-Z\d\-]+(?:\.[a-zA-Z\d\-]+)*|\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])$/gm.test(value) ||
                                    "Please enter a valid email",
                            },
                        })}
                    />

                    {errors.email && (
                        <p className="text-red-500 text-sm">{errors.email.message}</p>
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
                        <p className="text-red-500 text-sm">{errors.password.message}</p>
                    )}
                </div>

                <Button variant="contained" type="submit" onClick={(e) => signUp(e)}>Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUp
