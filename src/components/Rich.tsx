import React, { useEffect, useRef } from "react";
import useRichText from "../hook/useRichText";
import RichTextComps from "./RichTextComps";
import draftToHtml from "draftjs-to-html";
import ReactHTMLParser from "react-html-parser";
import Head from "next/head";

const Rich = () => {
  const node = useRef();

  const { richState, onRichTextEdit, resetRichTextValues, json } =
    useRichText();
  useEffect(() => {
    window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub, node.current]);
  });

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML"
        ></script>
      </Head>
      <RichTextComps richState={richState} onRichTextEdit={onRichTextEdit} />
      <div className="preview-container">
        <h2>Preview</h2>
        <hr />
        <div className="preview">
          <div ref={node} key={Math.random()}>
            {json && ReactHTMLParser(draftToHtml(JSON.parse(json[0])))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Rich;