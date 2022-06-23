import React, { useEffect, useRef, useState } from "react";
import draftToHtml from "draftjs-to-html";
import ReactHTMLParser from "react-html-parser";
import RDWMathJax from "./rdw-mathjax";



const Rich = () => {
  const node = useRef();
  const [defaultValue, setDefaultValue] = useState(null);
  const [json, setJson] = useState("{}");


  // this effect also uses window but why it isn't imported dynamically?
  // because effects only run on the client side.
  
  useEffect(() => {
    // MathJax will be pulled from a cdn
    // @ts-ignore
    window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub, node.current]);
  });

  return (
    <>
    {/* you could pass a default value like defaultValue={defaultValue} but dont pass a state */}
      <RDWMathJax  setEditorState={(e) => {
        setJson(JSON.stringify(e))
        }} />
      <div className="preview-container">
        <h2>Preview</h2>
        <hr />
        <div className="preview">
          <div ref={node} key={Math.random()}>
          {json && ReactHTMLParser(draftToHtml(JSON.parse(json)))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Rich;
