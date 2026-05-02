import { SocialIcon } from 'react-social-icons'

const socials = [
    {
        title: "nextgenGitHub",
        name: "github",
        url: ""
    },
    {
        title: "tiktokAccount",
        name: "tiktok",
        url: ""
    },
    {
        title: "facebookPage",
        name: "facebook",
        url: ""
    },
    {
        title: "intagramAcoount",
        name: "instagram",
        url: ""
    },
    
];

const FooterSocials = () => {
    return(
        <>
            <div className='flex justify-between gap-3'>
                {socials.map((s,index) => (
                    <SocialIcon fallback={s.title} network={s.name} url={s.url} style={{width: '35px', height: '35px'}}/>
                ))}
            </div>
        </>
    );
}
export default FooterSocials