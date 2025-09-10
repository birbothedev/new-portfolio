import '../css/componentcss/ContactForm.css'

export function ContactForm({ onClose }) {
    return (
        <div className="form-wrapper">
            <button
                type="button"
                className="close-btn"
                onClick={onClose}
            >
                ✕
            </button>
            <form
                action="https://formspree.io/f/xdklbpdp"
                method="POST"
                className="contact-form"
            >
                <label htmlFor="email" className="email-label">Email Address:</label>
                <input id="email" className="email" type="email" name="email" required />

                <label htmlFor="message" className="email-label">Message:</label>
                <textarea id="message" className="message" name="message" required></textarea>

                <button type="submit" className="submit">Send Message</button>
            </form>
        </div>
    );
}
