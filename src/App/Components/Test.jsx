import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { CameraAlt } from "@mui/icons-material";

export default function Test() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(false);
  const fileArr = [];

  const departmentsInit = [
    {
      id:1,
      name:"Arge",
      colleague: 22
    },
    {
      id:2,
      name:"Web",
      colleague: 22
    },
    {
      id:3,
      name:"ABAP",
      colleague: 22
    },
    {
      id:4,
      name:"IK",
      colleague: 22
    },
  ];

  const selectedEvent = {
    Departments:[
      {id:1},
      {id:3}
    ]
  }

  const eventDepartments = departmentsInit.filter((dep) => selectedEvent.Departments.some((i) => dep.id === i.id));
  console.log(eventDepartments);

  let url =
    "https://cdn.shopify.com/s/files/1/0234/8017/2591/products/young-man-in-bright-fashion_925x_f7029e2b-80f0-4a40-a87b-834b9a283c39.jpg";
  const toDataURL = (url) =>
    fetch(url)
      .then((response) => response.blob())
      .then(
        (blob) =>
          new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
          })
      );

  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    if (!file) {
      setPreview(undefined);
      return undefined;
    }

    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  useEffect(() => {
    toDataURL(url).then((dataUrl) => {
      console.log("Here is Base64 Url", dataUrl);
      var fileData = dataURLtoFile(dataUrl, "imageName.jpg");
      console.log("Here is JavaScript File Object", fileData);
      setFile(fileData);
    });
  },[]);

  return (
    <Grid
      display="flex"
      alignItems="center"
      justifyContent="center"
      style={{
        border: "1px dashed gainsboro",
        cursor: "pointer",
        padding: file ? 0 : 30,
      }}
      component="label"
    >
      {file ? (
        <img width="100%" height={300} src={preview} alt="preview" />
      ) : (
        <CameraAlt />
      )}
      <input onChange={handleFile} hidden accept="image/*" type="file" />
    </Grid>
  );
}
