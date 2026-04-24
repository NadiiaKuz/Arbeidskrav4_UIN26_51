import { useEffect, useState } from "react";
import client from "../helpers/client";

export default function Assignments() {
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
        <>
            <h2>arbeidskrav fra UIN</h2>
            <section>


                {/* <article>
                    <h3>Arbeidskrav 1</h3>
                    <p>Beskrivelse av arbeidskrav 1</p>
                </article>
                <article>
                    <h3>Arbeidskrav 2</h3>
                    <p>Beskrivelse av arbeidskrav 2</p>
                </article>
                <article>
                    <h3>Arbeidskrav 3</h3>
                    <p>Beskrivelse av arbeidskrav 3</p>
                </article>
                <article>
                    <h3>Arbeidskrav 4</h3>
                    <p>Beskrivelse av arbeidskrav 4</p>
                </article> */}
            </section>
        </>
    )
}