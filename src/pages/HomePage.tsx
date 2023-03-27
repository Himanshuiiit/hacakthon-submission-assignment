import { useState } from "react";
import bulbIcon from "../assets/images/Hand_holding_bulb_3D.png";
import waveBg from "../assets/images/waves.png";
import { AiOutlineSearch } from "react-icons/ai";
import SubmissionTable from "../components/SubmissionTable";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const [isFavSubmission, setIsFavSubmission] = useState<boolean>(false);
  const [isAsc, setisAsc] = useState<boolean>(true);
  const [searchText, setSearchText] = useState<string>("")

  return (
    <>
      <div className="h-fit relative text-white bg-[#003145] w-full px-36 py-24 flex">
        <img
          src={waveBg}
          className="absolute z-0 right-0 bottom-0 w-[1900px]"
        />
        <div className="z-10 mr-32">
          <h1 className="font-semibold text-[42px] pb-6">
            Hackathon Submissions
          </h1>
          <p className="font-normal text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            earum in saepe? Odit perferendis iusto labore enim sunt ullam ipsum,
            doloremque incidunt cum molestiae sint explicabo voluptatum est
            animi fugit hic veritatis asperiores obcaecati exercitationem
            dolores rem beatae quo. Dignissimos, facilis asperiores eum
            consequuntur quasi aperiam! Vitae autem recusandae accusamus?
          </p>
          <button
            className="bg-[#44924C] text-white font-semibold text-lg px-8 py-3 rounded-lg mt-8"
            onClick={()=>navigate("/form")}
          >
            Upload Submission
          </button>
        </div>
        <div className="z-10 ml-20">
          <img
            src={bulbIcon}
            alt="hand holding bulb 3d"
            className="w-[700px]"
          />
        </div>
      </div>
      <div className="flex justify-between px-36 py-12">
        <div className="text-gray-500">
          <span
            className={`font-semibold px-3 mr-3 pb-2 cursor-pointer ease-in-out duration-100 ${
              !isFavSubmission ? "border-b-4 border-[#44924C]" : ""
            }`}
            onClick={() => setIsFavSubmission(false)}
          >
            All Submissions
          </span>
          <span
            className={`font-semibold px-3 mr-3 pb-2 cursor-pointer ease-in-out duration-100 ${
              isFavSubmission ? "border-b-4 border-[#44924C]" : ""
            }`}
            onClick={() => setIsFavSubmission(true)}
          >
            Favourite Submissions
          </span>
        </div>
        <div className="flex">
          <div>
            <AiOutlineSearch
              className="absolute translate-y-3 translate-x-9"
              size={20}
              color="rgba(102, 102, 102, 1)"
            />
            <input
              type="text"
              placeholder="Search"
              className="border-2 border-gray-300 rounded-full pl-12 py-2 w-[300px] ml-4"
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          <div>
            <select
              className="border-2 border-gray-300 rounded-full px-4 py-2 ml-4"
              onChange={() => setisAsc(!isAsc)}
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
        </div>
      </div>
      <SubmissionTable isAsc={isAsc} isFavSubmission={isFavSubmission} searchText={searchText}/>
    </>
  );
};

export default HomePage;
