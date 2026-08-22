export default function Card2() {
  return (
    <div className="w-75 h-100 bg-white shadow-sm p-6 flex flex-col items-center gap-4">
      {/* Upper */}
      <div className="w-full flex flex-col items-center">
        <div className="w-full flex justify-between">
          <span className="rounded-full bg-emerald-500 text-white font-semibold text-xs px-2 py-1">
            Available
          </span>
          <span className="font-semibold text-gray-500">$55/hr</span>
        </div>
        <img
          className="rounded-full h-25 w-25 object-cover"
          src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>

      {/* Middle */}
      <div className="flex flex-col items-center gap-2">
        <div className="space-y-0.5 text-center">
          <p className="font-bold text-gray-700 text-lg">Wade Wilson</p>
          <p className="text-xs font-semibold text-gray-500">UI/UX Designer</p>
          <p className="text-blue-500 text-xs font-semibold">Epic Coders</p>
        </div>
        <div className="flex gap-1 flex-wrap">
          <span className="border border-gray-400 rounded-full px-3 py-1 text-gray-600 text-xs">
            UI
          </span>
          <span className="border border-gray-400 rounded-full px-3 py-1 text-gray-600 text-xs">
            UX
          </span>
          <span className="border border-gray-400 rounded-full px-3 py-1 text-gray-600 text-xs">
            Photoshop
          </span>
          <span className="border border-gray-400 rounded-full px-3 py-1 text-white text-xs bg-blue-400">
            +4
          </span>
        </div>
      </div>

      {/* Lower */}
      <p className="text-justify text-gray-500 text-sm font-medium">
        Wade is a 32 years old UI/UX designer, with an impressive portfolio behind him.
      </p>

      {/* Footer */}
      <div className="w-full flex justify-center group hover:bg-blue-500">
        <button className="py-3 border-t-2 border-gray-400 mx-auto group-hover:text-white">
          View Profile
        </button>
      </div>
    </div>
  );
}
