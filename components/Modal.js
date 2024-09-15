"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

// A simple modal component which can be shown/hidden with a boolean and a function
// Because of the setIsModalOpen function, you can't use it in a server component.
const Modal = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <Transition appear show={isModalOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={() => setIsModalOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-neutral-focus bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full overflow-hidden items-start md:items-center justify-center p-2">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-3xl h-full overflow-visible transform text-left align-middle shadow-xl transition-all rounded-xl bg-base-100 p-6 md:p-8">
                <div className="flex justify-between items-center mb-4">
                  <Dialog.Title as="h2" className="font-semibold text-2xl">
                    Add Your Endpoint.
                  </Dialog.Title>
                  <button
                    className="btn btn-square btn-ghost btn-sm"
                    onClick={() => setIsModalOpen(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>
                  </button>
                </div>

                <section className="space-y-4">
                    <p className="py-4 text-gray-700">
                      To increase visibility and attract more users, add your RPC endpoint to RPCNodeList.com. <br /><br />
                      After completing payment, simply email us your RPC details, and we’ll list it within 24 hours, making it easier for developers to find and use your service.
                    </p>
                  <div>
                    <h3 className="font-semibold">Add Single RPC</h3>
                    <p className="text-gray-700 my-1">
                      Price: <strong>$29/year</strong>
                    </p>
                    <a 
                      href="https://buy.stripe.com/6oEfZF47u8ggaPu144" 
                      className="btn btn-sm btn-primary my-1"
                    >
                      List your RPC
                    </a>
                  </div>
                  <div>
                    <h3 className="font-semibold">Add Unlimited RPCs</h3>
                    <p className="text-gray-700 my-1">
                      Price: <strong>$199/year</strong>
                    </p>
                    <a 
                      href="https://buy.stripe.com/5kA28PfQc7ccaPu9AB" 
                      className="btn btn-sm btn-primary my-1"
                    >
                      List your RPCs
                    </a>
                  </div>
                </section>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
