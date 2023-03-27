import { Submission } from "../types/SubmissionModel";
import interviewMe from "../assets/images/InterviewMe.png";
import loremIpsum from "../assets/images/LoremIpsum.png";
import pizzaIpsum from "../assets/images/PizzaIpsum.png";
import potterIpsum from "../assets/images/PotterIpsum.png";
import pirateIpsum from "../assets/images/PirateIpsum.jpg";
import officeIpsum from "../assets/images/OfficeIpsum.png";

const data: Submission[] = [
  {
    id: "1",
    title: "InterviewMe",
    shrinkedDesc: "A platform to help you prepare for your next interview",
    desc: "InterviewMe is a platform to help you prepare for your next interview. It is a platform where you can find interview questions and answers for your next i, and also practice your interview skills with our mock interview feature. We also have a feature where you can create your own interview questions and share them with the community.",
    image: interviewMe,
    isFav: false,
    hackathonName: "Hack the North 2021",
    githubLink: "https://github.com/Himanshuiiit",
    otherLink: "https://devpost.com/software/interviewme",
    submittedDate: new Date("2023-03-17"),
    startDate: new Date("2021-09-17"),
    endDate: new Date("2021-09-19"),
  },
  {
    id: "2",
    title: "Lorem Ipsum",
    shrinkedDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: loremIpsum,
    isFav: true,
    hackathonName: "Hack the North 2021",
    githubLink: "https://github.com/Himanshuiiit",
    otherLink: "https://devpost.com/software/interviewme",
    submittedDate: new Date("2023-03-15"),
    startDate: new Date("2021-09-17"),
    endDate: new Date("2021-09-19"),
  },
  {
    id: "3",
    title: "Potter Ipsum",
    shrinkedDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: potterIpsum,
    isFav: false,
    hackathonName: "Hack the North 2021",
    githubLink: "https://github.com/Himanshuiiit",
    otherLink: "https://devpost.com/software/interviewme",
    submittedDate: new Date("2023-02-13"),
    startDate: new Date("2021-09-17"),
    endDate: new Date("2021-09-19"),
  },
  {
    id: "4",
    title: "Pizza Ispsum",
    shrinkedDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: pizzaIpsum,
    isFav: false,
    hackathonName: "Hack the North 2021",
    githubLink: "https://github.com/Himanshuiiit",
    otherLink: "https://devpost.com/software/interviewme",
    submittedDate: new Date("2023-03-11"),
    startDate: new Date("2021-09-17"),
    endDate: new Date("2021-09-19"),
  },
  {
    id: "5",
    title: "Figma Ipsum",
    shrinkedDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: pirateIpsum,
    isFav: false,
    hackathonName: "Hack the North 2021",
    githubLink: "https://github.com/Himanshuiiit",
    otherLink: "https://devpost.com/software/interviewme",
    submittedDate: new Date("2023-03-09"),
    startDate: new Date("2021-09-17"),
    endDate: new Date("2021-09-19"),
  },
  {
    id: "6",
    title: "Office Ipsum",
    shrinkedDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: officeIpsum,
    isFav: false,
    hackathonName: "Hack the North 2021",
    githubLink: "https://github.com/Himanshuiiit",
    otherLink: "https://devpost.com/software/interviewme",
    submittedDate: new Date("2023-03-07"),
    startDate: new Date("2021-09-17"),
    endDate: new Date("2021-09-19"),
  },
];

export default data;
