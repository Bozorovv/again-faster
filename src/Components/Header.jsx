import '../Styles/header.css'
import wlogo from '../Image/whitelogo.svg'
import wsearch from '../Image/wsearch.svg'
import wbag from '../Image/wbag.svg'
import waccount from '../Image/waccount.svg'
import dlogo from '../Image/dlogo.svg'
import dsearch from '../Image/dsearch.svg'
import dbag from '../Image/dbag.svg'
import daccount from '../Image/daccount.svg'
import wburger from '../Image/wburger.svg'
import dburger from '../Image/dburger.svg'
import { NavLink, useLocation } from 'react-router-dom'
import { useRef } from 'react'
function Header() {


 

  function openModal(){
    modal.current.classList.add("open")
     document.body.classList.add("no-scroll"); 
  }
  function closeModal(){
    modal.current.classList.remove("open")
     document.body.classList.remove("no-scroll"); 
  }
  let addres = useLocation()
   let modal = useRef()
  return (
    <>
      <div ref={modal} className="modal">
            
        <div className="modal_wrapper">
         <div onClick={closeModal}  className="x">⤭</div>
          <ul>
            <li onClick={closeModal} ><NavLink to={"/"}>Home</NavLink></li>
            <li onClick={closeModal} ><NavLink to={"/collection"}>Collection</NavLink></li>
            <li onClick={closeModal} ><NavLink to={"/plp"}>Plp</NavLink></li>
            <li onClick={closeModal} ><NavLink to={"/pdp"}>Pdp</NavLink></li>
          </ul>
        </div>
      </div>
  
    <div className={addres.pathname === "/"  ? "header" : "main_header" }>
      <div className="container">
        <div className="header_wrapper">
          <div onClick={openModal} className="burger">
             <img src={addres.pathname === "/" ? wburger : dburger} alt="" />
          </div>
          
          <NavLink to={"/"}> <img src={addres.pathname === "/" ? wlogo : dlogo} alt="" /></NavLink>
         
          <ul className='header_list'>
            <NavLink to={"/collection"}> <li>Collection</li></NavLink>
            <NavLink to={"/plp"}>   <li>Plp</li></NavLink>
            <NavLink to={"pdp"}>  <li>Pdp</li></NavLink>
          </ul>
          <div className="header_btn">
            <img src={addres.pathname === "/" ? wsearch : dsearch} alt="" />
            <img src={addres.pathname === "/" ? waccount : daccount} alt="" />
            <img src={addres.pathname === "/" ? wbag : dbag} alt="" />
          </div>
        </div>
      </div>
    </div>
      </>
  )
}

export default Header
