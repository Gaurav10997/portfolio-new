import "./styles.css"
import {
  SiJavascript,
  SiGo,
  SiCss3,
  SiDocker,
  SiHeroku,
  SiHtml5,
  SiMongodb,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiSass,
  SiWebpack,
  SiAmazonaws,
  SiBabel,
  SiDigitalocean,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGitlab,
  SiGnome,
  SiGooglecloud,
  SiLinux,
  SiMocha,
  SiJest,
  SiNextdotjs,
  SiPostgresql,
  SiRedux,
  SiRust,
  SiSentry,
  SiNetlify,
  SiTypescript,
  SiUbuntu,
  SiWebassembly,
  SiWireguard,
  SiGatsby,
  SiFirebase,
  SiMarkdown,
  SiSvelte,
  SiDeno,
  SiStripe,
  SiWordpress,
  SiKubernetes,
  SiGnubash,
  SiJekyll,
} from "react-icons/si";


const iconMapping = {
  SiJavascript,
  SiGo,
  SiCss3,
  SiDocker,
  SiHeroku,
  SiHtml5,
  SiMongodb,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiSass,
  SiWebpack,
  SiAmazonaws,
  SiBabel,
  SiDigitalocean,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGitlab,
  SiGnome,
  SiGooglecloud,
  SiLinux,
  SiMocha,
  SiJest,
  SiNextdotjs,
  SiPostgresql,
  SiRedux,
  SiRust,
  SiSentry,
  SiNetlify,
  SiTypescript,
  SiUbuntu,
  SiWebassembly,
  SiWireguard,
  SiGatsby,
  SiFirebase,
  SiMarkdown,
  SiSvelte,
  SiDeno,
  SiStripe,
  SiWordpress,
  SiKubernetes,
  SiGnubash,
  SiJekyll,
};

const DevIcons = ({ stacks, className }) => {
  const iconsToRender = [
    "SiDocker",
    "SiMongodb",
    "SiNodedotjs",
    "SiSass",
    "SiWebpack",
    "SiAmazonaws",
    "SiBabel",
    "SiGit",
    "SiGithub",
    // "SiGithubactions",
    "SiGitlab",
    "SiLinux",
    "SiMocha",
    "SiJest",
    "SiNextdotjs",
    "SiPostgresql",
    "SiNetlify",
    "SiTypescript",
    "SiUbuntu",
    "SiFirebase",
    "SiMarkdown",
    "SiSvelte",
    "SiStripe",
    "SiHtml5",
    "SiCss3",
    "SiJavascript",
    "SiReact",
    "SiRedux",
    // "SiKubernetes",
    // "SiHeroku",
    "SiGnubash",
  ];

  return (
    <IconRenderer iconNames={iconsToRender} />
  );
};

const IconRenderer = ({ iconNames }) => {
  return (
    <>
    {/* <span className="home__education">Technologies I'm proficient in:</span> */}
      <div className="icon-wrapper">
        {iconNames.map((iconName, index) => {
          const IconComponent = iconMapping[iconName];
          if (!IconComponent) {
            return <span key={index}>Icon not found: {iconName}</span>;
          }
          return (
            <div className="icons">
              <IconComponent key={index} />
            </div>
          )

        })}
      </div>

    </>

  );
};

export default DevIcons;
