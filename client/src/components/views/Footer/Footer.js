import React from "react";
import { FooterContainer } from "./Footer.styles";

function Footer() {
  return (
    <FooterContainer>
      <div>
        - made by Kyusch -
        <ul>
          <li>
            <a className="githubLink" href="https://github.com/kyusch0330">
              GitHub
            </a>
          </li>
          <li>email : kyusch0330@gmail.com</li>
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
