import React, { Component } from "react";
import ReactGA from "react-ga4";

export class AboutRavi extends Component {
  constructor() {
    super();
    this.screens = {};
    this.state = {
      screen: () => {},
      active_screen: "about", // by default 'about' screen is active
      navbar: false,
    };
  }

  componentDidMount() {
    this.screens = {
      about: <About />,
      // education: <Education />,
      skills: <Skills />,
      projects: <Projects />,
      resume: <Resume />,
    };

    let lastVisitedScreen = localStorage.getItem("about-section");
    if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
      lastVisitedScreen = "about";
    }

    // focus last visited screen
    this.changeScreen(document.getElementById(lastVisitedScreen));
  }

  changeScreen = (e) => {
    const screen = e.id || e.target.id;

    // store this state
    localStorage.setItem("about-section", screen);

    // google analytics
    ReactGA.send({ hitType: "pageview", page: `/${screen}`, title: "Custom Title" });

    this.setState({
      screen: this.screens[screen],
      active_screen: screen,
    });
  };

  showNavBar = () => {
    this.setState({ navbar: !this.state.navbar });
  };

  renderNavLinks = () => {
    return (
      <>
        <div
          id="about"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "about" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
          }
        >
          <img className=" w-3 md:w-4" alt="about ravi" src="./themes/Yaru/status/about.svg" />
          <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
        </div>
        <div
          id="skills"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "skills" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
          }
        >
          <img className=" w-3 md:w-4" alt="ravi' skills" src="./themes/Yaru/status/skills.svg" />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
        </div>
        <div
          id="projects"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "projects" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
          }
        >
          <img className=" w-3 md:w-4" alt="ravi' projects" src="./themes/Yaru/status/projects.svg" />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
        </div>
        <div
          id="resume"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "resume" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
          }
        >
          <img className=" w-3 md:w-4" alt="ravi's resume" src="./themes/Yaru/status/download.svg" />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
        </div>
      </>
    );
  };

  render() {
    return (
      <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
        <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">{this.renderNavLinks()}</div>
        <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
          <div className=" w-3.5 border-t border-white"></div>
          <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
          <div className=" w-3.5 border-t border-white"></div>
          <div
            className={
              (this.state.navbar ? " visible animateShow z-30 " : " invisible ") +
              " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"
            }
          >
            {this.renderNavLinks()}
          </div>
        </div>
        <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">{this.state.screen}</div>
      </div>
    );
  }
}

export default AboutRavi;

export const displayAboutRavi = () => {
  return <AboutRavi />;
};

function About() {
  return (
    <>
      <div className="w-20 md:w-28 my-4 bg-white rounded-full">
        <img className="w-full rounded-full" src="./images/logos/profile.jpg" alt="Ravi Arya Logo" />
      </div>
      <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
        <div>
          My name is <span className="font-bold">Ravi Arya</span> ,
        </div>
        <div className="font-normal ml-1">
          I'm a <span className="text-pink-600 font-bold">Full Stack Developer!</span>
        </div>
      </div>
      <div className=" mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
        <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
        <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
      </div>
      <ul className=" mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
        <li className=" list-pc">
          I'm a <span className=" font-medium">Full Stack Developer</span> with a passion for technology and a knack for building cool things. I have worked with individuals as well as organizations,
          contributing to the development of numerous projects. Now seeking a collaborative team environment to expand my horizons and explore new avenues of technology. ( Hit me up{" "}
          <a className="text-underline" href="mailto:ravi.arya009@gmail.com">
            <u>@ravi.arya009@gmail.com</u>
          </a>{" "}
          :) )
        </li>
        <li className=" mt-3 list-building"> I enjoy building awesome softwares that solve practical problems.</li>
        <li className=" mt-3 list-time"> When I am not coding my next project, I like to spend my time reading books or playing guitar.</li>
        {/* <li className=" mt-3 list-star"> And I also have interest in Deep Learning & Computer Vision!</li> */}
      </ul>
    </>
  );
}
// function Education() {
//   return (
//     <>
//       <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
//         Education
//         <div className="absolute pt-px bg-white mt-px top-full w-full">
//           <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
//           <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
//         </div>
//       </div>
//       <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
//         <li className="list-disc">
//           <div className=" text-lg md:text-xl text-left font-bold leading-tight">BBDNIIT</div>
//           <div className=" text-sm md:text-base">Computer Science & Engineering</div>
//           <div className=" text-sm text-gray-400 mt-0.5">2015 - 2019</div>
//         </li>
//         <li className="list-disc mt-5">
//           <div className=" text-lg md:text-xl text-left font-bold leading-tight">
//             Class 12<sup>th</sup>
//           </div>
//           <div className=" text-sm text-gray-400 mt-0.5">2012 - 2013</div>
//         </li>
//         <li className="list-disc mt-5">
//           <div className=" text-lg md:text-xl text-left font-bold leading-tight">
//             Class 10<sup>th</sup>
//           </div>
//           <div className=" text-sm text-gray-400 mt-0.5">2010 - 2011</div>
//         </li>
//       </ul>
//     </>
//   );
// }

function Skills() {
  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Technical Skills
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>
      <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
        <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">I've worked with a wide variety of programming languages & frameworks.</li>
        <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
          <div>
            {" "}
            My areas of expertise are <strong className="text-ubt-gedit-orange">Back-end development & Server Management</strong>
          </div>
        </li>
        <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
          <div>Here are technologies i'm good with</div>
        </li>
      </ul>
      <div className="w-full md:w-10/12 flex mt-4">
        <div className=" text-sm text-center md:text-base w-1/2 font-bold">Languages</div>
        <div className=" text-sm text-center md:text-base w-1/2 font-bold">Frameworks & Libraries</div>
      </div>
      <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
        <div className="px-2 w-1/2">
          <div className="flex flex-wrap justify-center items-start w-full mt-2">
            <img className="m-1" src="https://img.shields.io/badge/PHP-777BB4?style=flat&logo=php&logoColor=ffffff" alt="PHP Badge" />
            <img className="m-1" src="https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A" alt="ravi javascript" />
            <img className="m-1" src="https://img.shields.io/badge/C%2B%2B-00599C?style=flat&logo=c%2B%2B&logoColor=white" alt="ravi c++" />
            <img className="m-1" src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=ffffff" alt="Python Badge" />
            <a href="https://www.google.com/search?q=is+html+a+language%3F" target="_blank" rel="noreferrer">
              <img title="yes it's a language!" className="m-1" src="https://img.shields.io/badge/-HTML5-%23E44D27?style=flat&logo=html5&logoColor=ffffff" alt="ravi HTML" />
            </a>
          </div>
        </div>
        <div className="px-2 flex flex-wrap items-start w-1/2">
          <div className="flex flex-wrap justify-center items-start w-full mt-2">
            <img className="m-1" src="https://img.shields.io/badge/jQuery-0769AD?style=flat&logo=jquery&logoColor=ffffff" alt="jQuery Badge" />
            <img className="m-1" src="https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=ffffff" alt="Bootstrap Badge" />
            <img className="m-1" src="https://img.shields.io/badge/Laravel-FF2D20?style=flat&logo=laravel&logoColor=ffffff" alt="Laravel Badge" />
            <img className="m-1" src="https://img.shields.io/badge/WordPress-21759B?style=flat&logo=wordpress&logoColor=ffffff" alt="WordPress Badge" />
          </div>
        </div>
      </div>

      <div className="w-full md:w-10/12 flex mt-4">
        <div className=" text-sm text-center md:text-base w-1/2 font-bold">Tools</div>
        <div className=" text-sm text-center md:text-base w-1/2 font-bold">Databases</div>
      </div>
      <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
        <div className="px-2 w-1/2">
          <div className="flex flex-wrap justify-center items-start w-full mt-2">
            <img className="m-1" src="https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=ffffff" alt="Git Badge" />
            <img className="m-1" src="https://img.shields.io/badge/Jira-0052CC?style=flat&logo=jira&logoColor=ffffff" alt="Jira Badge" />
            <img className="m-1" src="https://img.shields.io/badge/Adobe%20XD-FF61F6?style=flat&logo=adobe%20xd&logoColor=ffffff" alt="Adobe XD Badge" />
            <img className="m-1" src="https://img.shields.io/badge/Figma-F24E1E?style=flat&logo=figma&logoColor=ffffff" alt="Figma Badge" />
            <img className="m-1" src="https://img.shields.io/badge/Canva-00C4CC?style=flat&logo=canva&logoColor=ffffff" alt="Canva Badge" />
          </div>
        </div>
        <div className="px-2 flex flex-wrap items-start w-1/2">
          <div className="flex flex-wrap justify-center items-start w-full mt-2">
            <img className="m-1" src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=ffffff" alt="MySQL Badge" />
            <img className="m-1" src="https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=ffffff" alt="MongoDB Badge" />
          </div>
        </div>
      </div>

      <div className="w-full md:w-10/12 flex mt-4">
        <div className=" text-sm text-center md:text-base w-1/2 font-bold">Server and Hosting</div>
        <div className=" text-sm text-center md:text-base w-1/2 font-bold">Miscellaneous</div>
      </div>
      <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
        <div className="px-2 w-1/2">
          <div className="flex flex-wrap justify-center items-start w-full mt-2">
            <img className="m-1" src="https://img.shields.io/badge/Linux%20Server%20Management-FCC624?style=flat&logo=linux&logoColor=000000" alt="Linux Server Management Badge" />
            <img className="m-1" src="https://img.shields.io/badge/Apache-D22128?style=flat&logo=apache&logoColor=ffffff" alt="Apache Badge" />
            <img className="m-1" src="https://img.shields.io/badge/Hosting%20Management-0073AA?style=flat" alt="Hosting Management Badge" />
            <img className="m-1" src="https://img.shields.io/badge/Domain%20and%20DNS%20Management-008000?style=flat" alt="Domain and DNS Management Badge" />
            <img className="m-1" src="https://img.shields.io/badge/Email%20Hosting-D14836?style=flat" alt="Email Hosting Badge" />
            <img className="m-1" src="https://img.shields.io/badge/Database%20Administration-4DB33D?style=flat" alt="Database Administration Badge" />
            <img className="m-1" src="https://img.shields.io/badge/DigitalOcean-0080FF?style=flat&logo=digitalocean&logoColor=ffffff" alt="DigitalOcean Badge" />
          </div>
        </div>
        <div className="px-2 flex flex-wrap items-start w-1/2">
          <div className="flex flex-wrap justify-center items-start w-full mt-2">
            <img className="m-1" src="https://img.shields.io/badge/Arduino-00979D?style=flat&logo=arduino&logoColor=ffffff" alt="Arduino Badge" />
            <img className="m-1" src="https://img.shields.io/badge/Raspberry%20Pi-C51A4A?style=flat&logo=raspberry%20pi&logoColor=ffffff" alt="Raspberry Pi Badge" />
          </div>
        </div>
      </div>

      <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list mt-4">
        <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
          <span> And of course,</span> <img className=" inline ml-1" src="https://img.shields.io/badge/Linux-FCC624?style=flat&logo=linux&logoColor=000000" alt="ravi linux" />
        </li>
      </ul>
    </>
  );
}

function Projects() {
  const project_list = [
    {
      name: "Cold Storage Management Software",
      date: "Jan 2024",
      link: "#",
      description: [
        "A Management System that offers all the functionalities typical for a cold storage facility.",
        "Features: Farmers can deposit and withdraw crops, and buyers can purchase stored crops.",
        "Inbuilt ledger management, accounting capabilities, bill generation, and stats.",
      ],
      domains: ["Laravel", "MySQL", "Bootstrap", "jQuery"],
    },
    {
      name: "TutorEase",
      date: "Dec 2023",
      link: "#",
      description: ["A management system for businesses offering home tutoring services.", "Features: tutor registration, tuition posting, and a job application system."],
      domains: ["Laravel", "MySQL", "Bootstrap"],
    },
    {
      name: "Government Service Portal",
      date: "Jun 2023",
      link: "#",
      description: ["A software similar to GST Suvidha Kendra, offering more than 300 government services.", "Developed an in-house software suite to monitor overall business and their employees."],
      domains: ["Laravel", "MySQL", "Bootstrap"],
    },
    {
      name: "Car Bazar",
      date: "Jan 2023",
      link: "#",
      description: [
        "A web application for second-hand car dealers.",
        "Admins can upload and manage car listings from the backend.",
        "Users can browse and filter cars according to Price, Brand, Transmission type etc.",
      ],
      domains: ["PHP", "MySQL", "Bootstrap", "HTML", "CSS", "JQuery"],
    },
    {
      name: "Magic Mirror",
      date: "Nov 2018",
      link: "https://www.facebook.com/ravi.arya009/videos/1970880652960790/",
      description: ["A voice-controlled smart mirror that provides real-time weather updates and news.", "Oversaw software and hardware integration, including intricate woodwork for the frame."],
      domains: ["Javascript", "Annyang", "Wolfram Alfa", "PHP"],
    },
  ];

  const tag_colors = {
    javascript: "yellow-300",
    firebase: "red-600",
    firestore: "red-500",
    "firebase auth": "red-400",
    "chrome-extension": "yellow-400",
    flutter: "blue-400",
    dart: "blue-500",
    "react-native": "purple-500",
    html5: "pink-600",
    sass: "pink-400",
    tensorflow: "yellow-600",
    django: "green-600",
    python: "green-200",
    "codeforces-api": "gray-300",
    tailwindcss: "blue-300",
    "next.js": "purple-600",
  };

  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Projects
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>
      {project_list.map((project, index) => {
        const projectNameFromLink = project.link.split("/");
        const projectName = projectNameFromLink[projectNameFromLink.length - 1];
        return (
          <a key={index} href={project.link} target={project.link === "#" ? "_self" : "_blank"} rel="noreferrer" className="flex w-full flex-col px-4">
            <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
              <div className="flex flex-wrap justify-between items-center">
                <div className="flex justify-center items-center">
                  <div className=" text-base md:text-lg mr-2">{project.name}</div>
                </div>
                <div className="text-gray-300 font-light text-sm">{project.date}</div>
              </div>
              <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                {project.description.map((desc, index) => {
                  return (
                    <li key={index} className="list-disc mt-1 text-gray-100">
                      {desc}
                    </li>
                  );
                })}
              </ul>
              <div className="flex flex-wrap items-start justify-start text-xs py-2">
                {project.domains
                  ? project.domains.map((domain, index) => {
                      const borderColorClass = `border-${tag_colors[domain]}`;
                      const textColorClass = `text-${tag_colors[domain]}`;

                      return (
                        <span key={index} className={`px-1.5 py-0.5 w-max border ${borderColorClass} ${textColorClass} m-1 rounded-full`}>
                          {domain}
                        </span>
                      );
                    })
                  : null}
              </div>
            </div>
          </a>
        );
      })}
    </>
  );
}
function Resume() {
  return <iframe className="h-full w-full" src="./files/Ravi-Arya-Resume.pdf" title="ravi arya resume" frameBorder="0"></iframe>;
}
