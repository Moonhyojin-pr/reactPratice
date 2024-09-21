import React, {useState, useEffect} from "react"

const Home = () => {
  const images =[
    {img:'./post4.jpg', title:'Image1'},
    {img:'./1.jpg', title:'Image2'},
  ]

  const [page, setPage] =useState(1); //페이지 번호
  const limit = 1; //한번에 하나의 이미지를 보여주기 위한 limit 설정
  //현재 페이지의 이미지들을 자르기
  const startIndex=(page - 1) * limit;
  const selectedImages =images.slice(startIndex, startIndex + limit);
//페이지 변경 핸들러
  const handleNext =()=> {
    setPage(prevPage => (prevPage < Math.ceil(images.length / limit) ? prevPage + 1:1));
  };

  const handlePrevious =()=>{
    setPage(prevPage => (prevPage > 1 ? prevPage -1 : Math.ceil(images.length / limit)));
  };
  //5초마다 페이지 자동변경
  useEffect(() => {
    const interval =setInterval(() => {
      handleNext();
    }, 5000);//5초

    //클린업 함수
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <main className="py-10">
        <div className="px-4 sm:px-6 lg:px-8">
          {/* <div>This is home.</div> */}
          {/* <img src='./1.jpg' alt="Awards" />  */}
          {selectedImages.map ((image, index) => (
            <div key={index} className='image-item'> 
              <img src={image.url} alt={image.title} /> 
              <p>{image.title}</p>
            </div>            
          ))}
          <button onClick={handlePrevious} disabled={page ===1} >previous</button>
          <button onClick={handleNext} disabled={page === Math.ceil(images.length / limit)}>next</button>
        </div>
      </main>
    </>
  )
}

export default Home
