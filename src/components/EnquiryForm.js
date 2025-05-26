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
    <form onSubmit={handleSubmit} className="p-3 space-y-4 sm:space-y-5 w-full mx-auto">
      <input 
        name="name" 
        value={form.name} 
        onChange={handleChange} 
        placeholder="Name" 
        required 
        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base" 
      />
      <input 
        name="phone" 
        value={form.phone} 
        onChange={handleChange} 
        placeholder="Phone Number" 
        required 
        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base" 
      />
      <input 
        name="email" 
        value={form.email} 
        onChange={handleChange} 
        placeholder="Email" 
        required 
        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base" 
      />
      <select 
        name="language" 
        value={form.language} 
        onChange={handleChange} 
        required 
        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none bg-white text-sm sm:text-base" 
      >
        <option value={"-1"}>Select Your Preferred Language</option>  
        <option value={"Chinese"}>Chinese</option>  
        <option value={"French"}>French</option>  
        <option value={"German"}>German</option>  
        <option value={"Italian"}>Italian</option>  
        <option value={"Spanish"}>Spanish</option>  
      </select>
      <input 
        name="city" 
        value={form.city} 
        onChange={handleChange} 
        placeholder="City" 
        required 
        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base" 
      />
      <select 
        name="mode" 
        value={form.mode} 
        onChange={handleChange} 
        required 
        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none bg-white text-sm sm:text-base" 
      >
        <option value={"-1"}>Select Your Preferred Mode of Learning</option>  
        <option value={"Online"}>Online</option>  
        <option value={"Offline"}>Offline/In-person</option>  
      </select>
      
      <button 
        type="submit" 
        className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition-colors duration-300 mt-2 text-sm sm:text-base"
      >
        Enquire via WhatsApp
      </button>
    </form>
  );
}
