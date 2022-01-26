import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Typed from "react-typed";
import Collapse from "@material-ui/core/Collapse"
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import React, { useState } from "react";

import f19a from "../images/f19a.PNG";
import f20a from "../images/f20a.PNG";
import f20b from "../images/f21b.PNG";
import f21 from "../images/f21.PNG";
import f21a from "../images/f21a.PNG";
import f21b from "../images/f21b.PNG";
import s20b from "../images/s20b.PNG";
import s21a from "../images/s21a.PNG";
import s21b from "../images/s21b.PNG";
import s22 from "../images/s22.PNG";
import sm21a from "../images/sm21a.PNG";


const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "General Engineering Lab",
    description: `All students entering engineering at Texas A&M had to
    take this course and, while it may not be readily apparent based
    on the course's title, this was an introduction to the basics of 
    programming in Python. I had taken 3 years of Java in high school
    so, while the fundamentals of programming were not new to me, it 
    was my first exposure to the learning of a new language.`,
    image: f19a,
    link: "",
  },
  {
    name: "Engineering Math III",
    description: `This was the third level of Calculus that A&M offered.
    Here, I learned a great deal about doing calculus in three dimensions,
    applying fundamentals learned in Calculus I & II and in Linear Algebra.`,
    image: s20b,
    link: "",
  },
  {
    name: "Data Structures and Algorithms",
    description: `I had been exposed to some basic data structures before
    this course like arrays, queues, stacks, etc., but I had not learned
    about most tree data structures and the applications of all aforementioned
    structures. We also had to master fundamental traversal and search
    algorithms in computing like DFS, BFS, and Binary Search, alongside 
    sorting algorithms like Bubble, Merge, Insertion, and Selection sorts.
    Furthermore, we had to implement everything in C++, so this was one of
    my first and most fundamental exposures to the language.`,
    image: f20a,
    link: "",
  },
  {
    name: "Computer Organization",
    description: `This course was a curveball from everything I had learned
    before: we had to build a simple computer from-scratch in Assembly and 
    HACK languages. This class challenged me like no class had before as we
    had to build simple gates like AND, OR, and XOR, and use them to create
    progressively more complicated chips, culminating with the creation of
    an ALU and GPU, alongside a HACK interpreter in C++ to compile code that
    could run on our custom HACK computer. This course also provided fundamental
    insights moving forward in understanding how a computer works and why lower-
    level programming languages like C++ are so much more efficient computationally
    than languages like Python.`,
    image: f20b,
    link: "",
  },
  {
    name: "Introduction to Computer Systems",
    description: `This course piggy-backed off of Computer Organization
    and delved more into practical applications of we had learned. We
    took a deep dive into parallelism in computing and multi-threading,
    alongside how computer processes communicate via networks and pipelines.
    This course also challenged me and taught me to optimize my (C++) code
    and understand the importance of efficiency, particularly when dealing
    with large sets of data.`,
    image: s21b,
    link: "",
  },
  {
    name: "Programming Studio",
    description: `College finally felt like college. I had to take everything
    that I had learned beforehand and apply it in multiple month-long projects.
    This class was meant to give students exposure to true software development
    and apply two types of development methodologies: waterfall and agile.
    This was my first exposure to agile and Scrum and I loved it and thrived
    in that sort of environment. I had never been taught to plan so much and
    document each part of development, nor had I had any group coding projects
    before Programming Studio. This class taught me critical skills in communication
    and problem solving, showing me that there are just as many errors in
    working in teams as there are in software development.`,
    image: s21a,
    link: "http://cakao.herokuapp.com/",
  },
  {
    name: "Design and Analysis of Advanced Algorithms",
    description: `This was my first 400-level course and I really felt it.
    No longer did I feel as if I was being taught fundamentals, I had to
    understand based on truly complex reasoning and theory that I had no
    chance of learning if I had not mastered all of my classes beforehand.
    We analyzed runtimes of algorithms like BFS, DFS, Dijkstra and Prim's
    algorithms, etc. We were also introduced to much more complex algorithms
    that underpin modern computing, Fast Fourier Transform being the most relevant.
    `,
    image: s21a,
    link: "",
  },
  {
    name: "Parallel Computing",
    description: `This elective built directly off of Computer Systems and
    allowed students to harness the power of Texas A&M Supercomputers and
    was primarily focused on optimizing multi-threaded programs. It was a
    facinating course and truly allowed me to understand C++ threads and
    analyzing runtimes to find the optimal number of threads for certain
    programs, as too many to too few is detrimental.`,
    image: sm21a,
    link: "",
  },
  {
    name: "Artificial Intelligence",
    description: `It would be more accurate to call this class 'The
    Theoretical Underpinning of AI' as we did not employ any Artificial
    Intelligence (besides an incredibly simple perceptron near the end),
    but rather we learned algorithms that modern AI uses and understood 
    what different approaches to AI are. That being said, the class did
    provide a great starting point for jumping in the world of AI and
    Machine Learning.`,
    image: f21b,
    link: "",
  },
  {
    name: "Software Engineering",
    description: `We had established what it was like to practice different
    software development ideologies in Programming Studio, but we did them
    for predefined projects that nobody would end up using... In Software
    Engineering we were partnered with actual sponsors from the University;
    this gave much more gravity to the projects we were working on. For this
    class, we were forced to use Ruby on Rails and practice agile; this was
    not only useful for more practice with agile and Scrum, but it was great
    exposure to a new Language and Framework, one that I found myself quite
    fond of. Rails' MVC architecture made so much sense to me and allowed for
    quick expansion on the project we worked on (once we understood exactly
    how it all flowed together).`,
    image: f21a,
    link: "tx.ag/nickwork",
  },
  {
    name: "Honors Computer & Network Security",
    description: `I decided to take the Honors section of A&M's course on
    Computer and Network security which entailed exactly what you would
    expect. Most of classtime was spent learning about security and the
    homework assignments were implementing code to bypass preexisting
    security measures. The Honors project for the course could pertain
    to anything Bitcoin and Blockchain; my team and I researched the
    burning, or disposal, of Bitcoin. It was a fun project and an incredibly
    insightful class.`,
    image: f21a,
    link: "https://docs.google.com/presentation/d/190AfwEFKpO0JIHveLLK3MxM1NYKPn79KsrLRMkvjPmM/edit#slide=id.p",
  },
  {
    name: "Communications and Cryptography I",
    description: `Though I did not plan for it, this class made my Computer
    and Network Security much easier as it established the mathematics behind
    modern encryption algorithms like RSA and El Gamal Public Key Cryptosystems
    and Digital Signature Algorithms, Diffie-Hellman Key Exchange, and Elliptic
    Curve Digital Signature Algorithm (just to name a few). I loved this class
    it thoroughly bolstered my understanding of security in modern computing.`,
    image: f21a,
    link: "",
  },
  {
    name: "Undergraduate Peer Teacher",
    description: `Alongside 5 Senior electives, I decided to work for the
    Computer Science department my first semester of senior year. I acted
    as an undergraduate TA for Programming Studio, alongside hosting office
    hours in which students from any core undergraduate Computer Science class
    could come to me and ask questions pertaining to programming & homework
    assignments and class material. This was such a humbling experience as
    I had to be able to explain everything that I had learned over the past
    two and a half years and work hard hours alongside my intense courseload.
    The position gave me invaluable experience working with people who are
    just a few short years behind me, alongside teaching me patience and
    understanding that everyone is at a completely different level of understanding;
    some people only had to take a single programming class for their major and
    others were brilliant people who had been coding longer than I have, they
    just needed help troubleshooting. It was a wonderful experience and it
    was a difficult decision to not return to it my final semester. Linked is my
    personal website I created and used as a Peer Teacher.`,
    image: f21,
    link: "http://people.tamu.edu/~christiankane/index.html",
  },
  {
    name: "Senior Capstone Design",
    description: `As of the beginning of 2022, I have only just begun this course
    but it is meant to act as the true and final culmination of our undergraduate
    Computer Science knowledge and experience. I have the same professor for this
    course as I did for Software Engineering, Professor Pauline Wade, who has
    been such a wonderful teacher and resource; I look forward to working with
    her and my team on a project for an actual industry sponsor.`,
    image: s22,
    link: "",
  },
  {
    name: "This Website",
    description: `Coming into my final semester, I felt as if I didn't have
    a centralized place to compile all of my work, projects, and resume in
    a visually appealing manner. Furthermore, I had not been exposed to React
    JS in any capacity at all, so making this website seemed like the perfect
    opportunity to learn React while having something to put in YOUR hands.
    Reach out to me on the contact page and I would love to hear from you.`,
    image: s22,
    link: "",
  },
];

const Portfolio = () => {
  const classes = useStyles();
  const [isChecked, setIsChecked] = React.useState(false);
  return (
    <>
    <center>
      <br></br>
      <Typography style={{ color: 'Maroon' }} className={classes.title} variant="h4">
        <Typed strings={["My Fundamental Courseload"]} typeSpeed={40} />
      </Typography>
      <Typography style={{ color: 'black' }} className={classes.title} variant="h5">
        <Typed strings={["and relevant work w/ projects..."]} typeSpeed={40} />
      </Typography>
    </center>
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <FormControlLabel
                    control={<Switch checked={isChecked} onChange={() => {
                      setIsChecked((prev) => !prev);
                    }} />}
                    label="See Descriptions"
                  />
                  <Collapse in={isChecked}>
                    <Typography variant="body2" color="textSecondary">
                      {project.description}
                    </Typography>
                  </Collapse>
                </CardContent>
              </CardActionArea>
              <CardActions>
                {project.link.length > 0 &&
                <center>
                <a href={project.link} target="_blank">
                  <Button size="small" color="primary">
                    The project
                  </Button>
                </a>
                </center>
                }
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </>
  );
};

export default Portfolio;
