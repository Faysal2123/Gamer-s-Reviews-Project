import { LinkedinOriginal, TwitterOriginal } from "devicons-react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-base-300">
      <div className="w-11/12 mx-auto">
        <footer className="footer  text-base-content p-10 justify-between">
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Social</h6>
            <div className="grid grid-flow-col gap-6">
              <a href="https://github.com/programming-hero-web-course2/b10-a10-client-side-Faysal2123"  target="_blank"><FaGithub size={30}></FaGithub></a>
              <a href="https://www.linkedin.com/feed/" target="_blank">< LinkedinOriginal size={30}></LinkedinOriginal></a>
              <a href="https://x.com/home?lang=en" target="_blank"><TwitterOriginal size={30}></TwitterOriginal></a>
            </div>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
