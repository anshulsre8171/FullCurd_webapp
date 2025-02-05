import { Link } from "react-router-dom"
export const StudentLayout=({children})=>{

    return(<>
    <div className="container-fluid dashboard">
        <div className="row">
            <div className="col-sm-2 p-3"><h1>Dashboard</h1>
            <ul className="fs-5 ">
               <li className="list-group-item border border p-2 my-2 shadow"><Link to="/dashboard"className="nav-link ">Dashboard</Link></li>
               <li className="list-group-item border border p-2 my-2 shadow"><Link to="/studentreg"className="nav-link ">Add&nbsp;student</Link></li>
                <li className="list-group-item border border p-2 my-2 shadow"><Link to="/view" className="nav-link ">view&nbsp;students</Link></li>
                <li className="list-group-item border border p-2 my-2 shadow"><Link to="/view" className="nav-link ">delete&nbsp;profile</Link></li>
                <li className="list-group-item border border p-2 my-2 mb-5 shadow"><Link to="/view" className="nav-link ">update&nbsp;profile</Link></li>

                <li className="list-group-item border border p-2 mt-5 shadow"><Link to="/" className="nav-link ">Logout</Link></li>
                </ul>
             </div>
            <div className="col-sm-10">{children}</div>
        </div>
    </div>
    
    </>
    )
}