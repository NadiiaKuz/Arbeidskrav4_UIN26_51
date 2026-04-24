import { useEffect, useState } from "react";
import client from "../helpers/client";

import Assignment from "../components/Assignment";

export default function Student() {
    const [sanityAssignments, setSanityAssignments] = useState(null)

    useEffect(() => {
        async function fetchAllAssignments() {
            const allAssignments = await client.fetch("*[_type == 'UINAssignment']")
            setSanityAssignments(allAssignments)
        }

        fetchAllAssignments()
    }, [])

    console.log(sanityAssignments)

    return (
        <main>
            <h1>Student</h1>
            <img src="../website_images/Bobby.jpg" alt="Nadiia Kuz" />
            <section>
                <h2>Nadiia Kuz</h2>
                <address>
                    <p>E-post: <a href="mailto:nadiia.kuz@example.com">nadiia.kuz@example.com</a></p>
                </address>
                <p>Bachelorstudie: Informasjonssystemer, 2. år </p>
            </section>
            <section>
                <h2>Oversikt over arbeidskrav fra UIN</h2>
                {sanityAssignments?.map(a => <Assignment key={a._id} a={a} />)}
            </section>
        </main>
    )
}