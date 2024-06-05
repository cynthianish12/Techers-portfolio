// components/Hero.tsx
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative h-screen bg-cover bg-center flex items-center justify-center text-white text-center bg-[rgba(0,0,102,0.7)] bg-blend-multiply" style={{ backgroundImage: "url('/hero.jpeg')" }}>
      <div className="max-w-xl p-5">
        <h1 className="text-6xl font-bold mb-4">About us</h1>
        <p className="text-lg">We are a group of young generations who do programming in many different sectors here to serve and solve chnallenges that our sommunity faces in it's daily life, we aim to enhnace technology based solutions. </p>
      </div>
    </div>
  );
}

export default Hero;
