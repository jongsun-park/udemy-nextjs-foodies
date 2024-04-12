"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState(null);
  const imageInputRef = useRef();

  function handlePickClick() {
    imageInputRef.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0]; // input type="file"

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      // fileReader.result; // generated url
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
    // readAsDataURL 메서드가 완료되면 onload 메서드가 호출
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="THe image selected by the user."
              fill
            />
          )}
        </div>
        <input
          className={classes.input} // hidden
          type="file"
          name={name}
          id={name}
          accept="image/png, image/jpeg"
          ref={imageInputRef}
          onChange={handleImageChange}
          required
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
