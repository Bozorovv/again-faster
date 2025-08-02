import '../Styles/man2.css'
import smal from '../Image/smal.png'
import { NavLink } from 'react-router-dom'
function Man2() {
  return (
    <div className='man2'>
         <img className='smal' src={smal} alt="" />
      <div className="container">
        <div className="man2_wrapper">
           
            <h1>New Arrivals</h1>
           <NavLink to={"/plp"}> <button> Shop now </button></NavLink>
        </div>
      </div>
    </div>
  )
}

export default Man2
