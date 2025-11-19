import { useState } from "react";
import EmojiSection from "./components/EmojiSection";
import BackColor from "./components/BackColor";
import {RotateCcw, RotateCw } from "lucide-react";

export default function Home() {
  const [emoji, setEmoji] = useState("");
  const [bgColor, setBgColor] = useState("#B9B28A");
  const [size, setSize] = useState("50");
  const [angle, setAngle] = useState(0);
  return (
    <div className="min-h-screen w-full bg-[#F8F3D9] relative">
      <div>
        <h1 className="text-center text-5xl pt-8 font-bold text-[#504B38] m-0">
          Emoji Editor
        </h1>
        <p className="text-center text-xl my-5 text-gray-500">
          Create your perfect emoji with endless customization options
        </p>
      </div>

      <div className="flex flex-col justify-evenly items-center my-0 md:my-20 md:flex-row">
        <div
          className="h-[300px] w-[310px] md:h-[400px] md:w-[400px] mx-5 flex justify-center items-center rounded-xl shadow-2xl"
          style={{ backgroundColor: bgColor }}
        >
          <span style={{fontSize: `${size}px`, transform:`rotate(${angle}deg)`}}>{emoji}</span>
        </div>

        <div className="my-5 h-[300px] w-[310px] md:h-[400px] md:w-[600px] mx-5 border-b-gray-500 bg-[#F9F8F6] p-5 rounded-lg shadow-xl overflow-y-scroll">
          <p className="text-2xl text-gray-500">Customize Your Emoji</p>
          <p className="text-lg text-gray-500 my-3">
            Create your perfect emoji with these controls
          </p>
          <hr className="text-gray-500"></hr>
          <p className="text-2xl my-4 text-gray-500">Emoji</p>
          <div className="flex flex-wrap">
            <EmojiSection emoji={"🩷"} setEmoji={setEmoji} />
            <EmojiSection emoji={"❤"} setEmoji={setEmoji} />
            <EmojiSection emoji={"🧡"} setEmoji={setEmoji} />
            <EmojiSection emoji={"💛"} setEmoji={setEmoji} />
            <EmojiSection emoji={"💚"} setEmoji={setEmoji} />
            <EmojiSection emoji={"🩵"} setEmoji={setEmoji} />
            <EmojiSection emoji={"💙"} setEmoji={setEmoji} />
            <EmojiSection emoji={"💜"} setEmoji={setEmoji} />
            <EmojiSection emoji={"🖤"} setEmoji={setEmoji} />
            <EmojiSection emoji={"🖤"} setEmoji={setEmoji} />
            <EmojiSection emoji={"🩶"} setEmoji={setEmoji} />
            <EmojiSection emoji={"🤍"} setEmoji={setEmoji} />
            <EmojiSection emoji={"🤎"} setEmoji={setEmoji} />
          </div>
          <br></br>
          <hr className="text-gray-500"></hr>
          <p className="text-2xl my-4 text-gray-500">Background Colors</p>
          <div className="flex flex-wrap">
            <BackColor bgColor={"#B9B28A"} setBgColor={setBgColor} />
            <BackColor bgColor={"#FFD97D"} setBgColor={setBgColor} />
            <BackColor bgColor={"#F7A072"} setBgColor={setBgColor} />
            <BackColor bgColor={"#FFD97D"} setBgColor={setBgColor} />
            <BackColor bgColor={"#A72703"} setBgColor={setBgColor} />
            <BackColor bgColor={"#B8C4A9"} setBgColor={setBgColor} />
            <BackColor bgColor={"#6FA4AF"} setBgColor={setBgColor} />
            <BackColor bgColor={"#A376A2"} setBgColor={setBgColor} />
            <BackColor bgColor={"#57564F"} setBgColor={setBgColor} />
            <BackColor bgColor={"#C0C9EE"} setBgColor={setBgColor} />
            <BackColor bgColor={"#F6F0F0"} setBgColor={setBgColor} />
            <BackColor bgColor={"#FDB7EA"} setBgColor={setBgColor} />
          </div>
          <br></br>
          <hr className="text-gray-500"></hr>
          <p className="text-2xl my-4 text-gray-500">Size</p>
          <div className="flex items-center">
          <span className="text-xl text-center text-gray-500 mr-2">{size}</span>
          <input type="range" min="0" max="200" className="w-[250px] cursor-pointer" value={size} onChange={(e) => {
            setSize(e.target.value)
          }} />
          </div>
          <br></br>
          <hr className="text-gray-500"></hr>
          <p className="text-2xl my-4 text-gray-500">Rotate</p>
          <div className="flex items-center">
          <RotateCcw size={30} color="gray" className="mr-3 cursor-pointer" onClick={() => {
            angle>0 ? setAngle(angle - 45) : null;
          }}/>
          {/* <span className="text-2xl text-gray-500 m-5">{angle}</span> */}
          <RotateCw size={30} color="gray" className="ml-3 cursor-pointer" onClick={()=> {
            angle<360 ? setAngle(angle + 45): null;
          }} />
          </div>

        </div>
      </div>
    </div>
  );
}
