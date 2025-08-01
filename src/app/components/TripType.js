import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AirPlane } from "../../../public/icons/icon";

const TripType = () => {
  return (
    <Select>
      <SelectTrigger className="w-full !h-full bg-white text-lg font-semibold text-black rounded-md border-none shadow-none focus:outline-none focus:ring-0 focus:ring-offset-0">
        <div className="flex items-center gap-3">
          <AirPlane />
          <SelectValue placeholder="Trip Type" />
        </div>
      </SelectTrigger>
      <SelectContent className="bg-white text-black border-none shadow-md">
        <SelectItem value="one-way">One Way</SelectItem>
        <SelectItem value="round-trip">Round Trip</SelectItem>
        <SelectItem value="multi-city">Multi-City</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default TripType;
