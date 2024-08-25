import {DiReact} from "react-icons/di";
import {FaNodeJs} from "react-icons/fa";
import {SiExpress, SiSocketdotio, SiWebrtc} from "react-icons/si";
import { AiFillGithub,AiFillLinkedin } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { profile3, profile4, profile5 } from './images';
import { RiCss3Fill, RiHtml5Fill, RiNextjsFill } from "react-icons/ri";

export const menu = [
    {name:"About"},
    {name:"Services"},
    {name:"Skills"},
    {name:"Projects"},
    {name:"Contact"},
]

export const projects = [
    { 
      id:1,
      title: 'WebRTC Video Chat App',
      image: `${profile3}`,
      data:{
         description: `A video chat app using WebRTC enables seamless, real-time communication over the internet. 
                      Leveraging WebRTC's robust technology, this app allows users to connect through high-quality 
                      video and audio streams directly in their web browsers or mobile devices. It supports peer-to-peer 
                      connections, ensuring privacy and security without the need for plugins or third-party software. 
                      Ideal for both personal and professional use, the app provides a user-friendly interface for 
                      initiating and managing video calls, making it easy to stay connected anytime, anywhere.`,
         demoLink: "https://video-chat-webrtc-iota.vercel.app",
      },
      stack:[
        {
          name:"ReactJs",
          icon: <DiReact/>,
          iconColor:"skyblue",
        },
        {
          name:"NodeJs",
          icon: <FaNodeJs/>,
          iconColor:"green",
        },
        {
          name:"ExpressJs",
          icon: <SiExpress/>,
        },
        {
          name:"Socket.io",
          icon: <SiSocketdotio/>,
        },
        {
          name:"WebRTC",
          icon: <SiWebrtc/>,
        },
      ]
    },
    {
      id:2,
      title: 'Podcast Application',
      image: `${profile4}`,
      data:{
        description:`PodcastR revolutionizes podcasting with AI-powered creation tools, easy uploads, and 
        trending discovery. Effortlessly generate episodes, share your own podcasts, and explore popular 
        shows. Follow favorite creators and stay updated with the latest content. Your ultimate podcast 
        companion is here—join the conversation today!`,
        demoLink: "https://podcastr-one-rose.vercel.app/",
      },
      stack:[
        {
          name:"ReactJs",
          icon: <DiReact/>,
          iconColor:"skyblue",
        },
        {
          name:"NodeJs",
          icon: <FaNodeJs/>,
          iconColor:"green",
        },
        {
          name:"ExpressJs",
          icon: <SiExpress/>,
        },
        {
          name:"NextJs",
          icon: <RiNextjsFill/>,
          iconColor:"limegreen",
        },
      ]
    },
    {
      id:3,
      title: 'Portfoilo',
      image: `${profile5}`,
      data:{
        description: `A portfolio of mine which shows my skillset, experiences and projects that I worked
        on personally and professionally.`,
        demoLink: "",
      },
      stack:[
        {
          name:"ReactJs",
          icon: <DiReact/>,
          iconColor:"skyblue",
        },
        {
          name:"NextJS",
          icon: <RiNextjsFill/>,
          iconColor:"green",
        },
        {
          name:"CSS",
          icon: <RiCss3Fill/>,
        },
        {
          name:"HTML",
          icon: <RiHtml5Fill/>,
          iconColor:"limegreen",
        }
      ]
    }
  ]
  


export const experience = [
    {
        title:"Frontend Development",
        data:[
            {
                skill:"React JS",
                level:"Experienced",
            },
            {
              skill:"Next JS",
              level:"Intermediate",
            },
            {
                skill:"HTML",
                level:"Experienced",
            },
            {
                skill:"CSS",
                level:"Experienced",
            },
            {
                skill:"JavaScript",
                level:"Experienced",
            },
            {
                skill:"TypeScript",
                level:"Experienced",
            },
            {
                skill:"Tailwind",
                level:"Experienced",
            },
            {
              skill:"Material UI",
              level:"Intermediate",
            },
        ]
    },
    {
        title:"Backend Development",
        data:[
            {
                skill:"Node JS",
                level:"Experienced",
            },
            {
                skill:"Nest JS",
                level:"Experienced",
            },
            {
                skill:"Express JS",
                level:"Experienced",
            },
            {
                skill:"Java",
                level:"Experienced",
            },
            {
                skill:"Spring Boot",
                level:"Experienced",
            },
            {
                skill:"C/C++",
                level:"Experienced",
            },
            {
                skill:"Redis",
                level:"Experienced",
            },
            {
                skill:"MySQL",
                level:"Experienced",
            },
        ]
    },
    {
      title:"System Design",
      data:[
          {
              skill:"High Level Design",
              level:"Experienced",
          },
          {
              skill:"Low Level Design",
              level:"Experienced",
          },
          {
              skill:"Database Design",
              level:"Experienced",
          },
          {
              skill:"Kafka/RabbitMQ",
              level:"Experienced",
          },
          {
              skill:"Microservices",
              level:"Experienced",
          },
          {
              skill:"REST API's",
              level:"Experienced",
          },
          {
              skill:"Memcache",
              level:"Experienced",
          },
          {
              skill:"Azure/AWS",
              level:"Experienced",
          },
      ]
  },
]


export const socialHandles = [
  {
    name:"Github",
    icon:<AiFillGithub/>,
    link:"https://www.github.com/shubham-78",
  },
  {
    name:"LinkedIn",
    icon:<AiFillLinkedin/>,
    link:"https://www.linkedin.com/in/shubhamj78",
  },
  {
    name:"X",
    icon:<FaXTwitter/>,
    link:"https://www.x.com/shubhamj78",
  },
];