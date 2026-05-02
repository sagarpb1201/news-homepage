import Image from "next/image";
export default function ({ image, number,title, desc }) {
  return (
    <div className="grid grid-cols-3 gap-6">
      <Image
        src={image}
        width={200}
        height={254}
        alt="Retro computer"
        className="col-span-1 w-full h-auto"
      />
      <div className="col-span-2">
        <h4 className="text-4xl font-bold text-soft-red">{number}</h4>
        <h5 className="text-lg font-extrabold text-very-dark-blue hover:text-soft-red transition-colors cursor-pointer mt-3">
          {title}
        </h5>
        <p className="text-dark-grayish-blue text-[15px] mt-2">{desc}</p>
      </div>
    </div>
  );
}
