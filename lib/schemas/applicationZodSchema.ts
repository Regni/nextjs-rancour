import { z } from "zod";

export const raiderIoLink = z
  .string()
  .url("This should be a URL")
  .refine((url) => url.startsWith("https://raider.io/characters/"), {
    message:
      "Links should be valid character links and start with https://raider.io/characters/",
  });

const raiderClass = z.enum([
  "DeathKnight",
  "DemonHunter",
  "Druid",
  "Evoker",
  "Hunter",
  "Mage",
  "Monk",
  "Paladin",
  "Priest",
  "Rogue",
  "Shaman",
  "Warlock",
  "Warrior",
]);

const guildHistoryEntry = z.object({
  guildName: z.string().min(1, { message: "Guild name is required" }),
  server: z.string().min(1, { message: "Guild server is required" }),
  reason: z.string().min(1, { message: "Reason for leaving is required" }),
  progress: z.string().min(1, { message: "Progress is required" }),
  joined: z
    .string()
    .regex(/^\d{2}\/\d{2}\/\d{4}$/, {
      message: "Date must be in dd/mm/yyyy format",
    })
    .refine(
      (date) => {
        // Check if it's a valid date
        const [day, month, year] = date.split("/").map(Number);
        const dateObj = new Date(year, month - 1, day);
        const currentYear = new Date().getFullYear();

        // Check if date is valid and within range (2004 to current year)
        const isValidDate =
          dateObj.getDate() === day &&
          dateObj.getMonth() === month - 1 &&
          dateObj.getFullYear() === year;

        const isInRange = year >= 2004 && year <= currentYear;

        return isValidDate && isInRange;
      },
      {
        message: `Please enter a valid date between 2004 and ${new Date().getFullYear()}`,
      }
    ),
});

const optionalGuildHistoryEntry = z
  .object({
    guildName: z.string().optional(),
    server: z.string().optional(),
    progress: z.string().optional(),
    reason: z.string().optional(),
    joined: z.string().optional(),
  })
  .refine(
    (data) => {
      // If any field has a value, all fields must have values
      const hasAnyValue =
        data.guildName ||
        data.server ||
        data.reason ||
        data.progress ||
        data.joined;
      const hasAllValues =
        data.guildName &&
        data.server &&
        data.reason &&
        data.progress &&
        data.joined;

      // Either all fields are empty or all fields have values
      return !hasAnyValue || hasAllValues;
    },
    {
      message:
        "If you provide any information for this guild, all fields must be completed",
      path: ["guildName"], // This will show the error on the guildName field
    }
  );

export const formSchema = z.object({
  characterName: z.string().min(1, "Character name is required"),
  discord: z.string().min(1, "Discord tag is required"),
  class: raiderClass,
  role: z.enum(["DPS", "Healer", "Tank"], {
    errorMap: () => ({ message: "Role is required" }),
  }),
  raiderIoLinks: z
    .array(raiderIoLink)
    .min(1, "At least one Raider.io link is required")
    .max(3, "Maximum 7 links allowed"),
  bio: z.string().min(1, "Introduction is required"),
  guildHistory: z.tuple([
    guildHistoryEntry,
    optionalGuildHistoryEntry,
    optionalGuildHistoryEntry,
  ]),
  references: z.array(z.string()).optional(),
  comments: z.string().optional(),
  logs: z
    .object({
      link: z
        .string()
        .url("This should be a valid URL")
        .refine(
          (url) => url.startsWith("https://www.warcraftlogs.com/reports/"),
          {
            message:
              "Links should be valid warcraftlogs links and start with https://www.warcraftlogs.com/reports/",
          }
        )
        .optional()
        .or(z.literal("")),
      comment: z.string().optional(),
    })
    .optional(),
  botcheck: z.string().optional(),
});

export type ApplicationFormData = z.infer<typeof formSchema>;
