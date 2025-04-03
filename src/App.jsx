import { useState } from "react"
import { useEffect } from "react"
import PostPage from "./components/PostsPage"
function App() {
  const [posts, setPosts] = useState('')

  useEffect(() => {

    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => {
        type: "error"
        message: err.message
      })

  }, [])
  console.log(posts)
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-sm navbar-light bg-secondary">
          <div className="container">
            <a className="navbar-brand" href="#">Context</a>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" href="#" aria-current="page">Home </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link" href="#">Link</a>
                </li>
              </ul>
              <form className="d-flex my-2 my-lg-0">
                <input className="form-control me-sm-2" type="text" placeholder="Search" />
                <button className="btn btn-info my-2 my-sm-0" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <PostPage />
      </main>
      <footer>
        <nav className="navbar fixed-bottom navbar-expand-sm  bg-secondary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Context.inc°</a>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </footer>

    </>
  )
}

export default App
