import Card from "./components/Card";
import Card2 from "./components/Card2";

export default function App() {
  const Card_Data = [
    {
      company: "Amazon",
      designation: "Senior React Developer",
      tags: ["Full-Time", "Senior-Level"],
      img_src: "https://thumbs.dreamstime.com/b/icons-sample-psost-setting-428651105.jpg",
      pay: "$120/hr",
      location: "Mumbai, India",
    },
    {
      company: "Google",
      designation: "Graphic Designer",
      tags: ["Part-Time", "Flexible Schedule"],
      img_src:
        "https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/3:2/w_2560%2Cc_limit/google-logo.jpg",
      pay: "$150-220k",
      location: "Kochi, India",
    },
    {
      company: "Figma",
      designation: "UX Designer",
      tags: ["Full-Time", "In Office"],
      img_src:
        "https://cdn.sanity.io/images/599r6htc/regionalized/5094051dac77593d0f0978bdcbabaf79e5bb855c-1080x1080.png",
      pay: "$200-250k",
      location: "Bangalore, India",
    },
  ];

  return (
    <div className="flex justify-center min-h-screen gap-8 p-8 flex-wrap bg-blue-50">
      {Card_Data.map((data) => (
        <Card data={data} />
      ))}
      {/* <Card data={Card_Data} /> */}
    </div>
  );
}
