import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Santwanaa collects, uses, and protects your personal information. Your privacy and confidentiality matter to us.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="font-serif text-xl sm:text-2xl font-bold text-dark mb-4 pb-2 border-b border-secondary/25">
        {title}
      </h2>
      <div className="text-dark-light leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

function Disclaimer({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-accent/8 border-l-4 border-accent rounded-r-xl px-5 py-4 text-dark leading-relaxed">
      {children}
    </div>
  );
}

export default function PrivacyPolicyPage() {
  const effectiveDate = "18 June 2025";

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-warm-bg border-b border-secondary/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider rounded-full mb-4">
            Legal
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-dark mb-3">Privacy Policy</h1>
          <p className="text-dark-light text-sm">
            Effective date: {effectiveDate} &nbsp;·&nbsp; Last updated: {effectiveDate}
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        <Section title="1. Who We Are">
          <p>
            Santwanaa is a lifestyle management service offering habit coaching and emotional
            wellness support, operated by Tanaya, an Educational Psychologist, based in India.
          </p>
          <p>
            <strong>Contact:</strong>{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent hover:underline">
              {CONTACT_EMAIL}
            </a>{" "}
            · {CONTACT_PHONE}
          </p>
        </Section>

        <Section title="2. Information We Collect">
          <p>
            When you use our contact form, we collect: your <strong>name</strong>, <strong>email address</strong>,{" "}
            <strong>phone number</strong>, area of interest, and message. This information is collected
            with your knowledge and consent.
          </p>
          <p>
            During coaching or wellness sessions, you may share personal information including
            lifestyle details, emotional experiences, and health-related information. This is
            treated as sensitive personal data (see Section 7).
          </p>
          <p>
            We do not collect payment information directly. Payments, if applicable, are handled
            through secure third-party processors.
          </p>
        </Section>

        <Section title="3. How We Use Your Information">
          <ul className="list-disc pl-5 space-y-1.5">
            <li>To respond to your enquiries and schedule discovery calls</li>
            <li>To provide personalised coaching and emotional wellness services</li>
            <li>To send you relevant programme updates (only with your consent)</li>
            <li>To fulfil our obligations to you as a client</li>
          </ul>
          <p className="font-medium text-dark">
            We do not sell, rent, or trade your personal information to any third party.
          </p>
        </Section>

        <Section title="4. Third-Party Services">
          <p>
            We use the following third-party tools, each of which may process your data under their
            own privacy policies:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <strong>Formcarry</strong> — processes contact form submissions and delivers them to us.
            </li>
            <li>
              <strong>Calendly</strong> — used for scheduling discovery calls and sessions.
            </li>
            <li>
              <strong>Vercel</strong> — hosts this website and may log standard web server data (IP
              address, browser type, page visits).
            </li>
          </ul>
          <p>
            We encourage you to review the privacy policies of these services if you have concerns
            about how they handle your data.
          </p>
        </Section>

        <Section title="5. Data Storage and Security">
          <p>
            We take reasonable and appropriate technical and organisational measures to protect your
            personal data from unauthorised access, disclosure, alteration, or destruction, in
            accordance with the{" "}
            <strong>Information Technology Act, 2000</strong> and the{" "}
            <strong>
              Digital Personal Data Protection Act, 2023 (DPDPA)
            </strong>
            .
          </p>
          <p>
            Session notes and personal disclosures made during coaching sessions are kept strictly
            confidential and stored securely. They are not shared with any third party except as
            described in Section 8 (Confidentiality and Its Limits).
          </p>
        </Section>

        <Section title="6. Your Rights Under the DPDPA 2023">
          <p>
            As a <em>Data Principal</em> under India&apos;s Digital Personal Data Protection Act,
            2023, you have the right to:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <strong>Access</strong> — request a summary of the personal data we hold about you
            </li>
            <li>
              <strong>Correct</strong> — request correction of inaccurate or incomplete data
            </li>
            <li>
              <strong>Erase</strong> — request deletion of your data, subject to legal obligations
            </li>
            <li>
              <strong>Withdraw consent</strong> — at any time, without affecting lawfulness of prior
              processing
            </li>
            <li>
              <strong>Nominate</strong> — designate a person to exercise your rights in case of
              incapacity or death
            </li>
            <li>
              <strong>Grievance redressal</strong> — raise a complaint with us or with the Data
              Protection Board of India once it is constituted
            </li>
          </ul>
          <p>
            To exercise any of these rights, email us at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent hover:underline">
              {CONTACT_EMAIL}
            </a>
            . We will respond within a reasonable time.
          </p>
        </Section>

        <Section title="7. Sensitive Personal Data">
          <p>
            Information you share in sessions — including mental health status, emotional
            experiences, and lifestyle details — constitutes <em>sensitive personal data</em> under
            the IT (Reasonable Security Practices and Procedures and Sensitive Personal Data or
            Information) Rules, 2011.
          </p>
          <p>
            We collect and process sensitive personal data only with your explicit, informed consent,
            and use it solely to deliver our services to you. You may withdraw this consent at any
            time by contacting us.
          </p>
        </Section>

        <Section title="8. Confidentiality and Its Limits">
          <p>
            Everything shared in coaching and wellness sessions is treated with strict
            confidentiality. However, there are legally recognised exceptions where disclosure may
            be necessary:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <strong>Court orders:</strong> We may be required to disclose information pursuant to
              a valid court order or legal process.
            </li>
            <li>
              <strong>Imminent risk of harm:</strong> If there is a serious, credible, and imminent
              risk of harm to you or another person, we may take appropriate action, including
              contacting emergency services.
            </li>
            <li>
              <strong>Child protection:</strong> Disclosures involving harm to, or by, a minor may
              require reporting under applicable child protection laws.
            </li>
          </ul>
          <p>
            These situations are rare. We will always handle them with sensitivity, and where
            possible, discuss with you before acting.
          </p>
        </Section>

        <Section title="9. Mental Health and Services Disclaimer">
          <Disclaimer>
            <strong>Santwanaa provides lifestyle coaching and emotional wellness support. Our
            services are not a substitute for clinical psychiatric diagnosis, medical treatment, or
            emergency mental health care.</strong>
            <br /><br />
            Tanaya is a qualified Educational Psychologist. Services are delivered within the scope
            of lifestyle management coaching. Clients who require clinical psychiatric or medical
            intervention will be referred to appropriate registered professionals.
          </Disclaimer>

          <p className="mt-4 font-medium text-dark">
            If you are in a mental health crisis or feel unsafe, please reach out immediately:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <strong>iCall (TISS):</strong> 9152987821
            </li>
            <li>
              <strong>Vandrevala Foundation Helpline:</strong> 1860-2662-345 (24/7, free)
            </li>
            <li>
              <strong>NIMHANS Helpline:</strong> 080-46110007
            </li>
            <li>
              <strong>Snehi:</strong> 044-24640050
            </li>
            <li>
              <strong>Emergency services:</strong> 112
            </li>
          </ul>
        </Section>

        <Section title="10. Cookies">
          <p>
            This website uses minimal cookies required for basic functionality (e.g. navigation,
            security). We do not use third-party advertising or tracking cookies. Vercel, our
            hosting provider, may collect anonymised analytics data.
          </p>
        </Section>

        <Section title="11. Children's Privacy">
          <p>
            Our services are intended for adults (18 years and above). We do not knowingly collect
            personal data from anyone under 18 without verified parental or guardian consent. If you
            believe a minor has submitted data to us, please contact us for prompt deletion.
          </p>
        </Section>

        <Section title="12. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. If we make material changes, we
            will notify you by email or by posting a notice on this website. Continued use of our
            services after changes take effect constitutes acceptance of the updated policy.
          </p>
        </Section>

        <Section title="13. Contact Us">
          <p>For any privacy-related queries, or to exercise your rights under this policy:</p>
          <div className="bg-warm-bg rounded-xl p-5 mt-2">
            <p className="font-semibold text-dark mb-1">Santwanaa — Privacy Contact</p>
            <p>
              Email:{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent hover:underline">
                {CONTACT_EMAIL}
              </a>
            </p>
            <p>Phone: {CONTACT_PHONE}</p>
          </div>
        </Section>

        <div className="mt-10 pt-8 border-t border-secondary/20 text-xs text-dark-light">
          <p>
            This privacy policy was drafted to comply with the{" "}
            <strong>Digital Personal Data Protection Act, 2023</strong>,{" "}
            <strong>IT Act, 2000</strong>, and the{" "}
            <strong>IT (SPDI) Rules, 2011</strong>. It is not a substitute for legal advice. If you
            have specific legal concerns, we recommend consulting a qualified legal professional.
          </p>
          <p className="mt-2">
            <Link href="/" className="text-accent hover:underline">
              ← Back to Santwanaa
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
