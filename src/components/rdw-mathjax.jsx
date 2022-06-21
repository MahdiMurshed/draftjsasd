// Import Modules
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  {
    ssr: false,
  }
);

// Import Components
import MathJaxOption from "./mathjax_option";

// Import Miscs
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const RDWMathJax = ({ type, value, onChange }) => {
  const handleChange = (state) => {
    onChange(type, state);
  };
  // const [contentState, setContentState] = useState();

  // Will only execute when rawDraftContentState changes (ie. for default value)
  // useEffect(() => {
  //   setContentState(value);
  // }, [setContentState, value]);

  return (
    <Editor
      contentState={value}
      onContentStateChange={handleChange}
      // eslint-disable-next-line react/jsx-key
      toolbarCustomButtons={[<MathJaxOption />]}
    />
  );
};

export default RDWMathJax;
