import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { CollectionPosts } from "/imports/api/collections.js";
import MessageInput from "./MessageInput.jsx";
// message inputbox
// import { useState } from 'react'
// import {
//   FaceFrownIcon,
//   FaceSmileIcon,
//   FireIcon,
//   HandThumbUpIcon,
//   HeartIcon,
//   PaperClipIcon,
//   XMarkIcon,
// } from '@heroicons/react/20/solid'
// import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
// const moods = [{name:'Excited',value:'excited',icon:FireIcon,iconColor:'text-white',bgColor:'bg-red-500'},{name:'Loved',value:'loved',icon:HeartIcon,iconColor:'text-white',bgColor:'bg-pink-400'},{name:'Happy',value:'happy',icon:FaceSmileIcon,iconColor:'text-white',bgColor:'bg-green-400'},{name:'Sad',value:'sad',icon:FaceFrownIcon,iconColor:'text-white',bgColor:'bg-yellow-400'},{name:'Thumbsy',value:'thumbsy',icon:HandThumbUpIcon,iconColor:'text-white',bgColor:'bg-blue-500'},{name:'I feel nothing',value:null,icon:XMarkIcon,iconColor:'text-gray-400',bgColor:'bg-transparent'},]
// function classNames(...classes) {
// return classes.filter(Boolean).join(' ')
// }
// export default function Example() {
// const [selected, setSelected] = useState(moods[5])
// return (
// <div className="flex items-start space-x-4">
// <div className="flex-shrink-0">
// <img
// alt=""
// src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
// className="inline-block h-10 w-10 rounded-full"
// />
// </div>
// <div className="min-w-0 flex-1">
// <form action="#" className="relative">
// <div className="overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
// <label htmlFor="comment" className="sr-only">
// Add your comment
// </label>
// <textarea
// id="comment"
// name="comment"
// rows={3}
// placeholder="Add your comment..."
// className="block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
// defaultValue={''}
// />
// {/* Spacer element to match the height of the toolbar */}
// <div aria-hidden="true" className="py-2">
// {/* Matches height of button in toolbar (1px border + 36px content height) */}
// <div className="py-px">
// <div className="h-9" />
// </div>
// </div>
// </div>
// <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
// <div className="flex items-center space-x-5">
// <div className="flex items-center">
// <button
// type="button"
// className="-m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
// >
// <PaperClipIcon aria-hidden="true" className="h-5 w-5" />
// <span className="sr-only">Attach a file</span>
// </button>
// </div>
// <div className="flex items-center">
// <Listbox value={selected} onChange={setSelected}>
// <Label className="sr-only">Your mood</Label>
// <div className="relative">
// <ListboxButton className="relative -m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500">
// <span className="flex items-center justify-center">
// {selected.value === null ? (
// <span>
// <FaceSmileIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0" />
// <span className="sr-only">Add your mood</span>
// </span>
// ) : (
// <span>
// <span
// className={classNames(
// selected.bgColor,
// 'flex h-8 w-8 items-center justify-center rounded-full',
// )}
// >
// <selected.icon aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-white" />
// </span>
// <span className="sr-only">{selected.name}</span>
// </span>
// )}
// </span>
// </ListboxButton>
// <ListboxOptions
// transition
// className="absolute z-10 -ml-6 mt-1 w-60 rounded-lg bg-white py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:ml-auto sm:w-64 sm:text-sm"
// >
// {moods.map((mood) => (
// <ListboxOption
// key={mood.value}
// value={mood}
// className="relative cursor-default select-none bg-white px-3 py-2 data-[focus]:bg-gray-100"
// >
// <div className="flex items-center">
// <div
// className={classNames(
// mood.bgColor,
// 'flex h-8 w-8 items-center justify-center rounded-full',
// )}
// >
// <mood.icon
// aria-hidden="true"
// className={classNames(mood.iconColor, 'h-5 w-5 flex-shrink-0')}
// />
// </div>
// <span className="ml-3 block truncate font-medium">{mood.name}</span>
// </div>
// </ListboxOption>
// ))}
// </ListboxOptions>
// </div>
// </Listbox>
// </div>
// </div>
// <div className="flex-shrink-0">
// <button
// type="submit"
// className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
// >
// Post
// </button>
// </div>
// </div>
// </form>
// </div>
// </div>
// )
// }

// const comments = [
//     {
//       id: 1,
//       name: 'Leslie Alexander',
//       imageUrl:
//         'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       content:
//         'Explicabo nihil laborum. Saepe facilis consequuntur in eaque. Consequatur perspiciatis quam. Sed est illo quia. Culpa vitae placeat vitae. Repudiandae sunt exercitationem nihil nisi facilis placeat minima eveniet.',
//       date: '1d ago',
//       dateTime: '2023-03-04T15:54Z',
//     },
//     {
//       id: 2,
//       name: 'Michael Foster',
//       imageUrl:
//         'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       content:
//         'Laudantium quidem non et saepe vel sequi accusamus consequatur et. Saepe inventore veniam incidunt cumque et laborum nemo blanditiis rerum. A unde et molestiae autem ad. Architecto dolor ex accusantium maxime cumque laudantium itaque aut perferendis.',
//       date: '2d ago',
//       dateTime: '2023-03-03T14:02Z',
//     },
//     {
//       id: 3,
//       name: 'Dries Vincent',
//       imageUrl:
//         'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       content:
//         'Quia animi harum in quis quidem sint. Ipsum dolorem molestias veritatis quis eveniet commodi assumenda temporibus. Dicta ut modi alias nisi. Veniam quia velit et ut. Id quas ducimus reprehenderit veniam fugit amet fugiat ipsum eius. Voluptas nobis earum in in vel corporis nisi.',
//       date: '2d ago',
//       dateTime: '2023-03-03T13:23Z',
//     },
//     {
//       id: 4,
//       name: 'Lindsay Walton',
//       imageUrl:
//         'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       content:
//         'Unde dolore exercitationem nobis reprehenderit rerum corporis accusamus. Nemo suscipit temporibus quidem dolorum. Nobis optio quae atque blanditiis aspernatur doloribus sit accusamus. Sunt reiciendis ut corrupti ab debitis dolorem dolorem nam sit. Ducimus nisi qui earum aliquam. Est nam doloribus culpa illum.',
//       date: '3d ago',
//       dateTime: '2023-03-02T21:13Z',
//     },
//   ]

export default function Message() {
  // const [messages, setMessages] = useState([])
  // useEffect(() => {
  //   json = fetch(...,)
  //   json....
  //   setMessages(json)
  // }, [])

  const messages = useTracker(() => {
    return CollectionPosts.find({}, { sort: { createdAt: -1 } }).fetch();
  }, []);

  return (
    <>
      <MessageInput />
      <ul role="list" className="divide-y divide-gray-100">
        {messages.map((message) => (
          <li key={message._id} className="flex gap-x-4 py-5">
            {/* <img alt="" src={message.imageUrl} className="h-12 w-12 flex-none rounded-full bg-gray-50" /> */}
            <div className="flex-auto">
              <div className="flex items-baseline justify-between gap-x-4">
                {/* name, date */}
                {/* <p className="text-sm font-semibold leading-6 text-gray-900">{message.name}</p> */}
                {/* <p className="flex-none text-xs text-gray-600">
                  <time dateTime={message.dateTime}>{message.date}</time>
                </p> */}
              </div>
              <p className="mt-1 line-clamp-2 text-sm leading-6 text-gray-600">
                {message.message} / {message.createdAt.toLocaleString()}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
