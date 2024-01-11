

import React from 'react';
import { MediaData } from '../data/MediaData'; 
import '../asserts/media/App.css'; 
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Copyright © 2022 hSenidBiz.com. All rights reserved.</p>
        <div className="social-icons">
          {MediaData.map((item, index) => (
            <a href={item.href} key={index} target="_blank" rel="noopener noreferrer">
              <img src={item.img} alt={item.title} className="social-icon" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
