import { Link } from "react-router-dom";

export default function StudentProfileNadiia({ sanityStudent }) {
    
    return ( 
        <article className="student-profile-nadiia">
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