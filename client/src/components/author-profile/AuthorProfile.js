import "./AuthorProfile.css";
import { NavLink, Outlet } from "react-router-dom";
import {useSelector} from 'react-redux';
import viewArticle from "../../assets/Sharing articles-rafiki.png";
import newArticle from "../../assets/Publish article-amico.png"


function AuthorProfile() {
  let {currentUser}=useSelector(state=>state.userAuthorLoginReducer)
 
  return (
    <div className=" ">
      <div className='d-flex article'>
      <div className="card w-25 ab m-4" >
            <img src={viewArticle} className="card-img-top" alt="nothing"/>
            <div className="card-body bdy">
                <h4 className="card-title">View All Articles</h4>
                <p className="card-text fw-normal">View articles effortlessly with our user-friendly interface, ensuring a seamless and enjoyable reading experience for all users.</p>
                <NavLink className="btn text-white" to="articles" style={{ color: "var(--white)" }}>Click here to view articles</NavLink>
            </div>
        </div>
        <div className="card w-25 ab m-4" >
            <img src={newArticle} className="card-img-top" alt="nothing"/>
            <div className="card-body bdy">
                <h4 className="card-title">Add New Articles</h4>
                <p className="card-text fw-normal">Authors can easily add new articles with our intuitive interface, allowing seamless creation, editing, and publishing of content.  </p>
                 <NavLink className="btn text-white" to="new-article"  style={{ color: "var(--white)" }}>Click here to add articles</NavLink>
            </div>
        </div>
        <div className="card w-25 ab m-4" >
            <img src={viewArticle} className="card-img-top" alt="nothing"/>
            <div className="card-body bdy">
                <h4 className="card-title">Your Articles</h4>
                <p className="card-text fw-normal">View articles effortlessly with our user-friendly interface, ensuring a seamless and enjoyable reading experience for all users.</p>
                <NavLink className="btn text-white" to={`articles-by-author/${currentUser.username}`} style={{ color: "var(--white)" }}>Click here to view articles</NavLink>
            </div>
        </div>
    </div>
      <Outlet />
    </div>
  );
}

export default AuthorProfile;

