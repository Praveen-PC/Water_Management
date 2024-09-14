import "../App.css";
import { useLayoutEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const WaterLevel=({ level })=> {
  return (
    <div className="water-level-container">
      <div className="water-level" style={{ height: `${level}%` }}>
        {level} liters
      </div>
    </div>
  );
}

const RainWater=({ level })=> {
  return (
    <div className="Rain-Water-container">
      <div className="water-level-2" style={{ height: `${level}%` }}>
        {level} liters
      </div>
    </div>
  );
}

const Index = () => {

  const [hours,setHours]=useState(0)
  const [phase, setPhase] = useState("Phase 6");
  

  const [blocks1, setBlocks1] = useState([
    { name: "Block A", level: 80 },
    { name: "Block B", level: 70 },
    { name: "Block C", level: 60 },
    { name: "Block D", level: 50 },
    { name: "Block E", level: 40 },
  ]);

  const [blocks2, setBlocks2] = useState([
    { name: "Block R", level: 80 },
    { name: "Block P", level: 70 },
  ]);

  const [blocks3, setBlocks3] = useState([
    { name: "Rain Water 1", level: 80 },
    { name: "RO water", level: 70 },
    { name: "Bore water", level: 70 },
  ]);

  const [blocks4, setBlocks4] = useState([
    { name: "Unfiltered", level: 69 },
    { name: "Filtered", level: 30 },
  ]);

  const handlePhaseChange = (newPhase) => {
    setPhase(newPhase);

    if (newPhase === "Phase 6") {
      setBlocks1([
        { name: "Block A", level: 80 },
        { name: "Block B", level: 70 },
        { name: "Block C", level: 60 },
        { name: "Block D", level: 50 },
        { name: "Block E", level: 40 },
      ]);
      setBlocks2([
        { name: "Block R", level: 80 },
        { name: "Block P", level: 70 },
      ]);
      setBlocks3([
        { name: "Rain Water 1", level: 80 },
        { name: "RO water", level: 70 },
        { name: "Bore water", level: 70 },
      ]);
      setBlocks4([
        { name: "Unfiltered", level: 69 },
        { name: "Filtered", level: 30 },
      ]);
    } else if (newPhase === "Phase 7") {
      setBlocks1([
        { name: "Block A", level: 60 },
        { name: "Block B", level: 55 },
        { name: "Block C", level: 45 },
        { name: "Block D", level: 40 },
        { name: "Block E", level: 40 },
      ]);
      setBlocks2([
        { name: "Block R", level: 30 },
        { name: "Block P", level: 89 },
      ]);
      setBlocks3([
        { name: "Rain Water 1", level: 40 },
        { name: "RO water", level: 40 },
        { name: "Bore water", level: 20 },
      ]);
      setBlocks4([
        { name: "Unfiltered", level: 89 },
        { name: "Filtered", level: 39 },
      ]);
    } else if (newPhase === "Phase 8") {
      setBlocks1([
        { name: "Block A", level: 50 },
        { name: "Block B", level: 45 },
        { name: "Block C", level: 35 },
        { name: "Block D", level: 30 },
        { name: "Block E", level: 40 },
      ]);
      setBlocks2([
        { name: "Block R", level: 30 },
        { name: "Block P", level: 79 },
      ]);
      setBlocks3([
        { name: "Rain Water 1", level: 30 },
        { name: "RO water", level: 60 },
        { name: "Bore water", level: 20 },
      ]);
      setBlocks4([
        { name: "Unfiltered", level: 75 },
        { name: "Filtered", level: 40 },
      ]);
    }
  };

  const handlechange=(e)=>{
    setHours(e.target.value)
  }
console.log(hours)


  return (
    <>
      <div>
        <nav class="navbar bg-body-tertiary p-3">
          <div class="container-fluid justify-content-center">
            <a class="navbar-brand d-flex align-items-center " href="#">
              <img
                src="/docs/5.3/assets/brand/bootstrap-logo.svg"
                width="30"
                height="24"
                class="d-inline-block align-text-top"
              />
              <span className="fw-bold ms-2 fs-2 text-info">
                Water Management System
              </span>
            </a>
          </div>
        </nav>

        <div className="text-center mt-3">
          <button
            className="btn btn-primary mx-2 "
            onClick={() => handlePhaseChange("Phase 6")}
          >
            Phase 6
          </button>
          <button
            className="btn btn-primary mx-2 "
            onClick={() => handlePhaseChange("Phase 7")}
          >
            Phase 7
          </button>
          <button
            className="btn btn-primary mx-2 "
            onClick={() => handlePhaseChange("Phase 8")}
          >
            Phase 8
          </button>
        </div>

        <div className="text-center mt-3">
          <h3 className="">
            Current Phase: <span className="text-danger">{phase}</span>
          </h3>
        </div>

        <div className="d-flex justify-content-evenly mt-5 flex-wrap ">
          <div className="d-flex flex-wrap border border-3 rounded p-3 m-2 bg-light">
            {blocks1.map((block) => (
              <div className="text-center m-3" key={block.name}>
                <h5>{block.name}</h5>
                <WaterLevel level={block.level} />
              </div>
            ))}
          </div>

          <div className="d-flex flex-wrap border border-3 rounded p-3 m-2 bg-light">
            {blocks2.map((block) => (
              <div className="text-center m-3" key={block.name}>
                <h5>{block.name}</h5>
                <WaterLevel level={block.level} />
              </div>
            ))}
          </div>
        </div>

        <div className="d-flex justify-content-evenly mt-5 flex-wrap ">
          <div className="d-flex flex-wrap border border-3 rounded p-3 m-2 bg-light">
            {blocks3.map((block) => (
              <div className="text-center m-3" key={block.name}>
                <h5>{block.name}</h5>
                <RainWater level={block.level} />
              </div>
            ))}
          </div>

          <div className="d-flex flex-wrap border border-3 rounded p-3 m-2 bg-light">
            {blocks4.map((block) => (
              <div className="text-center m-3" key={block.name}>
                <h5>{block.name}</h5>
                <RainWater level={block.level} />
              </div>
            ))}
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-evenly border rounded m-3 p-3 mt-5 bg-light">
          <p className="mb-0 me-2">{hours} Hours</p>
          <input type="range" value={hours} onChange={handlechange} min="0" max="24" className="flex-grow-1 mx-3" />
          <p className="mb-0 ms-2">24 Hours</p>
        </div>


      </div>
    </>
  );
};
export default Index;
