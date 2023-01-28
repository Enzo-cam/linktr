import Image from 'next/image'
import data from '../../data.json'
import {AiFillTwitterSquare, AiOutlineInstagram} from 'react-icons/ai'

function LinkCard({href, title, image}: {href:string ; title:string ; image?:string }){
  return(
    <a
      href={href}
      className="flex items-center p-1 w-full rounded-sm hover:scale-105 transition-all border border-gray-300 mb-2 bg-white max-w-xl"
    >
      <div className='flex text-center w-full'>
        <div className="w-10 h-10">
          {image &&
            <Image 
              className='rounded-sm'
              src={image}
              alt={title}
              height={40}
              width={40}
            />
          }
        </div>
        <h2 className='flex justify-center items-center w-full font-semibold -ml-10'>{title}</h2>
      </div>
    </a>
  )
}

export default function Home() {

  return (
    <div className="flex flex-col items-center mt-12 justify-center px-8">
      <Image 
        className='rounded-full'
        src={data.avatar}
        alt={data.name}
        height={106}
        width={106}
      />
      <h1 className="text-2xl font-semibold my-4 text-white">{data.name}</h1>
      {data.links.map(link => (
        <LinkCard key={link.href} {...link} />
      ))}
      <div className='flex mt-4 gap-3'>
        {data.socials.map((social) => {
          if(social.href.includes('twitter')){
            return(
              <AiFillTwitterSquare 
                key={social.title}
                className='text-4xl text-white'
              />
            )
          }
          if(social.href.includes('instagram')){
            return(
              <AiOutlineInstagram 
                key={social.title}
                className='text-4xl text-white'
              />
            )
          }
        })}
      </div>
    </div>
  )
}

