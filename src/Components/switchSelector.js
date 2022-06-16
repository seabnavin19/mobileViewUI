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
        marginTop: 25,
        height: 42,
        width: 250,
      }}
    >
      <SwitchSelector
        onChange={onChange}
        options={options}
        initialSelectedIndex={initialSelectedIndex}
        backgroundColor={"#c1c2c3"}
        fontColor={"#f5f6fa"}
        fontSize={13}
        wrapperBorderRadius={25}
        optionBorderRadius={25}
        selectionIndicatorMargin={4}
      />
    </p>
  );
}

export default SwitchSample;
