import React from "react";
import SwitchSelector from "react-switch-selector";

const options = [
  {
    label: "チケットカード",
    value: "ticket-card",
    selectedBackgroundColor: "#0097e6",
  },
  {
    label: "名刺",
    value: "name-card",
    selectedBackgroundColor: "#0097e6",
  },
];

const onChange = (newValue) => {
  console.log(newValue);
};

const initialSelectedIndex = options.findIndex(({ value }) => value === "bar");

function SwitchSample() {
  return (
    <p style={{ height: 50, width: 300 }}>
      <SwitchSelector
        onChange={onChange}
        options={options}
        initialSelectedIndex={initialSelectedIndex}
        backgroundColor={"#c1c2c3"}
        fontColor={"#f5f6fa"}
        wrapperBorderRadius={25}
        optionBorderRadius={25}
        selectionIndicatorMargin={4}
      />
    </p>
  );
}

export default SwitchSample;
