import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Footer = () => {
  return (
    <section
      className="px-9 lg:px-48 pt-20 pb-9 text-white"
      style={{ background: "var(--dark-blue)" }}
    >
      <section className="lg:flex lg:items-center lg:justify-between font-bold pb-14">
        <div className="lg:pb-0 pb-4">
          <h2 className="blueText text-lg pb-2">Are you a manufacturer?</h2>
          <h1 className="text-3xl">Join us for more sales and returns</h1>
        </div>
        <div className="flex gap-4 text-sm">
          <button className="blueBg px-3 py-1 rounded-full flex items-center gap-1">
            Signup now <FaArrowRight />
          </button>
          <button
            className="px-3 py-1 rounded-full"
            style={{ background: "var(--footer-grey)" }}
          >
            Contact us
          </button>
        </div>
      </section>
      <hr className="pb-3" />
      <section className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-9">
        <div className="text-xl font-bold">
          <span className="blueText">CO</span>CREATE
        </div>
        <div className="text-sm footerGridItem">
          <h2 className="font-bold pb-2">Knowledge Base</h2>
          <ul className="footerList">
            <li>
              <a href="#">How it works</a>
            </li>
            <li>
              <a href="#">Payments</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Fund Safety & Security</a>
            </li>
          </ul>
        </div>
        <div className="text-sm footerGridItem sm:block hidden">
          <h2 className="font-bold pb-2">DOKA & You</h2>
          <ul className="footerList">
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Returns & Refunds</a>
            </li>
            <li>
              <a href="#">User Conduct Guide</a>
            </li>
          </ul>
        </div>
        <div className="text-sm footerGridItem sm:block hidden">
          <h2 className="font-bold pb-2">DOKA</h2>
          <ul className="footerList">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">How we Work</a>
            </li>
          </ul>
        </div>
        <div className="text-sm footerGridItem md:block hidden">
          <h2 className="font-bold pb-2">Services</h2>
          <ul className="footerList">
            <li>
              <a href="#">Service 1</a>
            </li>
            <li>
              <a href="#">Service 2</a>
            </li>
          </ul>
        </div>
      </section>
      <p className="pt-12 text-xs footerGreyText">
        If you would like to find out more about which entity you receive
        services from please click
        <a href="#" className="underline">
          here
        </a>
        . If you have any other questions, please reach out to us via the in-app
        chat.
      </p>
    </section>
  );
};

export default Footer;
