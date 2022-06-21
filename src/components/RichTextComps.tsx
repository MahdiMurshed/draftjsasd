import React from "react";
import RichText from "./rdw-mathjax";

const RichTextComponents = ({ richState, onRichTextEdit }) => {
  return (
    <>
      <RichText
        type={richState[0].type}
        value={richState[0].value}
        onChange={onRichTextEdit}
      />

      <h3>Answer box</h3>

      <RichText
        type={richState[1].type}
        value={richState[1].value}
        onChange={onRichTextEdit}
      />
      <h3>Explanation box</h3>

      <RichText
        type={richState[2].type}
        value={richState[2].value}
        onChange={onRichTextEdit}
      />
    </>
  );
};

export default React.memo(RichTextComponents);
