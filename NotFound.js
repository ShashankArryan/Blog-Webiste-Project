import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Oops!</h2>
            <p>Sorry, this webpage is not available</p>
            <Link to="/">Click on this link to back to the Homepage...</Link>
        </div>
     );
}
 
export default NotFound;