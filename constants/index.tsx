import {
  Icon360View,
    IconAnchor,
    IconBoxAlignTopLeft,
    IconGlobeFilled,
    IconHammer,
    IconHeartHandshake,
    IconHome2,
    IconMail,
    IconSignature,
    IconTableColumn,
  } from "@tabler/icons-react";
  
 
  export const navItems = [
    { name: "About", link: "#about" , icon:<IconHome2/> },
    { name: "Projects", link: "#projects",icon:<IconAnchor/> },
    { name: "Contact", link: "#contact",icon:<IconMail/> },
  ];
  
  export const gridItems = [
    {
      title: "Global Availability",
      description: "Flexible to work across different time zones to accomodate your schedule.",
      img:"globalImg.jpg",
      imgClassName:"pb-0",
      icon: <IconGlobeFilled className="h-4 w-4 text-amber-500" />,

    },
    {
      title: "Worldwide Client Collaboration",
      description: "Collaborating with clients worldwide for seamless communication.",
      img:"collab.jpg" ,
      imgClassName:"pl-2 pr-2 rounded-2xl flex",
      icon: <IconHeartHandshake className="h-4 w-4 text-amber-500" />,
    },
    {
      title: "The Art of Design",
      description: "Discover the beauty of thoughtful and functional design.",
      img: "graphic.jpg",
      imgClassName:"pl-2 pr-2 rounded-2xl",
      icon: <IconSignature className="h-4 w-4 text-amber-500" />,
    },
    {
      title: "My Tech Stacks",
      description:
        "Understand the impact of effective communication in our lives.",
      icon: <IconTableColumn className="h-4 w-4 text-amber-500" />,
    },
    {
      title: "Robust Backend Development",
      description: "Crafting powerful backend solutions for seamless digital experiences, prioritizing performance, scalability, and security.",
      img: "backendImg.jpg",
      imgClassName:"",
      icon: <IconHammer className="h-4 w-4 text-amber-500" />,
    },
    {
      title: "",
      description: "",
      imgClassName:"",
      icon: <IconBoxAlignTopLeft className="h-4 w-4 text-amber-500" />,
    },
    {
      title: "The Spirit of Adventure",
      description: "Embark on exciting journeys and thrilling discoveries.",
      img: "",
      imgClassName:"",
      icon: <Icon360View className="h-4 w-4 text-amber-500" />,
    },
  ];
  
  
  export const socialMedia = [
    {
      id: 1,
      img: "git.svg",
      link:"https://github.com/Rehneet11",
    },
    {
      id: 2,
      img: "leetcode.svg",
      link:"https://leetcode.com/u/Rehneet/"
    },
    {
      id: 3,
      img: "/link.svg",
      link:"https://www.linkedin.com/in/rehneet-singh-05b6b4253"
    },
  ];