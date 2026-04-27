import StudentProfileNadiia from "../components/StudentProfileNadiia";
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

    // Mapping av slug til komponent
    // Hvis det kommer flere studenter, kan vi legge til flere komponenter her
    const studentComponents = {
        'nadiia-kuz': StudentProfileNadiia
    };

    return (
        <main>
            <section className="student-list">
                {sanityStudent?.map(student => {
                    // Velger komponent basert på slug
                    const StudentComponent = studentComponents[student.slug];
                    return <StudentComponent key={student._id} sanityStudent={student} />
                })}
            </section>
            <section className="assignment-list">
                <h2>Oversikt over arbeidskrav fra UIN</h2>
                {sanityAssignments?.map(a => <Assignment key={a._id} a={a} />)}
            </section>
        </main>
    )
}