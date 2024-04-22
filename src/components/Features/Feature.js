import {assets} from "../../images/assets"
import "./Feature.css"


const Feature = () => {
  return (
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

      <div className="row">
        <div className="img-col">
          <img src={assets.feature2} />
        </div>
        <div className="text-col">
          <h2>Download your shows to watch offline</h2>
          <p>Save your favourites easily and always have something to watch.</p>
        </div>
      </div>

      <div className="row">
        <div className="text-col">
          <h2>Watch everywhere</h2>
          <p>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
        <div className="img-col">
          <img src={assets.feature3} />
        </div>
      </div>

      <div className="row">
        <div className="img-col">
          <img src={assets.feature4} />
        </div>
        <div className="text-col">
          <h2>Download your shows to watch offline</h2>
          <p>Save your favourites easily and always have something to watch.</p>
        </div>
      </div>
    </div>
  );
}

export default Feature