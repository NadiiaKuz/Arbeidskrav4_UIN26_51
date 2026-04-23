import { Link } from "react-router-dom";

export default function StudentProfile() {
    return (
        <Link to={'/nadiia-kuz'}>
            <article>
                <h2>Nadiia Kuz</h2>
                <img src="../website_images/Bobby.jpg" alt="Nadiia Kuz" />
            </article>
        </Link>
    )
}