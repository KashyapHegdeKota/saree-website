import Navbar from "../components/Navbar";
import ContactCard from "../components/ContactCard";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="flex flex-grow items-center justify-center py-12 px-4">
        <div className="w-full max-w-2xl text-center">
          <h1 className="text-4xl font-serif text-gray-800 tracking-tight">
            Get In Touch
          </h1>
          <p className="mt-3 text-lg text-gray-600">
            We'd love to hear from you. The quickest way to reach us is via
            WhatsApp.
          </p>

          <div className="mt-10">
            {/* 
              **IMPORTANT**: Replace the number below with your full WhatsApp phone number, 
              including the country code, but with NO plus sign, spaces, or dashes.
              For example: a US number would be 14155552671
              A UK number would be 447912345678
            */}
            <ContactCard phoneNumber="971503446479" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
