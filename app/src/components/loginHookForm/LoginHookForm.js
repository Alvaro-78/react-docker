import React from 'react';
import { useForm } from 'react-hook-form';

import './LoginHookForm.css'

const LoginHookForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = ( data ) => {

        console.log("data", data);
    };

    return (
        <>
            <div className="divForm">
                <h1>Formulario</h1>
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label>Name: </label><br/>
                        <input {...register('name', { required: true })}/>
                        <span className="text-danger text-small d-block mb-2">
                            {errors.name && <span>Nombre requerido</span>}
                        </span>
                    </div><br/>
                    <div>
                        <label>Email: </label><br/>
                        <input {...register('email', { required: true })}/>
                        <span className="text-danger text-small d-block mb-2">
                            {errors.email && <span>Email requerido</span>}
                        </span>
                    </div><br/>
                    <div>                        
                        <label>Password:</label><br/>
                        <input {...register("password", { required: true })} />
                        <span className="text-danger text-small d-block mb-2">
                            {errors.password && <span>Password requerido</span>}
                        </span>
                    </div><br/>
                    <input className="button" type="submit" />
                </form>
            </div>
        </>
    )
}

export default LoginHookForm
