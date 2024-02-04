export async function getProjects(userId: string) {
    console.log("Generating projects for user ID:", userId);
    const response = await fetch("/api/projects", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ userId }),
	});
	const survey = await response.json();
    console.log("Projects generated:", survey);
	return survey;
}
