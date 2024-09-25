import React, { useEffect, useRef } from 'react';

const TimeLine = () => {
  const containersRef = useRef([]); 
  const arr = [
    {
      heading: "Heading 1",
      date: "01/01/2024",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, perspiciatis molestias corrupti asperiores minus aliquam dolorem odit a."
    },
    {
      heading: "Heading 2",
      date: "02/02/2024",
      des: "Another description for this heading, detailing further information."
    },
    {
      heading: "Heading 3",
      date: "03/03/2024",
      des: "Yet another description to elaborate on the content of this timeline event."
    },
    {
      heading: "Heading 4",
      date: "04/04/2024",
      des: "Additional details for the event, providing insight into the information."
    },
    {
      heading: "Heading 5",
      date: "05/05/2024",
      des: "Description to highlight important aspects of the timeline."
    },
    {
      heading: "Heading 6",
      date: "06/06/2024",
      des: "Final description for this timeline, rounding out the event summary."
    },
  ];

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
      {arr.map((item, index) => (
        <div
          ref={(el) => (containersRef.current[index] = el)}
          className={`container ${index % 2 === 0 ? 'left-container' : 'right-container'} relative py-[10px] px-[50px] ${index % 2 === 0 ? 'left-0' : 'left-[50%]'} opacity-0`} // Add initial opacity-0
          style={{ animationDelay: `${index * 2}s` }}
          key={index}
        >
          <img src="hacktoberfestbanner.webp" className={`img ${index % 2 !== 0 ? 'left-[-18px]' : ''}`} alt="banner" />
          <div className="text-box relative w-[33vw] h-[40vh] py-[20px] px-[30px] rounded-lg bg-[#1f3829] text-white">
            <h3 className="font-bold">{item.heading}</h3>
            <small>{item.date}</small>
            <p>{item.des}</p>
            <span className={`${index % 2 === 0 ? 'right-arrow' : 'left-arrow'} absolute top-[28px] ${index % 2 === 0 ? 'right-[-15px] border-l-[15px]' : 'left-[-15px] border-r-[15px]'} z-[1] w-0 h-0 border-t-[15px] border-b-[15px] border-t-transparent border-b-transparent border-l-[#00FF00] border-r-[#00FF00]`}></span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeLine;
