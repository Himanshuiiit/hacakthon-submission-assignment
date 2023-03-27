import React, { useState, Fragment } from "react";
import data from "../data/data";
import {
  AiOutlineStar,
  AiFillStar,
  AiTwotoneCalendar,
  AiOutlineGithub,
} from "react-icons/ai";
import { MdEdit, MdDelete } from "react-icons/md";
import { RxExternalLink } from "react-icons/rx";
import { createSearchParams, useNavigate } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";

const SubmissionPage = () => {
  let [isOpen, setIsOpen] = useState<boolean>(false);

  const navigate = useNavigate();
  const submission = data.find(
    (item) => item.id === window.location.pathname.split("/")[2]
  );

  const [isFav, setisFav] = useState<boolean | undefined>(submission?.isFav);

  function closeModal() {
    setIsOpen(false);
  }

  const changeIsFavorite = () => {
    setisFav(!isFav);
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === submission?.id) {
        data[i].isFav = !isFav;
      }
    }
  };

  const deleteSubmission = () => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === submission?.id) {
        data.splice(i, 1);
      }
    }
    navigate("/");
  };

  return (
    <div>
      <div className="w-full h-[500px] bg-[#003145] text-white px-28 py-28 flex justify-between">
        <div>
          <div className="flex mb-6">
            <img
              src={submission?.image}
              alt="image"
              className="w-48 h-48 rounded-lg object-cover"
            />
            <div className="relative top-16 left-16 text-5xl font-semibold">
              {submission?.title}
            </div>
          </div>
          <div className="mb-4">{submission?.shrinkedDesc}</div>
          <div className="flex">
            <span className="text-lg relative top-1">
              {isFav ? (
                <AiFillStar
                  onClick={changeIsFavorite}
                  className="cursor-pointer"
                />
              ) : (
                <AiOutlineStar
                  onClick={changeIsFavorite}
                  className="cursor-pointer"
                />
              )}
            </span>
            <span className="w-[1px] h-6 bg-gray-400 mx-8">{""}</span>
            <span className="text-sm bg-[#255973]  rounded-full px-3 py-[4px] flex">
              <AiTwotoneCalendar className="relative mr-2  text-lg" />
              <span>
                {submission?.submittedDate.getDate() +
                  " " +
                  submission?.submittedDate.toLocaleString("default", {
                    month: "long",
                  })}
              </span>
            </span>
          </div>
        </div>
        <div className="mt-16">
          <div
            className="border-2 rounded-lg px-8 py-2 flex mb-4 cursor-pointer justify-center"
            onClick={() => {
              navigate({
                pathname: `/submission/edit`,
                search: createSearchParams({
                  id: submission ? submission?.id : "error",
                }).toString(),
              });
            }}
          >
            <MdEdit size={18} className="relative top-1 right-2" />
            Edit
          </div>
          <div
            className="border-2 rounded-lg px-8 py-2 flex mb-4 cursor-pointer justify-center"
            onClick={() => setIsOpen(true)}
          >
            <MdDelete size={18} className="relative top-1 right-2" />
            Delete
          </div>
        </div>
      </div>
      <div className="px-28 py-20 flex gap-44 w-full justify-between">
        <div>
          <div className="text-2xl font-semibold mb-5">Description</div>
          <div className="text-gray-600">{submission?.desc}</div>
        </div>
        <div className="mr-5">
          <div className="mb-6">Hackathon</div>
          <div className="text-lg font-semibold mb-5">
            {submission?.hackathonName}
          </div>
          <div className="mb-10 flex text-gray-500">
            <AiTwotoneCalendar className="text-lg relative top-[1px] right-2" />{" "}
            <span className="text-sm ">
              {submission?.startDate.toLocaleString("default", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
              {" - "}
              {submission?.endDate.toLocaleString("default", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>
          <div className="text-gray-600">
            <div
              className="border-2 rounded-lg w-72 px-8 py-2 flex mb-4 cursor-pointer justify-center"
              onClick={() => {
                window.open(submission?.githubLink, "_blank");
              }}
            >
              <AiOutlineGithub size={18} className="relative top-1 right-2" />
              Github Repository
            </div>
            <div
              className="border-2 rounded-lg w-72 px-8 py-2 flex mb-4 cursor-pointer justify-center"
              onClick={() => {
                window.open(submission?.otherLink, "_blank");
              }}
            >
              <RxExternalLink size={18} className="relative top-1 right-2" />
              Other Link
            </div>
          </div>
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Delete model
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      This action is irreversible. Are you sure you want to
                      delete this model?
                    </p>
                  </div>

                  <div className="mt-4 flex justify-end">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border-2 border-black bg-white px-4 py-2 text-sm font-medium mx-2"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white mx-2"
                      onClick={() => {
                        closeModal();
                        deleteSubmission();
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default SubmissionPage;
