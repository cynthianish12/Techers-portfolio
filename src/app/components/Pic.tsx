import React from 'react';
import Image from 'next/image';

const MyComponent: React.FC = () => {
  return (
    <>
    <div className="container rotate-45 relative top-[5rem] left-[15rem] w-500 h-400 bg-transparent">
          <Image
              className="decor absolute left-negative-125 top-125 w-[20rem] z-negative-1 transform rotate-180"
              width="200"
              height="400"
              alt=''
              src="/arror.svg" />

      <Image
                  className="decor2 absolute left-425 bottom-125 w-[20rem] z-negative-1"
                  width="200"
                  height="400"
                  src="/arror.svg" alt={''}      />

    </div>
    </>
  )
};

export default MyComponent;
