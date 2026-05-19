import { Link } from "react-router-dom";
import nextGenLogo from "@/assets/logo/logoWhiteNobg.png";
import FooterColumn from "@/components/layout/footer/FooterColumn";
import PartnerIMG from "@/components/layout/footer/PartnerIMG";
import FooterSocials from '@/components/layout/footer/FooterSocials';

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col bg-brand-primary gap-10 py-10 text-white">
        {/*Partners*/}
        <div className="flex-col-center">
          <h1 className="font-bold text-[32px]">
            Participate & Supported By
          </h1>
          <PartnerIMG />
        </div>
        <div className="bg-brand-secondary-orange flex-center w-full h-20">
          <h1 className="font-bold text-[32px]">STAY CONNECTED</h1>
        </div>
        {/*FooterLinks*/}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 px-8 lg:px-16">
          {/*Logo*/}
          <div className="lg:ml-10 w-48 h-25">
            <img
              className="w-full h-full"
              src={nextGenLogo}
              alt="NextGenLogo"
            />
          </div>

          {/*Address*/}
          <FooterColumn title="ADDRESS">
            <p>
              Bridge 2, National Road 6A, Sangkat Prek Leap, Khan Chroy Changva,
              Phnom Penh
            </p>
          </FooterColumn>

          {/*Contact*/}
          <FooterColumn title="CONTACTS">
            <div>
              <p>
                Email: <a href="mailto:nextgen@gmail.com">nextgen@gmail.com</a>
              </p>
              <p>Phone number: +855 123 456</p>
            </div>
            {/*Socials*/}
            <div className="flex">
                <FooterSocials />
            </div>
          </FooterColumn>

          {/*Quick Links*/}
          <FooterColumn title="QUICK LINKS">
            <ul>
              <li>
                <Link to="/overview">Project Overview</Link>
              </li>
              <li>
                <Link to="/journey">Project Journey</Link>
              </li>
              <li>
                <Link to="/projects">Student's Project</Link>
              </li>
              <li>
                <Link to="/news">News/Updates</Link>
              </li>
            </ul>
          </FooterColumn>
        </div>
        {/*Credits*/}
        <div className="px-8 lg:px-25">
          <p>© 2026 Next-Gen Engagement Program. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
