const projects = [
    {
        title: "Project One",
        description: "A web application designed to optimize workflows and increase efficiency.",
        link: "#",
    },
    {
        title: "Project Two",
        description: "An innovative solution leveraging modern frontend and backend technologies.",
        link: "#",
    },
    // Add more projects as needed.
];

const Portfolio = () => {
    return (
        <main style={{ padding: "2rem", maxWidth: "1000px", margin: "0 auto" }}>
            <h1>Portfolio</h1>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
                {projects.map((project, index) => (
                    <div
                        key={index}
                        style={{
                            border: "1px solid #ccc",
                            padding: "1rem",
                            flex: "1 1 calc(33% - 2rem)",
                            boxSizing: "border-box",
                        }}
                    >
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            Learn More
                        </a>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Portfolio;
