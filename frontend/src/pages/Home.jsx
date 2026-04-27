import StudentProfile from "../components/StudentProfile";
import { useEffect, useState } from "react";
import client from "../helpers/client";

export default function Home() {
    const [sanityStudent, setSanityStudent] = useState(null)

    useEffect(() => {
        async function fetchAllStudents() {
            const students = await client.fetch(`*[_type == 'students']{_id, studentname, "slug": slug.current, "imageUrl": studentimage.asset->url}`)
            setSanityStudent(students)
        }
        fetchAllStudents()
    }, [])

    console.log(sanityStudent)

    return (
        <main>
            <h1>Velkommen til forsiden til UIN26_51-gruppen</h1>
            <section className="student-list">
                {sanityStudent?.map(student => (<StudentProfile key={student._id} sanityStudent={student} />))}
            </section>
        </main>
    )
}