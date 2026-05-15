export default function Navbar() {
    return (
        <>
            <div className="h-17 w-full flex bg-[#474747] text-white p-3 shadow-2xl absolute">
                <div className="flex w-full mx-5 lg:ml-20">
                    <div className="font-black text-4xl text-[#fd105e]">42ka1</div>
                    <div className="hidden mx-auto md:grid grid-cols-3">
                        <button className="text-lg font-bold nav-button">about</button>
                        <button className="text-lg font-bold nav-button">features</button>
                        <button className="text-lg font-bold nav-button">faq's</button>
                    </div>
                    <div className="flex ml-auto space-x-5">
                        <div className="">
                            <button class="back-button">
                                <svg class="svgIcon" viewBox="0 0 384 512">
                                    <path
                                        d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                                    ></path>
                                </svg>
                            </button>
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
                                                <span>About</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button>
                                                <span>Features</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button>
                                                <span>FAQ's</span>
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