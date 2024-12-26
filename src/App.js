import "./styles/style.css"
// import { FaLongArrowAltRight } from "react-icons/fa";

function App() {
  return (
    <div class="h-[768px] w-[1440px] flex flex-col items-center bg-gradient-to-b from-gray-50 to-[#d2d6db] py-[120px]">
      <div class="w-[340px] flex flex-col bg-white rounded-lg">
        <img class="self-stretch h-72 object-cover" src={require("./images/living-room.jpg")} alt="living-room"></img>
          <div class="flex flex-col gap-3 self-stretch px-4 py-6">
            <span class="font-normal px-2 text-sm text-center bg-green-50 text-green-800 rounded-full w-16 hover:rotate-360 transition-transform duration-500 ease-in-out">Interior</span>
            <span class="font-semibold text-lg text-neutral-900 bg-white border-none text-left">Top 5 Living Room Inspirations</span>
            <div class="flex flex-col gap-6 self-stretch items-start">
              <span class="font-medium text-base text-neutral-600 bg-white border-none text-left">Curated vibrants colors for your living, make it pop & calm in the same time.</span>
            <div class="flex justify-center place-items-center gap-1.5 rounded">
              <div class="flex justify-center items-center px-0.5">
                <span class="font-medium text-base text-indigo-700  bg-white border-none text-left">Read more</span>
              </div>
              <div class="flex items-center">
                <div>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.4763 6.16658L6.00633 1.69657L7.18483 0.518066L13.6667 6.99992L7.18483 13.4817L6.00633 12.3032L10.4763 7.83325H0.333328V6.16658H10.4763Z" fill="#4338CA"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
