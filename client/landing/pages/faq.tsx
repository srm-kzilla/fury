import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import faqs from "@/constants/faqQuestion";

const Faq = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const toggleFAQ = (id: number) => {
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
    }
  };
  return (
    <div>
      <Head>
        <title>FAQs</title>
        <meta />
      </Head>
      <Navbar />
      <div className="font-sans mx-10 my-4 md:px-20">
        <main className="text-base">
          <div className="container mx-auto">
            <h1 className="text-highlight text-4xl font-bold mb-8">
              Frequently Asked Questions
            </h1>
            <div>
              {faqs.map((faq, index) => (
                <div key={index} className="mb-4">
                  <button
                    className="text-white text-lg text-left font-semibold mb-2 flex flex-row gap-2"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="text-highlight"> + </span>
                    {faq.question}
                  </button>
                  {activeId === index && (
                    <p className="text-white font-light px-5">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Faq;
