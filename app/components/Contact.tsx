import SDG from "./ui/SDG";

const contactInfo = [
  { label: "Email",    value: "hello@arzen.com" },
  { label: "Phone",    value: "+1 (234) 567-8900" },
  { label: "Location", value: "Remote · Worldwide" },
];

const Contact = () => {
  return (
    <div className="bg-[#111111] text-white p-20">
      <div className="flex gap-16">

        {/* Left */}
        <div className="flex flex-col gap-[15px] max-w-[340px]">
          <SDG title="Get In Touch" />
          <h2 className="font-heading text-[40px]">
            Let's Start a Conversation
          </h2>
          <p className="text-[12px] text-white/50 leading-relaxed">
            We're here to answer your questions and explore how we can help your business grow.
          </p>

          {/* Contact info */}
          <div className="flex flex-col gap-[5px]">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-center gap-3 pb-4 border-b border-white/10">
                <div className="w-8 h-8 rounded-md bg-[#1e1e1e] border border-white/10 flex-shrink-0" />
                <div>
                  <p className="text-xs text-white/40">{item.label}</p>
                  <p className="text-sm font-bold">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Form */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Name + Email */}
          <div className="flex gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <label className="text-xs text-white/50">Your Name</label>
              <input
                type="text"
                placeholder="Umair"
                className="bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-white/30"
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <label className="text-xs text-white/50">Your Email</label>
              <input
                type="email"
                placeholder="m.umairlijaz@gmail.com"
                className="bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-white/30"
              />
            </div>
          </div>

          {/* Subject */}
          <div className="flex flex-col gap-1">
            <label className="text-xs text-white/50">Subject</label>
            <input
              type="text"
              placeholder="Tell us what you need"
              className="bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-white/30"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1">
            <label className="text-xs text-white/50">Your Message</label>
            <textarea
              placeholder="describe your project..."
              rows={6}
              className="bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-white/30 resize-none"
            />
          </div>

          {/* Submit */}
          <button
            className="w-fit px-8 py-3 rounded-full text-black font-semibold text-sm"
            style={{ background: "linear-gradient(90deg, #6abf3f, #f472b6)" }}
          >
            Send Message
          </button>
        </div>

      </div>
    </div>
  );
};

export default Contact;