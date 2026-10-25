import { useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Mail,
  MessageSquare,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const { name, email, message } = formData;

  if (!name || !email || !message) {
    toast.error("Please fill in all fields!");
    return;
  }

  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=tanjirulanonto48@gmail.com&su=${encodeURIComponent(
    "Message from " + name
  )}&body=${encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\n${message}`
  )}`;

  window.open(gmailLink, "_blank");

  toast.success("Gmail opened. Your message is ready to send.");

  setFormData({
    name: "",
    email: "",
    message: "",
  });
};

  return (
    <section
      id="contact"
      className="
        relative overflow-hidden
        bg-slate-50 py-24
        transition-colors duration-500
        dark:bg-[#0b1220]
      "
    >

      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top left glow */}
        <div
          className="
            absolute -left-32 top-20
            h-80 w-80 rounded-full
            bg-indigo-300/20 blur-3xl
            dark:bg-indigo-500/10
          "
        />

        {/* Bottom right glow */}
        <div
          className="
            absolute -right-32 bottom-10
            h-96 w-96 rounded-full
            bg-blue-300/20 blur-3xl
            dark:bg-blue-500/10
          "
        />

        {/* Center glow */}
        <div
          className="
            absolute left-1/2 top-1/2
            h-72 w-72
            -translate-x-1/2 -translate-y-1/2
            rounded-full
            bg-violet-300/10 blur-3xl
            dark:bg-violet-500/5
          "
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}
        <div className="mx-auto mb-14 max-w-3xl text-center">

          <div
            className="
              mb-4 inline-flex items-center gap-2
                rounded-full border
                border-indigo-100
                hover:border-indigo-200
                transition-all duration-300
                bg-white/80
                px-4 py-2
                text-sm font-semibold
                text-indigo-600
                shadow-sm backdrop-blur-sm
                dark:border-indigo-500/20
                dark:bg-slate-900/60
                dark:text-indigo-300
                dark:hover:border-indigo-500/30
                dark:hover:bg-indigo-500/10
            "
          >
            <Sparkles size={15} />
            Let's Connect
          </div>

          <h2
            className="
              text-4xl font-extrabold tracking-tight
              text-slate-900
              sm:text-5xl
              dark:text-white
            "
          >
            Get in Touch
          </h2>

          <div
            className="
              mx-auto mt-5
              h-1 w-16 rounded-full
              bg-linear-to-r
              from-blue-500 via-indigo-500 to-violet-500
            "
          />

          <p
            className="
              mx-auto mt-6 max-w-2xl
              text-base leading-7
              text-slate-600
              sm:text-lg
              dark:text-slate-400
            "
          >
            Have a project in mind, want to collaborate, or simply want to
            say hello? Feel free to reach out. I'd love to hear from you.
          </p>
        </div>

        {/* =====================================================
            CONTACT CONTENT
        ====================================================== */}
        <div
          className="
            mx-auto grid max-w-6xl
            grid-cols-1 gap-7
            md:grid-cols-[0.90fr_1.10fr]
          "
        >

          {/* =================================================
              LEFT — CONTACT INFORMATION
          ================================================== */}
          <div
            className="
              group relative overflow-hidden
              rounded-3xl
              border border-slate-200
              bg-white/90
              p-7
              shadow-sm
              backdrop-blur-sm
              transition-all duration-500
              hover:shadow-xl
              dark:border-slate-800
              dark:bg-slate-900/80
            "
          >
            {/* Card glow */}
            <div
              className="
                pointer-events-none absolute
                -right-20 -top-20
                h-48 w-48 rounded-full
                bg-indigo-400/10 blur-3xl
                transition duration-500
                group-hover:bg-indigo-400/20
                dark:bg-indigo-500/5
                dark:group-hover:bg-indigo-500/10
              "
            />

            <div className="relative">

              {/* Small label */}
              <div
                className="
                  mb-6 inline-flex items-center gap-2
                  text-xs font-bold uppercase
                  tracking-[0.15em]
                  text-indigo-600
                  dark:text-indigo-400
                "
              >
                <MessageSquare size={14} />
                Contact Information
              </div>

              <h3
                className="
                  text-2xl font-bold
                  text-slate-900
                  dark:text-white
                "
              >
                Let's start a conversation.
              </h3>

              <p
                className="
                  mt-3 max-w-md
                  text-sm leading-6
                  text-slate-600
                  dark:text-slate-400
                "
              >
                Whether you have a project idea, collaboration opportunity,
                or a question, you can reach me through any of the channels
                below.
              </p>

              {/* Contact Items */}
              <div className="mt-8 space-y-4">

                {/* Email */}
                <a
                  href="mailto:tanjirulanonto48@gmail.com"
                  className="
                    group/item flex items-center gap-4
                    rounded-2xl
                    border border-slate-200
                    bg-slate-50
                    p-4
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:border-indigo-200
                    hover:bg-indigo-50/60
                    dark:border-slate-800
                    dark:bg-slate-800/60
                    dark:hover:border-indigo-500/30
                    dark:hover:bg-indigo-500/5
                  "
                >
                  <div
                    className="
                      flex h-12 w-12 shrink-0
                      items-center justify-center
                      rounded-xl
                      bg-indigo-100
                      text-indigo-600
                      transition
                      group-hover/item:scale-105
                      dark:bg-indigo-500/10
                      dark:text-indigo-400
                    "
                  >
                    <Mail size={21} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p
                      className="
                        text-xs font-semibold uppercase
                        tracking-wide
                        text-slate-500
                        dark:text-slate-500
                      "
                    >
                      Email
                    </p>

                    <p
                      className="
                        mt-1 truncate
                        text-sm font-semibold
                        text-slate-800
                        dark:text-slate-200
                      "
                    >
                      tanjirulanonto48@gmail.com
                    </p>
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="
                      shrink-0
                      text-slate-400
                      transition
                      group-hover/item:-translate-y-0.5
                      group-hover/item:translate-x-0.5
                      group-hover/item:text-indigo-500
                    "
                  />
                </a>

                {/* Phone */}
                <a
                  href="tel:+8801606074498"
                  className="
                    group/item flex items-center gap-4
                    rounded-2xl
                    border border-slate-200
                    bg-slate-50
                    p-4
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:border-indigo-200
                    hover:bg-indigo-50/60
                    dark:border-slate-800
                    dark:bg-slate-800/60
                    dark:hover:border-indigo-500/30
                    dark:hover:bg-indigo-500/5
                  "
                >
                  <div
                    className="
                      flex h-12 w-12 shrink-0
                      items-center justify-center
                      rounded-xl
                      bg-indigo-100
                      text-indigo-600
                      transition
                      group-hover/item:scale-105
                      dark:bg-indigo-500/10
                      dark:text-indigo-400
                    "
                  >
                    <Phone size={21} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p
                      className="
                        text-xs font-semibold uppercase
                        tracking-wide
                        text-slate-500
                        dark:text-slate-500
                      "
                    >
                      Phone
                    </p>

                    <p
                      className="
                        mt-1
                        text-sm font-semibold
                        text-slate-800
                        dark:text-slate-200
                      "
                    >
                      +880 1606 074498
                    </p>
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="
                      shrink-0
                      text-slate-400
                      transition
                      group-hover/item:-translate-y-0.5
                      group-hover/item:translate-x-0.5
                      group-hover/item:text-indigo-500
                    "
                  />
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/+8801606074498"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group/item flex items-center gap-4
                    rounded-2xl
                    border border-slate-200
                    bg-slate-50
                    p-4
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:border-indigo-200
                    hover:bg-indigo-50/60
                    dark:border-slate-800
                    dark:bg-slate-800/60
                    dark:hover:border-indigo-500/30
                    dark:hover:bg-indigo-500/5
                  "
                >
                  <div
                    className="
                      flex h-12 w-12 shrink-0
                      items-center justify-center
                      rounded-xl
                      bg-indigo-100
                      text-indigo-600
                      transition
                      group-hover/item:scale-105
                      dark:bg-indigo-500/10
                      dark:text-indigo-400
                    "
                  >
                    <MessageSquare size={21} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p
                      className="
                        text-xs font-semibold uppercase
                        tracking-wide
                        text-slate-500
                        dark:text-slate-500
                      "
                    >
                      WhatsApp
                    </p>

                    <p
                      className="
                        mt-1
                        text-sm font-semibold
                        text-slate-800
                        dark:text-slate-200
                      "
                    >
                      +880 1606 074498
                    </p>
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="
                      shrink-0
                      text-slate-400
                      transition
                      group-hover/item:-translate-y-0.5
                      group-hover/item:translate-x-0.5
                      group-hover/item:text-indigo-500
                    "
                  />
                </a>
              </div>

              {/* Availability */}
              <div
                className="
                  mt-7
                  rounded-2xl
                  border border-indigo-100
                  bg-linear-to-r
                  from-indigo-50
                  to-blue-50
                  p-4
                  dark:border-indigo-500/10
                  dark:from-indigo-500/5
                  dark:to-blue-500/5
                "
              >
                <div className="flex items-center gap-3">

                  <div
                    className="
                      flex h-9 w-9 items-center justify-center
                      rounded-full
                      bg-white
                      shadow-sm
                      dark:bg-slate-800
                    "
                  >
                    <span className="relative flex h-2.5 w-2.5">
                <span
                  className="
                    absolute inline-flex h-full w-full
                    animate-ping rounded-full
                    bg-emerald-400 opacity-75
                  "
                />
                <span
                  className="
                    relative inline-flex h-2.5 w-2.5
                    rounded-full bg-emerald-500
                  "
                />
              </span>
                  </div>

                  <div>
                    <p
                      className="
                        text-sm font-bold
                        text-slate-800
                        dark:text-slate-200
                      "
                    >
                      Available for opportunities
                    </p>

                    <p
                      className="
                        mt-0.5 text-xs
                        text-slate-500
                        dark:text-slate-400
                      "
                    >
                      Open to meaningful projects and collaborations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT — CONTACT FORM
          ================================================== */}
          <div
            className="
              relative overflow-hidden
              rounded-3xl
              border border-slate-200
              bg-white/90
              p-7
              shadow-sm
              backdrop-blur-sm
              dark:border-slate-800
              dark:bg-slate-900/80
              sm:p-8
            "
          >
            {/* Top gradient line */}
            <div
              className="
                absolute left-0 right-0 top-0
                h-1
                bg-linear-to-r
                from-blue-500
                via-indigo-500
                to-violet-500
              "
            />

            <div className="mb-7">

              <div
                className="
                  mb-4 flex h-11 w-11
                  items-center justify-center
                  rounded-xl
                  bg-indigo-100
                  text-indigo-600
                  dark:bg-indigo-500/10
                  dark:text-indigo-400
                "
              >
                <Send size={20} />
              </div>

              <h3
                className="
                  text-2xl font-bold
                  text-slate-900
                  dark:text-white
                "
              >
                Send me a message
              </h3>

              <p
                className="
                  mt-2 text-sm leading-6
                  text-slate-600
                  dark:text-slate-400
                "
              >
                Fill out the form and I'll get back to you as soon as
                possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="
                    mb-2 block
                    text-sm font-semibold
                    text-slate-700
                    dark:text-slate-300
                  "
                >
                  Your Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="
                    w-full rounded-xl
                    border border-slate-200
                    bg-slate-50
                    px-4 py-3.5
                    text-sm text-slate-800
                    outline-none
                    placeholder:text-slate-400
                    transition-all duration-300

                    focus:border-indigo-400
                    focus:bg-white
                    focus:ring-4
                    focus:ring-indigo-500/10

                    dark:border-slate-700
                    dark:bg-slate-800/70
                    dark:text-white
                    dark:placeholder:text-slate-500

                    dark:focus:border-indigo-500
                    dark:focus:bg-slate-800
                    dark:focus:ring-indigo-500/10
                  "
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="
                    mb-2 block
                    text-sm font-semibold
                    text-slate-700
                    dark:text-slate-300
                  "
                >
                  Email Address
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="
                    w-full rounded-xl
                    border border-slate-200
                    bg-slate-50
                    px-4 py-3.5
                    text-sm text-slate-800
                    outline-none
                    placeholder:text-slate-400
                    transition-all duration-300

                    focus:border-indigo-400
                    focus:bg-white
                    focus:ring-4
                    focus:ring-indigo-500/10

                    dark:border-slate-700
                    dark:bg-slate-800/70
                    dark:text-white
                    dark:placeholder:text-slate-500

                    dark:focus:border-indigo-500
                    dark:focus:bg-slate-800
                    dark:focus:ring-indigo-500/10
                  "
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="
                    mb-2 block
                    text-sm font-semibold
                    text-slate-700
                    dark:text-slate-300
                  "
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me a little about your project..."
                  required
                  className="
                    w-full resize-none rounded-xl
                    border border-slate-200
                    bg-slate-50
                    px-4 py-3.5
                    text-sm leading-6
                    text-slate-800
                    outline-none
                    placeholder:text-slate-400
                    transition-all duration-300

                    focus:border-indigo-400
                    focus:bg-white
                    focus:ring-4
                    focus:ring-indigo-500/10

                    dark:border-slate-700
                    dark:bg-slate-800/70
                    dark:text-white
                    dark:placeholder:text-slate-500

                    dark:focus:border-indigo-500
                    dark:focus:bg-slate-800
                    dark:focus:ring-indigo-500/10
                  "
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="
                  group
                  flex w-full
                  items-center justify-center gap-2
                  rounded-xl
                  bg-linear-to-r
                  from-indigo-600
                  to-blue-600
                  px-6 py-3.5
                  text-sm font-bold text-white
                  shadow-lg
                  shadow-indigo-500/20
                  transition-all duration-300

                  hover:-translate-y-0.5
                  hover:shadow-xl
                  hover:shadow-indigo-500/25

                  active:translate-y-0
                "
              >
                <Send
                  size={17}
                  className="
                    transition-transform duration-300
                    group-hover:-rotate-6
                  "
                />

                Send Message

                <ArrowUpRight
                  size={16}
                  className="
                    transition-transform duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </button>
            </form>

            {/* Privacy / note */}
            <div
              className="
                mt-5 flex items-start gap-2
                text-xs leading-5
                text-slate-500
                dark:text-slate-500
              "
            >
              <CheckCircle2
                size={14}
                className="
                  mt-0.5 shrink-0
                  text-emerald-500
                "
              />

              <span>
                Your message will open directly in Gmail so you can send it
                securely from your own account.
              </span>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}
        <div
          className="
            relative mx-auto mt-10
            max-w-6xl overflow-hidden
            rounded-3xl
            border border-indigo-200/70
            bg-linear-to-r
            from-indigo-600
            via-indigo-600
            to-blue-600
            px-6 py-7
            shadow-xl shadow-indigo-500/10

            dark:border-indigo-500/20
            dark:from-indigo-600/90
            dark:via-indigo-700/90
            dark:to-blue-700/90

            sm:px-8
          "
        >
          {/* CTA decoration */}
          <div
            className="
              pointer-events-none absolute
              -right-16 -top-20
              h-48 w-48 rounded-full
              bg-white/10 blur-2xl
            "
          />

          <div
            className="
              pointer-events-none absolute
              -bottom-20 left-1/3
              h-40 w-40 rounded-full
              bg-blue-400/20 blur-2xl
            "
          />

          <div
            className="
              relative flex flex-col
              items-start justify-between
              gap-5
              sm:flex-row sm:items-center
            "
          >
            <div>
  <p
    className="
      text-xs font-bold uppercase
      tracking-[0.15em]
      text-indigo-100
    "
  >
    Open to opportunities
  </p>

  <h3
    className="
      mt-1 text-xl font-bold
      text-white
      sm:text-2xl
    "
  >
    Have a project in mind? Let’s make it happen.
  </h3>
</div>

<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=tanjirulanonto48@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="
    inline-flex shrink-0
    items-center gap-2
    rounded-xl
    bg-white
    px-5 py-3
    text-sm font-bold
    text-indigo-700
    shadow-lg
    transition-all duration-300
    hover:-translate-y-0.5
    hover:bg-indigo-50
    hover:shadow-xl
  "
>
  <Mail size={17} />
  Start a Conversation
  <ArrowUpRight size={15} />
</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;