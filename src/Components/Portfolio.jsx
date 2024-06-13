/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/img2.png";

const imageAltText = " robotic arm holding a pen drawing on a digital tablet";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Microsoft Learn Student Ambassadors",
    description:
      "Organized and led training sessions on Artificial Intelligence for students, including modules on Machine Learning, Deep Learning, and Microsoft Azure tools. Promoted Microsoft initiatives within the university community, increasing student engagement and participation. Collaborated with Microsoft professionals to provide advanced knowledge and networking opportunities.",
    date: "Jan 2024 - Present",
  },
  {
    title: ".NET Developer at Sopra Steria for Volvo",
    description:
      "Developed applications using .NET 6, .NET 8, and .NET Framework 4.8 for WPF. Participated in Agile Scrum teams for project delivery, utilized Azure DevOps for CI/CD, and managed web services and APIs focusing on performance and security. Administered SQL Server databases and used Entity Framework for data access. Contributed to Power Platform applications, including Power Apps and Power Automate.",
    date: "Sep 2022 - Present",
  },
  {
    title: ".NET Developer at Expertime",
    description:
      "Developed serverless solutions with Azure Functions and managed APIs with ASP.NET Core. Created and managed SQL Server databases, optimized queries, and developed user interfaces with Angular. Implemented CI/CD processes using Azure DevOps.",
    date: "Sep 2021 - Sep 2022",
  },
  {
    title: "Full-Stack Developer at CILEA INFORMATIQUE",
    description:
      "Developed back-end solutions with Node.js and created RESTful APIs. Designed front-end interfaces with React.js (TypeScript) and managed MongoDB databases. Worked collaboratively with designers, project managers, and developers, participating in code reviews and sprint planning.",
    date: "Sep 2020 - Sep 2021",
  },
];


const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
