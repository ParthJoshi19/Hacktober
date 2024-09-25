import React, { useEffect, useRef } from 'react';

const TimeLine = () => {
  const containersRef = useRef([]); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
          } else {
            entry.target.classList.remove('appear');
          }
        });
      },
      { threshold: 0.7 }
    );

    containersRef.current.forEach((container) => {
      if (container) observer.observe(container);
    });

    return () => {
      containersRef.current.forEach((container) => {
        if (container) observer.unobserve(container);
      });
    };
  }, []);

  return (
    <div className="timeline max-w-[1200px] my-[100px] mx-auto relative after:content-[''] after:absolute after:w-[6px] after:h-[100%] after:bg-[#00FF00] after:top-0 after:transform after:translate-x-[-50%] after:z-[-1]">
      {Array(6).fill(0).map((_, index) => (
        <div
          ref={(el) => (containersRef.current[index] = el)}
          className={`container ${index % 2 === 0 ? 'left-container' : 'right-container'} relative py-[10px] px-[50px] ${index % 2 === 0 ? 'left-0' : 'left-[50%]'} opacity-0`} // Add initial opacity-0
          style={{ animationDelay: `${index * 2}s` }}
          key={index}
        >
          <img src="hacktoberfestbanner.webp" className={`img ${index % 2 !== 0 ? 'left-[-18px]' : ''}`} alt="banner" />
          <div className="text-box relative w-[33vw] h-[40vh]  py-[20px] px-[30px] rounded-lg bg-[#1f3829] text-white">
            <h3 className="font-bold">Alphabate</h3>
            <small>2023-24</small>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, perspiciatis molestias corrupti asperiores minus aliquam dolorem odit a.</p>
            <span className={`${index % 2 === 0 ? 'right-arrow' : 'left-arrow'} absolute top-[28px] ${index % 2 === 0 ? 'right-[-15px] border-l-[15px]' : 'left-[-15px] border-r-[15px]'} z-[1] w-0 h-0 border-t-[15px] border-b-[15px] border-t-transparent border-b-transparent border-l-[#00FF00] border-r-[#00FF00]`}></span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeLine;
