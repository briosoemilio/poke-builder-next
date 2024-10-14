import React, { useEffect, useRef } from 'react'
import Lottie from "lottie-react";
import PokeballBounce from "../../../public/lottie/pokeball_bounce.json";
import Pikachu_1 from '../../../public/pikachu_1.gif'
import Pikachu_2 from '../../../public/pikachu_2.gif'
import Pikachu_3 from '../../../public/pikachu_3.gif'
import Image from 'next/image';
import { Button } from '../../_components';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const HomePageCard = ({ post, index }) => {
  const router = useRouter()
  const cardRef = useRef(null);

  useEffect(() => {
    const element = cardRef.current;
    gsap.fromTo(
      element,
      { autoAlpha: 0, y: 100 }, // Start hidden and below view
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%', 
          end: 'top 30%',
          toggleActions: 'play none none reverse', 
        },
      }
    );
  }, []);

  return (
    <div
      key={post.id}
      ref={cardRef}
      className="mb-4 p-4 h-[80vh] flex flex-col lg:flex-row justify-center items-center">
      <div className='lg:w-[45vw]'>
        <h2 className="text-3xl lg:text-6xl font-semibold">{post.title.rendered.slice(4)}</h2>
        <div
          className="mt-2"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
        {index === 3 && <Button name={"TRY NOW"} onClick={() => router.push('pokemon')} className={'mt-5'} />}
      </div>
      {index === 0 && <Lottie animationData={PokeballBounce} style={{ height: 180 }} />}
      {index === 1 && <Image src={Pikachu_1} height={250} width={250} />}
      {index === 2 && <Image src={Pikachu_2} height={300} width={300} />}
      {index === 3 && <Image src={Pikachu_3} height={300} width={300} />}
    </div>
  )
}

export default HomePageCard