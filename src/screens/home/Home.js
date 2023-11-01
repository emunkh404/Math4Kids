import React from "react";
import Game from "../../components/game/Game";
import NavUser from "../../components/nav-user/NavUser";
import GradeLevel from "../../components/grade-level/GradeLevel";

const level = "second"; // from Grade-level
const type = "add"; // from Grade-level

export default function Home() {
  return (
    <div>
      <NavUser />
      <GradeLevel />
      <Game level={level} type={type}/>
    </div>
  );
}
