import { useEffect, useState } from "react";
import client from "../helpers/client";

import { useParams } from "react-router-dom";

export default function Student() {
    const parameters = useParams()
    const [sanityStudent, setSanityStudent] = useState(null)

    useEffect(() => {
        async function fetchData(slug) {
            // Henter studentdata basert på slug
            const studentData = await client.fetch(
                '*[_type == "students" && slug.current == $slug]{..., "imageUrl": studentimage.asset->url}',
                { slug }
            );
            setSanityStudent(studentData[0]);
        }

        fetchData(parameters.slug);

    }, [parameters]);

    console.log(parameters)

    return (
        <main className="student-main">
            <h1>Student</h1>
            <img src={sanityStudent?.imageUrl} alt={sanityStudent?.studentname} />
            <section className="student-info">
                <h2>{sanityStudent?.studentname}</h2>
                <address>
                    <p>E-post: <a href={`mailto:${sanityStudent?.email}`}>{sanityStudent?.email}</a></p>
                </address>
                <p>Bachelorstudie: {sanityStudent?.bachelorprogram}</p>
            </section>
        </main>
    )
}