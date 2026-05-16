export default function Navbar() {
    return (
        <>
            <div className="h-17 w-full flex bg-[#474747] text-white p-3 shadow-2xl fixed z-10">
                <div className="flex w-full md:mx-5 lg:ml-20">
                    <div className="font-black text-3xl sm:text-4xl text-[#fd105e]">
                        <div>42ka1</div>
                    </div>
                    <div className="hidden mx-auto md:grid grid-cols-3">
                        <button className="text-lg font-bold nav-button"><a href="#about">about</a></button>
                        <button className="text-lg font-bold nav-button"><a href="#features">features</a></button>
                        <button className="text-lg font-bold nav-button"><a href="#faq">faq's</a></button>
                    </div>
                    <div className="flex ml-auto space-x-5">
                        <div className="">
                            <a href="#home">
                            <button class="back-button">
                               
                                <svg class="svgIcon" viewBox="0 0 384 512">
                                    <path
                                        d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                                    ></path>
                                </svg>
                            </button>
                            </a>
                        </div>
                        <div className="md:hidden">
                            <label className="popup">
                                <input type="checkbox" />
                                <div className="burger" tabindex="0">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <nav className="popup-window ">
                                    <ul>
                                        <li>
                                            <button>
                                                <span><a href="#about">About</a></span>
                                            </button>
                                        </li>
                                        <li>
                                            <button>
                                                <span><a href="#features">Features</a></span>
                                            </button>
                                        </li>
                                        <li>
                                            <button>
                                                <span><a href="#faq">FAQ's </a></span>
                                            </button>
                                        </li>
                                    </ul>
                                </nav>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}