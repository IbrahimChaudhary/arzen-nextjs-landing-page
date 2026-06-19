import ContactHero from "@/app/components/contact/ContactHero";
import ContactInfoPanel from "@/app/components/contact/ContactInfoPanel";
import ContactForm from "@/app/components/contact/ContactForm";
import PageShell from "@/app/components/ui/PageShell";

export const metadata = {
  title: "Contact — Arzen Inc",
  description:
    "Let's build something great. Tell us about your project and we'll get back within 24 hours.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <ContactHero />
      {/* Info (left) + Form (right). Stacks on mobile, splits on lg. */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.6fr] lg:gap-8">
        <ContactInfoPanel />
        <ContactForm />
      </div>
    </PageShell>
  );
}
