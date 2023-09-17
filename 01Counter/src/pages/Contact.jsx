function ContactDesign() {
  return (
    <>
      <section class="contact">
        <div class="contact-content">
          <h2>Contact Us</h2>
          <p>
            Feel free to get in touch with us using the contact form or the
            provided contact details below.
          </p>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
      <footer>
        <p>&copy; 2023 Your Website. All rights reserved.</p>
      </footer>
    </>
  );
}

export default ContactDesign
