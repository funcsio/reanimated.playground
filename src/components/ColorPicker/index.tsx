import React, { useEffect, useState } from "react";
import lodash from "lodash";
import { SketchPicker, RGBColor } from "react-color";
import { makeStyles, Theme, createStyles } from "@material-ui/core";

interface IColorPicker {
  onChange: Function;
  value: RGBColor;
}
const ColorPicker: React.FunctionComponent<IColorPicker> = (props) => {
  const [showPicker, setShowPicker] = useState(false);
  const [pickerColor, setPickerColor] = useState(props.value);

  useEffect(() => {
    if (!lodash.isEqual(pickerColor, props.value)) {
      setPickerColor(props.value);
    }
  }, [pickerColor, props.value]);
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      color: {
        width: "6rem",
        height: "2rem",
        borderRadius: "2px",
        background: `rgba(${pickerColor.r}, ${pickerColor.g}, ${pickerColor.b}, ${pickerColor.a})`,
        zIndex: 3,
      },
      swatch: {
        padding: "0.2rem",
        background: "#fff",
        borderRadius: "1px",
        boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
        display: "inline-block",
        cursor: "pointer",
      },
      popover: {
        position: "absolute",
        zIndex: 4,
      },
      cover: {
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px",
      },
    })
  );

  const handleClick = () => {
    setShowPicker((prevState) => !prevState);
  };

  const handleClose = () => {
    setShowPicker(false);
  };

  const handleChange = (color) => {
    setPickerColor(color.rgb);
    props.onChange(color);
  };

  const styles = useStyles();
  return (
    <div>
      <div className={styles.swatch} onClick={handleClick}>
        <div className={styles.color} />
      </div>
      {showPicker ? (
        <div className={styles.popover}>
          <div className={styles.cover} onClick={handleClose} />
          <SketchPicker color={pickerColor} onChange={handleChange} />
        </div>
      ) : null}
    </div>
  );
};

export default ColorPicker;
