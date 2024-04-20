import {assets} from "../../images" 

import "./Home.css"

const Home = () => {
  return (
     <div className="container">
         <div className="header">
             <div className="header-icon">
                  <img src={assets.} alt="icon_image" />
                  {console.log(images[0].logo)}
             </div>
             <div className="header-r">
                <div className="option_select">
                    <select>
                       <option>English</option>
                       <option>Hindi</option>
                    </select>
                </div>
                <div>
                   <button>Sign In</button>
                </div>
                  
             </div>
         </div>
     </div>
 )
}

export default Home