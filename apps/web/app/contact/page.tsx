export default function ContactPage() {
  return (
    <section className="py-20 container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-muted-foreground mb-6">
          Reach out via phone, WhatsApp or email and our team will get back to you within 24 hours.
        </p>

        <div className="space-y-3">
          <a href="tel:+260955950008" className="block text-primary">Call: +260 955 950 008</a>
          <a href="https://wa.me/260955950008" target="_blank" rel="noreferrer" className="block text-primary">WhatsApp: +260 955 950 008</a>
          <a href="mailto:info@petch-tech.com" className="block text-primary">Email: info@petch-tech.com</a>
        </div>
      </div>
    </section>
  );
}
