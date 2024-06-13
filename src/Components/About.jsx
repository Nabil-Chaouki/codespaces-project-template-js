/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/img5.png";

const imageAltText = "person working on a laptop with a cup of coffee";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I am a dedicated .NET Developer with a passion for creating efficient and innovative software solutions. My career goal is to continuously advance my skills in cloud computing and artificial intelligence to develop impactful applications.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web Development: ASP.NET, CSS, HTML, JavaScript, jQuery, Bootstrap, AJAX, JSON, REST APIs, Microservices, ASP.NET Core, Python, React, TypeScript",
  "Mobile and Desktop Development: Android (Java), Xamarin, Kotlin, WPF, WinForms, JavaFX, C, C++",
  "Version Control: GitHub, Git, Azure DevOps, TFS, GitLab",
  "Databases and Cloud: Microsoft SQL Server, Oracle, MariaDB, Microsoft Azure, Firebase, PostgreSQL, MongoDB",
  "Others: UML, Mersie, Crystal Reports, MAUI, ADO.NET, LINQ",
];
/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "With a robust background in .NET development and extensive experience working with Microsoft Azure, I thrive on solving complex problems and delivering high-quality solutions. My journey as a Microsoft Learn Student Ambassador has honed my ability to teach and inspire others, while my roles at Sopra Steria and Expertime have solidified my expertise in agile methodologies and cloud development. I am motivated by a desire to leverage technology to make a meaningful difference in the world .The only way to do great work is to love what you do. - Steve Jobs";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
