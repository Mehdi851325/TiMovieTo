

const NavBar = ({setList,setSelectedList}) => {
const listTvHandler =()=>{
  setList('Tv Show')
  setSelectedList(0)
}

  return (
    <div className="nav-bar">
        <div className="logo">
            <h1>TimovieTo</h1>
        </div>
        <div className="nav-btn">
            <button onClick={listTvHandler}>Tv Show</button>
            <button onClick={()=> setList("movie")}>Movie</button>
        </div>
    </div>
  )
}

export default NavBar;