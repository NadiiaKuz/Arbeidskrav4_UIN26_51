import StudentProfile from "../components/StudentProfile";
import { useEffect, useState } from "react";
import client from "../helpers/client";

import Assignment from "../components/Assignment";

export default function Home() {
    const [sanityStudent, setSanityStudent] = useState(null)
    const [sanityAssignments, setSanityAssignments] = useState(null)

    useEffect(() => {
        async function fetchAllData() {
            const students = await client.fetch(`*[_type == 'students']{_id, studentname, "slug": slug.current,email, bachelorprogram, "imageUrl": studentimage.asset->url}`)
            setSanityStudent(students)

            // Henter assignments
            const allAssignments = await client.fetch("*[_type == 'UINAssignment']");
            setSanityAssignments(allAssignments);
        }
        fetchAllData()
    }, [])

    console.log(sanityStudent)
    console.log(sanityAssignments)

    return (
        <main>
            <section className="student-list">
                {sanityStudent?.map(student => (<StudentProfile key={student._id} sanityStudent={student} />))}
            </section>
            <section className="assignment-list">
                <h2>Oversikt over arbeidskrav fra UIN</h2>
                {sanityAssignments?.map(a => <Assignment key={a._id} a={a} />)}
            </section>
        </main>
    )
}