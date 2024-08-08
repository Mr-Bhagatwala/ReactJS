import React, { useCallback, useEffect, useRef, useState } from "react";

const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [characterAllowed, setcharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const genrator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "0123456789";
    }
    if (characterAllowed) {
      str += "!@#$%^&*()_+-{}|[]:;~`";
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, characterAllowed, numberAllowed, setPassword]);

  const copyPasswordToClickboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  // genrator()

  //useEffect hook
  useEffect(() => {
    genrator();
  }, [length, numberAllowed, characterAllowed, genrator]);

  //useRef hook
  const passwordRef = useRef(null);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
  <h1 className="text-white text-center my-3">Password Generator</h1>
  <div className="flex shadow rounded-lg overflow-hidden mb-4">
    <input
      type="text"
      value={password}
      className="outline-none w-full py-3 px-3 bg-gray-900 text-white"
      placeholder="Password"
      readOnly
      ref={passwordRef}
    />
    <button className="outline-none bg-blue-700 text-white px-3 py-0.5" onClick={copyPasswordToClickboard}>
      Copy
    </button>
  </div>
  <div className="flex text-sm gap-x-2">
    <div className="flex items-center gap-x-1">
      <input
        type="range"
        min={6}
        max={100}
        value={length}
        className="cursor-pointer"
        onChange={(e) => {
          setLength(e.target.value);
        }}
      />
      <label className="text-white">Length: {length}</label>
    </div>
    <div className="flex items-center gap-x-1">
      <input
        type="checkbox"
        defaultChecked={numberAllowed}
        id="numberInput"
        onChange={() => {
          setnumberAllowed((prev) => !prev);
        }}
      />
      <label className="text-white" htmlFor="numberInput">
        Numbers
      </label>
    </div>
    <div className="flex items-center gap-x-1">
      <input
        type="checkbox"
        defaultChecked={characterAllowed}
        id="characterInput"
        onChange={() => {
          setcharacterAllowed((prev) => !prev);
        }}
      />
      <label className="text-white" htmlFor="characterInput">
        Characters
      </label>
    </div>
  </div>
</div>

  );
};

export default PasswordGenerator;
