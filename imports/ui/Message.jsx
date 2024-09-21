import React, { useState } from 'react';
import {useTracker} from "meteor/react-meteor-data";
import {CollectionPosts} from "/imports/api/collections.js";
import MessageInput from "./MeesageInput.jsx"

  export default function Message() {
   

    const messages =useTracker(() => {
      return CollectionPosts.find({}, {sort: {createdAt :-1}}).fetch();
    }, [])

    return (
      <>
      <MessageInput />
      <ul role="list" className="divide-y divide-gray-100">
        {messages.map((message) => (
          <li key={message._id} className="flex gap-x-4 py-5">
            <img alt="" src={message.imageUrl} className="h-12 w-12 flex-none rounded-full bg-gray-50" />
            <div className="flex-auto">
              <div className="flex items-baseline justify-between gap-x-4">
                {/* name */}
                {/* <p className="text-sm font-semibold leading-6 text-gray-900">{message.name}</p> */}
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
      </>
      

      
    )
  }

