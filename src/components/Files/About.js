import "./about.css";
import Header from "./Header";
import firstPicture from "../assets/one.jpg";
import secondPicture from "../assets/two.jpg";
import thirdPicture from "../assets/three.jpg";
import Prefooter from "./Prefooter";

function About() {
  return (
    <div className="About-body">
      <div>
        <Header />
        <div className="divCont1">
          <div className="divOne">
            <img
              src={firstPicture}
              alt="first picture"
              width="100%"
              height="100%"
            ></img>
          </div>
          <div className="divTwo">
            <div>
              <h1>Discover Coffee..</h1>
              <h3>Elevating your Coffee Experience</h3>
              <p>
                A coffee shop is a cozy and casual establishment where people
                can enjoy a variety of coffee-based beverages, light snacks, and
                sometimes even pastries or desserts. These establishments are
                typically designed to create a warm and inviting atmosphere,
                often featuring comfortable seating arrangements, soothing
                music, and a welcoming ambiance.
              </p>
            </div>
          </div>
        </div>

        <div className="divCont2">
          <div className="divThree">
            <div>
              <p>
                Customers visit coffee shops not only for their caffeine fix but
                also as social hubs and places to relax, work, or have casual
                meetings. The menu at a coffee shop typically includes a range
                of coffee options such as espresso, cappuccino, latte, and
                brewed coffee. Many coffee shops also offer a selection of teas,
                hot chocolates, and cold beverages like iced coffee or iced tea.
                In addition to drinks, coffee shops often provide a limited menu
                of sandwiches, salads, and baked goods.
              </p>
            </div>
          </div>
          <div className="divFour">
            <img
              src={secondPicture}
              alt="first picture"
              width="100%"
              height="100%"
            ></img>
          </div>
        </div>

        <div className="divCont3">
          <div className="divFive">
            <img
              src={thirdPicture}
              alt="first picture"
              width="100%"
              height="100%"
            ></img>
          </div>
          <div className="divSix">
            <div>
              <p>
                The décor and style of coffee shops can vary widely, from
                minimalist and modern to rustic and cozy, depending on the theme
                and target audience. Coffee shops have become integral parts of
                urban and suburban culture, providing a comfortable and familiar
                setting for people to gather, work, socialize, or simply unwind
                while enjoying their favorite coffee creations.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Prefooter/>
    </div>
  );
}
export default About;
