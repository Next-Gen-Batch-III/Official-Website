import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

import nextGenLogo from "@/assets/logo/logoWhiteNobg.png";
import cadtIdt from "../../assets/logo/partner/cadtIdt.webp";
import geologyClub from "../../assets/logo/partner/geologyClubCambodia.webp";
import cambodiaChinaTimes from "../../assets/logo/partner/theCambodiaChinaTimes.webp";
import coderistic from "../../assets/logo/partner/coderistic.webp";
import ams from "../../assets/logo/partner/ams.webp";

import dp from "../../assets/logo/partner/dp.webp"
import bookme from "../../assets/logo/partner/bookme.webp"


const partnerGroups = [
  {
    title: "Supported by",
    partners: [
      {
        img: cadtIdt,
        name: "CADT Institute of Digital Technology",
        imageClassName: "h-16 sm:h-20",
      },
    ],
  },
  {
    title: "Media Sponsor",
    partners: [
      {
        img: ams,
        name: "Apsara Media Services",
        imageClassName: "h-10 sm:h-10",
      },
      {
        img: cambodiaChinaTimes,
        name: "The Cambodia China Times",
        imageClassName: "h-10 sm:h-20",
      },
    ],
  },
  {
    title: "Cloud Partner",
    partners: [
      {
        img: dp,
        name: "Daun Penh Cloud",
        imageClassName: "h-14 sm:h-16",
      },
    ],
  },
  {
    title: "Community Partner",
    partners: [
      {
        img: coderistic,
        name: "Coderistic",
        imageClassName: "h-12 sm:h-14",
      },
      {
        img: geologyClub,
        name: "Geology Club Cambodia",
        imageClassName: "h-12 sm:h-14",
      },
    ],
  },
  {
    title: "Ticket Partner",
    partners: [
      {
        img: bookme,
        name: "BookMe+",
        imageClassName: "h-10 sm:h-12",
      },
    ],
  },
];

const socials = [
  {
    id: 0,
    title: "NextGen Facebook",
    name: "facebook",
    url: "https://www.facebook.com/share/1HxhfFEHC5/?mibextid=wwXIfr",
  },
  {
    id: 1,
    title: "NextGen TikTok",
    name: "tiktok",
    url: "https://www.tiktok.com/@nextgenengagementprogram?_r=1&_t=ZS-972l3PJm5jz",
  },
  {
    id: 2,
    title: "NextGen Telegram",
    name: "telegram",
    url: "https://t.me/nextgenengagementprogram",
  },
];

const Footer = () => {
  return (
    <footer className="bg-brand-primary text-white">
      {/* Partners */}
      <section className="bg-white px-6 py-10 text-brand-primary sm:px-8 lg:px-12">
        <PartnerIMG />
      </section>

      {/* Stay Connected */}
      <section className="flex h-[82px] w-full items-center justify-center bg-brand-secondary-orange px-4 text-center">
        <h2 className="text-[28px] font-bold leading-none sm:text-[30px]">
          STAY CONNECTED
        </h2>
      </section>

      {/* Footer Content */}
      <section className="w-full px-6 pt-12 sm:px-8 lg:px-20">
        <div className="grid grid-cols-1 items-start gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Logo */}
          <div className="w-32 sm:col-span-2 lg:col-span-1 lg:ml-15">
            <img
              src={nextGenLogo}
              alt="Next-Gen Engagement Program"
              className="h-auto w-full object-contain"
            />
          </div>

          {/* Address */}
          <FooterColumn title="ADDRESS">
            <p>
              Bridge 2, National Road 6A, Sangkat Prek Leap, Khan Chroy
              Changva, Phnom Penh
            </p>
          </FooterColumn>

          {/* Contact */}
          <FooterColumn title="CONTACT">
            <div className="space-y-1">
              <p>
                Email:{" "}
                <a
                  href="mailto:nextgen@cadt.edu.kh"
                  className="hover:underline"
                >
                  nextgen@cadt.edu.kh
                </a>
              </p>

              <p>
                Phone number:{" "}
                <a href="tel:+855888822226" className="hover:underline">
                  +855 8888 22226
                </a>
              </p>
            </div>

            <FooterSocials />
          </FooterColumn>

          {/* Quick Links */}
          <FooterColumn title="QUICK LINKS">
            <ul className="space-y-1">
              <li>
                <Link to="/overview" className="hover:underline">
                  Project Overview
                </Link>
              </li>

              <li>
                <Link to="/journey" className="hover:underline">
                  Project Journey
                </Link>
              </li>

              <li>
                <Link to="/projects" className="hover:underline">
                  Student&apos;s Project
                </Link>
              </li>

              <li>
                <Link to="/news" className="hover:underline">
                  News/Updates
                </Link>
              </li>

              <li>
                <Link to="/faq" className="hover:underline">
                  FAQs
                </Link>
              </li>
            </ul>
          </FooterColumn>
        </div>
      </section>

      {/* Credits */}
      <div className="px-6 pb-5 pt-8 text-sm sm:px-8 lg:px-33">
        <p>
          &copy; 2026 Next-Gen Engagement Program. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, children }) => {
  return (
    <div className="space-y-4 text-sm leading-relaxed">
      <h3 className="text-[20px] font-bold">{title}</h3>
      {children}
    </div>
  );
};

const FooterSocials = () => {
  return (
    <div className="flex flex-wrap gap-2">
      {socials.map((social) => (
        <SocialIcon
          key={social.id}
          bgColor="#000000"
          fallback={social.title}
          network={social.name}
          url={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.title}
          style={{
            width: "32px",
            height: "32px",
          }}
        />
      ))}
    </div>
  );
};

const PartnerIMG = () => {
  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
      {partnerGroups.map((group) => (
        <div
          key={group.title}
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <h3 className="mb-5 text-sm font-bold text-brand-primary">
            {group.title}
          </h3>

          <div className="flex min-h-20 flex-wrap items-center justify-center gap-4 lg:justify-start">
            {group.partners.map((partner) => (
              <img
                key={partner.name}
                src={partner.img}
                alt={partner.name}
                title={partner.name}
                loading="lazy"
                className={`w-auto max-w-full object-contain ${partner.imageClassName}`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Footer;