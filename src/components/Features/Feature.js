import {assets} from "../../images/assets"
import "./Feature.css"


const Feature = () => {
  return (
    <>
      <div className="feature-container">
        <div className="features">
          <div className="row">
            <div className="text-col">
              <h2>Enjoy on your TV</h2>
              <p>
                Watch on smart TVs, PlayStation,Xbox,Chromecast Apple TV,Blu-ray
              </p>
            </div>
            <div className="img-col">
              <img src={assets.feature} />
            </div>
          </div>
        </div>
        <div className="border-line "></div>

        <div className="features">
          <div className="row">
            <div className="img-col">
              <img src={assets.feature2} />
            </div>
            <div className="text-col">
              <h2>Download your shows to watch offline</h2>
              <p>
                Save your favourites easily and always have something to watch.
              </p>
            </div>
          </div>
        </div>
        <div className="border-line "></div>

        <div className="features">
          <div className="row">
            <div className="img-col">
              <img src={assets.feature4} />
            </div>
            <div className="text-col">
              <h2>Download your shows to watch offline</h2>
              <p>
                Save your favourites easily and always have something to watch.
              </p>
            </div>
          </div>
        </div>
        <div className="border-line "></div>
      </div>
    </>
  );
}

export default Feature