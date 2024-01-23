import React from 'react'
import reactNative from "/Images/Icons/TechnologyIcons/react.png";
import android from "/Images/Icons/TechnologyIcons/android.png";
import Ai from "/Images/Icons/TechnologyIcons/Ai2.png";
import iot from "/Images/Icons/TechnologyIcons/iot.png";
import ui from "/Images/Icons/TechnologyIcons/ui.png";
import ionic from "/Images/Icons/TechnologyIcons/ionic.png";
import node from "/Images/Icons/TechnologyIcons/nodejs.png";

import blockchain from "/public/Images/Icons/TechnologyIcons/blockchain.png";
import flutter from "/public/Images/Icons/TechnologyIcons/flutter.png";
import chatbot from "/public/Images/Icons/TechnologyIcons/chatbot.png";
import web from "/public/Images/Icons/TechnologyIcons/web2.png";
import AR from "/public/Images/Icons/TechnologyIcons/AR.png";
import ios from "/public/Images/Icons/TechnologyIcons/ios.png";

import git from "/public/Images/Icons/TechnologyIcons/Git.png";
import vr from "/public/Images/Icons/TechnologyIcons/vr.png";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Chip,
  Drawer,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const navListMenuItems = [
  {
    color: "bg-[#EEFCFE]",
    icon: reactNative,
    url: "React-Native",
    title: "React Native",
    description: "Learn about our story and our mission statement.",
  },
  {
    color: "bg-[#E7FDC5]",
    url: "Android-App",
    icon: android,
    title: "Android App",
    description: "News and writings, press releases, and resources",
  },
  {
    color: "bg-[#83F9AF]",
    url: "PHP-Node-JS-Development",
    icon: node,
    title: "PHP/Node JS Development",
    description: "We are always looking for talented people. Join us!",
  },
  {
    color: "bg-[#FACFAE]",
    icon: ionic,
    title: "ionic",
    description: "All the stuff that we dan from legal made us add.",
    url: "ionic",
  },
  {
    color: "bg-[#A7D8F5]",
    icon: iot,
    title: "IOT",
    description: "Checkout our products that helps a startup running.",
    url: "IOT",
  },
  {
    color: "bg-[#2B6F44]",
    icon: ui,
    title: "UX/UI Designing",
    description: "Set of beautiful icons that you can use in your project.",
    url: "UX-UI-Designing",
  },
  {
    color: "bg-black",
    icon: ios,
    title: "iOS App",
    description: "Set of beautiful icons that you can use in your project.",
    url: "iOS-App",
  },
  {
    color: "bg-[#FACFAE]",
    icon: vr,
    title: "Quality Analyst",
    description: "Set of beautiful icons that you can use in your project.",
    url: "Quality-Analyst",
  },
  {
    color: "bg-[#CFE4D7]",
    icon: git,
    title: "VR Development",
    description: "Set of beautiful icons that you can use in your project.",
    url: "VR-Development",
  },
  {
    color: "bg-black",
    icon: Ai,
    title: "AI",
    description: "High quality UI Kits helps you to 2x faster.",
    url: "ai",
  },
  {
    color: "bg-[#89DEA9]",
    icon: blockchain,
    title: "Blockchain",
    description: "List of all our open-source projects, it's all free.",
    url: "Blockchain",
  },
  {
    color: "bg-[#89DEA9]",
    icon: flutter,
    title: "Flutter",
    description: "List of all our open-source projects, it's all free.",
    url: "Flutter",
  },
  {
    color: "bg-[#89DEA9]",
    icon: web,
    title: "Wearables",
    description: "High quality UI Kits helps you to 2x faster.",
    url: "Wearables",
  },
  {
    color: "bg-[#FACFAE]",
    icon: AR,
    title: "Augmented Reality",
    description: "List of all our open-source projects, it's all free.",
    url: "Augmented-Reality",
  },
  {
    color: "bg-[#E2F1FA]",
    icon: chatbot,
    title: "Chatbots",
    description: "List of all our open-source projects, it's all free.",
    url: "Chatbots",
  },
];



const RetailAccordion = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems.map(
    ({ icon, title, description, color, url }, key) => (
      // <Link to={`Technologies/${url}`} key={key}>
        <MenuItem className="flex items-center gap-x-5 gap-y-5 ">
          {
            <div className={` ${color}  overflow-hidden h-7 w-7 rounded-full `}>
              <img className="p-2" src={icon} alt="" />
            </div>
          }

          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-xs"
            >
              {title}
            </Typography>
          </div>
        </MenuItem>
      //  </Link>
    )
  );

  return (
    
    <React.Fragment>
      
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography
            as="div"
            variant="small"
            className={`text-xs  sm:text-base py-2 md:py-7 ${ isMenuOpen ? "bg-white text-[#262220]" : ""} `}
            color="white"
          >
            <ListItem
              className="flex items-center gap-2 ml-2 md:ml-0 font-semibold "
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Technologies 
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform  lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform md:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>

        <MenuList className="hidden max-w-screen-xl bg-blue-400 rounded-xl md:block !border-none">
          <ul className="grid grid-cols-4 gap-y-5  p-2 gap-x-10  !border-none">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="absolute md:hidden bg-red-400  !border-none">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  )
}

export default RetailAccordion