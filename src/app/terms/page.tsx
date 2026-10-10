import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms and conditions for using Santwanaa's lifestyle coaching and emotional wellness services.",
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

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-accent/8 border-l-4 border-accent rounded-r-xl px-5 py-4 text-dark leading-relaxed">
      {children}
    </div>
  );
}

function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-secondary/15 border border-secondary/30 rounded-xl px-5 py-4 text-dark-light text-sm leading-relaxed">
      {children}
    </div>
  );
}

export default function TermsPage() {
  const effectiveDate = "18 June 2025";

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-warm-bg border-b border-secondary/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider rounded-full mb-4">
            Legal
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-dark mb-3">
            Terms of Service
          </h1>
          <p className="text-dark-light text-sm">
            Effective date: {effectiveDate} &nbsp;·&nbsp; Last updated: {effectiveDate}
          </p>
          <p className="text-dark-light text-sm mt-3 max-w-xl">
            Please read these terms carefully before booking a discovery call or enrolling in any
            Santwanaa programme. By using our services, you agree to these terms.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        <Section title="1. About Santwanaa">
          <p>
            Santwanaa is a lifestyle management service offering habit coaching and emotional
            wellness support, operated by Tanaya, a qualified Educational Psychologist, based in
            India. All services are delivered online via video call.
          </p>
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the Santwanaa website
            and all coaching, wellness, and ADHD support services we provide. They form a binding
            agreement between you (&ldquo;client&rdquo;) and Santwanaa (&ldquo;we&rdquo;,
            &ldquo;us&rdquo;).
          </p>
        </Section>

        <Section title="2. Eligibility">
          <ul className="list-disc pl-5 space-y-1.5">
            <li>You must be at least 18 years of age to use our services.</li>
            <li>
              If you are between 15 and 17, you may enrol only with the written consent of a parent
              or legal guardian, who must also agree to these Terms on your behalf.
            </li>
            <li>
              By agreeing to these Terms, you confirm that the information you provide is accurate
              and complete.
            </li>
          </ul>
        </Section>

        <Section title="3. Our Services">
          <p>
            Santwanaa offers two monthly programmes, each designed for a different stage of your
            journey. All programmes run in monthly cycles with no lock-in contracts.
          </p>

          <div className="space-y-4 mt-2">
            <div className="border border-secondary/25 rounded-xl p-5">
              <p className="font-semibold text-dark mb-1">Essentials — Habit Coaching</p>
              <p className="text-sm mb-2">₹4,999 / $59 per month</p>
              <ul className="text-sm list-disc pl-4 space-y-1">
                <li>1-on-1 onboarding session (60 min)</li>
                <li>Personalised lifestyle plan</li>
                <li>8 tracking sessions per month, twice a week (30 min each)</li>
                <li>Monthly self-reflection and feedback report</li>
                <li>WhatsApp and email support between sessions</li>
              </ul>
            </div>

            <div className="border-2 border-accent/30 bg-accent/3 rounded-xl p-5">
              <p className="font-semibold text-dark mb-1">Complete — Coaching + Emotional Wellness</p>
              <p className="text-sm mb-2">₹10,999 / $129 per month</p>
              <ul className="text-sm list-disc pl-4 space-y-1">
                <li>Everything in Essentials</li>
                <li>Unlimited personalised therapeutic guidance sessions</li>
                <li>Emotional resilience and self-regulation work</li>
                <li>Consistency and motivation coaching</li>
                <li>Priority scheduling for urgent support</li>
              </ul>
            </div>
          </div>

          <Note>
            A free 15-minute discovery call is available before any commitment. This call carries no
            obligation and is solely to determine whether Santwanaa is the right fit for you.
          </Note>
        </Section>

        <Section title="4. Not a Clinical or Medical Service">
          <Callout>
            <strong>
              Santwanaa provides lifestyle coaching and emotional wellness support. Our services are
              not a substitute for clinical psychiatric diagnosis, medical treatment, or emergency
              mental health care.
            </strong>
            <br />
            <br />
            If you are experiencing a mental health crisis, please contact iCall (9152987821),
            Vandrevala Foundation (1860-2662-345), or emergency services (112) immediately.
          </Callout>
          <p>
            Coaching sessions do not constitute psychotherapy, clinical counselling, or medical
            treatment. Tanaya will refer you to a qualified clinical professional if your needs fall
            outside the scope of lifestyle coaching.
          </p>
        </Section>

        <Section title="5. Booking and Enrolment">
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              Enrolment begins with a free discovery call. If both parties agree to proceed, an
              onboarding session is scheduled and the first month&apos;s payment is due before the
              session begins.
            </li>
            <li>
              Each monthly cycle begins on the date of your onboarding or renewal and renews on
              the same date each subsequent month unless cancelled.
            </li>
            <li>
              Sessions are conducted online via video call. You are responsible for ensuring a
              stable internet connection and a reasonably private space.
            </li>
          </ul>
        </Section>

        <Section title="6. Payments">
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              Fees are charged monthly in advance. The applicable fee is the price listed at the
              time of enrolment.
            </li>
            <li>
              Pricing is shown in both INR (₹) and USD ($). Payment in INR applies to clients
              based in India; international clients may be invoiced in USD.
            </li>
            <li>
              Prices may be revised with 30 days&apos; written notice. Any revision applies from
              the next billing cycle, not the current one.
            </li>
            <li>
              Failure to make payment within 5 days of the due date may result in suspension of
              sessions until the outstanding balance is cleared.
            </li>
          </ul>
        </Section>

        <Section title="7. Cancellation and Rescheduling">
          <p className="font-medium text-dark">Individual sessions:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              You may reschedule or cancel an individual session with at least{" "}
              <strong>24 hours&apos; notice</strong> at no charge.
            </li>
            <li>
              Cancellations with less than 24 hours&apos; notice, or no-shows, are counted as a
              session used. They cannot be carried forward or refunded.
            </li>
          </ul>

          <p className="font-medium text-dark mt-3">Programme cancellation:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              You may cancel your monthly programme at any time by emailing us at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent hover:underline">
                {CONTACT_EMAIL}
              </a>
              . Cancellations take effect at the end of the current billing cycle.
            </li>
            <li>
              There are no lock-in contracts. You will not be charged for any month after you
              have cancelled.
            </li>
          </ul>
        </Section>

        <Section title="8. Refund Policy">
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              If you cancel within <strong>48 hours of your onboarding session</strong> and have
              not used any other sessions, you are entitled to a full refund of the first
              month&apos;s fee.
            </li>
            <li>
              After the 48-hour window, fees for the current billing month are non-refundable,
              regardless of how many sessions were used.
            </li>
            <li>
              If Santwanaa cancels your programme (see Section 13 — Termination), a prorated
              refund for unused days in the current cycle will be issued within 14 working days.
            </li>
          </ul>
          <Note>
            We understand that circumstances change. If you are going through a genuinely
            difficult situation, please reach out before cancelling — we will always try to find a
            humane solution.
          </Note>
        </Section>

        <Section title="9. Your Responsibilities as a Client">
          <p>To get the most from your time with us, and to maintain a safe working relationship:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              Be honest about your goals, history, and what is or is not working. Coaching works
              best when it is built on accurate information.
            </li>
            <li>
              Attend sessions on time. If you are running late, please notify us in advance.
            </li>
            <li>
              Communicate openly if the approach is not working for you, rather than disengaging
              without notice.
            </li>
            <li>
              Treat your coach with respect. Santwanaa reserves the right to terminate the
              relationship if communication becomes abusive or inappropriate.
            </li>
            <li>
              Do not record sessions without prior written consent.
            </li>
          </ul>
        </Section>

        <Section title="10. Confidentiality">
          <p>
            Everything you share in sessions is treated with strict confidentiality, subject to the
            exceptions described in our{" "}
            <Link href="/privacy-policy" className="text-accent hover:underline">
              Privacy Policy
            </Link>{" "}
            (court orders, imminent risk of harm, child protection). Please read the Privacy Policy
            for full details on how your personal data is collected, stored, and protected.
          </p>
          <p>
            Session notes are kept securely and are never shared with third parties without your
            explicit consent, except as required by law.
          </p>
        </Section>

        <Section title="11. Intellectual Property">
          <p>
            All worksheets, frameworks, exercises, and written materials shared during your
            programme are the intellectual property of Santwanaa and are provided for your
            personal use only.
          </p>
          <p>
            You may not reproduce, distribute, or share these materials commercially without
            prior written permission.
          </p>
        </Section>

        <Section title="12. Limitation of Liability">
          <p>
            Santwanaa provides lifestyle coaching in good faith and to the best of our
            professional ability. However, we cannot guarantee specific outcomes — progress
            depends significantly on your own engagement, consistency, and circumstances.
          </p>
          <p>
            To the maximum extent permitted under applicable Indian law, Santwanaa&apos;s
            liability for any claim arising from these Terms or from our services is limited to
            the fees you paid in the month in which the issue arose.
          </p>
          <p>
            We are not liable for indirect, incidental, or consequential losses, including loss
            of income, opportunity, or emotional distress, arising from the use of, or inability
            to use, our services.
          </p>
        </Section>

        <Section title="13. Termination">
          <p className="font-medium text-dark">By you:</p>
          <p>
            You may end the programme at any time by emailing{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent hover:underline">
              {CONTACT_EMAIL}
            </a>
            . Your access continues until the end of the current billing cycle.
          </p>

          <p className="font-medium text-dark mt-3">By Santwanaa:</p>
          <p>
            We reserve the right to end the coaching relationship if:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              Your needs require clinical psychiatric or medical care that falls outside our scope
            </li>
            <li>
              There is a breakdown in the working relationship that cannot be resolved through
              honest conversation
            </li>
            <li>
              There is abusive, threatening, or inappropriate conduct toward the coach
            </li>
            <li>
              Payment is overdue by more than 14 days despite notice
            </li>
          </ul>
          <p>
            Where Santwanaa initiates termination without cause, a prorated refund for unused
            days will be issued.
          </p>
        </Section>

        <Section title="14. Amendments to These Terms">
          <p>
            We may update these Terms from time to time. You will be notified by email at least
            14 days before any material change takes effect. Continued use of our services after
            the effective date constitutes acceptance of the revised Terms.
          </p>
          <p>
            If you do not agree with a change, you may cancel your programme before the effective
            date without penalty.
          </p>
        </Section>

        <Section title="15. Governing Law and Disputes">
          <p>
            These Terms are governed by and construed in accordance with the laws of India. Any
            dispute arising from these Terms or our services shall first be attempted to be
            resolved through direct, good-faith communication.
          </p>
          <p>
            If a resolution cannot be reached, disputes shall be subject to the jurisdiction of
            the courts in India.
          </p>
        </Section>

        <Section title="16. Contact">
          <p>
            For any questions about these Terms, to cancel your programme, or to raise a concern:
          </p>
          <div className="bg-warm-bg rounded-xl p-5 mt-2">
            <p className="font-semibold text-dark mb-1">Santwanaa</p>
            <p>
              Email:{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent hover:underline">
                {CONTACT_EMAIL}
              </a>
            </p>
            <p>Phone: {CONTACT_PHONE}</p>
          </div>
        </Section>

        <div className="mt-10 pt-8 border-t border-secondary/20 text-xs text-dark-light space-y-2">
          <p>
            These Terms of Service are governed by the{" "}
            <strong>Indian Contract Act, 1872</strong>,{" "}
            <strong>Consumer Protection Act, 2019</strong>, and applicable Indian law. They are
            not a substitute for legal advice. If you have specific legal concerns, we recommend
            consulting a qualified legal professional.
          </p>
          <p>
            Also see our{" "}
            <Link href="/privacy-policy" className="text-accent hover:underline">
              Privacy Policy
            </Link>{" "}
            for information on how we handle your personal data.
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
