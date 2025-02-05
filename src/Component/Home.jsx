import { Link } from "react-router-dom"

export const Home = () => {

    return (<>
        <div className="container-fluid home">
            
            <div className="row mb-4 mt-0">
            {/* <marquee behaviour="scroll"><span className="hg d-block"> hellooooooo</span></marquee> */}
                <img src="./longnatur.jpg" className="img-fluid p-0 m-0 himg" />
            </div>

            
            <div className="row d-flex align-content-center justify-content-center gx-2 gy-2 text-center " >               
                <div className="col-sm-3 text-bg-success pt-3 m-2 rounded-3 btna shadow"  style={{ height: 60, }}> <Link to="/login" className="nav-link">About</Link></div>
                <div className="col-sm-3 text-bg-success pt-3 m-2 rounded-3 btna shadow" style={{ height: 60, }}><Link to="/login" className="nav-link">Login</Link></div>
                <div className="col-sm-3 text-bg-success pt-3 m-2 rounded-3 btna shadow" style={{ height: 60, }}> <Link to="/register" className="nav-link">Registration</Link></div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h1 className=" text-center m-4">About</h1>
                    <p className=" ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        Lorem ipsum dolor sit amet, Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
        </div>
    </>)
}