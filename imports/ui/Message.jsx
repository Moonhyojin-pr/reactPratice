import React, { useState } from 'react';
import {useTracker} from "meteor/react-meteor-data";
import {CollectionPosts} from "/imports/api/collections.js";
import MessageInput from "./MeesageInput.jsx"
import Prev from "./Prev.jsx"

  export default function Message() {
   
    //previous 기능
    const [currentPage, setCurrentPage] = useState(1);//현재 페이지상태
    const itemsPerPage = 6; //페이지당 표시할 메세지 수

    //총 메세지 수 가져오기
    const totalMessages =useTracker(() => {
      return CollectionPosts.find().count();
    }, []);

    //페이지에 따라 메세지 가져오기 (skip과 limit 적용)
    const messages = useTracker(() => {
      
      return CollectionPosts.find({}, {
        sort: {createdAt:- 1}, //오름차순
        skip:(currentPage - 1) * itemsPerPage, //페이지에 따른 skip
        limit: itemsPerPage,  //페이지당 아이템 수
      }).fetch();

    }, [currentPage]);

    //페이지 전환 함수
    const handleNext = () => {
      if (currentPage * itemsPerPage < totalMessages) {
        setCurrentPage(currentPage + 1);
      }
    };

    const handlePrevious = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    }

    return (
      <>
      <MessageInput />
      
      <ul role="list" className="divide-y divide-gray-100">
        {messages.map((message) => (
          <li key={message._id} className="flex gap-x-4 py-5">    
        
            <img 
            src={message.image} 
            className="h-12 w-12 flex-none rounded-full bg-gray-50" />
            
            <div className="flex-auto">
              <div className="flex items-baseline justify-between gap-x-4">
                <p className="mt-1 line-clamp-2 text-sm leading-6 text-gray-600">
                {message.message} </p>
                <p className="flex-none text-xs text-gray-600">
                  <time dateTime={message.dateTime}>{message.createdAt.toLocaleString('ko-KR', {
                  year:'numeric',
                  month:'2-digit',
                  day:'2-digit',
                })}</time>
                </p>
              </div>
             
            </div>
          </li>
        ))}
      </ul>
      <Prev 
        currentPage = {currentPage}
        totalMessages = {totalMessages}
        itemsPerPage = {itemsPerPage}
        handleNext = {handleNext}
        handlePrevious = {handlePrevious}
      />
      
      </>
      

      
    )
  }

