import '../Styles/woman.css'
import wom from '../Image/wom.png'
import { NavLink } from 'react-router-dom'
function Woman() {
  return (
    <div className='woman'>
      <div className="container">
        <div className="women_wrapper">
            <img src={wom} alt="" />
            <h1>Training in comfort</h1>
            <p>Incredibly soft Airlume combed and ringspun cotton + poly fabric provides excellent stretch and recovery during even the most intense workouts.</p>
            <NavLink to={"/plp"}>
              <button>Shop now <span>→</span></button>
            </NavLink>
          
        </div>
      </div>
    </div>
  )
}

export default Woman
