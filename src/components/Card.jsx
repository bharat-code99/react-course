import { Bookmark } from "lucide-react";
import amazon from "../assets/logos/aws-logo-rgb.png";
import { useState } from "react";

export default function Card({ data }) {
  const [saved, setSaved] = useState(false);

  return (
    <div className="w-75 rounded-2xl shadow-md p-6 flex flex-col justify-between h-80 bg-white">
      <div>
        <div className="flex justify-between items-start">
          <div className="w-[50px] h-[50px] p-1 rounded-full border border-gray-200 overflow-hidden">
            <img
              src={data.img_src}
              alt=""
              className="w-full h-full object-cover rounded-full bg-gray-300"
            />
          </div>
          <button
            onClick={() => setSaved(!saved)}
            className={`flex gap-1 items-center text-xs border font-semibold border-gray-200 px-2 py-1 rounded-md cursor-pointer hover:shadow ${saved ? "text-gray-700" : "text-gray-400"}`}
          >
            {saved ? "Saved" : "Save"} <Bookmark size={16} fill={saved ? "#111" : "#fff"} />
          </button>
        </div>
        <div className="space-y-1 mt-6">
          <div>
            <span className="font-semibold mr-1">{data.company}</span>
            <span className="text-gray-400 text-xs font-semibold">5 days ago</span>
          </div>

          <div className="text-lg font-bold">{data.designation}</div>

          <div className="space-x-1">
            {data.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded-sm bg-gray-100 text-gray-600 text-xs font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="border-t border-gray-200 flex justify-between items-center pt-4">
        <div className="flex flex-col gap-0.5">
          <span className="font-bold">{data.pay}</span>
          <span className="text-xs font-semibold text-gray-400">{data.location}</span>
        </div>
        <button className="bg-black text-white font-semibold rounded-lg px-3 py-2 text-xs cursor-pointer hover:shadow-md">
          Apply Now
        </button>
      </div>
    </div>
  );
}
