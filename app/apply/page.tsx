"use client";
import React from "react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@radix-ui/react-select";
import GuildHistoryComp from "@/components/GuildHistoryComp";

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
  class: z.string().min(1, "Class is required "),
  role: z.enum(["DPS", "Healer", "Tank"], {
    errorMap: () => ({ message: "Role is required" }),
  }),
  raiderIoLinks: z.array(z.string().url("This should be a URL")),
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
      link: z.string().url("This should be a valid URL").optional(),
      comment: z.string().optional(),
    })
    .optional(),
});

const page = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      characterName: "",
      discord: "",
      class: "",
      role: undefined,
      raiderIoLinks: [""],
      bio: "",
      guildHistory: [
        { guildName: "", server: "", reason: "", joined: "" },
        { guildName: "", server: "", reason: "", joined: "" },
        { guildName: "", server: "", reason: "", joined: "" },
      ],
      comments: "",
      references: [""],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "raiderIoLinks" as never,
  });

  const referenseFieldArray = useFieldArray({
    control: form.control,
    name: "references" as never,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    // Here you could POST to an API or backend
    console.log("Form submitted:", values);

    setSubmitted(true);
  };

  const getOrdinalLabel = (index: number): string => {
    if (index === 0) return "Main:";
    const suffixes = ["th", "st", "nd", "rd"];
    const v = index;
    const suffix =
      suffixes[v % 100 >= 11 && v % 100 <= 13 ? 0 : v % 10] || "th";
    return `${v}${suffix} alt:`;
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto my-10 p-6 bg-green-100 rounded-xl shadow dark:bg-green-950">
        <h1 className="text-2xl font-bold text-center text-green-700">
          Application Submitted!
        </h1>
        <p className="text-center mt-4">
          Thanks for applying to our guild. We'll review your application soon.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white dark:bg-background-accent rounded-xl shadow flex-1">
      <h1 className="text-3xl font-bold text-center mb-6">Guild Application</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="characterName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Character name</FormLabel>
                <FormControl>
                  <Input placeholder="Your in game name" {...field} />
                </FormControl>
                <FormDescription>
                  This is your character which you want to apply with..
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="discord"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Discord Tag</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. JohnDoe#1234" {...field} />
                </FormControl>
                <FormDescription>
                  Please provide your Discord tag for communication.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-between">
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Your role..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>roles</SelectLabel>
                          <SelectItem value="DPS">DPS</SelectItem>
                          <SelectItem value="Healer">Healer</SelectItem>
                          <SelectItem value="Tank">Tank</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription>
                    Select the role you are playing.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="class"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Class</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Your class..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Classes</SelectLabel>
                          <SelectItem value="death-knight">
                            Death Knight
                          </SelectItem>
                          <SelectItem value="demon-hunter">
                            Demon Hunter
                          </SelectItem>
                          <SelectItem value="druid">Druid</SelectItem>
                          <SelectItem value="evoker">Evoker</SelectItem>
                          <SelectItem value="hunter">Hunter</SelectItem>
                          <SelectItem value="mage">Mage</SelectItem>
                          <SelectItem value="monk">Monk</SelectItem>
                          <SelectItem value="paladin">Paladin</SelectItem>
                          <SelectItem value="priest">Priest</SelectItem>
                          <SelectItem value="rogue">Rogue</SelectItem>
                          <SelectItem value="shaman">Shaman</SelectItem>
                          <SelectItem value="warlock">Warlock</SelectItem>
                          <SelectItem value="warrior">Warrior</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription>
                    Select the class of the character you're applying with.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="raiderIoLinks"
            render={() => (
              <FormItem>
                <FormLabel>Character Links</FormLabel>
                <FormDescription>
                  Add links to your character raider.io profile (mandatory){" "}
                  <br />
                  and any other relevant alts (optional)
                </FormDescription>

                {fields.length > 0 && (
                  <div className="mb-3 border rounded-md p-3 bg-gray-50 dark:bg-gray-900">
                    <div className="space-y-2">
                      {fields.map((field, index) => (
                        <div
                          key={field.id}
                          className="flex justify-between items-center py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                          <span className="truncate flex-1">
                            {getOrdinalLabel(index)}{" "}
                            {form.getValues(`raiderIoLinks.${index}`)}
                          </span>
                          <button
                            type="button"
                            onClick={() => remove(index)}
                            className="ml-2 p-1 rounded-full text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"
                          >
                            ✕
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Input field for adding new links */}
                <div className="flex gap-2">
                  <Input
                    id="new-link"
                    placeholder="https://raider.io/characters/..."
                    className="flex-1"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        const input = e.currentTarget;
                        if (input.value.trim()) {
                          append(input.value.trim());
                          input.value = "";
                        }
                      }
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const input = document.getElementById(
                        "new-link"
                      ) as HTMLInputElement;
                      if (input.value.trim()) {
                        append(input.value.trim());
                        input.value = "";
                      }
                    }}
                    className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Add
                  </button>
                </div>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Who are you?</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us a bit about yourself..."
                    {...field}
                    className="w-full p-3 border border-gray-300 rounded"
                    rows={4}
                  />
                </FormControl>
                <FormDescription>
                  Please provide your Discord tag for communication.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="references"
            render={() => (
              <FormItem>
                <FormLabel>References</FormLabel>
                <FormDescription>
                  If you know someone in the guild, please mention them here.
                </FormDescription>

                {referenseFieldArray.fields.length > 0 && (
                  <div className="mb-3 border rounded-md p-3 bg-gray-50 dark:bg-gray-900">
                    <div className="space-y-2">
                      {referenseFieldArray.fields.map((field, index) => (
                        <div
                          key={field.id}
                          className="flex justify-between items-center py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                          <span className="truncate flex-1">
                            {form.getValues(`references.${index}`)}
                          </span>
                          <button
                            type="button"
                            onClick={() => referenseFieldArray.remove(index)}
                            className="ml-2 p-1 rounded-full text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"
                          >
                            ✕
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Input field for adding new links */}
                <div className="flex gap-2">
                  <Input
                    id="new-ref"
                    placeholder="Thrall"
                    className="flex-1"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        const input = e.currentTarget;
                        if (input.value.trim()) {
                          referenseFieldArray.append(input.value.trim());
                          input.value = "";
                        }
                      }
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const input = document.getElementById(
                        "new-ref"
                      ) as HTMLInputElement;
                      if (input.value.trim()) {
                        referenseFieldArray.append(input.value.trim());
                        input.value = "";
                      }
                    }}
                    className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Add
                  </button>
                </div>

                <FormMessage />
              </FormItem>
            )}
          />

          <GuildHistoryComp control={form.control} />

          <FormField
            control={form.control}
            name="comments"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Additional information</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Feel free to tell us about yourself, your history, your character, things you can do that may be of benefit to the guild, or anything else you think may help your application."
                    {...field}
                    className="w-full p-3 border border-gray-300 rounded"
                    rows={4}
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormItem className="space-y-2">
            <FormLabel className="text-lg font-semibold">
              Optional Logs
            </FormLabel>
            <FormDescription>
              This is an optional field where you can provide a link to your
              logs. If you have a specific log you are proud of, please share it
              here.
            </FormDescription>

            <FormField
              control={form.control}
              name="logs.link"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>warcraft log</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://www.warcraftlogs.com/character/eu/..."
                      {...field}
                      className="w-full p-3 border border-gray-300 rounded"
                    />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="logs.comment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>warcraft log</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Why are you proud of this log?"
                      {...field}
                      className="w-full p-3 border border-gray-300 rounded"
                    />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FormItem>

          <FormItem className="mt-6">
            <FormLabel></FormLabel>
            <FormDescription>
              By submitting this application, you confirm that all information
              provided is accurate and complete to the best of your knowledge.
              You also agree to our guild's rules and policies.
            </FormDescription>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
            >
              Submit Application
            </button>
          </FormItem>
        </form>
      </Form>
    </div>
  );
};

export default page;
