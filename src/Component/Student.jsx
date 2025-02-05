import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { StudentLayout } from './StudentLayout';
import Swal from 'sweetalert2';

export const Student=()=>{

    const navi=useNavigate()
    const schema = yup
        .object()
        .shape({
            name: yup.string().required(),
            password: yup.string().required(),
            img:yup.mixed().required().test("img not insert","nahi aayegi",(value)=>value.length>0)
        })
    
    
        const { register, handleSubmit, formState:{errors}} = useForm({
            resolver: yupResolver(schema),
        });

        const streg=async(data)=>{
            //console.log(data);
            const formData=new FormData()
            formData.append("name",data.name)
            formData.append("password",data.password)
            formData.append("img",data.img[0])
            //const a=formData.append("img",data.img[0])
            //console.log(a);
            const url = `http://localhost:1140/studentregister`
            const response=await axios.post(url,formData)
            console.log(response);
            if(response.data.success==true){
                Swal.fire({
                    icon:"success",
                    text:response?.data?.message,
                    title:"Student Register"
                })
                navi("/view")

            }
            else{
                Swal.fire({
                    icon:"error",
                    text:response?.data?.message,
                    title:"Student Register"
                })
            }             
        }

    return(<>
    <StudentLayout>
        <div className="container ">
                <div className="row mt-5">
                    <div className="regbox col-4 mx-auto pt-3 px-4 border border-dark rounded-3 pb-3">
                        <h1 className='text-center my-2 mb-4'>Student Register</h1>
                        <form onSubmit={handleSubmit((data) =>streg(data))}>

                            <input {...register('name')} className='intag form-control my-2' placeholder='Enter student name'/>
                            {errors?.name&&<p className='text-danger'>{errors?.name.message}</p>}

                            <input {...register('password')} className='form-control my-2' placeholder='Enter student password' type="password"/>
                            {errors?.password&&<p className='text-danger'>{errors?.password.message}</p>}

                            <input  {...register('img')} type="file"  className='form-control my-2' />
                            {errors?.img&&<p className='text-danger'>{errors?.img.message}</p>}

                            <input type="submit"  className='form-control mt-5 mb-2 btna'/>
                        </form>
                    </div>
                </div>
                </div>
    </StudentLayout>
    </>)
}