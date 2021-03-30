import React, { useState } from "react";
import { useDebounce } from "react-use";
import { useLocation } from "wouter";

export default function Input(props) {
  const [value, setValue] = useState("");
  const [, setLocation] = useLocation();

  const redirectToGif = (val) => {
    setLocation(`/gif/${val}`);
  };
  const { placeholder } = props;
  useDebounce(
    () => {
      redirectToGif(value);
    },
    2000,
    [value]
  );
  const handleValue = (val) => {
    setValue(val);
  };

  return (
    <div>
      <input
        type="search"
        placeholder={placeholder}
        onChange={(e) => handleValue(e.target.value)}
        value={value}
      />
    </div>
  );
}
