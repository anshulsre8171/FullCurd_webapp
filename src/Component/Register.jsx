import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'


const schema=yup.object().shape({
    name:yup.string().required(),
    email:yup.string().email().required(),
    password:yup.string().required(),
}).required();


export const Register = () => {
    const navigate=useNavigate()

    const {register,handleSubmit,formState:{errors}}=useForm({resolver:yupResolver(schema)});

    const userRegister=async(d)=>{
        const url="http://localhost:1140/reg"
        const res= await axios.post(url,d)
        if(res.data.success==true){
            Swal.fire({
                icon:"success",
                title:"REgistered",
                text:res.data.message
            })
            navigate("/login")
        }else{
            Swal.fire({
                icon:"error",
                title:"REgistered",
                text:res.data.message
            })
        }

    }


  return (
    <div className='container Aregister'>

        <div className="row">
    <div className="col-4 mx-auto regbox pt-4 px-4 border border rounded pb-3">
    <h1 className='text-center my-2 mb-4'>Register</h1>
    <form onSubmit={handleSubmit((d)=>{userRegister(d)})}>
        <input {...register("name")} className='form-control my-2' placeholder='enter your name'/>
        {errors?.name&&<p className='text-danger'>{errors?.name.message}</p>}
        <input {...register("email")} className='form-control my-2' placeholder='enter your email'/>
        {errors?.email&&<p className='text-danger'>{errors?.email.message}</p>}        
        <input {...register("password")} type="password" className='form-control my-2' placeholder='enter your password'/>
        {errors?.password&&<p className='text-danger'>{errors?.password.message}</p>}

        <input type='submit' className='form-control mt-5 mb-2 btna' />
        <Link to="/login" className='text-dark text-decoration-none'>Already have account?</Link>
    </form>
</div>

        </div>
    </div>
  )
}
