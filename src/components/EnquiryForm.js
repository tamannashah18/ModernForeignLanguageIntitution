"use client";
import { useState } from 'react';

export default function EnquiryForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', language: '-1' , mode: '-1',city:'' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    // Save to DB
    await fetch('/api/enquiries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    // WhatsApp Integration
    const adminPhone = '919428746469'; // Replace with your WhatsApp number, no +, no spaces
    const text = `*Enquiry from ${form.name}*\nContact Details : ${form.phone}\nEmail: ${form.email})\nPreferred Language: ${form.language}\nCity: ${form.city}\nPreferred Mode of Learning: ${form.mode}`;
    const url = `https://wa.me/${adminPhone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className=" p-3 space-y-6 max-w-md mx-auto">
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required className="w-full border p-2" />
      <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" required className="w-full border p-2" />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required className="w-full border p-2" />
      <select name="language" value={form.language} onChange={handleChange} required className="w-full border p-2" >
        <option value={"-1"}>Select Your Preferred Language</option>  
        <option value={"Chinese"}>Chinese</option>  
        <option value={"French"}>French</option>  
        <option value={"German"}>German</option>  
        <option value={"Italian"}>Italian</option>  
        <option value={"Spanish"}>Spanish</option>  
      </select>
      <input name="city" value={form.city} onChange={handleChange} placeholder="City" required className="w-full border p-2" />
      <select name="mode" value={form.mode} onChange={handleChange} required className="w-full border p-2" >
        <option value={"-1"}>Select Your Preferred Mode of Learning</option>  
        <option value={"Online"}>Online</option>  
        <option value={"Offline"}>Offline/In-person</option>  
      </select>
      
      <button type="submit" className=" bg-center w-full bg-green-600 text-white px-4 py-2 rounded">Enquire via WhatsApp</button>
    </form>
  );
}
