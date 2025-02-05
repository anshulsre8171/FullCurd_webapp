import { Link } from "react-router-dom"
const Navbar = () => {

  const nav = [{ className: "nav-item", LclassName: "nav-link active", ariaCurrent: "page", to: "/", title: "Home" },
  { className: "nav-item", LclassName: "nav-link", to: "/login", title: "Login" },
  { className: "nav-item", LclassName: "nav-link", to: "/register", title: "Register" },
  { className: "nav-item", LclassName: "nav-link", to: "/view", title: "View" },
  { className: "nav-item", LclassName: "nav-link disabled", to: "*", title: "other" }
  ]

  return (
    <>
      <nav className="navbar navbar-expand-lg shadow mb-2 ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Web Application
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {nav.map((item,index) => {
                return (<>
                  <li className={item.className}>
                    <Link className={item.LclassName} aria-current={item.ariaCurrent} to={item.to}>{item.title}
                    </Link>
                  </li>
                </>)
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar