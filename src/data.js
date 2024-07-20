import {DiReact} from "react-icons/di";
import {FaNodeJs} from "react-icons/fa";
import {SiExpress,SiMongodb, SiSocketdotio, SiWebrtc} from "react-icons/si";
import { AiFillGithub,AiFillLinkedin } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { CgFigma } from "react-icons/cg";
import { TbBrandReactNative } from "react-icons/tb";
import { SiAdobexd } from "react-icons/si";
import { profile3 } from './images';

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
      title: 'E-Commerce Application',
      image: 'https://cdn.dribbble.com/userupload/8002230/file/original-c8eec16edea4d5c836b2bfabe7fbaa5a.jpg',
      data:{
        description:`Enhance your online shopping experience with our E-Commerce Application 
        UI design project. Seamlessly blending aesthetics with functionality, our intuitive 
        interface offers easy navigation, personalized recommendations, and secure 
        transactions. Elevate your digital storefront and captivate customers with a visually 
        stunning design tailored to your brand`,
        demoLink: "https://google.com/",
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
          name:"MongoDB",
          icon: <SiMongodb/>,
          iconColor:"limegreen",
        },
      ]
    },
    {
      id:3,
      title: 'Robotic Engineering Web Application',
      image: 'https://s3-alpha.figma.com/hub/file/5101537097/c4a1ed2c-4ab9-43fb-a248-d7ac6b0c3161-cover.png',
      data:{
        description: `Unlock the future of robotics with our Robotic Engineering Web Application
        project. Seamlessly integrating cutting-edge technology, data analytics, 
        and collaborative tools, our platform empowers engineers to design, simulate, 
        and optimize robotic systems. Experience innovation at its peak as we redefine the 
        boundaries of robotic engineering.`,
        demoLink: "https://google.com/",
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
          name:"MongoDB",
          icon: <SiMongodb/>,
          iconColor:"limegreen",
        },
        {
          name:"MongoDBT",
          icon: <SiMongodb/>,
        },
        {
          name:"MongoDBT",
          icon: <SiMongodb/>,
        },
        {
          name:"MongoDBT",
          icon: <SiMongodb/>,
        },
      ]
    },
    {
      id:4,
      title: 'Project Management application',
      image: 'https://miro.medium.com/v2/resize:fit:1400/1*6iO0wm8q4cByvxY6kB9WiQ.png',
      data:{
        description: `Simplify project coordination with our intuitive Project Management application. Track tasks, collaborate in real-time, and streamline workflows effortlessly. With customizable features and robust reporting, stay organized and efficient.
                       Elevate your project management experience and achieve success with ease.`,
        demoLink: "https://google.com/",
      },
      stack:[
        {
          name:"React Native",
          icon: <TbBrandReactNative/>,
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
          name:"MongoDB",
          icon: <SiMongodb/>,
          iconColor:"limegreen",
        },
      ]
    },
    {
      id:5,
      title: 'Mobile bank - App Design',
      image: 'https://i.pinimg.com/originals/a0/be/c3/a0bec3706210e6ab28470eee95bf5889.png',
      data:{
        description: `Experience banking at your fingertips with our sleek Mobile Bank app design. Seamlessly manage your finances on-the-go with intuitive navigation, secure transactions, and personalized insights. Enjoy a modern interface that prioritizes convenience and accessibility, revolutionizing your banking experience.`,
        demoLink: "https://google.com/",
      },
      stack:[
        {
          name:"Figma",
          icon: <CgFigma/>,
          iconColor:"orangered",
        },
      ]
    },
    {
      id:6,
      title: 'Quiz App Development',
      image: 'https://i.pinimg.com/originals/b3/35/02/b33502e465346ace2a7f1df203d851a3.jpg',
      data:{
        description: `Elevate engagement and knowledge retention with our Quiz App 
                      Development project. Seamlessly crafted for interactive learning 
                      experiences, our app offers customizable quizzes, real-time feedback, 
                      and captivating visuals. Empower users to test their knowledge anytime,
                       anywhere, fostering a dynamic learning environment tailored to their 
                       needs.`,
        demoLink: "https://google.com/",
      },
      stack:[
        {
          name:"React Native",
          icon: <TbBrandReactNative/>,
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
          name:"MongoDB",
          icon: <SiMongodb/>,
          iconColor:"limegreen",
        },
      ]
    },
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
    link:"https://www.github.com.shubham-78",
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