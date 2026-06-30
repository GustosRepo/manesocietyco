import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Privacy Policy | Mane Society & Co",
  description: "Privacy policy for Mane Society & Co hair salon",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--cream)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
          <h1 className="font-[family-name:var(--font-heading)] text-5xl font-light text-[var(--charcoal)] mb-8">
            Privacy Policy
          </h1>
          <div className="prose prose-lg max-w-none text-[var(--charcoal)]">
            <p className="text-sm text-white/60 mb-8">
              Last Updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-light text-[var(--charcoal)] mb-4">
                Introduction
              </h2>
              <p className="mb-4 leading-relaxed">
                Mane Society & Co (&quot;we,&quot; &quot;us,&quot; &quot;our,&quot; or &quot;Company&quot;) operates the website located at manesocietyco.com and related services. We are committed to protecting your privacy and ensuring you have a positive experience on our website and at our salon.
              </p>
              <p className="leading-relaxed">
                This Privacy Policy explains what information we collect, how we use it, and what rights you have regarding your personal data. Please read this policy carefully. If you do not agree with our practices, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-light text-[var(--charcoal)] mb-4">
                1. Information We Collect
              </h2>
              <h3 className="font-semibold text-lg mb-2">Personal Information You Provide</h3>
              <ul className="list-disc list-inside mb-4 space-y-2 leading-relaxed">
                <li>Name, phone number, and email address</li>
                <li>Appointment booking details and service history</li>
                <li>Payment information (processed securely by third-party payment processors)</li>
                <li>Hair type, allergies, and service preferences</li>
                <li>Communications you send to us (emails, contact forms, messages)</li>
              </ul>

              <h3 className="font-semibold text-lg mb-2">Automatically Collected Information</h3>
              <ul className="list-disc list-inside space-y-2 leading-relaxed">
                <li>IP address and device type</li>
                <li>Browser type and operating system</li>
                <li>Pages visited and time spent on our website</li>
                <li>Cookie data for website functionality</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-light text-[var(--charcoal)] mb-4">
                2. How We Use Your Information
              </h2>
              <p className="mb-4 leading-relaxed">We use your information to:</p>
              <ul className="list-disc list-inside space-y-2 leading-relaxed">
                <li>Schedule and confirm your appointments</li>
                <li>Process payments and send invoices</li>
                <li>Provide you with salon services and customer support</li>
                <li>Send appointment reminders and promotional updates (with your consent)</li>
                <li>Comply with legal obligations and prevent fraud</li>
                <li>Improve our website and services</li>
                <li>Maintain health and safety records as required by Texas salon regulations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-light text-[var(--charcoal)] mb-4">
                3. Sensitive Health Information
              </h2>
              <p className="leading-relaxed">
                Information about allergies, scalp conditions, or medical history shared during consultations is kept confidential and used only to provide safe, personalized salon services. We do not sell this information and only share it with salon staff who need to know to serve you properly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-light text-[var(--charcoal)] mb-4">
                4. Data Security
              </h2>
              <p className="leading-relaxed">
                We implement industry-standard security measures including encryption and secure servers to protect your personal information. Payment processing is handled by PCI-DSS compliant third-party processors. However, no system is completely secure. While we strive to protect your data, we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-light text-[var(--charcoal)] mb-4">
                5. Third-Party Sharing
              </h2>
              <p className="mb-4 leading-relaxed">We may share your information with:</p>
              <ul className="list-disc list-inside space-y-2 leading-relaxed">
                <li>Payment processors and financial institutions</li>
                <li>Email and appointment booking service providers</li>
                <li>Legal authorities if required by law</li>
              </ul>
              <p className="mt-4 leading-relaxed">
                We do not sell, rent, or trade your personal information to third parties for marketing purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-light text-[var(--charcoal)] mb-4">
                6. Cookies and Tracking
              </h2>
              <p className="leading-relaxed">
                Our website uses cookies to remember your preferences and improve your experience. You can disable cookies in your browser settings, though some features may not function properly. We do not use tracking pixels for cross-site advertising.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-light text-[var(--charcoal)] mb-4">
                7. Your Rights
              </h2>
              <p className="mb-4 leading-relaxed">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 leading-relaxed">
                <li>Access and review your personal data</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information (subject to legal requirements)</li>
                <li>Opt out of promotional emails</li>
                <li>Request a copy of your data in a portable format</li>
              </ul>
              <p className="mt-4 leading-relaxed">
                To exercise these rights, contact us at the address below.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-light text-[var(--charcoal)] mb-4">
                8. Children's Privacy
              </h2>
              <p className="leading-relaxed">
                Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If we learn we have collected such information, we will delete it promptly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-light text-[var(--charcoal)] mb-4">
                9. Data Retention
              </h2>
              <p className="leading-relaxed">
                We retain your personal information as long as necessary to provide services, comply with legal obligations, and resolve disputes. Appointment and payment records are typically retained for 7 years as per standard business practice. You may request deletion at any time, subject to legal requirements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-light text-[var(--charcoal)] mb-4">
                10. Contact Us
              </h2>
              <p className="leading-relaxed">
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
              <div className="mt-4 p-4 bg-white rounded">
                <p className="font-semibold">Mane Society & Co</p>
                <p>5922 Yorktown Blvd Ste 110</p>
                <p>Corpus Christi, TX 78414</p>
                <p>Phone: (361) 555-MANE</p>
                <p>Email: info@manesocietyco.com</p>
              </div>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-light text-[var(--charcoal)] mb-4">
                11. Policy Changes
              </h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated &quot;Last Updated&quot; date. Your continued use of our services constitutes acceptance of the updated policy.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
