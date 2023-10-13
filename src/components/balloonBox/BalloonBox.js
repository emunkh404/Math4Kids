import React, { useState } from "react";
import Balloon from "../balloon/Balloon";

export default function BalloonBox({ color }) {
  const [popped, setPopped] = useState(false);

  const handlePop = () => {
    setPopped(true);
  };

  return (
    <div className="box">
      {popped ? <div className="empty-box" /> : <Balloon color={color} onClick={handlePop} popped={popped} />}
    </div>
  );
}
