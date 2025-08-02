import feature from '../Image/feature.png'
import featurre from '../Image/feaa.jpg'
import '../Styles/feature.css'
function Feature() {
  return (
    <div className='feature'>
      <div className="container">
        <div className="feature_wrapper">
            <div className="feature_text">
                <span>Feature blog</span>
                <h1>A day in the woods</h1>
                <p>Conditioning Sandbag is a workout favorite that offers a versatile middle ground between the stability of a loaded barbell and the unpredictability of the playing field. </p>
                <button>Read now</button>
            </div>
            <div className="feature_img">

                <img src={feature} alt="" />
            </div>
            <div className="featurre_img">
              <img src={featurre} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Feature
