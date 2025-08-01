import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AirPlane } from "../../../public/icons/icon";

const DaysBar = () => {
  return (
    <Select>
      <SelectTrigger className="w-full !h-full bg-white text-lg  font-semibold text-black rounded-md border-none shadow-none focus:outline-none focus:ring-0 focus:ring-offset-0">
        <div className="flex items-center gap-3">
          <AirPlane />
          <SelectValue placeholder="4-15 days" />
        </div>
      </SelectTrigger>
      <SelectContent className="bg-white text-black border-none shadow-md ">
        <SelectItem value="light">Paksitan</SelectItem>
        <SelectItem value="dark">Abu Dubai</SelectItem>
        <SelectItem value="system">Saudia Arbia</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default DaysBar;
