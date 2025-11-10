"use client";
import React, { useState } from "react";
import { Application } from "@/app/generated/prisma";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
type ApplicationListProps = {
  applications: Application[];
};

const ApplicationList = ({ applications }: ApplicationListProps) => {
  const [applicationStatus, setApplicationStatus] = useState(
    Object.fromEntries(
      applications.map((app) => [app.id, { status: app.status, id: app.id }])
    )
  );

  const handleStatusChange = (id: string, value: string) => {
    // Handle status change logic here
    console.log("Selected status:", value);
    console.log("Selected id:", id);
    setApplicationStatus((prev) => ({
      ...prev,
      [id]: { status: value, id: id },
    }));
  };
  return (
    <Accordion type="single" collapsible>
      {applications.map((application) => {
        const RaiderIoLinks = application.raiderIoLinks as string[];

        return (
          <AccordionItem key={application.id} value={`item-${application.id}`}>
            <AccordionTrigger className="flex">
              <div className="w-full grid grid-cols-3 sm:grid-cols-4 items-center place-items-end text-right gap-4">
                <span className="justify-self-center ">
                  {application.characterName}
                </span>
                <span className="justify-self-center hidden sm:block">
                  {application.class}
                </span>
                <span className="justify-self-center">{application.role}</span>
                <span className="justify-self-center">
                  {applicationStatus[application.id]?.status ||
                    application.status}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p>Class: {application.class}</p>
              <p>Comments: {application.comments}</p>
              <p>Role: {application.role}</p>
              {/* <p>
                Experience:
                <ul>
                  {application.guildHistory![0]((exp, index) => (
                    <li key={index}>{exp.guildName}</li>
                  ))}
                </ul>
              </p> */}
              <p>
                Submitted on:{" "}
                {new Date(application.createdAt).toLocaleDateString()}
              </p>
              <p>Bio: {application.bio} </p>
              <ul>
                {RaiderIoLinks.map((link, index) => (
                  <li key={index}> {link}</li>
                ))}
              </ul>
              <p>Additional info: {application.comments}</p>
              <Select
                onValueChange={(value) =>
                  handleStatusChange(application.id, value)
                }
                defaultValue={application.status}
              >
                <SelectTrigger id="status-select" className="w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Status</SelectLabel>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="accepted">Accepted</SelectItem>
                    <SelectItem value="declined">Declined</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </AccordionContent>
          </AccordionItem>
        );
      })}
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ApplicationList;
