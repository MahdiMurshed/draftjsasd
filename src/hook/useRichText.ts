import { useCallback, useState } from "react";
import { convertFromRaw, EditorState } from "draft-js";
import { content } from "../components/configs";

interface Props {
  question?: any;
  answer?: any;
  explanation?: any;
}

const useRichText = (question = null, answer = null, explanation = null) => {
  const [richState, setRichState] = useState([
    {
      type: "question",
      value: question
        ? EditorState.createWithContent(convertFromRaw(question))
        : content,
    },
    {
      type: "answer",
      value: answer
        ? EditorState.createWithContent(convertFromRaw(answer))
        : content,
    },

    {
      type: "explanation",
      value: explanation
        ? EditorState.createWithContent(convertFromRaw(explanation))
        : content,
    },
  ]);
  const [json, setJSON] = useState(() =>
    richState.map((s) => JSON.stringify(s.value))
  );

  const onRichTextEdit = useCallback((type, value) => {
    setRichState((oldState) =>
      oldState.map((item, index) => {
        if (item.type === type) {
          return { ...item, value: value };
        }
        return item;
      })
    );
    setJSON(richState.map((s) => JSON.stringify(s.value)));
  }, []);
  const resetRichTextValues = useCallback(() => {
    setRichState((oldState) =>
      oldState.map((item, index) => {
        return { ...item, value: null };
      })
    );
  }, []);

  return {
    richState,
    onRichTextEdit,
    resetRichTextValues,
    json,
  };
};

export default useRichText;
