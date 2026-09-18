import { useState } from "react";

function Subscribe() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    setMessage("Thank you for subscribing!");
    setEmail("");
  }

  return (
    <section id="signup">
      <h2>Subscribe</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <button type="submit">Subscribe</button>
      </form>

      <p>{message}</p>
    </section>
  );
}

export default Subscribe;