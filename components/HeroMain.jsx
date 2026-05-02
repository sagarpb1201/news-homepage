import Image from "next/image";

export default function () {
  return (
    <div className="lg:col-span-2">
      <Image
        src="/images/image-web-3-desktop.jpg"
        alt="web3"
        width={1460}
        height={600}
        className="hidden md:block w-full h-auto"
        priority
      />
      <Image
        src="/images/image-web-3-mobile.jpg"
        alt="web3"
        width={1460}
        height={600}
        className="block md:hidden w-full h-auto"
        priority
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <h1 className="font-extrabold text-3xl md:text-5xl lg:text-6xl">
          The Bright Future of Web 3.0?
        </h1>
        <div className="flex flex-col items-start justify-between">
          <p className="text-dark-grayish-blue leading-relaxed">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="bg-soft-red font-bold px-4 py-2 hover:bg-very-dark-blue hover:text-off-white cursor-pointer transition-all duration-150 tracking[0.3em]">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
}
