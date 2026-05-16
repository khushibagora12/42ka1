export default function Features() {
    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <div>
                    <div className="text-3xl font-bold m-4 text-center text-[#fd105e]">Features</div>
                    <div class="feature-cards">
                        <div class="feature-card red">
                            <p class="second-text text-lg font-medium">Shorten long URLs into compact and shareable links</p>
                        </div>
                        <div class="feature-card red">
                            <p class="second-text" text-lg font-medium>Rate limiting for secure and controlled usage</p>
                        </div>
                        <div class="feature-card red">
                            <p class="second-text" text-lg font-medium>Fast cached results for quicker redirection</p>
                        </div>
                        <div class="feature-card red">
                            <p class="second-text" text-lg font-medium>Database indexing for efficient and rapid URL retrieval</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}