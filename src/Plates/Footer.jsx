import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import RoomIcon from "@mui/icons-material/Room";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Footer = () => {
  return (
    <div className=" flex  justify-between h-80 bg-[#17706a] w-full">
      <div className="w-1/3 align-middle">
        <div className="text-2xl ">R2S Security</div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
          tenetur blanditiis dolorum! Nisi a atque fugiat iusto beatae
          perspiciatis perferendis, velit commodi corporis ratione temporibus
          deleniti adipisci dignissimos quidem odio.
        </div>
      </div>
      <div>
        <div>Ouick Links</div>
        <ol>
          <li>Home</li>
          <li>About Us</li>
          <li>Our Services</li>
          <li>Our Team</li>
          <li>Contact Us</li>
        </ol>
      </div>
      <div>
        <div className="text-white text-3xl">Contact Us</div>
        <div>
          <span className="font-bold">Address - </span>
          <span>Shop-2,Telhedi,Roorkee,Uttrakhand 247667</span>
        </div>
        <div>
          <span className="font-bold">Mobile - </span>
          <span>9045122383</span>
        </div>
        <div>
          <span className="font-bold">Email - </span>
          <span>R2SSecurity@contact.us</span>
        </div>
        <div className="flex">
          <div
            className="w-[40px] h-[40px] flex justify-center align-middle items-center rounded-3xl text-white mx-1"
            style={{ backgroundColor: "#3B5999" }}
          >
            <FacebookIcon />
          </div>
          <div
            className="w-[40px] h-[40px] flex justify-center align-middle items-center rounded-3xl text-white mx-1"
            style={{ backgroundColor: "#E4405F" }}
          >
            <InstagramIcon />
          </div>
          <div
            style={{ backgroundColor: "#55ACEE" }}
            className="w-[40px] h-[40px] flex justify-center align-middle items-center rounded-3xl text-white mx-1"
          >
            <LinkedInIcon />
          </div>
          <div
            style={{ backgroundColor: "#E60023" }}
            className="w-[40px] h-[40px] flex justify-center align-middle items-center rounded-3xl text-white mx-1"
          >
            <TwitterIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
