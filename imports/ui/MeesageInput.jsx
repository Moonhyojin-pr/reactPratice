/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import React, { useState } from 'react'
import {CollectionPosts} from "/imports/api/collections.js";
import {
  FaceFrownIcon,
  FaceSmileIcon,
  FireIcon,
  HandThumbUpIcon,
  HeartIcon,
  PaperClipIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid'
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'

const images =[
  {
    value:'image1',
    name:'testimage',
    src:"./test.png",
  },
  {
    value:'image2',
    name:'testimage2',
    src: "./test1.png"
  },
];

function classNames(...classes) {
return classes.filter(Boolean).join(' ')
}
export default function MessageInput() {
const [selected, setSelected] = useState(images[0])
const [messages, setMessages] = useState([''])
    // useEffect (() => {
    //   json =fetch()
    //   setMessages(json)
    // }, [])

return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">
           {/* 메세지 프로필 사진 */}           
          <Listbox value={selected} onChange={setSelected}>
            <Label className="sr-only">Selet an images</Label>
          <div className="relative">
            <ListboxButton className="relative -m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500">
              <span className="flex items-center justify-center">
              {selected.value === null ? (
              <span>
                <FaceSmileIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0" />
                  <span className="sr-only">Add your mood</span>
                  </span>
                ) : (
                <span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full">
                  <img
                  src={selected.src}
                  alt={selected.name}
                  className="h-8 w-8 rounded-full object-cover"                
                  />
                  </span>
                  <span className="sr-only">{selected.name}</span>
                </span>
                )}
              </span>
            </ListboxButton>

            <ListboxOptions
            transition
            className="absolute z-10 -ml-6 mt-1 w-60 rounded-lg bg-white py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:ml-auto sm:w-64 sm:text-sm"
            >
            {images.map((image) => (
            <ListboxOption
            key={image.value}
            value={image}
            className="relative cursor-default select-none bg-white px-3 py-2 data-[focus]:bg-gray-100"
            >
            <div className="flex items-center">
            <div className='flex h-8 w-8 items-center justify-center rounded-full'>
            <img 
              src={image.src}
              alt={image.name}
              className='h-8 w-8 rounded-full object-cover'
            />
            </div>
            <span className="ml-3 block truncate font-medium">{image.name}</span>
            </div>
            </ListboxOption>
            ))}
            </ListboxOptions>
         </div>
        </Listbox>

      </div>

    <div className="min-w-0 flex-1">
      <form action="#" className="relative">
      <div className="overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
          <label htmlFor="comment" className="sr-only">
          Add your comment
          </label>
          <textarea
          value={messages}
          onChange={(e) => {
            setMessages(e.target.value)
          }}
          id=""
          name=""
          rows={3}
          placeholder="Add your comment..."
          className="block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          // defaultValue={''}
          />
        {/* Spacer element to match the height of the toolbar */}
        <div aria-hidden="true" className="py-2">
        {/* Matches height of button in toolbar (1px border + 36px content height) */}
          <div className="py-px">
          <div className="h-9" />
          </div>
        </div>
      </div>
    <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">    
    <div className="flex-shrink-0">
      <button
      onClick={() =>{
        const handleMessage = "메세지를 입력해 주세요."
        
        if (messages.trim() === '') {
          window.alert(handleMessage);
        } else {
          CollectionPosts.insert({
            image: images,
            createdAt :new Date(),
            message : messages,
        })
            setMessages('')   
        }
             
      }}
      type="submit"
      className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
      Send
      </button>
    </div>
    </div>
    </form>
    </div>
    </div>
  )
}
