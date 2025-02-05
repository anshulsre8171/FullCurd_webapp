import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import axios from 'axios';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { StudentLayout } from './StudentLayout';
export const Edit=()=>{

    const {_id}=useParams()
    const navi=useNavigate()

    const schema = yup
        .object()
        .shape({
            name: yup.string().required(),
            password: yup.string().required(),
            img:yup.mixed().required().test("img not insert","nahi aayegi",(value)=>value.length>0)
        })
        
        const {state}=useLocation()

        const { register,setValue,handleSubmit, formState:{errors}}=useForm({
            resolver: yupResolver(schema),
        });

            setValue("name",state.name)
            setValue("password",state.password)
            setValue("img",state.img[0])
  
    


        const stupdate=async(data)=>{
            //console.log(d);
            const formData=new FormData()
            formData.append("name",data.name)
            formData.append("password",data.password)
            const a=formData.append("img",data.img[0])
            //console.log(a);  

            const url=`http://localhost:1140/update/${_id}`
            const response=await axios.put(url,formData)
            //console.log(response);
            navi("/view")

        }

    return(<>
    <StudentLayout>
                <div className="row">
                    <div className="regBox col-4  mx-auto pt-4 px-4 border border-dark regbox rounded pb-3">
                        <h1 className='text-center my-2 mb-4'>Student update profile</h1>
                        <form onSubmit={handleSubmit((data) =>stupdate(data))}>

                            <input {...register('name')} className='intag form-control my-2' placeholder='Enter student name'/>
                            {errors?.name&&<p className='text-danger'>{errors?.name.message}</p>}

                            <input {...register('password')} className='form-control my-2' placeholder='Enter yuor password' type="password"/>
                            {errors?.password&&<p className='text-danger'>{errors?.password.message}</p>}

                            <input  {...register('img')} type="file"  className='form-control my-2' />
                            {errors?.img&&<p className='text-danger'>{errors?.img.message}</p>}

                            <input type="submit"  className='form-control mt-5 mb-2 btna'/>
                        </form>
                    </div>
                </div>

    </StudentLayout>
    </>)
}