import {  Fragment, useEffect, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function Model({isOpen,onClose,title,children,closeModal}) {
  

let panelref=useRef(null);

  function onMouseLeave(){
    onClose()
    
  }
 
  
  return (
  
    <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
                afterEnter={()=>panelref.current.addEventListener("mouseleave",onMouseLeave)}
                afterLeave={()=>panelref.current.removeEventListener("mouseleave",onMouseLeave)}
              >
                <Dialog.Panel className=" transform  overflow-hidden w-full max-w-md rounded-2xl bg-dark text-left align-middle shadow-xl transition-all text-white">
                  <div ref={panelref}>
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 "
                  >
                  
                  </Dialog.Title >
                  {children}

                  </div>
                  
                  
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
  )}