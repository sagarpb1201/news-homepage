export default function () {
  const sidebarData = [
    {
      id: 1,
      title: "Hydrogen VS Electric Cars",
      question: "Will hydrogen-fueled cars ever catch up to EVs?",
    },
    {
      id: 2,
      title: "The Downsides of AI Artistry",
      question: "What are the possible adverse effects of on-demand AI image generation?",
    },
    {
      id: 3,
      title: "Is VC Funding Drying Up?",
      question: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ];
  return (
    <div className="bg-very-dark-blue text-white p-6 flex flex-col">
      <h2 className="font-bold text-soft-orange text-4xl mb-4">
        New
      </h2>
      {
        sidebarData.map((item,index)=>(
          <div key={item.id} className={`flex flex-col py-8 ${index!==sidebarData.length-1? "border-b border-grayish-blue/50" : ""}`}>
          <h3 className="text-xl font-bold hover:text-soft-orange cursor-pointer transition-colors duration-300">{item.title}</h3>
          <p className="text-grayish-blue mt-2 leading-relaxed">{item.question}</p>
          </div>
        ))
      }
    </div>
  );
}
