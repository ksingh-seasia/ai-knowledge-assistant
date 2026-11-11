import { FormEvent, useState } from "react";

type ContactUsProps = {
  onBack: () => void;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactUs({ onBack }: ContactUsProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(false);
    setError("");

    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!email.trim() || !EMAIL_REGEX.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!message.trim()) {
      setError("Please enter a message.");
      return;
    }

    // Simulate client-side submission (no backend endpoint requested).
    console.log("Contact form submitted:", { name, email, message });

    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <main className="page">
      <section className="container">
        <header>
          <p className="eyebrow">GET IN TOUCH</p>
          <h1>Contact Us</h1>
          <p className="subtitle">
            Have a question or feedback? Send us a message below.
          </p>
        </header>

        <section className="card">
          <button type="button" className="back-link" onClick={onBack}>
            ← Back to Assistant
          </button>
        </section>

        <section className="card">
          <h2>Send a message</h2>

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-field">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Jane Doe"
              />
            </div>

            <div className="form-field">
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="jane@example.com"
              />
            </div>

            <div className="form-field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="How can we help?"
                rows={5}
              />
            </div>

            <button type="submit">Send message</button>

            {error && (
              <p className="message error-message" role="alert">
                {error}
              </p>
            )}
            {submitted && !error && (
              <p className="message success-message" role="status">
                Thanks for reaching out! We'll get back to you soon.
              </p>
            )}
          </form>
        </section>
      </section>
    </main>
  );
}
