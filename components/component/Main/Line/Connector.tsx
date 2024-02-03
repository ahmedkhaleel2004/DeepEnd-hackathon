import React from "react";

interface ConnectorProps {
  isActive: boolean;
  activeColor: string;
  inActiveColor: string;
  height: number;
}

const Connector: React.FC<ConnectorProps> = ({
  isActive,
  activeColor,
  inActiveColor,
  height,
}) => {
  return (
    <div
      className="relative flex w-full items-center justify-start"
      style={{ width: "4px", height: height }}
    >
      <div
        className={`absolute z-0 h-full border-l-8`}
        style={{ borderColor: inActiveColor }}
      ></div>
      <div
        className={`transition-width  z-50 border-t-8  bg-red-400 duration-700 ease-in-out ${
          isActive ? "w-full" : "w-0"
        }`}
        style={{ borderColor: activeColor }}
      ></div>
    </div>
  );
};

export default Connector;
