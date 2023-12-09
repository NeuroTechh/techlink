import { createClient } from "next-sanity";

const client = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	apiVersion: "2021-08-31",
	dataset: "production",
	useCdn: true,
});

export default client;
