import ArticleStructure from '../components/ArticleStructure';

export default function(){
    const articlesData=[
        {
            id:1,
            image:'/images/image-retro-pcs.jpg',
            number:"01",
            title:"Reviving Retro PCs",
            desc:"What happens when old PCs are given modern upgrades?"
        },
        {
            id:2,
            image:'/images/image-top-laptops.jpg',
            number:"02",
            title:"Top 10 Laptops of 2022",
            desc:"Our best picks for various needs and budgets."
        },
        {
            id:3,
            image:'/images/image-gaming-growth.jpg',
            number:"03",
            title:"The Growth of Gaming",
            desc:"How the pandemic has sparked fresh opportunities."
        }
    ]
    return(
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-12">
            {articlesData.map((article,index)=>(
                <ArticleStructure
                key={index}
                image={article.image}
                number={article.number}
                title={article.title}
                desc={article.desc}
                />
            ))}
        </div>
    )
}