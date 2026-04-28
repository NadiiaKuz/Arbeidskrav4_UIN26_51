export default function Assignment({a}) {
    
    return (
        <article className="assignment">
            <h3>{a.assignmentname}</h3>
            <p>{a.assignmentdescription}</p>
        </article>
    )
}