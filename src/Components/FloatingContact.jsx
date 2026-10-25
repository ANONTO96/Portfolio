
import { useEffect, useRef, useState } from "react";
import {
    Bot,
    X,
    Send,
    MessageCircle,
    Mail,
    Github,
    ExternalLink,
} from "lucide-react";

const EMAIL = "tanjirulanonto48@gmail.com";
const WHATSAPP_NUMBER = "8801606074498";

const quickQuestions = [
    "Who is Anonto?",
    "His skills",
    "Projects",
    "Awards",
    "Contact",
    "Location",
    "Hire him",
];

const portfolioAnswers = [
    {
        keywords: ["who", "about", "introduce", "background", "anonto"],
        answer:
            "Hi! I'm Anonto (Tanjir-ul Islam), a Computer Science and Engineering student and aspiring software developer from Bangladesh. I enjoy building modern web applications and exploring AI-powered solutions.",
    },
    {
        keywords: ["skill", "technology", "tech stack", "programming", "language"],
        answer:
            "Anonto works with HTML, CSS, Tailwind CSS, JavaScript, React, Next.js, Firebase, Node.js, Express.js, MongoDB, and Mongoose. He also explores Python, data science, machine learning fundamentals, Git, and REST APIs.",
    },
    {
        keywords: ["project", "portfolio", "work", "built", "scholarx", "medicare", "swiftcart", "ticket"],
        answer:
            "Here are some of Anonto's projects:\n\n• ScholarX — AI-powered scholarship guidance and eligibility analysis.\n• Medicare — Doctor appointment booking with Firebase.\n• Smart Office — IoT device management hackathon project.\n• Project IO — Web development project showcase.\n• CS Ticket — Customer service ticket management.\n• SwiftCart — Fashion and clothing e-commerce.\n\nExplore the Projects section of this portfolio to see more.",
    },
    {
        keywords: ["hire", "job", "work with", "recruit", "opportunity", "available"],
        answer:
            "Interested in working with Anonto? You can reach him by email or WhatsApp to discuss job opportunities, internships, collaborations, or projects. Use the contact buttons here to get in touch.",
    },
    {
        keywords: ["award", "achievement", "hackathon", "programming hero", "rank"],
        answer:
            "Anonto's achievements include securing 2nd place in TCPC Hackathon building an Educational Institution Management web application and ranking 363rd among approximately 4,000 participants in Programming Hero's SCIC program.",
    },
    {
        keywords: ["contact", "email", "phone", "whatsapp", "reach"],
        answer:
            `You can contact Anonto at ${EMAIL}. You can also use the WhatsApp button in the floating contact menu.`,
    },
    {
        keywords: ["location", "country", "live", "from", "bangladesh"],
        answer:
            "Anonto is based in Bangladesh and is pursuing a BSc in Computer Science and Engineering at Tejgaon College under the National University of Bangladesh.",
    },
    {
        keywords: ["education", "degree", "university", "college", "study"],
        answer:
            "Anonto is studying Computer Science and Engineering at Tejgaon College, affiliated with the National University of Bangladesh. He is building his skills through academic work and practical software projects.",
    },
    {
        keywords: ["github", "source code", "repository", "code"],
        answer:
            "You can explore Anonto's source code and repositories on GitHub: github.com/ANONTO96.",
    },
    {
        keywords: ["price", "pricing", "cost", "salary", "rate"],
        answer:
            "Project pricing depends on the scope, features, timeline, and requirements. Contact Anonto directly to discuss your project and get an appropriate estimate.",
    },
];

const findAnswer = (question) => {
    const normalized = question.toLowerCase().trim();

    const match = portfolioAnswers.find(({ keywords }) =>
        keywords.some((keyword) => normalized.includes(keyword))
    );

    return (
        match?.answer ||
        "I can help with questions about Anonto's background, education, skills, projects, achievements, and contact details. Try one of the suggested questions below, or contact him directly for anything more specific."
    );
};

export default function FloatingContact() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [chatOpen, setChatOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        {
            sender: "bot",
            text: "👋 Hi! I'm Anonto's AI assistant!\n\nI can tell you about his skills, projects, education, achievements, and how to contact him.\n\nWhat would you like to know?",
        },
    ]);

    const sendMessage = (question) => {
        const text = question.trim();
        if (!text) return;

        setMessages((previous) => [
            ...previous,
            { sender: "user", text },
            { sender: "bot", text: findAnswer(text) },
        ]);

        setInput("");
    };

    const openChat = () => {
        setMenuOpen(false);
        setChatOpen(true);
    };

    const closeChat = () => {
        setChatOpen(false);
        setMenuOpen(false);
    };

    const messagesEndRef = useRef(null);

    useEffect(() => {
        if (chatOpen) {
            messagesEndRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "end",
            });
        }
    }, [messages, chatOpen]);

    return (
        <>
            {/* Contact menu */}
            {menuOpen && !chatOpen && (
                <div className="fixed bottom-24 right-4 z-100 flex flex-col items-center gap-3 sm:bottom-28 sm:right-7">
                    <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}`}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Contact Anonto on WhatsApp"
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-110"
                    >
                        <MessageCircle size={24} />
                    </a>

                    <a
                        href={`mailto:${EMAIL}`}
                        aria-label="Email Anonto"
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-500 text-white shadow-lg transition hover:scale-110"
                    >
                        <Mail size={23} />
                    </a>

                    <button
                        type="button"
                        onClick={openChat}
                        aria-label="Open portfolio AI assistant"
                        className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-violet-200 bg-linear-to-br from-violet-500 to-fuchsia-600 text-white shadow-lg shadow-violet-500/25 ring-2 ring-violet-300/50 transition duration-300 hover:scale-110 hover:shadow-violet-500/40 dark:border-violet-400/60 dark:shadow-violet-500/30 dark:ring-violet-400/20"
                    >
                        <Bot size={29} />
                    </button>
                </div>
            )}

            {/* Chat window */}
            {chatOpen && (
                <section
                    aria-label="Anonto's AI assistant"
                    className="fixed bottom-24 right-3 z-100 flex h-[min(540px,calc(100dvh-130px))] w-[min(370px,calc(100vw-24px))] flex-col overflow-hidden rounded-2xl border border-violet-500/20 bg-[#090910] text-white shadow-2xl shadow-violet-950/40 sm:bottom-28 sm:right-7"
                >
                    {/* Header */}
                    <header className="flex items-center justify-between border-b border-white/10 px-4 py-3.5">
                        <div className="flex min-w-0 items-center gap-2.5">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-linear from-sky-400 to-violet-600">
                                <Bot size={22} />
                            </div>

                            <div className="min-w-0">
                                <h2 className="truncate text-xs font-bold uppercase tracking-widest">
                                    Anonto's AI Assistant
                                </h2>
                                <p className="mt-1 flex items-center gap-1.5 text-[12px] text-gray-400">
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
                                    Online
                                </p>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={closeChat}
                            aria-label="Close chat"
                            className="rounded-lg p-2 text-gray-400 transition hover:bg-white/10 hover:text-white"
                        >
                            <X size={21} />
                        </button>
                    </header>

                    {/* Messages */}
                    <div
                        className="flex-1 space-y-4 overflow-y-auto p-4"
                        aria-live="polite"
                    >
                        {messages.map((message, index) => (
                            <div
                                key={`${index}-${message.sender}`}
                                className={`flex items-start gap-2 ${message.sender === "user" ? "justify-end" : ""
                                    }`}
                            >
                                {message.sender === "bot" && (
                                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-linear from-sky-400 to-violet-600">
                                        <Bot size={17} />
                                    </div>
                                )}

                                <div
                                    className={`max-w-[85%] whitespace-pre-line rounded-2xl px-3.5 py-3 text-[13px] leading-5 ${message.sender === "user"
                                            ? "rounded-br-sm bg-violet-600 text-white"
                                            : "rounded-bl-sm border border-white/5 bg-[#17171f] text-gray-200"
                                        }`}
                                >
                                    {message.text}
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Suggested questions */}
                    <div className="border-t border-white/5 px-3 pt-3">
                        <div className="flex flex-wrap gap-1.5">
                            {quickQuestions.map((question) => (
                                <button
                                    type="button"
                                    key={question}
                                    onClick={() => sendMessage(question)}
                                    className="rounded-full border border-violet-500/40 bg-violet-500/5 px-2.5 py-1.5 text-[10px] text-gray-300 transition hover:border-violet-400 hover:bg-violet-500/15 hover:text-white"
                                >
                                    {question}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Input */}
                    <form
                        onSubmit={(event) => {
                            event.preventDefault();
                            sendMessage(input);
                        }}
                        className="flex items-center gap-2 border-t border-white/10 p-3"
                    >
                        <input
                            type="text"
                            value={input}
                            onChange={(event) => setInput(event.target.value)}
                            placeholder="Ask about Anonto..."
                            aria-label="Message the portfolio assistant"
                            className="min-w-0 flex-1 rounded-full border border-violet-500/50 bg-[#14141c] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-violet-400"
                        />

                        <button
                            type="submit"
                            aria-label="Send message"
                            disabled={!input.trim()}
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-600 text-white transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-40"
                        >
                            <Send size={17} />
                        </button>
                    </form>
                </section>
            )}

            {/* Main floating toggle */}
            <button
                type="button"
                onClick={() => {
                    if (chatOpen) {
                        closeChat();
                    } else {
                        setMenuOpen((previous) => !previous);
                    }
                }}
                aria-label={
                    chatOpen
                        ? "Close portfolio assistant"
                        : menuOpen
                            ? "Close contact options"
                            : "Open contact options"
                }
                aria-expanded={menuOpen || chatOpen}
                className="fixed bottom-5 right-4 z-101 flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br dark:bg-none from-violet-600 via-purple-600 to-fuchsia-600 text-sm text-white/90 shadow-xl shadow-violet-600/40 ring-4 ring-violet-400/25 transition-all duration-300 hover:scale-110 hover:shadow-violet-500/60 hover:ring-violet-400/50 sm:bottom-7 sm:right-7"
            >
                {menuOpen || chatOpen ? (
                    <X size={26} strokeWidth={2.5} />
                ) : (
                    <MessageCircle size={26} strokeWidth={2.5} />
                )}
            </button>
        </>
    );
}
