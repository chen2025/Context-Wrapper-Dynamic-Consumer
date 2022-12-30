import { useState, useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";

const Match = () => {
  const [match, setMatch] = useState(false);

  const { sign } = useContext(HoroscopeContext);
  return (
    <div>
      <h4>Match: </h4>
      <button onClick={() => setMatch(!match)}>Match</button>
      {match && <div>{sign.match}</div>}
    </div>
  );
};

export default Match;
