import React from "react";
import SwitchSelector from "react-switch-selector";

const options = [
  {
    label: "チケット · カード",
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
    <p
      style={{
        marginLeft: 30,
        marginTop: 20,
        marginBottom: 21,
        height: 36,
        width: 220,
      }}
    >
      <SwitchSelector
        onChange={onChange}
        options={options}
        initialSelectedIndex={initialSelectedIndex}
        backgroundColor={"#d3d4d5"}
        fontColor={"#f5f6fa"}
        fontSize={11}
        wrapperBorderRadius={25}
        optionBorderRadius={25}
        selectionIndicatorMargin={4}
      />
    </p>
  );
}

export default SwitchSample;
