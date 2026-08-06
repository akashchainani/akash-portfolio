"use client";

import { useEffect, useState } from "react";
import { practiceProjects, skizProjects, type Project } from "./project-data";

type Mode = "practice" | "skizlunck";

export default function Home() {
  const [mode, setMode] = useState<Mode>("practice");
  const [isShifting, setIsShifting] = useState(false);
  const [shiftLabel, setShiftLabel] = useState("ENTERING SKIZLUNCK");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const isSkiz = mode === "skizlunck";

  useEffect(() => {
    document.body.dataset.mode = mode;
    document.body.style.overflow = selectedProject ? "hidden" : "";
    document.title = isSkiz
      ? "Skizlunck — The Other Side of Akash"
      : "Akash Chainani — Architectural Designer";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [mode, isSkiz, selectedProject]);

  const shiftMode = () => {
    if (isShifting) return;
    setSelectedProject(null);
    setShiftLabel(isSkiz ? "RETURNING TO PRACTICE" : "ENTERING SKIZLUNCK");
    setIsShifting(true);
    window.setTimeout(() => {
      setMode(isSkiz ? "practice" : "skizlunck");
      window.scrollTo({ top: 0, behavior: "auto" });
    }, 280);
    window.setTimeout(() => setIsShifting(false), 820);
  };

  const projects = isSkiz ? skizProjects : practiceProjects;

  return (
    <main className={`site-shell ${isShifting ? "is-shifting" : ""}`}>
      <div className="shift-curtain" aria-hidden="true">
        <span>{shiftLabel}</span>
      </div>

      <header className="site-header">
        <a className="identity" href="#home" aria-label="Akash Chainani, home">
          <span className="identity-mark">A/C</span>
          <span className="identity-copy">
            Akash Chainani
            <small>{isSkiz ? "Observer of improbable things" : "Architectural designer"}</small>
          </span>
        </a>

        <nav className="main-nav" aria-label="Primary navigation">
          <a href="#home">Home</a>
          <a href="#work">{isSkiz ? "Fragments" : "Work"}</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="mode-button" onClick={shiftMode} aria-pressed={isSkiz}>
          <span className="mode-dot" />
          {isSkiz ? "Exit Skizlunck" : "Skizlunck"}
        </button>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">
            <span>Chicago / New York</span>
            <span>{isSkiz ? "Transmission 001" : "Available for opportunities"}</span>
          </p>

          <h1>
            {isSkiz ? (
              <>
                A place for thoughts
                <em>that refuse the brief.</em>
              </>
            ) : (
              <>
                I design buildings,
                <em>systems &amp; possible worlds.</em>
              </>
            )}
          </h1>

          <div className="hero-bottom">
            <p className="hero-intro">
              {isSkiz
                ? "Skizlunck is my unclassified territory: philosophy, speculative writing, strange 3D objects, playable worlds and questions without clients."
                : "Architectural designer combining technical precision, computational curiosity and human experience—from complex BIM delivery to speculative design."}
            </p>
            <a className="arrow-link" href="#work">
              {isSkiz ? "Read the fragments" : "Explore selected work"}
              <span aria-hidden="true">↘</span>
            </a>
          </div>
        </div>

        <div className="hero-machine" aria-hidden="true">
          <div className="machine-grid" />
          <div className="machine-orbit orbit-one" />
          <div className="machine-orbit orbit-two" />
          <div className="machine-core">
            <span>{isSkiz ? "?" : "AC"}</span>
          </div>
          <p className="machine-code">{isSkiz ? "UNKNOWN / UNBOUND" : "DESIGN / SYSTEM / SPACE"}</p>
          <p className="machine-coordinates">41.8781° N<br />87.6298° W</p>
        </div>
      </section>

      <section className="signal-strip" aria-label="Profile highlights">
        {(isSkiz
          ? [
              ["∞", "Unfinished questions"],
              ["03", "Other dimensions"],
              ["404", "Answers not found"],
              ["ON", "Curiosity engine"],
            ]
          : [
              ["04", "Years in practice"],
              ["02", "Best Design awards"],
              ["30+", "Projects contributed to"],
              ["M.Arch", "SAIC, Chicago"],
            ]
        ).map(([value, label]) => (
          <div className="signal" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      {isSkiz && (
        <section className="manifesto">
          <p className="eyebrow">Fragment 000 / A working premise</p>
          <blockquote>
            “There is only one reality in existence—the universe as it is.
            <em>What differs from my version to yours is our perception of it.</em>”
          </blockquote>
          <span>— Akash Chainani</span>
        </section>
      )}

      <section className="work-section" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{isSkiz ? "Index of uncertainties" : "Selected work"}</p>
            <h2>{isSkiz ? "Fragments & other worlds" : "Built logic. Human consequence."}</h2>
          </div>
          <p>
            {isSkiz
              ? "Writing, games and digital matter from beyond the architecture tab. Each card is a doorway into an expandable archive."
              : "A cross-section of professional practice, academic research and material experimentation. Select a project for its story and role."}
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <button
              className={`project-card ${project.featured ? "project-card--featured" : ""}`}
              key={project.number}
              onClick={() => setSelectedProject(project)}
              aria-label={`Open project: ${project.title}`}
            >
              <div className={`project-visual ${project.className}`}>
                {project.image ? (
                  <img
                    className="project-image"
                    src={project.image}
                    alt={project.alt ?? ""}
                    loading={index < 2 ? "eager" : "lazy"}
                  />
                ) : (
                  <div className="visual-form" />
                )}
                <span className="project-number">{project.number}</span>
                <span className="project-open" aria-hidden="true">↗</span>
              </div>
              <div className="project-caption">
                <h3>{project.title}</h3>
                <p>{project.caption}</p>
              </div>
            </button>
          ))}
        </div>

        {!isSkiz && (
          <div className="work-actions">
            <a href="/docs/akash-chainani-portfolio.pdf" target="_blank" rel="noreferrer">
              View complete portfolio <span>↗</span>
            </a>
            <p>26 pages · Academic + professional work · 2026</p>
          </div>
        )}
      </section>

      <section className="profile-section">
        <div className="profile-lead">
          <p className="eyebrow">{isSkiz ? "What belongs here" : "Profile / approach"}</p>
          <h2>
            {isSkiz
              ? "A mind is larger than its professional category."
              : "Equal parts architect, model-builder and systems thinker."}
          </h2>
        </div>
        <div className="profile-body">
          <p>
            {isSkiz
              ? "Skizlunck keeps the uncategorizable work visible. It is not a rejection of architecture; it is the surplus curiosity that architecture produces."
              : "Four years of international practice taught me how complex work gets delivered. SAIC strengthened the experimental side: research, adaptive reuse, landscape and the social life of space."}
          </p>
          <div className="capability-list">
            {(isSkiz
              ? ["Creative writing", "Video-game worlds", "3D experiments", "Philosophy + criticism"]
              : ["Concept + spatial design", "Revit BIM + coordination", "Computational modeling", "Visualization + storytelling"]
            ).map((item, index) => (
              <div key={item}>
                <span>0{index + 1}</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-slice" id="contact">
        <div className="contact-grid">
          <div>
            <p className="eyebrow">{isSkiz ? "Signal back" : "Start a conversation"}</p>
            <h2>{isSkiz ? "Found a thought worth continuing?" : "Looking for a designer who can think and deliver?"}</h2>
          </div>
          <div className="contact-details">
            <p>
              Based in Chicago and open to Architectural Designer opportunities in Chicago and New York.
            </p>
            <span className="availability"><i /> Authorized to work in the U.S. under F-1 OPT</span>
          </div>
        </div>

        <div className="contact-links">
          <a href="mailto:akash.s.chainani@gmail.com">
            <small>Email</small>
            <strong>akash.s.chainani@gmail.com</strong>
            <span>↗</span>
          </a>
          <a href="tel:+13125323678">
            <small>Phone</small>
            <strong>312 532 3678</strong>
            <span>↗</span>
          </a>
          <a href="https://www.linkedin.com/in/akash-chainani-637048194/" target="_blank" rel="noreferrer">
            <small>Network</small>
            <strong>LinkedIn</strong>
            <span>↗</span>
          </a>
          <a href="/docs/akash-chainani-resume.pdf" target="_blank" rel="noreferrer">
            <small>Credentials</small>
            <strong>Résumé PDF</strong>
            <span>↗</span>
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <span>© 2026 Akash Chainani</span>
        <span>{isSkiz ? "Made of questions" : "Designed between rigor and curiosity"}</span>
        <a href="#home">Back to top ↑</a>
      </footer>

      {selectedProject && (
        <div
          className="project-dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-dialog-title"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setSelectedProject(null);
          }}
        >
          <article className="dialog-panel">
            <button className="dialog-close" onClick={() => setSelectedProject(null)} aria-label="Close project">
              Close <span>×</span>
            </button>
            <div className={`dialog-visual ${selectedProject.className}`}>
              {selectedProject.image ? (
                <img src={selectedProject.image} alt={selectedProject.alt ?? ""} />
              ) : (
                <div className="visual-form" />
              )}
            </div>
            <div className="dialog-content">
              <p className="eyebrow">{selectedProject.type} / {selectedProject.year}</p>
              <h2 id="project-dialog-title">{selectedProject.title}</h2>
              <p className="dialog-description">{selectedProject.description}</p>
              <dl>
                <div>
                  <dt>Scope / contribution</dt>
                  <dd>{selectedProject.contribution}</dd>
                </div>
                <div>
                  <dt>Tools / methods</dt>
                  <dd>{selectedProject.tools}</dd>
                </div>
                {selectedProject.credit && (
                  <div>
                    <dt>Context</dt>
                    <dd>{selectedProject.credit}</dd>
                  </div>
                )}
              </dl>
              {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                <div className="dialog-gallery" aria-label={`${selectedProject.title} gallery`}>
                  {selectedProject.gallery.map((image) => (
                    <img key={image.src} src={image.src} alt={image.alt} loading="lazy" />
                  ))}
                </div>
              )}
            </div>
          </article>
        </div>
      )}
    </main>
  );
}
