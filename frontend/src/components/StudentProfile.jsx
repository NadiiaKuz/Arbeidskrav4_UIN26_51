import { Link } from "react-router-dom";
import client from "../helpers/client";

export default function StudentProfile({ sanityStudent }) {
    
    return (
        <Link to={`/${sanityStudent.slug}`}>
            <article>
                <h2>{sanityStudent?.studentname}</h2>
                <img src={sanityStudent?.imageUrl} alt={sanityStudent?.studentname} />
            </article>
        </Link>
    )
}