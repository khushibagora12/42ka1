export default function FAQ() {
    return (
        <>
            <div className="flex justify-center items-center m-5 h-screen ">
                <div className="justify-center">
                    <h1 className="text-[#fd105e] font-bold text-3xl text-center mb-10" >FAQ's</h1>
                    <div className="grid sm:grid-cols-2 text-white gap-x-20 sm:gap-y-20 gap-y-5">
                        <div className="sm:w-[350px]">
                            <div className="flex">
                                <button class="faq-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                        <path
                                            d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
                                        ></path>
                                    </svg>
                                    <span class="tooltip">FAQ</span>
                                </button>
                                <p className="text-lg font-medium">What is 42ka1?</p>
                            </div>
                            <p>
                                42ka1 is a fast and secure URL shortener that converts long links into short, shareable URLs.
                            </p>
                        </div>
                        <div className="sm:w-[350px]">
                            <div className="flex">
                                <button className="faq-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                        <path
                                            d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
                                        ></path>
                                    </svg>
                                    <span className="tooltip">FAQ</span>
                                </button>
                                <p className="text-lg font-medium">Is 42ka1 free to use?</p>
                            </div>
                            <p>
                                Yes, you can shorten and share URLs for free.
                            </p>
                        </div>
                        <div className="sm:w-[350px]">
                            <div className="flex">
                                <button className="faq-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                        <path
                                            d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
                                        ></path>
                                    </svg>
                                    <span className="tooltip">FAQ</span>
                                </button>
                                <p className="text-lg font-medium">How fast are redirects?</p>
                            </div>
                            <p>
                                42ka1 uses caching and optimized database indexing for lightning-fast redirects.
                            </p>
                        </div>
                        <div className="sm:w-[350px]">
                            <div className="flex">
                                <button class="faq-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                        <path
                                            d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
                                        ></path>
                                    </svg>
                                    <span class="tooltip">FAQ</span>
                                </button>
                                <p className="text-lg font-medium">Do shortened links expire?</p>
                            </div>
                            <p>Yes, your shortened links remain active unless deleted or expired manually.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}