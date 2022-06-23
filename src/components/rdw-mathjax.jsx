import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// The editor needs to be imported on the client side only, thus {ssr: false} 
// as this uses window 
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  {
    ssr: false,
  }
);
import MathJaxOption from "./mathjax_option";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


// use this element uncontrollably,
// pass in default value and watch the changes on setEditorState

const RDWMathJax = ({ defaultValue = null, setEditorState }) => {
  const [contentState, setContentState] = useState();

  useEffect(() => {
    setContentState(defaultValue);
  }, [defaultValue]);

  return (
    <Editor
      contentState={contentState}
      onContentStateChange={setEditorState}
      toolbarCustomButtons={[<MathJaxOption key={"MathJax"}/>]}
    />
  );
};

export default RDWMathJax;
