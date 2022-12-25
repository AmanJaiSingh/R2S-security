import React from "react";
import Footer from "../Plates/Footer";
import FooterClient from "../Plates/FooterClient";
import Header from "../Plates/Header";
import Navigation from "../Plates/Navigation";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <div className="mx-36">
        <div className="py-8 text-5xl flex w-full  mb-8 ">
          <span className="w-2 border-l-8 border-red-300 pr-3"></span>
          WELCOME TO{" "}
          <span className="text-red-300 ml-5 font-medium"> R2S SECURITY</span>
        </div>
        <div className="font-medium">
          <p>
            GLOBE SECURITY, a premier ISO 9001:2015 Certified Security Group
            Company, provides wide range of Security, Manpower, House-Keeping
            and Detective related services. It includes – Armed & Unarmed Manned
            Guarding Services; Cash Van Service; Bouncer & Bodyguard Service;
            Event Security Management; Skilled & Unskilled Manpower Service;
            Temporary Staffing; Facility Management; Housekeeping and
            Investigation Services.
          </p>
          <br />
          <p>
            We are passionate about our work and truly believe in offering best
            of services to our clients at the most affordable cost. We
            continuously upgrade and improve ourselves to give you best in
            security. Our philosophy is giving “Security beyond Guarding”
            experience to our clients. We truly believe that Security is much
            more than mere deployment and monitoring of guards. It involves
            thorough identification of roles and responsibilities of each guard
            and providing training to enable them to perform their duties in
            most efficient and productive manner. We aim to make your investment
            on security more productive by supplementing security guard
            responsibilities with important roles in the best interest of the
            company and with an aim to relieve the management completely of
            security and all allied problems.
          </p>
          <br />
          <p>
            We provide integrated solution to our clients by combining Security,
            Housekeeping and Manpower services under one roof and thereby
            enabling our clients to avoid multiple vendors and deal only with us
            for all such non-core task.
          </p>
          <br />
          <p>
            We have dedicated Emergency Response Team (ERT) round the clock to
            meet any emergency situation at a short notice. We have a dedicated
            helpline number for security staff to solve any of their query
            without the need to visit our office. We have well equipped
            classroom with 40 person capacity to impart regular training to our
            guards and open air compound for physical training.
          </p>
          <br />
          <p>
            We are securing various Corporates, Banks & Financial Institutions,
            Retail Outlets, Industrial Units, Residential and Commercial
            Buildings, Hospitals, Educational and Government Institutions. Our
            relentless efforts have been lauded by our prestigious clients.
          </p>
        </div>
      </div>
      <FooterClient />
      <Footer />
    </div>
  );
};

export default AboutUs;
