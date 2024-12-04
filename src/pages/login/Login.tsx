"use client"
import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Eye, EyeClosed, Lock, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import HeaderTitle from '@/components/headerTitle'
import { useForm, Resolver } from "react-hook-form"
import { Link } from 'react-router-dom'

type FormValues = {
    username: string;
    password: string;
};

const resolver: Resolver<FormValues> = async (values) => {
    const errors: Record<string, any> = {};

    if (!values.username) {
        errors.username = {
            type: 'required',
            message: 'Email / Phone is required *',
        };
    }

    if (!values.password) {
        errors.password = {
            type: 'required',
            message: 'Password is required *',
        };
    }

    return {
        values: Object.keys(errors).length === 0 ? values : {},
        errors,
    };
};
const LoginPage = () => {
    // const [user, setUser] = useState(null)
    const [open, setIsOpen] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormValues>({ resolver })

    const onSubmit = handleSubmit(async (data) => {
        console.log(data);

        // const { username, password } = data
        // const userCredentials = {
        //     email: username,
        //     password,
        // }
        // try {
        //     const response = await signIn("credentials", {
        //         email: username,
        //         password: password,
        //         redirect: false
        //     })
        //     return response
        // } catch (error) {
        //     const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        //     throw new Error(errorMessage)
        // }
    })
    return (
        <div
            className='flex items-center justify-center w-full min-h-screen relative overflow-hidden backdrop-blur-md'
        >
            <div className='w-full'>
                <div
                    className="relative max-w-xl mx-auto w-full border shadow-lg rounded-lg space-y-8"
                >
                    <div className='relative z-10'>
                        <div className={`p-12 space-y-4`}>
                            <div className='flex flex-col items-center justify-center space-y-2'>
                                <HeaderTitle title='Login' />
                                <p className='font-medium text-muted-foreground text-center'>Login to get started using it.</p>
                            </div>
                            <form className='mt-6 space-y-4' onSubmit={onSubmit}>
                                <div className='space-y-1'>
                                    <div className='relative'>
                                        <Mail size={20} className='text-primary absolute left-4 top-1/2 -translate-y-1/2' />
                                        <Input {...register('username')} type="email" placeholder="Enter Your Email or Phone" className="border px-12 py-6 rounded-lg text-secondary font-medium" />
                                    </div>
                                    {errors?.username && <p className='text-left text-xs text-foreground'>{errors?.username?.message}</p>}
                                </div>
                                <div className='space-y-1'>
                                    <div className='relative'>
                                        <Lock size={20} className='text-primary absolute left-4 top-1/2 -translate-y-1/2' />
                                        <Input {...register('password')} type={open ? "text" : "password"} placeholder="Enter Your Password" className="border px-12 py-6 rounded-lg text-secondary font-medium" />
                                        <button type='button' className='absolute right-4 top-1/2 -translate-y-1/2 text-foreground' onClick={() => setIsOpen(!open)}>{open ? <Eye size={20} /> : <EyeClosed size={20} />}</button>
                                    </div>
                                    {errors?.username && <p className='text-left text-xs text-foreground'>{errors?.password?.message}</p>}
                                </div>


                                <Link to={'/forget-password'} className='text-sm text-primary hover:text-foreground transition-all duration-200 font-medium hover:underline'><p className='text-right'>Forget Password?</p></Link>
                                {/* TODO: Make it work */}
                                {/* <Link href={'/dashboard'}><Button
                                    // type="submit" 
                                    className="mt-5 w-full py-6 px-4 bg-gradient-to-r from-blue-500 to-blue-700 text-foreground font-bold rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-900 transition duration-200">Login</Button></Link> */}
                                <Button
                                    type="submit"
                                    className="mt-5 w-full py-6 px-4 bg-gradient-to-r from-primary to-secondary text-white hover:text-white font-bold rounded-lg shadow-lg hover:from-secondary hover:to-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-primary transition duration-200">Login</Button>
                                {/* Experimental : Risk  */}
                            </form>
                        </div>

                    
                    </div>
                </div>
            </div>
            <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full opacity-5'>
                <img src="https://res.cloudinary.com/dz3kxnsxr/image/upload/v1727461049/clipboard-stethoscope_xo2uo1.jpg" alt="" />
            </div>
        </div>
    )
}

export default LoginPage;


