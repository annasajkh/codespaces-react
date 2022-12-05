export default function Hug() {
    return (
        <section id="hug">
            <div className="container 
                mx-auto
                min-h-screen
                flex justify-center
                flex-col
                items-center"> 
            <p>awww do you want a hug?</p>
            <p>alright *hug hug hug*</p>
            
            <a href="#home" className="rounded-lg
                                        box-border h-12 w-16 p-3
                                        hover:bg-gray-700
                                        hover:text-sky-300
                                        focus:bg-gray-700
                                        focus:text-sky-300">Home</a>
            </div>
        </section>
    )
}