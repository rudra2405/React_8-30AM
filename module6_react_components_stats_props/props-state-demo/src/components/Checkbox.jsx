import React, { useState } from "react";

export default function Checkbox() {
  const [ischecked, setisChecked] = useState(false);

  return (
    <>
      <div>
        <label>
          <input
            type="checkbox"
            checked={ischecked}
            onChange={(e) => setisChecked(e.target.checked)}
          />
          {ischecked ? "Checked" : "Unchecked"}
        </label>
      </div>
    </>
  );
}
