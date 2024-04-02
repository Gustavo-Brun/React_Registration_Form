'use client'

import { useForm } from "react-hook-form"
import { Toaster, toast } from 'sonner'


const Form = () => {

    interface FormProps {
        name: string ;
        email: string ;
        password: string;
      }

    const { register , handleSubmit, formState: { errors } } = useForm<FormProps>()

    const onSubmit = (data:FormProps) => {

        toast.success(`Thank you ${data.name}, you have been successfully registered.`)
          
    }

    return (
        <section className="m-auto lg:border-2 lg:p-20 p-10 rounded-xl border-black shadow-2xl space-y-10">
            <Toaster position="top-center"/>
            <section>
                <h1 className="lg:text-4xl text-2xl font-bold">Create an account</h1>
                <h2 className="text-gray-500 dark:text-gray-400">Enter your information to register</h2>
            </section>

            <form 
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 w-full max-w-xs font-medium my-2 ">

                <div className="flex flex-col gap-1">
                    <label htmlFor="">Name</label>
                    <input {...register('name', {required:true})} 
                    className={` border shadow-sm rounded h-10 p-3 font-normal ${errors?.name ? 'border-red-600 ' : 'border-black'}`}
                     type="text" placeholder="Vusal Sadykhov"/>
                    {errors?.name?.type === 'required' && <p className="text-sm text-red-700">Name is required.</p>}
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="">E-mail</label>
                    <input {...register('email', {required:true})}
                    className={`border shadow-sm rounded h-10 p-3 font-normal ${errors?.email ? 'border-red-600 ' : 'border-black'}`}
                     type="email" placeholder="contact@example.com"/>
                    {errors?.email?.type === 'required' && <p className="text-sm text-red-700">E-mail is required.</p>}
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="paragraph_text">Password</label>
                    <input {...register('password', {required:true})}
                    className={`border shadow-sm rounded h-10 p-3 font-normal ${errors?.password ? 'border-red-600 ' : 'border-black'}`}
                     type="password"/>
                    {errors?.password?.type === 'required' && <p className="text-sm text-red-700">Password is required.</p>}
                </div>

                <button className="mx-auto lg:mt-10 mt-2 rounded-2xl shadow-md text-white p-3 px-8 border-2 bg-black  font-bold active:text-red-600 active:scale-95">Register</button>

            </form>
        </section>
    )
}

export default Form;