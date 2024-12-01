import { useState } from "react";
import "./index.css";

function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");

  function selectColor(event) {
    setColor(event.target.value);
  }

  return (
    <div className="color-picker-container">
      <p>Color Picker</p>
      <div className="color-display" style={{ backgroundColor: color }}>
        Color: {color}
      </div>
      <div className="color-picker">
        Select a color:
        <input type="color" value={color} onChange={selectColor} />
      </div>
    </div>
  );
}

export default ColorPicker;
