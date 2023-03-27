import React, { useEffect, useState } from "react";
import data from "../data/data";
import { Submission } from "../types/SubmissionModel";
import Card from "./Card";

type Props = {
  isAsc: boolean;
  isFavSubmission: boolean;
  searchText: string;
};
const SubmissionTable = ({ isAsc, isFavSubmission, searchText }: Props) => {
  const [allSubmissions, setAllSubmissions] = useState<Submission[]>(data)
  if (isAsc) {
    allSubmissions.sort((a, b) => {
      return b.submittedDate.getTime() - a.submittedDate.getTime();
    });
  } else {
    allSubmissions.sort((a, b) => {
      return a.submittedDate.getTime() - b.submittedDate.getTime();
    });
  }
  useEffect(() => {
    if (searchText !== "") {
      const filteredSubmissions = allSubmissions.filter((item) => {
        return item.title.toLowerCase().includes(searchText.toLowerCase());
      });
      setAllSubmissions(filteredSubmissions);
    }else{
      setAllSubmissions(data);
    }
  }, [searchText, data])
  
  return (
    <div className="mx-20">
      {isFavSubmission ? (
        <div className="flex flex-row flex-wrap container">
          {allSubmissions.map((item) => {
            if (item.isFav) return <Card item={item} key={item.id} />;
          })}
        </div>
      ) : (
        <div className="flex flex-row flex-wrap container">
          {allSubmissions.map((item) => {
            return <Card item={item} key={item.id} />;
          })}
        </div>
      )}
    </div>
  );
};

export default SubmissionTable;
