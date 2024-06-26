import { useState } from "react";
import "./Question.css";


export const Question = () => {
  const [contentPara,  setContent] = useState(false);
 

  return (
    <div className="faq">
      <h2>Frequently Asked Questions</h2>
      <ul className="accordion">
        <li>
          <label for="first">What is Netflix?</label>
          <div className="content">
            <p>
              Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries and more – on
              thousands of internet-connected devices. You can watch as much as
              you want, whenever you want, without a single ad – all for one low
              monthly price. There's always something new to discover, and new
              TV shows and movies are added every week!
            </p>
          </div>
        </li>
        <li>
          <label for="first">Where can I watch?</label>
          <div className="content">
            <p>
              Watch anywhere, anytime. Sign in with your Netflix account to
              watch instantly on the web at netflix.com from your personal
              computer or on any internet-connected device that offers the
              Netflix app, including smart TVs, smartphones, tablets, streaming
              media players and game consoles. You can also download your
              favourite shows with the iOS, Android, or Windows 10 app. Use
              downloads to watch while you're on the go and without an internet
              connection. Take Netflix with you anywhere.
            </p>
          </div>
        </li>

        <li>
          <label for="first">How do I cancel?</label>
          <div className="content">
            <p>
              Netflix is flexible. There are no annoying contracts and no
              commitments. You can easily cancel your account online in two
              clicks. There are no cancellation fees – start or stop your
              account anytime.
            </p>
          </div>
        </li>

        <li>
          <label for="first">What can I watch on Netflix</label>
          <div className="content">
            <p>
              Netflix has an extensive library of feature films, documentaries,
              TV shows, anime, award-winning Netflix originals, and more. Watch
              as much as you want, anytime you want.
            </p>
          </div>
        </li>

        <li>
          <label for="first">Is Netflix good for kids?</label>
          <div className="content">
            <p>
              The Netflix Kids experience is included in your membership to give
              parents control while kids enjoy family-friendly TV shows and
              films in their own space. Kids profiles come with PIN-protected
              parental controls that let you restrict the maturity rating of
              content kids can watch and block specific titles you don’t want
              kids to see.
            </p>
          </div>
        </li>
      </ul>

      <div>
        <small>
          Ready to watch? Enter your email to create or restart your membership.
        </small>
        <form className="email-signup">
           <input type="email" placeholder="Email Address" required/>
           <button type="submit">Get Started</button>

        </form>
      </div>
    
    </div>
  );
}
