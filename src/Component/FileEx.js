import React, { useState } from "react";
import "./fileExStyles.css";
function FileEx() {
  const [files, setFiles] = useState([]);
  const [subfiles, setSubFiles] = useState([]);
  const obj = [
    {
      name: "A",
      type: "folder",
      children: [
        {
          name: "001",
          ext: "txt",
          type: "file",
        },
        {
          name: "002",
          ext: "txt",
          type: "file",
        },
        {
          name: "AA",
          type: "folder",
          children: [
            {
              name: "003",
              ext: "txt",
              type: "file",
            },
            {
              name: "004",
              ext: "txt",
              type: "file",
            },
          ],
        },
      ],
    },

    {
      name: "B",
      type: "folder",
      children: [
        {
          name: "01",
          ext: "jpg",
          type: "file",
        },
        {
          name: "02",
          ext: "jpg",
          type: "file",
        },
        {
          name: "BB",
          type: "folder",
          children: [],
        },
      ],
    },
  ];

  const openFolderHandler = (names) => {
    for (let i = 0; i < obj.length; i++) {
      if (obj[i].name === names) {
        setFiles([]);
        setFiles(Object.values(obj[i].children));
      }
    }
  };

  const subFolderHandler = (ele) => {
    if (ele.name === "AA" || ele.name === "BB") {
      setSubFiles(ele.children);
    }
  };

  return (
    <div>
      <h3>File Explorer</h3>
      <div
        className="outer"
        style={{ border: "1px solid red", width: "600px", height: "500px" }}
      >
        <div
          className="inner1"
          style={{ border: "1px solid green", width: "200px", height: "500px" }}
        >
          <div
            style={{
              textAlign: "center",
              borderBottom: "1px solid black",
              cursor: "pointer",
            }}
            onClick={() => openFolderHandler("A")}
          >
            <h3>
              <span>
                <i className="bi bi-archive-fill"></i>
              </span>
              &nbsp;A
            </h3>
          </div>
          <div
            style={{
              textAlign: "center",
              borderBottom: "1px solid black",
              cursor: "pointer",
            }}
            onClick={() => openFolderHandler("B")}
          >
            <h3>
              <span>
                <i className="bi bi-archive-fill"></i>
              </span>
              &nbsp;B
            </h3>
          </div>
        </div>
        <div
          className="inner2"
          style={{ border: "1px solid blue", width: "200px", height: "500px" }}
        >
          {files.map((ele, index) => {
            return (
              <>
                <div key={index}>
                  <h3
                    style={{
                      textAlign: "center",
                      borderBottom: "1px solid black",
                      cursor: "pointer",
                    }}
                    onClick={() => subFolderHandler(ele)}
                  >
                    {ele.name}
                  </h3>
                </div>
              </>
            );
          })}
        </div>

        <div
          className="inner3"
          style={{ border: "1px solid green", width: "200px", height: "500px" }}
        >
          {subfiles.map((ele, index) => {
            return (
              <>
                <div key={index}>
                  <h3
                    style={{
                      textAlign: "center",
                      borderBottom: "1px solid black",
                      cursor: "pointer",
                    }}
                    onClick={() => subFolderHandler(ele)}
                  >
                    {ele.name}
                  </h3>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FileEx;
