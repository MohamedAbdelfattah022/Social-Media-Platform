import React from 'react'

const Stories = () => {

    //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "Ahmed",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 2,
      name: "Ahmed",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 3,
      name: "Ahmed",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 4,
      name: "Ahmed",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
  ];

  return (
    <div className='flex gap-[10px] h-[250px] mb-[30px]'>
        
        {stories.map(story=>(
        <div className="flex-[1] rounded-md overflow-hidden relative" key={story.id}>
          <img className='w-[100%] h-[100%] object-cover' src={story.img} alt="" />
          <span className=' absolute bottom-[10px] left-[10px] text-white'>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories