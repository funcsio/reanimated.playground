import React from "react";
import KnobsComponents from "../../components";

interface IDynamicSectionProps {
  config?: { type: string; props: any }[];
}
const DynamicSection = (props: IDynamicSectionProps) => {
  const { config } = props;
  return (
    <>
      {config &&
        config.map((elm, idx) => {
          const Component = KnobsComponents[elm.type];
          return <Component key={idx} {...elm.props} />;
        })}
    </>
  );
};

export default DynamicSection;
