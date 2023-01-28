import Image from 'next/image'
import data from '../../data.json'

function LinkCard({href, title, image}: {href:string ; title:string ; image?:string }){
  return(
    <a
      href={href}
      className="flex items-center p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className='flex flex-col'>
        <h2 className='font-bold text-lg'>{title}</h2>
      </div>
    </a>
  )
}

export default function Home() {

  return (
    <div className="flex flex-col items-center mt-12 justify-center">
      <Image 
        className='rounded-full'
        src={data.avatar}
        alt={data.name}
        height={106}
        width={106}
      />
      <h1 className="text-2xl font-bold mt-2">{data.name}</h1>
      {data.links.map(link => (
        <LinkCard key={link.href} {...link} />
      ))}
    </div>
  )
}

