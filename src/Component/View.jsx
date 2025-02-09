import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'
import { StudentLayout } from './StudentLayout'
import Swal from 'sweetalert2'
import { useSelector } from 'react-redux'

export const View = () => {
    const nav = useNavigate()
    const [data, setData] = useState([])

    const get = async () => {
        //  window.localStorage.setItem("usertoken", JSON.stringify(response.data.token))

        // let token= JSON.parse(window.localStorage.getItem("usertoken"));

        const token=useSelector((state)=>state.counter.value)

         if(token==null || token==undefined || token==""){
            nav("/login")

         }else{
        const url = `http://localhost:1140/get`
        const response = await axios.get(url,{
            headers:{
               'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
        //console.log(response.data);
        setData(response.data)
    }
}

    useEffect(() => {
        get()
    }, [])

    const del = async (_id) => {

        if (_id) {
            const url = `http://localhost:1140/delete/${_id}`
            const response = await axios.delete(url)
            Swal.fire({
                icon: "info",
                title: "Delete user",
                text: response?.data?.message
            })
            nav("/view")
            get()
        }
    }

    const Edit = (item) => {
        //alert(item._id)
        nav(`/edit/${item._id}`, { state: item })
    }

    return (
        <StudentLayout>
            <table className="table border p-5 table-striped">
                <thead>
                    <tr className='bg-dark text-light'>
                        <td>Enrollment id</td>
                        <td> Student Name</td>
                        <td>password</td>
                        <td>image</td><td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => {

                            return (<>
                                <tr >
                                    <td>{index + 20000}</td>
                                    <td>{item.name}</td>
                                    <td>{item.password}</td>
                                    <td> <img src={`http://localhost:1140/static/${item.img}`} style={{ minHeight: "100px", width: "100px" }} /></td>
                                    <td><button onClick={() => { del(item._id) }} className='btn-danger btn me-2'>Delete</button>
                                        <button onClick={() => { Edit(item) }} className=' btna btn btn-outline '>Update</button>
                                    </td>
                                </tr>

                            </>)
                        })
                    }
                </tbody>



            </table>
        </StudentLayout>



    )
}
