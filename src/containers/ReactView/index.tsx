import * as React from "react";
import { AnimatePresence } from "moti";
import {
  Compiler,
  Knobs,
  Editor,
  Error,
  ActionButtons,
  Placeholder,
} from "react-view";

const ReactView: React.FunctionComponent<any> = ({ params, showCompiler }) => {
  return (
    <React.Fragment>
      <div
        style={{
          border: "1px dashed #ccc",
          position: "relative",
        }}
      >
        <AnimatePresence>
          {showCompiler && (
            <Compiler
              {...params.compilerProps}
              minHeight={62}
              placeholder={Placeholder}
            />
          )}
        </AnimatePresence>
      </div>
      <Error msg={params.errorProps.msg} isPopup />
      <Knobs {...params.knobProps} />
      <Editor {...params.editorProps} />
      <Error {...params.errorProps} />
      <ActionButtons {...params.actions} />
    </React.Fragment>
  );
};

ReactView.defaultProps = {
  showCompiler: true,
};
export default ReactView;
