import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState("8");
  const [allowNum, setAllowNum] = useState(false);
  const [allowChar, setAllowChar] = useState(false);
  const [password, setPassword] = useState("");
  const passRef = useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUWXYZabcdefghijklmnopqrstuvwxyz";
    if (allowNum) str += "01234567789";
    if (allowChar) str += "!@#$%&*_-=+";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, allowNum, allowChar, setPassword]);

  const copyToClipborad = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, allowNum, allowChar, passwordGenerator]);
  return (
    <>
      <div className="w-full h-screen bg-black py-8">
        <div className="w-full max-w-md mx-auto py-8 shadow-md px-4 rounded-lg bg-gray-700 ">
          <div className=" shadow-md flex overflow-hidden mb-4">
            <input
              type="text"
              value={password}
              placeholder="Password"
              readOnly
              ref={passRef}
              className=" outline-none w-full py-1 px-2 rounded-l-md font-semibold"
            />
            <button
              className="rounded-r-md bg-blue-600 text-white font-semibold px-2 shrink-0 hover:bg-blue-500"
              onClick={copyToClipborad}
            >
              Copy
            </button>
          </div>
          <div className="text-sm flex gap-x-2">
            <div className="flex items-center gap-x-1 text-white font-semibold">
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
              <label>{length}</label>
            </div>
            <div className="flex items-center gap-x-1 text-white font-semibold">
              <input
                type="checkbox"
                defaultChecked={allowNum}
                onChange={() => setAllowNum((prev) => !prev)}
              />
              <label>Numbers</label>
            </div>
            <div className="flex items-center gap-x-1 text-white font-semibold">
              <input
                type="checkbox"
                defaultChecked={allowChar}
                onChange={() => setAllowChar((prev) => !prev)}
              />
              <label>Special Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
