"use client";

import { Phone } from "lucide-react";
import { useState } from "react";

export default function Contact() {
 
  const [formData, setFormData] = useState({
    condition: "",
    containerSize: "",
    purchaseTime: "",
    name: "",
    Phone: "",
    email: "",
  });
  const [loading, setLoading] = useState(false); // <-- loading state


   const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();
setLoading(true); 
    try {

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        alert("Message Sent Successfully!");
        setFormData({
          condition: "",
          containerSize: "",
          purchaseTime: "",
          name: "",
          Phone: "",
          email: "",
        });
      }

    } catch (error) {
      alert("Something went wrong");
      console.error("Error sending message:", error);
    } finally {
      setLoading(false); // stop loading
    }

  };


  return (
    <section id="contact-us" className="bg-white py-20 px-6">
         <h2 className="text-5xl font-oswald text-center font-bold mb-4">
            Get In <span className="text-[#BCA468] ">Touch</span>
          </h2>

          <p className="text-gray-500 text-center text-lg mb-16">
Ready to get started? Send us a message and {"we'll "}provide a free quote within 24 hours.
          </p>
      <div className="max-w-6xl mx-auto gap-12 grid md:grid-cols-2 ">

        {/* Left Side */}
        <div>
         <h1 className="md:text-5xl text-2xl md:block hidden mt-0 md:mt-5 font-semibold font-oswald">{"Feel free fillup this form. We'll get back to you soon."}</h1>

          <div className="space-y-10 md:mt-10 mt-0">
            <div className="flex gap-5">
                <span className="py-2 px-3 text-center items-center flex bg-yellow-500/10 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-yellow-700">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>
</span>
<a href="https://maps.app.goo.gl/zoDh8sGK3isT8YNG9" target="_blank"><div>
    <h3 className="text-xl font-semibold">LOCATION</h3>
    <p className="text-gray-600">1467 Hammonds Plains Road
Hammonds Plains, Nova Scotia, Canada</p>    
</div></a>
</div>
                    <div className="flex gap-5">
                <span className="py-2 px-3 text-center items-center flex bg-yellow-500/10 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-yellow-700">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>

</span>
<div>
    <h3 className="text-xl font-semibold">PHONE NUMBER</h3>
    <p className="text-gray-600">(902) 201-5101</p>
</div>
</div>
                  <div className="flex gap-5">
                <span className="py-2 px-3 text-center items-center flex bg-yellow-500/10 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-yellow-700">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>

</span>
<div>
    <h3 className="text-xl font-semibold">EMAIL:</h3>
    <p className="text-gray-600">royalcontainershfx@gmail.com</p>
    
</div>
</div>
          </div>
        </div>

        {/* Right Side Form */}
       <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-lg space-y-6"
        >
         <h1 className="text-xl block md:hidden font-semibold font-oswald">Feel free fillup this form. We'll get back to you soon.</h1>

          <select
            name="condition"
            value={formData.condition}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg border focus:border-yellow-500"
          >
            <option value="" disabled >Condition Preference?</option>
            <option value="Used">Used</option>
            <option value="New">Brand New</option>
            <option value="Modified">Modified</option>
            <option value="Custom">Custom</option>
            <option value="Refurbished">Refurbished</option>
          </select>

          <input
            type="text"
            name="containerSize"
            value={formData.containerSize}
            onChange={handleChange}
            placeholder="What size container do you need?"
            required
            className="w-full p-3 rounded-lg border focus:border-yellow-500"
          />

          <select
            name="purchaseTime"
            value={formData.purchaseTime}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg border focus:border-yellow-500"
          >
            <option value="" disabled>When are you looking to purchase?</option>
            <option value="ASAP">ASAP</option>
            <option value="Within 1 month">Within 1 month</option>
            <option value="Within 3 Months">Within 3 Months</option>
            <option value="Within 6 Months">Within 6 Months</option>
            <option value="Just researching">Just researching</option>
          </select>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full name"
            required
            className="w-full p-3 rounded-lg border focus:border-yellow-500"
          />

          <input
            type="tel"
            name="Phone"
            value={formData.Phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className="w-full p-3 rounded-lg border focus:border-yellow-500"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full p-3 rounded-lg border focus:border-yellow-500"
          />

          <button
            type="submit"
            disabled={loading} 
className={`w-full text-black font-semibold py-3 rounded-lg transition 
              ${loading ? "bg-yellow-400 cursor-not-allowed" : "bg-[#BCA468] hover:bg-yellow-600"}`}          >
           {loading ? (
              <span className="flex justify-center items-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
                Sending...
              </span>
            ) : (
              "Get A Quote"
            )}
          </button>

        </form>
      </div>
    </section>
  );
}