import "../styles/Projects.css";

import project1 from "../assets/proj1.png";
import project2 from "../assets/proj2.png";
import project3 from "../assets/proj3.png";
import project4 from "../assets/proj4.png";
//import project5 from "../assets/proj5.png";
//import project6 from "../assets/proj6.png";
import project7 from "../assets/proj7.png";
import project11 from "../assets/proj11.png"
import project12 from "../assets/proj12.png"
import project13 from "../assets/proj13.png"

import github from "../assets/github.png";

const project = [
    {
        index: 1,
        reverse: false,
        image: project11,
        title: "Food App",
        description: "A Webapp that uses an API to show you food options when you provide a food item.",
        stack: ["Javascript", "Node.js"],
        github: "https://github.com/userIssa/react-food-app",
        site: "https://react-food-app-8aca0.web.app/"
    },
    {
        index: 2,
        reverse: true,
        image: project12,
        title: "Hacker Script",
        description: "A repository of python scripts for ethical hacking.",
        stack: ["Pyton", "Kali Linux", "Bash"],
        github: "https://github.com/userIssa/hackerScript",
        //site: "https://joshua-spotify-search.onrender.com"
    },
    {
        index: 3,
        reverse: false,
        image: project13,
        title: "Meme App",
        description: "A Meme app that uses an API to search the 100 most popular memes at the time and randomly displays any while also allowing you to edit the image by adding text.",
        stack: ["React", "Typescript", "Node-JS"],
        github: "https://github.com/userIssa/meme-app",
        site: "https://meme4u-issa.netlify.app"
    },
    /*
    {
        index: 4,
        reverse: true,
        image: project1,
        title: "Space Tour",
        description: "A Responsive React App built as an intermediate challenge from frontend mentor, a Space Application that gives information on various planets, pilots and technologies used to reach there. it fetches data from a json file and renders it on the page with the help of state from react.",
        stack: ["React", "HTML&CSS"],
        github: "https://github.com/JuszJo/space-tour",
        site: "https://joshua-space-tour.netlify.app/"
    },
    {
        index: 5,
        reverse: false,
        image: project2,
        title: "Product Page",
        description: "A single paged React App built as an intermediate challenge from frontend mentor, an E-Commerce product page that shows different views of the product and provides functionality of adding to cart. it deals with the passing of props from a parent component to its children.",
        stack: ["React" , "HTML&CSS"],
        github: "https://github.com/JuszJo/product-page",
        site: "https://joshua-product-page.netlify.app/"
    },
    {
        index: 6,
        reverse: true,
        image: project3,
        title: "Pathfinding Visualizer",
        description: "A Website that visualizes the process of Breadth First Search and how it navigates its way to locate specific nodes in a graph. built with vanilla javascript(no canvas e.t.c).",
        stack: ["Vanilla Javascript", "HTML&CSS", "Algorithms"],
        github: "https://github.com/JuszJo/shortest-path",
        site: "https://juszjo.github.io/graph"
    },
    {
        index: 7,
        reverse: false,
        image: project4,
        title: "Word of Web Clone",
        description: "A simple clone of the website \"Word of Web\" built using HTML and CSS. ",
        stack: ["HTML&CSS"],
        github: "https://github.com/JuszJo/word-of-web-clone",
        site: "https://github.com/JuszJo/word-of-web-clone"
    },
    */
]

function Template({ details }) {
    return (
        <div id={`project${details.index}`} className={details.reverse ? "projects2" : "projects1"}>
            <div className={details.reverse ? "border2" : "border1"}></div>
            <a className="image-links" href={details.site} target="_blank" rel="norefferer">
                <img className="project-image" width={600} src={details.image} alt="projects done" />
            </a>
            <div className="project-text-section">
                <h5 className="links">Featured Project</h5>
                <h3 className="project-title">{details.title}</h3>
                <p className="project-description">{details.description}</p>
                <div className={details.reverse ? "stack-div2" : "stack-div1"}>
                    {details.stack.map((value, index) => <span key={index} className="links stack">{value}</span>)}
                </div>
                <div className={details.reverse ? "source2" : "source1"}>
                    <div className={details.reverse ? "github2" : "github1"}>
                        <img src={github} alt="github icon" />
                        <a href={details.github} target="_blank" style={{fontSize: "1.2rem", color: "var(--text-opacity)"}}>Github</a>
                    </div>
                    <div className="live">
                        <a href={details.site} target="_blank" style={{fontSize: "1.2rem", color: "var(--text-opacity)"}}>Live Site</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Projects() {
    return (
        <section id="projects-section">
            <div className="container" id="projects-div">
                <h2>Things I've Built</h2>
                <div id="project-list">
                    {project.map(value => <Template key={value.index} details={value} />)}
                </div>
                <div>
                    <div id="other-projects-div">
                        <h2>View my other projects</h2>
                        <div id="github">
                            <img src={github} />
                            <a style={{fontSize: "1.2rem", color: "var(--text-opacity)"}} href="https://github.com/userIssa">Github</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
