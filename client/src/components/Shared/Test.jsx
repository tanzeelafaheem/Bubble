import React from "react";

const BubbleChatApp = () => {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-gray-50 group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Spline Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#eaedf1] px-10 py-3">
          <div className="flex items-center gap-4 text-[#101518]">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M39.475 21.6262C40.358 21.4363..."
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2 className="text-[#101518] text-lg font-bold leading-tight tracking-[-0.015em]">
              ChatApp
            </h2>
          </div>

          {/* Search & Settings */}
          <div className="flex flex-1 justify-end gap-8">
            {/* Search Input */}
            <label className="flex flex-col min-w-40 h-10 max-w-64">
              <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                <div className="text-[#5c748a] flex border-none bg-[#eaedf1] items-center justify-center pl-4 rounded-l-xl border-r-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M229.66,218.34l-50.07-50.06..." />
                  </svg>
                </div>
                <input
                  placeholder="Search"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#101518] focus:outline-0 focus:ring-0 border-none bg-[#eaedf1] focus:border-none h-full placeholder:text-[#5c748a] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                />
              </div>
            </label>

            {/* Settings Button */}
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#eaedf1] text-[#101518] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                <path d="M128,80a48,48,0..." />
              </svg>
            </button>

            {/* Profile Image */}
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCpSdL4FPzHVsgtrhZg3SIuPHrldfCGMGOTEpGPF50X9FatTcCs9gZN8T5y0XF7NrVakOBVkTDNmcUvihFvvJwlK-VS0e5wFBZ7Z6XqAX6zUc7qvjSfIsbRpi2hIykiRRFhCE7r8qO7TwLQzg5Pw6J_wvMKQuLfHmxWrYxr187MrySJlyLkTH-1l_qjEeI91UwqbU6JaYpQsP9gNcPOCt1Xt_MIzOW9e3qRuAQtD6j5VaoLT_8KuZhqpMns1kUCSPn8Lm8ESxMYFPTf")`
              }}
            />
          </div>
        </header>

        {/* Main Layout */}
        <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          {/* Sidebar (Friends List) */}
          <div className="layout-content-container flex flex-col w-80">
            {/* Tabs */}
            <div className="pb-3">
              <div className="flex border-b border-[#d4dce2] px-4 gap-8">
                <a className="flex flex-col items-center justify-center border-b-[3px] border-b-[#dce8f3] text-[#101518] pb-[13px] pt-4" href="#">
                  <p className="text-[#101518] text-sm font-bold leading-normal tracking-[0.015em]">Friends</p>
                </a>
                <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#5c748a] pb-[13px] pt-4" href="#">
                  <p className="text-[#5c748a] text-sm font-bold leading-normal tracking-[0.015em]">Notifications</p>
                </a>
              </div>
            </div>

            {/* Friends List */}
            <h2 className="text-[#101518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Friends</h2>

            {[
              { name: "Chloe", status: "Online", url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAja..." },
              { name: "Noah", status: "Offline", url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnU..." },
              { name: "Ava", status: "Online", url: "https://lh3.googleusercontent.com/aida-public/AB6AXuA731..." },
              { name: "Ethan", status: "Offline", url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDloj..." },
            ].map((friend, i) => (
              <div key={i} className="flex items-center gap-4 bg-gray-50 px-4 min-h-[72px] py-2">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-fit"
                  style={{ backgroundImage: `url("${friend.url}")` }}
                />
                <div className="flex flex-col justify-center">
                  <p className="text-[#101518] text-base font-medium leading-normal line-clamp-1">{friend.name}</p>
                  <p className="text-[#5c748a] text-sm font-normal leading-normal line-clamp-2">{friend.status}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Chat Window */}
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#101518] tracking-light text-[32px] font-bold leading-tight min-w-72">Chat with Chloe</p>
            </div>

            {/* Chat Messages */}
            {/* You can extract this into its own component if needed */}
            {/* Use map() for dynamic messages if integrating */}
            {/* Same pattern as above */}
            {/* ... */}

            {/* Message Input */}
            <div className="flex items-center px-4 py-3 gap-3 @container">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 shrink-0"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDNbf9hn8giZ32mek52N6r05dqfWJzEtTSWvsHaapSBNixvgiTPZXrZ1hLnV8XfMs1PtKQShEc9Ryowf4fKJKyGYqPqlpnbJI0_-7btkg5tKcXKgjAn0oHeoIzhgkArRJ8t4VhlVcdfqSy2ubsoppncuENPNBvHWqN6QNf0pmenYg6fE_VKtlfoAaVOZgnlPXiBX_VQegjjQ9bM5BMI-13cCdLN02A5h_U9d_ZD2knWEnSatNziFj3CLPl--JsZdbtjomfKbuPB2Dlw")`
                }}
              />
              <label className="flex flex-col min-w-40 h-12 flex-1">
                <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                  <input
                    placeholder="Type a message..."
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#101518] focus:outline-0 focus:ring-0 border-none bg-[#eaedf1] focus:border-none h-full placeholder:text-[#5c748a] px-4 rounded-r-none border-r-0 pr-2 text-base font-normal leading-normal"
                  />
                  <div className="flex border-none bg-[#eaedf1] items-center justify-center pr-4 rounded-r-xl border-l-0 pr-2">
                    <div className="flex items-center gap-4 justify-end">
                      <button className="flex items-center justify-center p-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M216,40H40A16,16,0..." />
                        </svg>
                      </button>
                      <button className="min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#dce8f3] text-[#101518] text-sm font-medium leading-normal hidden @[480px]:block">
                        <span className="truncate">Send</span>
                      </button>
                    </div>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BubbleChatApp;
