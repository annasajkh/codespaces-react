
export default function Navbar() {
    return (
        <section id="home">
            <header className="box-content h-16 flex items-center justify-around md:sticky">
                <a href="#home" className="rounded-lg
                                        box-border h-12 w-16 p-3
                                        hover:bg-gray-700
                                        hover:text-sky-300
                                        focus:bg-gray-700
                                        focus:text-sky-300">Home</a>
                <a href="#projects" className="rounded-lg
                                            box-border h-12 w-20 p-3
                                            hover:bg-gray-700
                                            hover:text-sky-300
                                            focus:bg-gray-700
                                            focus:text-sky-300">Projects</a>
                <a href="#hug" className="rounded-lg
                                            box-border h-12 w-14 p-3
                                            hover:bg-gray-700
                                            hover:text-sky-300
                                            focus:bg-gray-700
                                            focus:text-sky-300">Hug</a>
            </header>
        </section>
    )
}