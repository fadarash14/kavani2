import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import XMark from "@/assets/icons/x-mark.svg?react";
interface IProps {
  title?: string;
  children: React.ReactNode;
  closeModal(): void;
  isShow: boolean;
}
export default function ModalSKeleton({
  title,
  children,
  closeModal,
  isShow,
}: IProps) {
  return (
    <Transition appear show={isShow} as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto ">
          <div className="flex min-h-full items-center justify-center p-4 text-center ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-50"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-100"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-0"
            >
              <Dialog.Panel className="bg-gray-200 dark:bg-gray-900 text-slate-700 dark:text-slate-300 w-full max-w-md transform overflow-hidden rounded-2xl  p-6 text-right align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h6"
                  className="text-lg font-medium leading-6 flex justify-between items-start mb-4 "
                >
                  {title || ""}
                  <XMark
                    className="w-6 h-6 cursor-pointer"
                    onClick={closeModal}
                  />
                </Dialog.Title>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
