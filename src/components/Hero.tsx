const Hero = () => {
  return (
    <section>
      <div className="relative isolate overflow-hidden h-full xl:h-[56rem] 2xl:h-[40rem] min-[1822px]:h-[48rem] min-[2048px]:h-[56rem] min-[2248px]:h-[64rem] min-[2448px]:h-full">
        <img
          src="/images/Hero.jpg"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-top opacity-60 xl:object-contain xl:object-right"
        />
        <img
          src="/images/Hero2.jpg"
          alt=""
          className="invisible absolute inset-0 -z-10 h-full w-full object-cover opacity-60 transform-gpu -scale-x-100 xl:invisible 2xl:object-contain 2xl:visible 2xl:h-full 2xl:w-full 2xl:object-right"
        />
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl z-0 py-60 md:py-[444px] xl:py-60 min-h-screen xl:mx-0 2xl:mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              AI for Good
            </h1>
            <p className="mt-6 text-lg leading-8">
              Highlighting the importance of mental health and compassion
              through AI generated illustrations. Building solutions to build a
              better world. Leading transformation programs with empathy.
            </p>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
