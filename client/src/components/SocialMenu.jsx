import React from 'react';
import '../../public/Styles/social.scss';
import Instagram from '../assets/Instagram.png';
import LinkedIn from '../assets/LinkedIn.png';
import Whatsapp from '../assets/Whatsapp.png';
import Discord from '../assets/Discord.png';

const images = [Instagram, LinkedIn, Whatsapp, Discord];

const social = [
  {
    icon: images[0],
    platform: "Instagram",
  },
  {
    icon: images[1],
    platform: "LinkedIn",
  },
  {
    icon: images[2],
    platform: "Whatsapp",
  },
  {
    icon: images[3],
    platform: "Discord",
  },
];

const SocialMenu = () => {
  return (
    <>
      <div className="Social-accounts">
        {
          social.map((item) => {
            return (
              <div className="social-account">
                <img src={item.icon} />
                <span className="title">{item.platform}</span>
              </div>
            );
          })
        }
      </div>
    </>
  );
};

export default SocialMenu;