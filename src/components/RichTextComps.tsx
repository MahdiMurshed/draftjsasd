import React, { useEffect, useRef } from "react";
import RichText from "./rdw-mathjax";
import draftToHtml from "draftjs-to-html";
import ReactHTMLParser from "react-html-parser";

const RichTextComponents = ({ richState, onRichTextEdit, json }) => {
  const node1 = useRef();
  const node2 = useRef();
  const node3 = useRef();
  useEffect(() => {
    window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub, node1.current]);
    window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub, node2.current]);
    window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub, node3.current]);
  }, []);

  return (
    <>
      <RichText
        type={richState[0].type}
        value={richState[0].value}
        onChange={onRichTextEdit}
      />
      <div className="preview">
        <div ref={node1} key={Math.random()}>
          {json && ReactHTMLParser(draftToHtml(JSON.parse(json[0].value)))}
        </div>
      </div>

      <h3>Answer box</h3>

      <RichText
        type={richState[1].type}
        value={richState[1].value}
        onChange={onRichTextEdit}
      />
      <div className="preview">
        <div ref={node2} key={Math.random()}>
          {json && ReactHTMLParser(draftToHtml(JSON.parse(json[1].value)))}
        </div>
      </div>
      <h3>Explanation box</h3>

      <RichText
        type={richState[2].type}
        value={richState[2].value}
        onChange={onRichTextEdit}
      />
      <div className="preview">
        <div ref={node3} key={Math.random()}>
          {json && ReactHTMLParser(draftToHtml(JSON.parse(json[2].value)))}
        </div>
      </div>
    </>
  );
};

export default React.memo(RichTextComponents);
