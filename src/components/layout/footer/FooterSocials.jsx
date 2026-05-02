import { SocialIcon } from 'react-social-icons'

const socials = [
    {
        id: 0,
        title: "NextGenFacebook",
        name: "facebook",
        url: ""
    },
    {
        id: 1,
        title: "NextGenTikTok",
        name: "tiktok",
        url: ""
    },
    {
        id: 2,
        title: "NextGentelegram",
        name: "telegram",
        url: ""
    },
];

const FooterSocials = () => {
    return(
        <>
            <div className='flex justify-between gap-3'>
                {socials.map((s,index) => (
                    <SocialIcon key={index} bgColor='black' fallback={s.title} network={s.name} url={s.url} style={{width: '35px', height: '35px'}}/>
                ))}
            </div>
        </>
    );
}
export default FooterSocials
