"use client";

import { FC, useEffect, useState } from "react";
import { Editor, EditorState, RichUtils } from "draft-js";

export const ArticleEditor: FC = () => {
  const [editorEnable, setEditorEnable] = useState(false);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(),
  );

  useEffect(() => {
    setEditorEnable(true);
  }, []);

  const onItalicClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "ITALIC"));
  };

  const onBoldClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"));
  };

  const onLinkClick = () => {
    const contentState = editorState.getCurrentContent();
    const selection = editorState.getSelection();
    const contentStateWithEntity = contentState.createEntity(
      "LINK",
      "MUTABLE",
      {
        url: "http://gamestudio.vn/public/img/logo.png",
      },
    );

    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const nextEditorState = EditorState.set(editorState, {
      currentContent: contentStateWithEntity,
    });

    setEditorState(RichUtils.toggleLink(nextEditorState, selection, entityKey));
  };

  return (
    editorEnable && (
      <>
        <button onClick={onBoldClick}>B</button>
        <button onClick={onItalicClick}>I</button>
        <button onClick={onLinkClick}>Link</button>
        <Editor editorState={editorState} onChange={setEditorState} />
      </>
    )
  );
};
