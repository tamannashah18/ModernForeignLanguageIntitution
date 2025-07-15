"use client";
import { useState, useEffect } from "react";

/* numbers */
const PHONES = {
  online_ca:  "14372887078", // 🇨🇦  – online French
  offline_ca: "14372887078", // 🇨🇦  – offline Canada
  offline_in: "919428746469" // 🇮🇳  – everything else
};

export default function EnquiryForm() {
  const [form, setForm] = useState({
    name:     "",
    phone:    "",
    email:    "",
    language: "-1",
    mode:     "offline_in",   // default
    city:     ""
  });

  /* keep mode consistent with language */
  useEffect(() => {
    if (form.language !== "French" && form.mode !== "offline_in") {
      setForm(prev => ({ ...prev, mode: "offline_in" }));
    }
  }, [form.language]);

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();

    // ←‑‑ save to DB if you like
    await fetch("/api/enquiries", {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify(form)
    });

    /* WhatsApp link */
    const text = [
      `*Enquiry from ${form.name}*`,
      `Contact : ${form.phone}`,
      `Email   : ${form.email}`,
      `Language: ${form.language}`,
      `City    : ${form.city}`,
      `Mode    : ${form.mode.replace("_", " ")}`
    ].join("\n");

    const url =
    "https://api.whatsapp.com/send/?"    // trailing slash matters
  + "phone=" + PHONES[form.mode]
  + "&type=phone_number"
  + "&app_absent=0"
  + "&text=" + encodeURIComponent(text); 
    window.open(url, "_blank");
  };

  const base =
    "w-full border border-gray-300 p-2 rounded focus:outline-none " +
    "focus:ring-2 focus:ring-green-500 focus:border-transparent " +
    "text-sm sm:text-base";

  return (
    <form onSubmit={handleSubmit} className="p-3 space-y-4 sm:space-y-5 w-full mx-auto">
      <input name="name"  value={form.name}  onChange={handleChange}
             placeholder="Name"          required className={base} />
      <input name="phone" value={form.phone} onChange={handleChange}
             placeholder="Phone Number" required className={base} />
      <input name="email" value={form.email} onChange={handleChange}
             placeholder="Email"         required className={base} />

      {/* language */}
      <select name="language" value={form.language} onChange={handleChange}
              required className={`${base} appearance-none bg-white`}>
        <option value="-1">Select Your Preferred Language</option>
        <option>Chinese</option>
        <option>French</option>
        <option>German</option>
        <option>Italian</option>
        <option>Spanish</option>
      </select>

      <input name="city" value={form.city} onChange={handleChange}
             placeholder="City" required className={base} />

      {/* mode – only visible for French */}
      {form.language === "French" ? (
        <select name="mode" value={form.mode} onChange={handleChange}
                required className={`${base} appearance-none bg-white`}>
          <option value="online_ca">Online (Canada)</option>
          <option value="offline_ca">Offline (Canada)</option>
          <option value="offline_in">Offline (India)</option>
        </select>
      ) : (
        <input type="hidden" name="mode" value="offline_in" />
      )}

      <button type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white
                         px-4 py-2 rounded transition-colors duration-300 mt-2
                         text-sm sm:text-base">
        Enquire via WhatsApp
      </button>
    </form>
  );
}
