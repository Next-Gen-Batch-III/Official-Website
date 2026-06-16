import nextGenLogo from "@/assets/logo/logoWhiteNobg.png";
import FooterColumn from "@/components/layout/footer/FooterColumn";
import PartnerIMG from "@/components/layout/footer/PartnerIMG";
import FooterSocials from "@/components/layout/footer/FooterSocials";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-brand-primary text-white">
        {/*Partners*/}
        <div className="flex-col-center min-h-[255px] px-4 pb-8 pt-8 text-center">
          <h2 className="text-[25px] font-bold leading-tight sm:text-[30px]">
            Participated & Supported by
          </h2>
          <PartnerIMG />
        </div>

        <div className="flex-center h-[82px] w-full bg-brand-secondary-orange px-4 text-center">
          <h2 className="text-[28px] font-bold leading-none sm:text-[30px]">
            STAY CONNECTED
          </h2>
        </div>

        {/*FooterLinks*/}
        <div className="w-full px-6 pt-12 sm:px-8 lg:px-20">
          <div className="grid grid-cols-1 items-start gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {/*Logo*/}
            <div className="w-32 sm:col-span-2 lg:col-span-1 lg:ml-15">
              <img
                className="h-auto w-full object-contain"
                src={nextGenLogo}
                alt="NextGenLogo"
              />
            </div>
            {/*Address*/}
            <FooterColumn title="ADDRESS">
              <div>
                <p>
                  Bridge 2, National Road 6A, Sangkat Prek Leap, Khan Chroy
                  Changva, Phnom Penh
                </p>
              </div>
            </FooterColumn>
            <FooterColumn title="CONTACT">
              {/*Socials*/}
              <div>
                Email:
                <a
                  href="mailto:nextgen@cadt.edu.kh"
                  className="hover:underline"
                >
                  nextgen@cadt.edu.kh
                </a>
                <p>Phone number: +855 822 2226</p>
              </div>
              <div className="flex">
                <FooterSocials />
              </div>
            </FooterColumn>
            {/*Quick Links*/}
            <FooterColumn title="QUICK LINKS">
              <ul>
                <li>
                  <Link to="/overview" className="hover:underline">Project Overview</Link>
                </li>
                <li>
                  <Link to="/journey" className="hover:underline">Project Journey</Link>
                </li>
                <li>
                  <Link to="/projects" className="hover:underline">Student's Project</Link>
                </li>
                <li>
                  <Link to="/news" className="hover:underline">News/Updates</Link>
                </li>
                <li>
                  <Link to="/faq" className="hover:underline">FAQs</Link>
                </li>
              </ul>
            </FooterColumn>
          </div>
        </div>
        {/*Credits*/}
        <div className="px-6 pb-5 pt-8 text-sm sm:px-8 lg:px-33">
          <p>&copy; 2026 Next-Gen Engagement Program. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
