import React, {useState, useEffect} from "react"

const Home = () => {
  const images =[
    {img:'./1.jpg', title:'Image 1'},
    {img:'./3.jpg', title:'Image 2'},
    {img:'./4.jpg', title:'Image 3'},
    {img:'./5.jpg', title:'Image 4'},
    {img:'./6.jpg', title:'Image 5'},
  ]

  const [page, setPage] =useState(0); //페이지 번호
  const limit = 1; //한번에 하나의 이미지를 보여주기 위한 limit 설정
  //현재 페이지의 이미지들을 자르기
  const startIndex= page * limit;
  const selectedImages =images.slice(startIndex, startIndex + limit);

  //5초마다 페이지 자동변경
  useEffect(() => {
    const interval =setInterval(() => {
      setPage((prevPage) => (prevPage +1) % images.length);
    }, 5000);//5초

    //클린업 함수
    return () => clearInterval(interval);
  }, [images.length]);

    //도트
    const goToPage = (index) => {
      setPage(index);
    };

  return (
    <>
      <main className="py-10">
        <div className="px-4 sm:px-6 lg:px-8">
          {/* <div>This is home.</div> */}
          {/* <img src='./1.jpg' alt="Awards" />  */}
          {/* style={{
            transform: `translateY(${-page * 100}%)`, // 현재 페이지에 따라 Y 축 이동
            transition: 'transform 0.5s ease-in-out' // 부드러운 애니메이션
          }} */}
          
          {selectedImages.map ((image, index) => (
            <div key={index} className='image-item'> 
              <img src={image.img} alt={image.title} /> 
              <p>{image.title}</p>
            </div>            
          ))}
          
          <div className="dots" >
            {images.map((_, index) => (
              <span 
              key={index}
              className={`dot ${index === page ? 'active' : ''}`}
              onClick={() => goToPage(index)}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
