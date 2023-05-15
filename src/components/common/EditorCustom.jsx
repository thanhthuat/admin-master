import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";

const API_KEY = import.meta.env.REACT_APP_API_KEY_EDITOR;

const EdittorCustom = () => {
  const editorRef = useRef(null);
  return (
    <Editor
      onInit={(evt, editor) => (editorRef.current = editor)}
      apiKey={API_KEY}
      init={{
        menubar: true,
        config: {},

        plugins: `advlist autolink lists link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table code help wordcount`,
        toolbar: `undo redo| link code image | formatselect | bold italic backcolor | \
                  alignleft aligncenter alignright alignjustify | \
                  bullist numlist outdent indent | removeformat | help`,
        image_title: true,
        automatic_uploads: true,
        file_picker_types: "image",
      }}
    />
  );
};

export default EdittorCustom;
