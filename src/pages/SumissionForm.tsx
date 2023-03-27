import React, { useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import data from "../data/data";
import addImgIcon from "../assets/icons/add_img_icon.svg";
import { MdCloudUpload } from "react-icons/md";

const SumissionForm = () => {
  const navigate = useNavigate();
  const [searchPatams] = useSearchParams();
  const id = searchPatams.get("id");

  const updateSubmission = () => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        data[i].title = title ? title : data[i].title;
        data[i].shrinkedDesc = shrinkedDesc
          ? shrinkedDesc
          : data[i].shrinkedDesc;
        data[i].desc = desc ? desc : data[i].desc;
        data[i].image = image ? image : data[i].image;
        data[i].hackathonName = hackathon ? hackathon : data[i].hackathonName;
        data[i].startDate = startDate ? startDate : data[i].startDate;
        data[i].endDate = endDate ? endDate : data[i].endDate;
        data[i].githubLink = githubLink ? githubLink : data[i].githubLink;
        data[i].otherLink = otherlink ? otherlink : data[i].otherLink;
        navigate("/submission/" + id);
      } else {
        return;
      }
    }
  };

  const addSubmission = () => {
    if (
      title &&
      shrinkedDesc &&
      desc &&
      image &&
      hackathon &&
      startDate &&
      endDate &&
      githubLink &&
      otherlink
    ) {
      data.push({
        id: "id" + (data.length + 1),
        title: title,
        shrinkedDesc: shrinkedDesc,
        desc: desc,
        image: image,
        hackathonName: hackathon,
        startDate: startDate,
        endDate: endDate,
        githubLink: githubLink,
        otherLink: otherlink,
        submittedDate: new Date(),
        isFav: false,
      });
      navigate("/");
    } else {
      alert("Please fill all the fields while uploading");
      return;
    }
  };

  const handleSubmit = () => {
    if (id) {
      updateSubmission();
    } else {
      addSubmission();
    }
  };
  const submission = data.find((item) => item.id === id);
  const inputRef = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState<string | undefined>(submission?.title);
  const [shrinkedDesc, setShrinkedDesc] = useState<string | undefined>(
    submission?.shrinkedDesc
  );
  const [desc, setDesc] = useState<string | undefined>(submission?.desc);
  const [image, setImage] = useState<string | undefined>(submission?.image);
  const [imageName, setImageName] = useState<string | undefined>(
    submission?.image.split("/")[submission?.image.split("/").length - 1]
  );
  const [hackathon, setHackathon] = useState<string | undefined>(
    submission?.hackathonName
  );
  const [startDate, setStartDate] = useState<Date | undefined>(
    submission?.startDate
  );
  const [endDate, setEndDate] = useState<Date | undefined>(submission?.endDate);
  const [githubLink, setGithubLink] = useState<string | undefined>(
    submission?.githubLink
  );
  const [otherlink, setOtherLink] = useState<string | undefined>(
    submission?.otherLink
  );
  const [numberOfChars, setNumberOfChars] = useState<number>(0);

  return (
    <div className="bg-[#f5f5f5] p-10">
      <div className="bg-white shadow-lg border-gray-100 border-2 rounded w-[1200px] ml-24 p-10">
        <div className="text-2xl font-bold pb-10">New Hackathon Submission</div>
        <div className="mb-8">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className="appearance-none border rounded-lg w-[1000px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Title of your submission"
            defaultValue={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="mb-8">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="summary"
          >
            Summary
          </label>
          <input
            className="appearance-none border rounded-lg w-[1000px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="summary"
            type="text"
            placeholder="A short summary of your submission (this will be visible with your submission)"
            defaultValue={shrinkedDesc}
            onChange={(e) => {
              setShrinkedDesc(e.target.value);
            }}
          />
        </div>
        <div className="mb-8">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="appearance-none border rounded-lg w-[1000px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
            id="description"
            placeholder="Write a long description of your project. You can describe your idea and approach here."
            rows={10}
            onChange={(e) => {
              setNumberOfChars(e.target.value.length);
              setDesc(e.target.value);
            }}
            maxLength={3000}
            defaultValue={desc}
          />
          <div className="flex justify-end mr-28 text-gray-600">
            {" "}
            {numberOfChars}/3,000 characters
          </div>
        </div>
        <div className="mb-8">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image"
          >
            Cover Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            hidden
            ref={inputRef}
            onChange={(e) => {
              if (e.target.files) {
                const file = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                  if (typeof reader.result === "string") {
                    setImage(reader.result);
                    setImageName(file.name);
                  }
                };
              }
            }}
          />
          <div
            className={`w-[1000px] h-[100px] bg-gray-200 rounded-xl mr-4 border-4 border-gray-400 border-dashed flex ${
              image ? "" : "justify-center align-middle"
            }`}
          >
            {image ? (
              <div className="mx-4 flex justify-between w-full items-center">
                <div className="flex items-center">
                  <img
                    src={image}
                    alt="cover"
                    className="w-16 h-16 object-cover rounded-xl"
                  />
                  <span className="ml-6">{imageName}</span>
                </div>
                <div
                  className="flex mr-4 font-medium text-gray-600 cursor-pointer"
                  onClick={() => inputRef.current?.click()}
                >
                  Reupload <MdCloudUpload className="ml-3" size={22} />
                </div>
              </div>
            ) : (
              <img
                src={addImgIcon}
                alt="add"
                width={50}
                onClick={() => inputRef.current?.click()}
              />
            )}
          </div>
        </div>
        <div className="mb-8">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="hackathon"
          >
            Hackathon Name
          </label>
          <input
            className="appearance-none border rounded-lg w-[1000px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Hackathon"
            type="text"
            placeholder="Enter the name of the hackathon"
            defaultValue={hackathon}
            onChange={(e) => {
              setHackathon(e.target.value);
            }}
          />
        </div>
        <div className="mb-8 flex gap-[50px]">
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="startDate"
            >
              Start Date
            </label>
            <input
              className="appearance-none border rounded-lg w-[475px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="startDate"
              type="date"
              defaultValue={startDate
                ?.toLocaleDateString()
                .split("/")
                .reverse()
                .join("-")}
              onChange={(e) => {
                setStartDate(new Date(e.target.value));
              }}
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="endDate"
            >
              End Date
            </label>
            <input
              className="appearance-none border rounded-lg w-[475px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="endDate"
              type="date"
              defaultValue={endDate
                ?.toLocaleDateString()
                .split("/")
                .reverse()
                .join("-")}
              onChange={(e) => {
                setEndDate(new Date(e.target.value));
              }}
            />
          </div>
        </div>
        <div className="mb-8">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="githublink"
          >
            Github Link
          </label>
          <input
            className="appearance-none border rounded-lg w-[1000px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="githublink"
            type="text"
            placeholder="Enter your submission's public GitHub repository link"
            defaultValue={githubLink}
            onChange={(e) => {
              setGithubLink(e.target.value);
            }}
          />
        </div>
        <div className="mb-8">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="otherlink"
          >
            Other Link
          </label>
          <input
            className="appearance-none border rounded-lg w-[1000px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="otherlink"
            type="text"
            placeholder="You can upload a video demo or URL of you demo app here."
            defaultValue={otherlink}
            onChange={(e) => {
              setOtherLink(e.target.value);
            }}
          />
        </div>
        <div className="mb-8">
          <button
            className="bg-[#44924C] text-white font-semibold text-lg px-8 py-3 rounded-lg mt-8"
            onClick={handleSubmit}
          >
            Upload Submission
          </button>
        </div>
      </div>
    </div>
  );
};

export default SumissionForm;
