export default function HeroSection() {
  return (
    <div className="relative flex flex-col-reverse lg:block bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <section className="mt-10 mx-auto max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="text-center lg:text-left block xl:inline">
                  Cool Cat
                </span>{" "}
                <span className="text-center lg:text-left block text-bluishCyan xl:inline">
                  NFT
                </span>
              </h1>
              <p className="mt-3 p-4 sm:p-0 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Land which gives birth of baby cats and grow them step by step
                to world of investment with cats fun games on the way in
                metaverse!
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start p-8 sm:p-0">
                <div className="rounded-3xl ">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-3xl text-white  bg-gradient-to-r from-bluishCyan to-greenishCyan hover:from-cyan-600 transition-all hover:to-blue-700 md:py-4 md:text-lg md:px-10"
                  >
                    Join our discord
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#mint"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-3xl text-bluishCyan bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Mint now!
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="/images/cat.png"
          alt=""
        />
      </div>
    </div>
  );
}
