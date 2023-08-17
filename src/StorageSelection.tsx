const StorageSelection = () => {
  return (
    <div>
      <h2>Step4: Select Your Storage</h2>
      <label>
        HDD or SSD:
        <select>
          <option value="HDD">HDD</option>
          <option value="SSD">SSD</option>
        </select>
      </label>
      <br />
      <label>
        Storage:
        <input type="text" />
      </label>
      <br />
      <label>
        Brand:
        <select>{/* Options for storage brands */}</select>
      </label>
      <br />
      <label>
        Model:
        <select>{/* Options for storage models */}</select>
      </label>
    </div>
  );
};

export default StorageSelection;
