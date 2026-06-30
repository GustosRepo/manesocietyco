import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Terms of Service | Mane Society & Co",
  description: "Terms of service for Mane Society & Co hair salon",
};

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--cream)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
          <h1 className="font-[family-name:var(--font-heading)] text-5xl font-light text-[var(--charcoal)] mb-8">
            Terms of Service
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
                Welcome to Mane Society & Co (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By accessing our website, booking an appointment, or using our salon services, you agree to be bound by these Terms of Service.
              </p>
              <p className="leading-relaxed">
                If you do not agree with any part of these terms, please do not use our services. We reserve the right to modify these terms at any time. Your continued use of our services constitutes acceptance of updated terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-light text-[var(--charcoal)] mb-4">
                1. Cancellation & No-Show Policy
              </h2>
              <p className="mb-4 leading-relaxed">
                <strong>IMPORTANT:</strong> Appointments must be cancelled or rescheduled with at least 24 hours&apos; notice.
              </p>
              <ul className="list-disc list-inside space-y-2 leading-relaxed">
                <li>
                  <strong>Cancellations with 24+ hours&apos; notice:</strong> No charge
                </li>
                <li>
                  <strong>Cancellations with less than 24 hours notice:</strong> 50% of service fee charged
                </li>
                <li>
                  <strong>No-show (failed to arrive without notice):</strong> 100% of service fee charged
                </li>
                <li>
                  <strong>Late arrivals (more than 15 minutes):</strong> Services may be rescheduled at stylist's discretion; fees may apply
                </li>
              </ul>
              <p className="mt-4 leading-relaxed">
                Cancellation fees will be charged to the payment method provided at booking. Repeated no-shows may result in requiring a credit card deposit for future bookings or denial of service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-light text-[var(--charcoal)] mb-4">
                2. Service Acceptance & Age Requirements
              </h2>
              <p className="mb-4 leading-relaxed">
                Clients must be at least 18 years old to book services independently. Minors (under 18) must have parental or guardian consent and may require a parent/guardian present during services. By booking, you confirm you meet these requirements and have necessary authorization.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-light text-[var(--charcoal)] mb-4">
                3. Client Responsibilities
              </h2>
              <p className="mb-4 leading-relaxed">Clients agree to:</p>
              <ul className="list-disc list-inside space-y-2 leading-relaxed">
                <li>Disclose all relevant allergies, medical conditions, and medications before services</li>
                <li>Arrive clean and prepared (hair, scalp, skin)</li>
                <li>Follow aftercare instructions provided by stylists</li>
                <li>Respect salon policies and staff members</li>
                <li>Not use phones or engage in disruptive behavior during services</li>
                <li>Report any concerns immediately to salon staff</li>
              </ul>
              <p className="mt-4 leading-relaxed">
                Failure to disclose allergies or medical conditions may result in denial of service and forfeiture of fees.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-light text-[var(--charcoal)] mb-4">
                4. Right to Refuse Service
              </h2>
              <p className="leading-relaxed">
                Mane Society & Co reserves the right to refuse service to anyone who is disruptive, disrespectful, under the influence of alcohol or drugs, or poses a health/safety concern. No refunds will be issued if service is denied due to client conduct or failure to disclose relevant health information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-light text-[var(--charcoal)] mb-4">
                5. Liability Limitations
              </h2>
              <p className="mb-4 leading-relaxed">
                While we use premium professional products and techniques, Mane Society & Co is not liable for:
              </p>
              <ul className="list-disc list-inside space-y-2 leading-relaxed">
                <li>Allergic reactions or sensitivities to products</li>
                <li>Damage to hair resulting from client&apos;s previous treatments elsewhere</li>
                <li>Hair breakage or loss due to pre-existing conditions</li>
                <li>Results that do not match inspiration photos due to hair condition or texture</li>
                <li>Scalp irritation or burns if client failed to disclose sensitivities</li>
                <li>Color results on previously colored or chemically treated hair</li>
              </ul>
              <p className="mt-4 leading-relaxed">
                Clients assume all risk associated with salon services. We recommend a patch test 24-48 hours prior to chemical services if you have known sensitivities.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-light text-[var(--charcoal)] mb-4">
                6. Patch Testing
              </h2>
              <p className="leading-relaxed">
                For color, chemical treatments, or if you have sensitive skin/scalp, a patch test is recommended 24-48 hours prior to service. Clients waive all liability for allergic reactions if a patch test was offered and declined.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-light text-[var(--charcoal)] mb-4">
                7. Payment Terms
              </h2>
              <ul className="list-disc list-inside space-y-2 leading-relaxed">
                <li>Payment is due at the time of service unless prior arrangements are made</li>
                <li>We accept cash, credit cards, and digital payment methods</li>
                <li>A valid payment method is required to book appointments</li>
                <li>Prices are subject to change without notice</li>
                <li>Failed payments may result in service denial and collection efforts</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-light text-[var(--charcoal)] mb-4">
                8. Refund Policy
              </h2>
              <p className="mb-4 leading-relaxed">
                <strong>No refunds are offered for completed services.</strong> If you are dissatisfied with a service immediately following completion, notify a manager within the same day. We will assess the situation and may offer:
              </p>
              <ul className="list-disc list-inside space-y-2 leading-relaxed">
                <li>A complimentary correction appointment</li>
                <li>A credit toward future services</li>
                <li>Partial refund (at management discretion only)</li>
              </ul>
              <p className="mt-4 leading-relaxed">
                No adjustments will be made after 48 hours. This policy does not apply to cancellation or no-show fees.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-light text-[var(--charcoal)] mb-4">
                9. Gift Cards & Promotions
              </h2>
              <ul className="list-disc list-inside space-y-2 leading-relaxed">
                <li>Gift cards are non-refundable</li>
                <li>Gift cards expire 2 years from purchase date</li>
                <li>Promotions and discounts are non-transferable</li>
                <li>Only one promotion per visit applies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-light text-[var(--charcoal)] mb-4">
                10. Intellectual Property
              </h2>
              <p className="leading-relaxed">
                All content on our website, including images, videos, text, logos, and designs, is the property of Mane Society & Co or our licensors. You may not reproduce, distribute, or use any content without written permission. Clients may not photograph other clients or staff without consent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-light text-[var(--charcoal)] mb-4">
                11. Dispute Resolution
              </h2>
              <p className="mb-4 leading-relaxed">
                Any disputes arising from these Terms or salon services shall first be addressed through good-faith discussion with salon management.
              </p>
              <p className="leading-relaxed">
                If unresolved within 30 days, disputes will be governed by the laws of the State of Texas and resolved through mediation or small claims court. Both parties waive the right to jury trial.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-light text-[var(--charcoal)] mb-4">
                12. Limitation of Liability
              </h2>
              <p className="leading-relaxed">
                To the maximum extent permitted by law, Mane Society & Co&apos;s total liability for any claim arising from these Terms or our services shall not exceed the amount paid for that service. In no event shall we be liable for indirect, incidental, or consequential damages.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-light text-[var(--charcoal)] mb-4">
                13. Waiver of Liability
              </h2>
              <p className="leading-relaxed">
                By booking and receiving services at Mane Society & Co, you acknowledge that you have read these Terms of Service and assume all risk. You waive any claims against the Company, its owners, employees, and agents for injuries or damages arising from or related to salon services, except those arising from gross negligence or willful misconduct.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-light text-[var(--charcoal)] mb-4">
                14. Salon Hours & Closures
              </h2>
              <p className="mb-4 leading-relaxed">
                Our salon hours are Tuesday–Saturday, 9:00 AM – 6:00 PM, and closed Sunday–Monday. The salon may close for holidays or staff training without notice. Appointments scheduled during closures will be rescheduled at no cost.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-light text-[var(--charcoal)] mb-4">
                15. Contact Us
              </h2>
              <p className="leading-relaxed">
                For questions or concerns, please contact us:
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
                16. Severability
              </h2>
              <p className="leading-relaxed">
                If any provision of these Terms is found to be unenforceable, that provision will be modified to the minimum extent necessary to make it enforceable, and the remaining provisions will remain in effect.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
