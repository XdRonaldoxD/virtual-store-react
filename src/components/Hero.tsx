export default function Hero({first,second}) {
    return (
            <section className="h-[200px] bg-[url('/hero_bg.png')] bg-cover flex justify-center bg-top ">
                <article className=" w-[1080px] flex items-center justify-center px-5">
                    <span className="text-white font-bold text-[20px]">{first}</span>
                    <span className="text-white font-bold text-[50px]">{second}</span>
                </article>
            </section>
    )
}