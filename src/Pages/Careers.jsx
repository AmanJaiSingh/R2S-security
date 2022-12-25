import React from "react";
import Footer from "../Plates/Footer";
import FooterClient from "../Plates/FooterClient";
import Form from "../Plates/Form";
import Header from "../Plates/Header";
import Navigation from "../Plates/Navigation";

const Careers = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <div className="mb-12">
        <div className="py-8 text-5xl flex w-full justify-center mb-8">
          <span className="w-2 border-l-8 border-blue-900 pr-3"></span>
          Careers
        </div>
        <div className="flex justify-evenly">
          <Form />
          <div className="">
            <h1 className="text-2xl my-3 mb-8 border-b-2 border-1 border-red-200">
              Why Work For <span className="text-red-500"> R2S? </span>
            </h1>
            <ul>
              <li className="py-1">
                🔘 Great working environment in a company that offers a variety
                of security solutions to multiple industries.
              </li>
              <li className="py-1">
                🔘 Upgrade your skills and qualifications through internal
                training programs.
              </li>
              <li className="py-1">🔘 Quarterly reviews and bonuses.</li>
              <li className="py-1">
                🔘 Above average pay and performance incentives.
              </li>
              <li>
                🔘 Opportunities for advancement in a rapidly growing company.
              </li>
              <li className="py-1">🔘 Health and dental benefits.</li>
              <li className="py-1">
                🔘 Flexible schedules, PT and FT options.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <FooterClient />
      <Footer />
    </div>
  );
};

export default Careers;
