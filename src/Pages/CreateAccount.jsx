import React from "react";
import RegisterImg  from "../Components/RegisterImg";
import Reg1 from "../Components/Registration/Reg1";
import Reg2 from "../Components/Registration/Reg2";
// import SiginIn from "../Components/SiginIn";
import { Button } from "@material-tailwind/react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const data = [
  {
    label: "HTML",
    value: "html",
    desc: `It really matters and then like it really doesn't matter.
    What matters is the people who are sparked by it. And the people 
    who are like offended by it, it doesn't matter.`,
  },
  {
    label: "React",
    value: "react",
    desc: `Because it's about motivating the doers. Because I'm here
    to follow my dreams and inspire other people to follow their dreams, too.`,
  },

  {
    label: "Vue",
    value: "vue",
    desc: `We're not always in the position that we want to be at.
    We're constantly growing. We're constantly making mistakes. We're 
    constantly trying to express ourselves and actualize our dreams.`,
  },

  {
    label: "Angular",
    value: "angular",
    desc: `Because it's about motivating the doers. Because I'm here
    to follow my dreams and inspire other people to follow their dreams, too.`,
  },

  {
    label: "Svelte",
    value: "svelte",
    desc: `We're not always in the position that we want to be at.
    We're constantly growing. We're constantly making mistakes. We're 
    constantly trying to express ourselves and actualize our dreams.`,
  },
];

const Registration = () => {
  return (
    <>
      <RegisterImg>
        <div  className="mt-10">
          {/* <Reg1 /> */}
          <Button>Button</Button>
          
          {/* <Reg2 /> */}
        </div>
      </RegisterImg>
    </>
  );
};

export default Registration;
