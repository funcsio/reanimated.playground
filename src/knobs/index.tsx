import KnobsSlider from "./components/Slider";
import * as KnobButton from "./components/Button";
import KnobSelect from "./components/Select";

// Containers
import AnimationConfigurer from "./containers/AnimationConfigurer";
const Knobs = {
  Button: KnobButton,
  Select: KnobSelect,
  Slider: KnobsSlider,
  AnimationConfigurer: AnimationConfigurer,
};

export default Knobs;
