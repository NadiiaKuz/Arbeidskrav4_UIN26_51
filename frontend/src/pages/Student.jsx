import { useEffect, useState } from "react";
import client from "../helpers/client";

import Assignment from "../components/Assignment";
import { useParams } from "react-router-dom";

export default function Student() {
    const parameters = useParams()
    const [sanityStudent, setSanityStudent] = useState(null)
    const [sanityAssignments, setSanityAssignments] = useState(null)

    useEffect(() => {
        async function fetchData(slug) {
            // Henter studentdata basert på slug
            const studentData = await client.fetch(
                '*[_type == "students" && slug.current == $slug]{..., "imageUrl": studentimage.asset->url}',
                { slug }
            );
            setSanityStudent(studentData[0]);

            // Henter assignments
            const allAssignments = await client.fetch("*[_type == 'UINAssignment']");
            setSanityAssignments(allAssignments);
        }

        fetchData(parameters.slug);

    }, [parameters]);

    console.log(parameters)
    console.log(sanityAssignments)

    return (
        <main>
            <h1>Student</h1>
            <img src={sanityStudent?.imageUrl} alt={sanityStudent?.studentname} />
            <section>
                <h2>{sanityStudent?.studentname}</h2>
                <address>
                    <p>E-post: <a href={`mailto:${sanityStudent?.email}`}>{sanityStudent?.email}</a></p>
                </address>
                <p>Bachelorstudie: {sanityStudent?.bachelorprogram}</p>
            </section>
            <section>
                <h2>Oversikt over arbeidskrav fra UIN</h2>
                {sanityAssignments?.map(a => <Assignment key={a._id} a={a} />)}
            </section>
        </main>
    )
}