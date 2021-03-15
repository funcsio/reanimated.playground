import React from "react";
import * as MUIIcons from "@material-ui/icons";
import Knobs from "../../../../../knobs/components";

interface IRefreshProps {
  onRefresh: any;
  visible: boolean;
  allWhite?: boolean;
}
const Refresh: React.FunctionComponent<IRefreshProps> = ({
  onRefresh,
  visible,
  allWhite,
}) => {
  return (
    <Knobs.Button.IconButton
      style={{ zIndex: 4, position: "absolute", alignSelf: "center" }}
      aria-label="Cancel Animation"
      color="primary"
      onClick={onRefresh}
    >
      {visible ? (
        <MUIIcons.VisibilityOffRounded
          fontSize="large"
          style={{ color: `${allWhite ? "#fff" : "inherit"}` }}
        />
      ) : (
        <MUIIcons.VisibilityRounded
          fontSize="large"
          style={{ color: "#fff" }}
        />
      )}
    </Knobs.Button.IconButton>
  );
};

export default Refresh;
