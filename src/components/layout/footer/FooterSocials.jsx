import { SocialIcon } from "react-social-icons";

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

export default FooterSocials;
