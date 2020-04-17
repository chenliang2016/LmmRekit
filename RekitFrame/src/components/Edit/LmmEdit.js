import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const LmmEdit = ({ value = "",style, onChange }) => {

  const triggerChange = changedValue => {
    if (onChange) {
      onChange(changedValue);
    }
  };

  const modules = {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],

        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction
        ['link', 'image'],

        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],

        ['clean']              
      ]
  };

  return (
    <div className="text-editor">
        <ReactQuill style={style}
                    theme="snow"
                    value={value} 
                    modules={modules}
                    onChange={triggerChange}>
        </ReactQuill>
      </div>
  );
};
export default LmmEdit