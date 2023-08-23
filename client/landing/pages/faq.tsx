import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import faqs from "@/utils/faqQuestion";

const Faq = () => {
  return (
    <div>
      <Head>
        <title>FAQ's</title>
        <meta />
      </Head>
      <Navbar />
      <div className="font-sans mx-10 my-4">
        <main className="text-base">
          <div className="pb-4">
            <h2 className="text-highlight text-4xl my-5 font-medium">FAQ's</h2>
            <div>
              {faqs.map((item, index) => (
                <div key={index} className="m-3">
                  <h3 className="text-highlight text-lg">
                    Q.{index + 1} {item.question}
                  </h3>
                  <p className="ml-8 p-1">{item.answer}</p>
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
