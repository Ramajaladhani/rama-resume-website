import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Database,
  BarChart3,
  Brain,
  Code2,
  Briefcase,
  GraduationCap,
  Award,
  ChevronRight,
} from "lucide-react";

import "./App.css";

function App() {
  const skills = {
    "Data Analytics": [
      "SQL",
      "Power BI",
      "Microsoft Excel",
      "Tableau",
      "Data Cleaning",
      "Data Visualization",
      "Data Preprocessing",
    ],

    "Programming & AI": [
      "Python",
      "Machine Learning",
      "Generative AI",
      "LLM Applications",
      "FastAPI",
      "Streamlit",
    ],

    "Tools & Technologies": [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "FAISS",
      "SQLite",
      "Git",
    ],
  };

  const projects = [
    {
      icon: Brain,
      title: "AI Resume Screening Assistant",
      description:
        "Built an AI-powered resume screening application that accepts job descriptions and multiple PDF resumes, evaluates candidate relevance, identifies skill gaps, and ranks candidates using embeddings and similarity-based scoring.",
      technologies:
        "Python · FastAPI · Streamlit · Gemini · FAISS · SQLite · Embeddings",
    },

    {
      icon: Database,
      title: "Fraud Detection",
      description:
        "Developed a machine learning workflow for credit card fraud detection using a highly imbalanced transaction dataset, including data cleaning, preprocessing, duplicate handling, exploratory analysis, and model evaluation.",
      technologies:
        "Python · Pandas · NumPy · Scikit-learn · Machine Learning",
    },

    {
      icon: BarChart3,
      title: "Data Analytics & Visualization",
      description:
        "Worked with structured business data to perform data cleaning, transformation, analysis, reporting, and visualization using SQL, Excel, Power BI, and Python.",
      technologies:
        "SQL · Excel · Power BI · Python · Data Visualization",
    },
  ];

  return (
    <div className="portfolio">

      {/* NAVIGATION */}
      <header className="navbar">
        <div className="nav-container">

          <a href="#home" className="brand">
            RAMA<span>.</span>
          </a>

          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </nav>

          <a
            href="#contact"
            className="nav-button"
          >
            Let's Connect
          </a>

        </div>
      </header>

      {/* MAIN */}
      <main>

        {/* HERO */}
        <section
          id="home"
          className="hero-section"
        >

          <div className="hero-container">

            <div className="hero-content">

              <div className="availability">
                <span className="status-dot"></span>
                Open to opportunities
              </div>

              <p className="hero-kicker">
                DATA ANALYST · AI / ML ENTHUSIAST
              </p>

              <h1>
                Hi, I'm{" "}
                <span className="gradient-text">
                  Rama
                </span>.
              </h1>

              <h2>
                Data Analyst building practical
                <br />
                <span>data & AI solutions.</span>
              </h2>

              <p className="hero-description">
                Data Analyst with experience in data cleaning,
                SQL, visualization, Power BI, Excel, and Python.
                Currently expanding into Machine Learning,
                Generative AI, and AI-powered applications.
              </p>

              <div className="hero-actions">

                <a
                  href="#projects"
                  className="primary-button"
                >
                  View My Work
                  <ChevronRight size={18} />
                </a>

                <a
                  href="#contact"
                  className="secondary-button"
                >
                  Contact Me
                </a>

              </div>

              <div className="hero-contact">

                <span>
                  <MapPin size={16} />
                  India
                </span>

                <span>
                  <Briefcase size={16} />
                  Data Analytics
                </span>

              </div>

            </div>

            {/* CODE CARD */}
            <div className="hero-card-wrapper">

              <div className="hero-card">

                <div className="hero-card-top">

                  <span className="code-symbol">
                    &lt;/&gt;
                  </span>

                  <span>
                    portfolio.py
                  </span>

                </div>

                <div className="code-content">

                  <p>
                    <span className="code-keyword">
                      class
                    </span>{" "}
                    <span className="code-name">
                      Rama
                    </span>:
                  </p>

                  <p className="indent">
                    role ={" "}
                    <span className="code-string">
                      "Data Analyst"
                    </span>
                  </p>

                  <p className="indent">
                    focus = [
                  </p>

                  <p className="double-indent">
                    <span className="code-string">
                      "Analytics"
                    </span>
                    ,
                  </p>

                  <p className="double-indent">
                    <span className="code-string">
                      "Machine Learning"
                    </span>
                    ,
                  </p>

                  <p className="double-indent">
                    <span className="code-string">
                      "Generative AI"
                    </span>
                  </p>

                  <p className="indent">
                    ]
                  </p>

                  <p className="indent">
                    learning ={" "}
                    <span className="code-boolean">
                      True
                    </span>
                  </p>

                </div>

                <div className="hero-card-bottom">
                  <span>Python</span>
                  <span>SQL</span>
                  <span>Power BI</span>
                </div>

              </div>

              <div className="floating-stat stat-one">

                <Database size={17} />

                <div>
                  <strong>SQL</strong>
                  <small>Data Analysis</small>
                </div>

              </div>

              <div className="floating-stat stat-two">

                <Brain size={17} />

                <div>
                  <strong>AI / ML</strong>
                  <small>Growing Expertise</small>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="section about-section"
        >

          <div className="section-container">

            <div className="section-heading">

              <p className="section-label">
                01 — ABOUT ME
              </p>

              <h2>
                Turning data into
                <span> useful insights.</span>
              </h2>

            </div>

            <div className="about-grid">

              <div className="about-text">

                <p>
                  I am a Data Analyst with professional
                  experience working with data, business
                  reporting, visualization, and Python-based
                  applications.
                </p>

                <p>
                  My core strengths include SQL, Power BI,
                  Excel, data cleaning, preprocessing, and
                  visualization. Alongside analytics, I am
                  developing my skills in Machine Learning,
                  Generative AI, and AI application development.
                </p>

                <p>
                  I enjoy solving practical problems by
                  combining analytical thinking with technology
                  and building solutions that are useful in
                  real-world environments.
                </p>

                <div className="about-highlights">

                  <div>
                    <strong>2+</strong>
                    <span>Years Experience</span>
                  </div>

                  <div>
                    <strong>M.Sc.</strong>
                    <span>Data Science</span>
                  </div>

                  <div>
                    <strong>AI</strong>
                    <span>Current Focus</span>
                  </div>

                </div>

              </div>

              <div className="about-cards">

                <div className="about-card">

                  <div className="card-icon">
                    <BarChart3 size={22} />
                  </div>

                  <h3>
                    Analytics
                  </h3>

                  <p>
                    Data analysis, reporting, dashboards,
                    and visualization.
                  </p>

                </div>

                <div className="about-card">

                  <div className="card-icon">
                    <Code2 size={22} />
                  </div>

                  <h3>
                    Development
                  </h3>

                  <p>
                    Python applications, APIs, and
                    data-driven tools.
                  </p>

                </div>

                <div className="about-card">

                  <div className="card-icon">
                    <Brain size={22} />
                  </div>

                  <h3>
                    AI / ML
                  </h3>

                  <p>
                    Machine learning and Generative AI
                    application development.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* EXPERIENCE */}
        <section
          id="experience"
          className="section experience-section"
        >

          <div className="section-container">

            <div className="section-heading">

              <p className="section-label">
                02 — EXPERIENCE
              </p>

              <h2>
                Where I've <span>worked.</span>
              </h2>

            </div>

            <div className="timeline">

              <div className="timeline-item">

                <div className="timeline-marker"></div>

                <div className="timeline-content">

                  <div className="experience-header">

                    <div>

                      <p className="company-name">
                        Arian Systems
                      </p>

                      <h3>
                        Data Analyst
                      </h3>

                    </div>

                    <span className="experience-date">
                      Sep 2024 — Present
                    </span>

                  </div>

                  <p className="experience-location">
                    Hyderabad, India
                  </p>

                  <ul>

                    <li>
                      Work with business and operational data
                      to support analysis, reporting, and
                      decision-making.
                    </li>

                    <li>
                      Perform data cleaning, preprocessing,
                      handling, and analysis using Python,
                      SQL, and Excel.
                    </li>

                    <li>
                      Create visual reports and dashboards
                      using Power BI and other visualization
                      tools.
                    </li>

                    <li>
                      Develop Python-based web applications
                      and data-driven internal tools.
                    </li>

                    <li>
                      Contribute to AI and automation-oriented
                      application development.
                    </li>

                  </ul>

                  <div className="tag-list">

                    <span>Python</span>
                    <span>SQL</span>
                    <span>Power BI</span>
                    <span>Excel</span>
                    <span>Data Analytics</span>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* SKILLS */}
        <section
          id="skills"
          className="section skills-section"
        >

          <div className="section-container">

            <div className="section-heading">

              <p className="section-label">
                03 — SKILLS
              </p>

              <h2>
                Tools I work <span>with.</span>
              </h2>

            </div>

            <div className="skills-grid">

              {Object.entries(skills).map(
                ([category, items]) => (

                  <div
                    className="skill-card"
                    key={category}
                  >

                    <h3>
                      {category}
                    </h3>

                    <div className="skill-items">

                      {items.map((skill) => (
                        <span key={skill}>
                          {skill}
                        </span>
                      ))}

                    </div>

                  </div>

                )
              )}

            </div>

          </div>

        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          className="section projects-section"
        >

          <div className="section-container">

            <div className="section-heading">

              <p className="section-label">
                04 — PROJECTS
              </p>

              <h2>
                Things I've <span>built.</span>
              </h2>

            </div>

            <div className="projects-grid">

              {projects.map((project) => {

                const Icon = project.icon;

                return (
                  <article
                    className="project-card"
                    key={project.title}
                  >

                    <div className="project-icon">
                      <Icon size={24} />
                    </div>

                    <h3>
                      {project.title}
                    </h3>

                    <p>
                      {project.description}
                    </p>

                    <div className="project-tech">
                      {project.technologies}
                    </div>

                    <div className="project-link">

                      View Project

                      <ExternalLink size={16} />

                    </div>

                  </article>
                );

              })}

            </div>

          </div>

        </section>

        {/* EDUCATION */}
        <section
          id="education"
          className="section education-section"
        >

          <div className="section-container">

            <div className="section-heading">

              <p className="section-label">
                05 — EDUCATION
              </p>

              <h2>
                My academic <span>background.</span>
              </h2>

            </div>

            <div className="education-grid">

              <div className="education-card">

                <div className="education-icon">
                  <GraduationCap size={25} />
                </div>

                <div>

                  <span className="education-year">
                    2021 — 2023
                  </span>

                  <h3>
                    M.Sc. Data Science
                  </h3>

                  <p>
                    Chandigarh University
                  </p>

                  <small>
                    Specialization: Data Mining
                  </small>

                </div>

              </div>

              <div className="education-card">

                <div className="education-icon">
                  <Award size={25} />
                </div>

                <div>

                  <span className="education-year">
                    Undergraduate
                  </span>

                  <h3>
                    B.Sc. Computer Science
                  </h3>

                  <p>
                    Computer Science
                  </p>

                  <small>
                    Foundation in programming and computing.
                  </small>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="section contact-section"
        >

          <div className="section-container">

            <div className="contact-box">

              <div>

                <p className="section-label">
                  06 — CONTACT
                </p>

                <h2>
                  Let's build something
                  <span> meaningful.</span>
                </h2>

                <p>
                  I'm open to Data Analytics, Data Science,
                  Machine Learning, and AI opportunities.
                </p>

              </div>

              <div className="contact-links">

                <a href="mailto:your-email@example.com">

                  <Mail size={18} />

                  <span>
                    Send an Email
                  </span>

                </a>

                <a href="tel:+910000000000">

                  <Phone size={18} />

                  <span>
                    Contact Me
                  </span>

                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >

                  <span className="social-icon">
                    in
                  </span>

                  <span>
                    LinkedIn
                  </span>

                </a>

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                >

                  <span className="social-icon">
                    GH
                  </span>

                  <span>
                    GitHub
                  </span>

                </a>

              </div>

            </div>

          </div>

        </section>

      </main>

      {/* FOOTER */}
      <footer className="footer">

        <div className="footer-container">

          <div className="brand">
            RAMA<span>.</span>
          </div>

          <p>
            © {new Date().getFullYear()} Rama. Built with React.
          </p>

          <a
            href="#home"
            className="back-top"
          >
            Back to top ↑
          </a>

        </div>

      </footer>

    </div>
  );
}

export default App;