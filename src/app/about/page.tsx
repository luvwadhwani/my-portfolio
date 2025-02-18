export default function About() {
    return (
        <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
            <h1>Resume</h1>

            {/* Profile Summary */}
            <section>
                <h2>Profile Summary</h2>
                <p>
                    Accomplished Engineering Manager offering a wealth of experience in the IT industry, specializing in
                    project delivery and team management with nearly 10 years of experience.
                </p>
            </section>

            {/* Technical Skills */}
            <section>
                <h2>Technical Skills</h2>
                <ul>
                    <li>
                        <strong>Frontend Development:</strong> Angular, React, Vue, JavaScript, HTML, CSS
                    </li>
                    <li>
                        <strong>Backend Development:</strong> Python, API Development
                    </li>
                    <li>
                        <strong>Cloud Services:</strong> AWS, Microsoft Azure
                    </li>
                    <li>
                        <strong>Data Engineering:</strong> PySpark, DataBricks, Power BI
                    </li>
                    <li>
                        <strong>CI/CD:</strong> Jenkins, BitBucket, Docker
                    </li>
                    <li>
                        <strong>Tools:</strong> JIRA, Confluence, GitHub, BitBucket
                    </li>
                </ul>
            </section>

            {/* Work Experience */}
            <section>
                <h2>Work Experience</h2>
                <div>
                    <h3>Software Engineering Manager | Utopus Insights, New York</h3>
                    <p>
                        <em>Oct&apos;22 – Current</em>
                    </p>
                    <ul>
                        <li>Developing and implementing software engineering processes.</li>
                        <li>Leading and managing a team of software engineers (20 members across 3 teams).</li>
                        <li>Communicating progress with stakeholders and ensuring project milestones are met.</li>
                    </ul>
                </div>

                <div>
                    <h3>Software Engineer | Utopus Insights, Bengaluru, Karnataka</h3>
                    <p>
                        <em>Oct&apos;18 - Sep&apos;22</em>
                    </p>
                    <ul>
                        <li>Collaborated with UX designers to craft clean, intuitive interfaces.</li>
                        <li>Engaged with stakeholders to gather requirements and provide updates.</li>
                    </ul>
                </div>

                <div>
                    <h3>Senior Software Engineer | Calient Technologies, Bengaluru, Karnataka</h3>
                    <p>
                        <em>Mar&apos;17 - Sep&apos;18</em>
                    </p>
                    <ul>
                        <li>Designed and implemented user interfaces for web-based applications.</li>
                        <li>Ensured usability, accessibility, and adherence to best practices.</li>
                    </ul>
                </div>

                <div>
                    <h3>Technical Team Lead | Investis Digital, Vadodara, Gujarat</h3>
                    <p>
                        <em>Jul&apos;13 - Oct&apos;16</em>
                    </p>
                    <ul>
                        <li>
                            Provided leadership and guidance to the team, ensuring timely and high-quality delivery.
                        </li>
                        <li>Mentored team members and drove process improvements.</li>
                    </ul>
                </div>
            </section>

            {/* Education */}
            <section>
                <h2>Education</h2>
                <p>
                    <strong>B.E. in IT</strong> - SVIT, Gujarat, 2013
                </p>
            </section>

            {/* Core Competencies */}
            <section>
                <h2>Core Competencies</h2>
                <ul>
                    <li>Project Delivery & Team Management</li>
                    <li>Critical and Creative Problem Solving</li>
                    <li>Data Analytics Strategies</li>
                    <li>Visionary & Strategic Thinking</li>
                    <li>Cloud Computing Solutions</li>
                    <li>Cost Optimization</li>
                    <li>IoT Integration & Cybersecurity Measures</li>
                </ul>
            </section>
        </main>
    );
}
