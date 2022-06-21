import React, { useEffect, useRef } from "react";
import useRichText from "../hook/useRichText";
import RichTextComps from "./RichTextComps";
import draftToHtml from "draftjs-to-html";
import ReactHTMLParser from "react-html-parser";
import Head from "next/head";

const Rich = () => {
  const { richState, onRichTextEdit, resetRichTextValues, json } =
    useRichText();

  return (
    <>
      <RichTextComps
        richState={richState}
        onRichTextEdit={onRichTextEdit}
        json={json}
      />
    </>
  );
};
export default Rich;
