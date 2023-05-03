import { Link } from "react-router-dom";
import "./NavBarMobile.scss";
import { FaNewspaper, FaHome, FaUsers } from "react-icons/fa";

function NavBarMobile() {
  return (
    <div>
      <nav>
        <div className="navbarmobile">
          <div>
            <Link to="/" className="logohome">
              <FaHome />
            </Link>
          </div>
          <div>
            <Link to="/ArticlesMobilePage" className="logonews">
              <FaNewspaper />
            </Link>
          </div>
          <div>
            <Link to="/About-us" className="logoabout">
              <FaUsers />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBarMobile;
