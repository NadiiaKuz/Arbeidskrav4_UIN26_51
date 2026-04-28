const students = {
    name: "students",
    title: "Studenter",
    type: "document",
    fields: [
        { name: "studentname", title: "Navn", type: "string" },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'studentname',
                slugify: input => input
                                    .toLowerCase()
                                    .replace(/\s+/g, '-') // regular expresions to replace whitespace with dashes
                                    .slice(0, 100)
            }
        },
        { name: "studentimage", title: "Studentbilde", type: "image" },
        { name: "email", title: "E-post", type: "string" },
        { name: "bachelorprogram", title: "Bachelorprogram", type: "string" }
    ]
}

export default students