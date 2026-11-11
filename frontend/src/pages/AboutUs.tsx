type NavigateHome = () => void;

interface AboutUsProps {
  onNavigateHome?: NavigateHome;
}

export default function AboutUs({ onNavigateHome }: AboutUsProps) {
  return (
    <main className="page">
      <section className="container">
        {onNavigateHome && (
          <nav className="app-nav">
            <button className="nav-link-button" onClick={onNavigateHome}>
              ← Back to Assistant
            </button>
          </nav>
        )}

        <header>
          <p className="eyebrow">ABOUT • OUR COMPANY</p>
          <h1>About Us</h1>
          <p className="subtitle">
            Learn more about who we are and what we do.
          </p>
        </header>

        <section className="card about-card">
          <h2>Our Company</h2>
          <p className="placeholder-note">
            (Placeholder content — replace with real company information.)
          </p>
          <p>
            AI Knowledge Assistant is built by a small team passionate about
            making organizational knowledge easy to search and understand.
            We combine retrieval-augmented generation with modern vector
            search to help teams get accurate answers from their own
            documents.
          </p>
        </section>

        <section className="card about-card">
          <h2>Our Mission</h2>
          <p>
            Our mission is to make enterprise knowledge instantly accessible
            and actionable. We believe that every team member should be able
            to ask a question in plain language and get a reliable,
            well-sourced answer without digging through folders of
            documents.
          </p>
        </section>

        <section className="card about-card">
          <h2>Our Team</h2>
          <p>
            We are engineers, designers, and researchers who care deeply
            about building reliable AI tools. Our distributed team works
            across time zones to ship features that make document search
            and question answering faster and more trustworthy.
          </p>
        </section>

        <section className="card about-card">
          <h2>Contact</h2>
          <p>
            Have questions or feedback? Reach out to us at{" "}
            <a href="mailto:hello@aiknowledgeassistant.example">
              hello@aiknowledgeassistant.example
            </a>
            .
          </p>
        </section>
      </section>
    </main>
  );
}
