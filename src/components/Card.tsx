import React from "react";
import { useNavigate } from "react-router-dom";
import { Submission } from "../types/SubmissionModel";
type Props = {
  item: Submission;
};
const Card = ({ item }: Props) => {
  const navigate = useNavigate();
  const getNumbersOfDays = (date: Date): number => {
    const today = new Date();
    const diff = Math.abs(today.getTime() - date.getTime());
    return Math.ceil(diff / (1000 * 3600 * 24));
  };

  return (
    <div
      className="rounded-xl shadow-xl border-2 border-gray-100 flex-[0_0_25%] mx-4 mb-12 p-5 justify-around cursor-pointer relative"
      onClick={() => {
        navigate(`/submission/${item.id}`);
      }}
    >
      <div className="flex mb-5">
        <img
          src={item.image}
          alt="image"
          className="w-24 h-24 rounded-lg object-cover"
        />
        <span className="relative top-9 left-5 text-lg font-semibold">
          {item.title}
        </span>
      </div>
      <p className="text-gray-600 mb-8">{item.shrinkedDesc}</p>
      <p className="absolute bottom-3 right-4 italic text-gray-400 text-sm">
        uploaded {getNumbersOfDays(item.submittedDate)} days ago
      </p>
    </div>
  );
};

export default Card;
