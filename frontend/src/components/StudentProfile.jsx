import { Link } from "react-router-dom";
import client from "../helpers/client";

export default function StudentProfile({ sanityStudent }) {
    
    return ( 
        <article className="student-profile">
            <Link to={`/${sanityStudent.slug}`}>
                <h2>{sanityStudent?.studentname}</h2>
                <img src={sanityStudent?.imageUrl} alt={sanityStudent?.studentname} />
            </Link>
            <address>
                <p>E-post: <a href={`mailto:${sanityStudent?.email}`} onClick={(e) => e.stopPropagation()}>{sanityStudent?.email}</a></p>
            </address>
            <p>Bachelorstudie: {sanityStudent?.bachelorprogram}</p>
        </article>
    )
}