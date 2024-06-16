import "./UserProfile.css";
import { NavLink, Outlet } from "react-router-dom";
import viewArticle from "../../assets/Sharing articles-rafiki.png";

function UserProfile() {
  return (
    <div>
      <div className='d-flex article'>
        <div className="card w-25 ab" >
            <img src={viewArticle} className="card-img-top"/>
            <div className="card-body bdy">
                <h4 className="card-title">View Articles</h4>
                <p className="card-text fw-normal">View articles effortlessly with our user-friendly interface, ensuring a seamless and enjoyable reading experience for all users.</p>
                <NavLink to='articles' className='btn text-white'>Click here to view articles</NavLink>
            </div>
        </div>
      </div>
    <Outlet/>
    </div>
  );
}

export default UserProfile;