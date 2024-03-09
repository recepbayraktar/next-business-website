import { useTranslations } from "next-intl";
import React from "react";

const WorkingHours = () => {
  const generaltT = useTranslations("general");
  return (
    <div className="flex flex-col  justify-center items-center">
      <h3 className="text-primary font-bold text-lg">
        {generaltT("workingHours")}
      </h3>
      <p className="text-xs md:text-sm">
        Monday: {generaltT("workingHoursMon")}
      </p>
      <p className="text-xs md:text-sm">
        Tuesday: {generaltT("workingHoursTue")}
      </p>
      <p className="text-xs md:text-sm">
        Wednesday: {generaltT("workingHoursWed")}
      </p>
      <p className="text-xs md:text-sm">
        Thursday: {generaltT("workingHoursThu")}
      </p>
      <p className="text-xs md:text-sm">
        Friday: {generaltT("workingHoursFri")}
      </p>
      <p className="text-xs md:text-sm">
        Saturday: {generaltT("workingHoursSat")}
      </p>
      <p className="text-xs md:text-sm">
        Sunday: {generaltT("workingHoursSun")}
      </p>
    </div>
  );
};

export default WorkingHours;
