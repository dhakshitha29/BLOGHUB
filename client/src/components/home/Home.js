import "./Home.css";
import articleImage from "../../assets/Blog post-cuate.png";
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div className='out'>
    <div className='main'>
        <img src={articleImage} className='blogimg' alt="nothing"/>
        <div className='infobox'>
            <h1 className='text-center p-4 mainhead' >Welcome to BlogHub!</h1>
            <h5 className='fw-bold mt-0 mb-2 side'>Explore.  Write.  Connect.</h5>
            <p className='fw-normal mt-0 blog'>A blog app where authors can effortlessly add, manage, and share their articles with readers, fostering creativity and engagement.</p>
            <h5 className='fw-bold side no'>For Readers</h5>
            <ul className="no " style={{listStylePosition : "inside"}}>
                <li>Discover insightful articles across various topics.</li>
                <li>Engage with content by leaving comments and sharing your thoughts.</li>
            </ul>
            <h5 className='fw-bold side no'>For Authors</h5>
            <ul className="no" style={{listStylePosition : "inside"}}>
                <li>Share your expertise by writing and publishing articles.</li>
                <li>Connect with your audience through comments and feedback.</li>
            </ul>
            <h6 className='fw-bold side text-decoration-underline'><Link className="side" to="/signup" >Join our community of readers and authors today!</Link></h6>
        </div>
    </div>
    </div>
  );
}

export default Home;