import React from "react";
import { FooterContainer } from "./Footer.styles";

function Footer() {
  return (
    <FooterContainer>
      <div>
        - made by Kyusch -
        <ul>
          <li>
            <a href="#">github : https://github.com/cssdsasdasad</a>
          </li>
          <li>email : kydsad@dsadsadzxc</li>
        </ul>
      </div>
      <div>
        Other Apps
        <ul>
          <li>
            <a href="#">Ring my bell</a>
          </li>
          <li>
            <a href="#">WeatherHood</a>
          </li>
        </ul>
      </div>
    </FooterContainer>
  );
}

export default Footer;
