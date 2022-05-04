import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/keepnotes.PNG';
import GreenCtgImg from '../images/waterpurifier.PNG';
import CoinTrackerImg from '../images/groceryshop.PNG';
import CavinImg from '../images/portfolio.PNG';
import RealImg from '../images/realtimecomment.PNG';

const projects = [
  {
    id: uuidv4(),
    name: 'Notes App',
    desc: 'An application to record and organize your notes. I developed the web app using REACTJS and localstorage.',
    img: UTrackerImg,
    link: 'https://github.com/hackster254/react-keep-notes',
  },
  {
    id: uuidv4(),
    name: 'Solar water purifier',
    desc: 'This is a water purifier project that uses solar to clean water. It is based on ESP32 module that collects water flow statistics.',
    img: GreenCtgImg,
    link: 'http://waterpurifier-project-showcase.vercel.app/',
  },
  {
    id: uuidv4(),
    name: 'Grocery Management system',
    desc: 'This is a Grocery management application with Visual Basic and mySQL database with crystal reports. The desktop application allows the owner to track orders and stock supply.',
    img: CoinTrackerImg,
    link: 'https://github.com/hackster254/grocery',
  },
  {
    id: uuidv4(),
    name: "Karira's Portfolio",
    desc: 'This is my portfolio website. The portfolio is made using NodeJS and Turbo360 content management system.',
    img: CavinImg,
    link: 'https://my_world-z3rmou.vertex360.co/',
  },
  {
    id: uuidv4(),
    name: 'Realtime Comment System',
    desc: 'This is a app that allows users to make comments and chat with each other in realtime',
    img: RealImg,
    link: 'https://realtime-comment-with-voice.herokuapp.com',
  },
];

export default projects;
