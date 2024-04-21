import { assets } from "../../images/assets"

import "./Home.css"

const Home = () => {
  return (
    <div className="container">
      <nav className="nav-container">
        <img className="logo" src={assets.logo} alt="logo-img" />
        <div>
          <button className="language">
            English <img src={assets.down_icon} />
          </button>
          <button>Sign in</button>
        </div>
      </nav>

      <div className="header-content">
        <h1>Unlimited movies, TV shows and more</h1>
        <h3>Watch anywhere. Cancel anytime.</h3>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <form className="email-signup">
           <input type="email" placeholder="Email Address"  required/>
           <button type="submit">Get Started</button>
        </form>
      </div>
    </div>
  );
}

export default Home