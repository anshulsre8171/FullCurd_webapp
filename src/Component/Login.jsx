import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import Typewriter from 'typewriter-effect';
const schema = yup
    .object()
    .shape({
        email: yup.string().email().required(),
        password: yup.string().required(),
    })
    .required();

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const Navigate = useNavigate()

    const userLogin = async (d) => {
        const url="http://localhost:1140/login"
        const response = await axios.post(url, d)
        console.log(response);

        if (response?.data.success == true && response?.data.code == 201) {
            const obj = [response.data.token]
            console.log(obj);
            window.localStorage.setItem("usertoken", JSON.stringify(response.data.token))
            Swal.fire({
                icon: "success",
                title: "Login",
                text: response?.data.message,
               
            })
            Navigate("/dashboard")
        } else {
            Swal.fire({
                icon: "error",
                title: "Login",
                text: response?.data.message,  
                toast:true,
                 confirmButtonText: 'ok',
                 showCancelButton:true,
                 timerProgressBar:true,
     
            })
        }
    }

    return (
        <>
            <div className="container login ">
                <div className="row">
                    <div className="col-4 mx-auto regbox pt-4 px-4 border border rounded pb-3">
                        <h1 className='text-center my-3'>Login</h1>
                        <Typewriter
                            options={{
                                strings: ['Hello', 'World'],
                                autoStart: true,
                                loop: true,
                            }}
                             />
                        <form onSubmit={handleSubmit((d) => userLogin(d))}>
                            <div className="box mt-3">
                                <input id="a" {...register('email')} className='form-control ' placeholder='Enter your email' />         
                                {errors?.email && <p className='text-danger'>{errors?.email.message}</p>}
                             
                            </div>
                            <div className="box">
                                <input id="a"  {...register('password')} type="password" className='form-control my-3' placeholder='Enter your password' />
                                {errors?.password && <p className='text-danger'>{errors?.password.message}</p>}
                              
                            </div>

                            <input type="submit" className='form-control mt-5 mb-2 btna' />
                        </form>
                        <Link to="/register" className='text-dark text-decoration-none '>Don't have account?</Link>
                    </div>
                </div>

            </div>

        </>)
}
export default Login
