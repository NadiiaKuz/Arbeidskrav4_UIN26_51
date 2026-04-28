import { createClient } from "@sanity/client"

const client = createClient({
    projectId: "e678dwdh",
    dataset: "production",
    useCdn: true,
    apiVersion: "2026-04-23"
})

export default client