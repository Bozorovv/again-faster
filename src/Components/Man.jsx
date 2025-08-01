import bigman from '../Image/bigman.png'
import smallman from '../Image/smallman.png'
import big_tab from '../Image/bigtab.png'
import small_tab from '../Image/smalltab.png'
import '../Styles/man.css'
function Man() {
  return (
    <div className='man'>
      <div className="container">
        <div className="man_wrapper">
            <div className="big">
             
                    <img className='bigman' src={bigman} alt="" />
            </div>
        
            <div className="man_content">
                <div className="small">
                    <img className='smallman' src={smallman} alt="" />
                    
                </div>
                
                <span>Best seller</span>
                <h1>TRULY, AN ALL IN ONE BARBELL</h1>
                <p>Design that matches the performance and quality of other elite level competition bars</p>
                <button>Shop weights</button>
            </div>
            <div className="man_mini">
                  <span>Best seller</span>
                <h1>TRULY, AN ALL IN ONE BARBELL</h1>
                <p>Design that matches the performance and quality of other elite level competition bars</p>
                <button>Shop weights</button>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Man
