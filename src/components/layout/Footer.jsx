import nextGenLogo from "@/assets/logo/logoWhiteNobg.png";
import { Link } from "react-router-dom";
import img1 from "../../assets/logo/partner/cadtIdt.webp";
import img3 from "../../assets/logo/partner/geologyClubCambodia.webp";
import img4 from "../../assets/logo/partner/theCambodiaChinaTimes.webp";
import coderistic from "../../assets/logo/partner/coderistic.webp";
import ams from "../../assets/logo/partner/ams.webp";
import { SocialIcon } from "react-social-icons";

const partnerRows = [
  [
    {
      img: img1,
      name: "CADT-IDT",
      frameClassName: "",
      imageClassName: "object-contain p-1",
    },
    {
      img: ams,
      name: "Apsara Media Services",
      frameClassName: "rounded-full bg-white",
      imageClassName: "object-contain p-1 rounded-full",
    },
  ],
  [
    {
      img: img3,
      name: "Geology Club, CAMBODIA",
      frameClassName: "rounded-full bg-white aspect-square",
      imageClassName: "object-contain p-1 rounded-full",
    },
    {
      img: coderistic,
      name: "Coderistic",
      frameClassName: "rounded-full bg-white aspect-square",
      imageClassName: "object-contain p-1 rounded-full",
    },
    {
      img: img4,
      name: "The Cambodia China Times",
      frameClassName: "rounded-full bg-white",
      imageClassName: "object-contain p-1 rounded-full",
    },
  ],
];


const socials = [
  {
    id: 0,
    title: "NextGenFacebook",
    name: "facebook",
    url: "https://www.facebook.com/share/1HxhfFEHC5/?mibextid=wwXIfr",
  },
  {
    id: 1,
    title: "NextGenTikTok",
    name: "tiktok",
    url: "https://www.tiktok.com/@nextgenengagementprogram?_r=1&_t=ZS-972l3PJm5jz",
  },
  {
    id: 2,
    title: "NextGentelegram",
    name: "telegram",
    url: "https://t.me/nextgenengagementprogram",
  },
];

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
                Email: {" "}
                <a
                  href="mailto:nextgen@cadt.edu.kh"
                  className="hover:underline"
                >
                  nextgen@cadt.edu.kh
                </a>
                <p>Phone number: +855 8888 22226</p>
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

const FooterColumn = ({ title, children }) => {
  return (
    <div className="footer_col">
      <h3 className="text-[20px] font-bold">{title}</h3>
      {children}
    </div>
  );
};



const FooterSocials = () => {
  return (
    <div className="flex flex-wrap gap-1.5">
      {socials.map((social) => (
        <SocialIcon
          key={social.id}
          bgColor="black"
          fallback={social.title}
          network={social.name}
          url={social.url}
          style={{ width: "32px", height: "32px" }}
        />
      ))}
    </div>
  );
};



const PartnerIMG = () => {
  const renderPartnerLogo = (partner) => (
    <div
      key={partner.name}
      className={`
        flex items-center justify-center
        overflow-hidden shrink-0
        h-14 sm:h-16 md:h-18 ${partner.frameClassName}
      `}
    >
      <img
        className={`h-full w-auto max-w-full ${partner.imageClassName}`}
        src={partner.img}
        alt={partner.name}
      />
    </div>
  );

  return (
    <div className="mt-4 w-full max-w-4xl mx-auto flex flex-col items-center gap-6 px-4">
      {partnerRows.map((partners, index) => (
        <div key={index} className="flex w-full justify-center">
          <div
            className={`flex flex-wrap items-center justify-center ${
              index === 0 ? "gap-5 sm:gap-8" : "gap-3 sm:gap-5"
            }`}
          >
            {partners.map(renderPartnerLogo)}
          </div>
        </div>
      ))}
    </div>
  );
};
