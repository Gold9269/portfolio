import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import owlwatchImg from "../assets/owlwatch.png";
import crypticvaultImg from "../assets/crypticvault.png";
import avaxgodsImg from "../assets/avaxgods.png";
import studynotionImg from "../assets/studynotion.png";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    name: "Owlwatch-Web3 Saas",
    category: "Blockchain / SaaS",
    tools: "MERN Stack, Socket.IO, Solana, Web3",
    image: owlwatchImg,
    link: "",
  },
  {
    name: "CrypticVault",
    category: "Decentralized Storage",
    tools: "AES-256-CBC, IPFS, Hardhat, Ethers.js",
    image: crypticvaultImg,
    link: "",
  },
  {
    name: "AvaxGods-NFT Game",
    category: "Blockchain / Gaming",
    tools: "React.js, Avalanche, Hardhat, Solidity",
    image: avaxgodsImg,
    link: "",
  },
  {
    name: "StudyNotion",
    category: "EdTech Platform",
    tools: "React.js, Redux, Express.js, MongoDB",
    image: studynotionImg,
    link: "",
  },
];

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rect = box[0].getBoundingClientRect();
    const totalWidth = rect.width * box.length;
    const viewportWidth = window.innerWidth;
    translateX = totalWidth - viewportWidth + rect.width * 0.5;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`,
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.name} link={project.link || undefined} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
