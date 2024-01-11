import { useState } from "react";
import SidebarPanelItems from "../../assets/SidebarPanelItems.json";

const Header = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleAsideVisibility = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div>
      {sidebarVisible && (
        <div className="relative transition-transform duration-300 ease-in-out">
          <aside className="fixed left-0 top-0 z-10 h-[100dvh] w-full overflow-hidden opacity-100">
            <div className="absolute inset-0 transition-opacity bg-gray-500 bg-opacity-80">
              <button
                id="closeIcon"
                className="bg-opacity-75 z-20 absolute top-2 right-2 p-2 rounded-full hover:bg-opacity-90 cursor-pointer"
                onClick={toggleAsideVisibility}
              >
                <img
                  src="/images/circle.png"
                  alt="Profile Pic"
                  className="w-6 h-6"
                />
              </button>
            </div>
            <div className="relative mr-auto duration-300 ease-in-out flex flex-col max-w-[224px] px-2 py-4 h-[100dvh] gap-4 bg-[#1E2640] justify-between">
              <div className="w-full flex flex-col gap-6 items-center">
                <div className="flex gap-3 text-[#FFFFFF] items-center w-fit mx-auto">
                  <div className=" bg-white w-[39px] h-[39px] m-[0.5px] rounded-[4px] relative">
                    <img src="/images/profile_pic.png" alt="Profile Pic" />
                  </div>
                  <div className="flex flex-col gap-1 w-[108px]">
                    <h3 className="font-medium text-[15px]">Nishyan</h3>
                    <a
                      className="underline font-sans text-[13px] font-light"
                      href="#"
                    >
                      Visit Store
                    </a>
                  </div>
                  <div className="w-5 h-5">
                    <img
                      src="/images/navbar-bold-chevron-down.png"
                      alt="navbar-bold-chevron-down"
                    />
                  </div>
                </div>
                <div className="w-full flex-col gap-4">
                  {SidebarPanelItems.map((item) => {
                    return (
                      <>
                        <a
                          className=" px-4 py-2 flex gap-3 text-[#D2D4D9] items-center rounded-[4px] hover:bg-[#FFFFFF]/10"
                          href="#"
                        >
                          <div className="relative w-[18px] h-[18px]">
                            <img
                              src={`/images/${item.icon}.png`}
                              alt={item.icon}
                            />
                          </div>
                          <p className="text-[14px] font-medium">
                            {" "}
                            {item.name}
                          </p>
                        </a>
                      </>
                    );
                  })}
                </div>
              </div>
              <div className="py-[6px] px-3 bg-[#353C53] mx-2 rounded-[4px]">
                <div className="flex gap-3 items-center">
                  <div className="w-[36px] h-[36px] bg-[#FFFFFF]/10 rounded-[4px] p-[6px]">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      // stroke-width="0"
                      viewBox="0 0 24 24"
                      className="w-full h-full text-white"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="Wallet">
                        <g>
                          <path d="M19.435,4.065H4.565a2.5,2.5,0,0,0-2.5,2.5v10.87a2.5,2.5,0,0,0,2.5,2.5h14.87a2.5,2.5,0,0,0,2.5-2.5V6.565A2.5,2.5,0,0,0,19.435,4.065Zm1.5,9.93h-6.42a2,2,0,0,1,0-4h6.42Zm-6.42-5a3,3,0,0,0,0,6h6.42v2.44a1.5,1.5,0,0,1-1.5,1.5H4.565a1.5,1.5,0,0,1-1.5-1.5V6.565a1.5,1.5,0,0,1,1.5-1.5h14.87a1.5,1.5,0,0,1,1.5,1.5v2.43Z"></path>
                          <circle cx="14.519" cy="11.996" r="1"></circle>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="flex flex-col text-white gap-[2px]">
                    <h3 className="text-[13px]">Available Credits</h3>
                    <h6 className="text-base font-medium">224.10</h6>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      )}
      <header className=" flex justify-between items-center sm:gap-4  gap-2 sm:px-8 px-4 py-3 border-b border-[#D9D9D9] shadow sticky top-0 bg-[#FFFFFF] ">
        <div className="flex gap-2 sm:gap-4 items-center sm:flex-grow">
          <button className="block lg:hidden" onClick={toggleAsideVisibility}>
            <img
              id="menuIcon"
              src="/images/menu.png"
              alt="dashboard-outlined-help"
              className="h-7 w-7"
            />
          </button>
          <h5 className="text-[#1A181E] font-medium text-xl">Payouts</h5>

          <div className="sm:flex-grow hidden sm:block">
            <div className="flex items-center gap-[6px] text-[#4D4D4D]">
              <img
                src="/images/dashboard-outlined-help.png"
                alt="dashboard-outlined-help"
              />
              <p className="hidden sm:block text-xs">How it works</p>
            </div>
          </div>
        </div>

        <div className="md:flex lg:flex items-center gap-2 px-4 py-1.5 sm:py-[9px] w-[138px] bg-[#F2F2F2] text-[#808080] rounded sm:flex-grow hidden sm:block">
          <div className="w-4 h-4">
            <img
              src="/images/dashboard-icons-search.png"
              alt="dashboard-icons-search"
            />
          </div>
          <input
            type="text"
            placeholder="Search features, tutorials, etc."
            className="bg-transparent outline-none w-full"
          />
        </div>
        <div className="flex gap-2 justify-end sm:flex-grow">
          <button className="text-[#4D4D4D] bg-[#E6E6E6] rounded-full p-2 sm:flex  sm:w-10 sm:h-10 items-center justify-center">
            <img
              src="/images/dashboard-icons-group.png"
              alt="dashboard-icons-group"
            />
          </button>
          <button className="text-[#4D4D4D] bg-[#E6E6E6] rounded-full p-1 sm:w-10 sm:h-10 flex items-center justify-center">
            <img
              src="/images/dashboard-icons-menu.png"
              alt="dashboard-icons-menu"
            />
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
