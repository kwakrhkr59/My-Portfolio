"use client";

import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  Phone,
  MessageSquare,
  Send,
  User,
  AtSign,
  FileText,
} from "lucide-react";
import { useState } from "react";

const contactData = {
  email: "kwakrhkr59@gmail.com",
  location: "Seoul, South Korea",
  github: "https://github.com/kwakrhkr59",
  linkedin: "https://linkedin.com/in/hyeonjeong-kwak",
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<string | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        const errorData = await response.json();
        console.error("API error:", errorData.message);
        setStatus("error");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 md:mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
            Get in Touch
          </h1>
          <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I&apos;d love to hear from you!
            <br />
            Feel free to reach out for collaborations, inquiries, or just a
            friendly chat.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="lg:col-span-1">
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-slate-700/50 h-full">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Let&apos;s Connect
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Ready to start a conversation?
                </p>
              </div>

              <div className="space-y-6">
                <div className="group cursor-pointer">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-slate-700/50 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                        Email
                      </p>
                      <a
                        href={`mailto:${contactData.email}`}
                        className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-base sm:text-lg break-words"
                      >
                        {contactData.email}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="group">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-slate-700/50 group-hover:bg-red-50 dark:group-hover:bg-red-900/20 transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-6 h-6 text-red-600 dark:text-red-400" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                        Location
                      </p>
                      <p className="text-gray-900 dark:text-white font-medium text-base sm:text-lg break-words">
                        {contactData.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-slate-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
                  Follow Me
                </h3>
                <div className="flex justify-center space-x-4">
                  <a
                    href={contactData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 dark:bg-slate-700 rounded-xl flex items-center justify-center hover:bg-gray-900 dark:hover:bg-white group transition-all duration-300 transform hover:scale-110"
                  >
                    <Github className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-white dark:group-hover:text-gray-900 transition-colors" />
                  </a>
                  <a
                    href={contactData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center hover:bg-blue-600 group transition-all duration-300 transform hover:scale-110"
                  >
                    <Linkedin className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-slate-700/50">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Send a Message
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Fill out the form below and I&apos;ll get back to you as soon
                  as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Your Name
                    </label>
                    <div className="relative">
                      <User
                        className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${
                          focusedField === "name"
                            ? "text-blue-600"
                            : "text-gray-400"
                        }`}
                      />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-slate-700/50 border border-gray-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-900 dark:text-white transition-all duration-200"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Your Email
                    </label>
                    <div className="relative">
                      <AtSign
                        className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${
                          focusedField === "email"
                            ? "text-blue-600"
                            : "text-gray-400"
                        }`}
                      />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-slate-700/50 border border-gray-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-900 dark:text-white transition-all duration-200"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Subject
                  </label>
                  <div className="relative">
                    <FileText
                      className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${
                        focusedField === "subject"
                          ? "text-blue-600"
                          : "text-gray-400"
                      }`}
                    />
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("subject")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-slate-700/50 border border-gray-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-900 dark:text-white transition-all duration-200"
                      placeholder="What's this about?"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Your Message
                  </label>
                  <div className="relative">
                    <MessageSquare
                      className={`absolute left-3 top-3 w-5 h-5 transition-colors duration-200 ${
                        focusedField === "message"
                          ? "text-blue-600"
                          : "text-gray-400"
                      }`}
                    />
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-slate-700/50 border border-gray-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-900 dark:text-white resize-none transition-all duration-200"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {status === "sending" ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>

                {status === "success" && (
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
                    <p className="text-green-800 dark:text-green-400 text-center font-medium">
                      ✨ Message sent successfully! I&apos;ll get back to you
                      soon.
                    </p>
                  </div>
                )}

                {status === "error" && (
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
                    <p className="text-red-800 dark:text-red-400 text-center font-medium">
                      ❌ Failed to send message. Please try again or contact me
                      directly.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
