import SidebarPanelItems from "../assets/SidebarPanelItems.json";

const Sidebar = () => {
  return (
    <aside className="fixed lg:sticky left-0 top-0 z-10 h-[100dvh] w-full overflow-hidden transition-all duration-300 lg:max-w-[224px] pointer-events-none opacity-0 lg:opacity-100 lg:pointer-events-auto">
      <div className="absolute inset-0 transition-opacity bg-gray-500 bg-opacity-75"></div>
      <button className="hidden top-5 right-4 lg:hidden">
        <svg
          stroke="currentColor"
          fill="currentColor"
          viewBox="0 0 512 512"
          className="text-white text-3xl"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm52.7 283.3L256 278.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3l52.7-52.7-52.7-52.7c-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3 6.2-6.2 16.4-6.2 22.6 0l52.7 52.7 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0 6.2 6.2 6.2 16.4 0 22.6L278.6 256l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0z"></path>
        </svg>
      </button>
      <div className="relative mr-auto transition-transform duration-300 ease-in-out flex flex-col max-w-[224px] px-2 py-4 h-[100dvh] gap-4 bg-[#1E2640] justify-between -translate-x-full lg:translate-x-0">
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
                      <img src={`/images/${item.icon}.png`} alt={item.icon} />
                    </div>
                    <p className="text-[14px] font-medium"> {item.name}</p>
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
  );
};

export default Sidebar;
