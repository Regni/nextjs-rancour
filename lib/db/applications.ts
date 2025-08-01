import { Prisma } from "@/app/generated/prisma";
import prisma from "./prisma";

type ApplicationReviewUpdate = Pick<
  Prisma.ApplicationUpdateInput,
  "status" | "reviewerId"
>;

export const createApplication = async (
  data: Prisma.ApplicationCreateInput
) => {
  const application = await prisma.application.create({
    data,
  });
  return application;
};

export const getApplication = async (id: string) => {
  const application = await prisma.application.findUnique({
    where: { id },
  });
  if (!application) {
    throw new Error(`Application with ID ${id} not found`);
  }

  return application;
};

export const updateApplication = async (
  id: string,
  data: ApplicationReviewUpdate
) => {
  const application = await prisma.application.update({
    where: { id },
    data,
  });

  return application;
};

export const deleteApplication = async (id: string) => {
  const application = await prisma.application.delete({
    where: { id },
  });

  return application;
};

export const getApplications = async () => {
  const applications = await prisma.application.findMany();

  return applications;
};
