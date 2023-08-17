const MemoryCardSelection = () => {
  return (
    <div>
      <h2>Step3: Select Your Memory Card</h2>
      <label>
        How many?
        <input type="number" />
      </label>
      <br />
      <label>
        Brand:
        <select>{/* Options for memory card brands */}</select>
      </label>
      <br />
      <label>
        Model:
        <select>{/* Options for memory card models */}</select>
      </label>
    </div>
  );
};

export default MemoryCardSelection;
