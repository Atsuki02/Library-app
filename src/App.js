import { useState } from "react";

const battery = [
  {
    batteryName: "WKL-78",
    capacityAh: 2.3,
    voltage: 14.4,
    maxDraw: 3.2,
    endVoltage: 10,
  },
  {
    batteryName: "WKL-140",
    capacityAh: 4.5,
    voltage: 14.4,
    maxDraw: 9.2,
    endVoltage: 5,
  },
  {
    batteryName: "Wmacro-78",
    capacityAh: 2.5,
    voltage: 14.5,
    maxDraw: 10,
    endVoltage: 5,
  },
  {
    batteryName: "Wmacro-140",
    capacityAh: 3.6,
    voltage: 14.4,
    maxDraw: 14,
    endVoltage: 5,
  },
  {
    batteryName: "IOP-E78",
    capacityAh: 6.6,
    voltage: 14.4,
    maxDraw: 10.5,
    endVoltage: 8,
  },
  {
    batteryName: "IOP-E140",
    capacityAh: 9.9,
    voltage: 14.4,
    maxDraw: 14,
    endVoltage: 10,
  },
  {
    batteryName: "IOP-E188",
    capacityAh: 13.2,
    voltage: 14.4,
    maxDraw: 14,
    endVoltage: 11,
  },
  {
    batteryName: "RYN-C65",
    capacityAh: 4.9,
    voltage: 14.8,
    maxDraw: 4.9,
    endVoltage: 11,
  },
  {
    batteryName: "RYN-C85",
    capacityAh: 6.3,
    voltage: 14.4,
    maxDraw: 6.3,
    endVoltage: 12,
  },
  {
    batteryName: "RYN-C140",
    capacityAh: 9.8,
    voltage: 14.8,
    maxDraw: 10,
    endVoltage: 12,
  },
  {
    batteryName: "RYN-C290",
    capacityAh: 19.8,
    voltage: 14.4,
    maxDraw: 14,
    endVoltage: 12,
  },
];
const camera = [
  {
    brand: "Cakon",
    model: "ABC 3000M",
    powerConsumptionWh: 35.5,
  },
  {
    brand: "Cakon",
    model: "ABC 5000M",
    powerConsumptionWh: 37.2,
  },
  {
    brand: "Cakon",
    model: "ABC 7000M",
    powerConsumptionWh: 39.7,
  },
  {
    brand: "Cakon",
    model: "ABC 9000M",
    powerConsumptionWh: 10.9,
  },
  {
    brand: "Cakon",
    model: "ABC 9900M",
    powerConsumptionWh: 15.7,
  },
  {
    brand: "Go MN",
    model: "UIK 110C",
    powerConsumptionWh: 62.3,
  },
  {
    brand: "Go MN",
    model: "UIK 210C",
    powerConsumptionWh: 64.3,
  },
  {
    brand: "Go MN",
    model: "UIK 230C",
    powerConsumptionWh: 26.3,
  },
  {
    brand: "Go MN",
    model: "UIK 250C",
    powerConsumptionWh: 15.3,
  },
  {
    brand: "Go MN",
    model: "UIK 270C",
    powerConsumptionWh: 20.3,
  },
  {
    brand: "VANY",
    model: "CEV 1100P",
    powerConsumptionWh: 22,
  },
  {
    brand: "VANY",
    model: "CEV 1300P",
    powerConsumptionWh: 23,
  },
  {
    brand: "VANY",
    model: "CEV 1500P",
    powerConsumptionWh: 24,
  },
  {
    brand: "VANY",
    model: "CEV 1700P",
    powerConsumptionWh: 25,
  },
  {
    brand: "VANY",
    model: "CEV 1900P",
    powerConsumptionWh: 26,
  },
];

function App() {
  const [brand, setBrand] = useState("Cakon");
  const [model, setModel] = useState("ABC 3000M");
  const [power, setPower] = useState(55);

  return (
    <div id="target">
      <Header />
      <div className="container">
        <Brand brand={brand} setBrand={setBrand} />
        <Model brand={brand} model={model} setModel={setModel} />
        <Power power={power} setPower={setPower} />
        <Battery brand={brand} model={model} power={power} />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="title">
      <h1>Battery Finder Program</h1>
    </div>
  );
}

function Brand({ brand, setBrand }) {
  const uniqueBrands = [...new Set(camera.map((cam) => cam.brand))];

  return (
    <div className="brand-selection">
      <h2>Step1: Select your brand</h2>
      <select
        className="brand-options"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
      >
        {uniqueBrands.map((brand) => (
          <option value={brand} key={brand}>
            {brand}
          </option>
        ))}
      </select>
    </div>
  );
}

function Model({ brand, model, setModel }) {
  return (
    <div className="model-selection">
      <h2>Step2: Select your model</h2>
      <select
        className="model-options"
        value={model}
        onChange={(e) => setModel(e.target.value)}
      >
        {camera.map((camera) =>
          camera.brand === brand ? (
            <option value={camera.model} key={camera.model}>
              {camera.model}
            </option>
          ) : null
        )}
      </select>
    </div>
  );
}

function Power({ power, setPower }) {
  return (
    <div className="power-consumption-input">
      <h2>Step3: Input accessory power consumption</h2>
      <input
        id="wattage"
        type="number"
        value={power}
        min="0"
        max="100"
        onChange={(e) => setPower(Number(e.target.value))}
      />
    </div>
  );
}

function Battery({ brand, model, power }) {
  const filterdCamera = camera.filter(
    (cam) => cam.brand === brand && cam.model === model
  );

  const filteredBattery = battery.filter(
    (batt) =>
      batt.maxDraw * batt.endVoltage >
      filterdCamera[0]?.powerConsumptionWh + power
  );

  console.log(filterdCamera[0]?.powerConsumptionWh);

  return (
    <div className="battery-selection">
      <h2>Step4: Choose your battery</h2>
      <ul className="battery-list">
        {filteredBattery.map((batt) => (
          <li className="list-item" key={batt.batteryName}>
            <p>{batt.batteryName}</p>
            <p>
              Estimate{" "}
              {(
                (batt.voltage * batt.capacityAh) /
                (filterdCamera[0].powerConsumptionWh + power)
              ).toFixed(1)}{" "}
              hours
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
