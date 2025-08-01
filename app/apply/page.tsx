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
import { Separator } from "@/components/ui/separator";
import GuildHistoryComp from "@/components/ApplicationComponents/GuildHistoryComp";
import RaiderIoLinksComp from "@/components/ApplicationComponents/RaiderIoLinksComp";
import { LoadingSpinner } from "@/components/ui/spinner";

import { formSchema } from "@/lib/schemas/applicationZodSchema";
const page = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      characterName: "",
      discord: "",
      class: undefined,
      role: undefined,
      raiderIoLinks: undefined,
      bio: "",
      guildHistory: [
        { guildName: "", server: "", reason: "", joined: "" },
        { guildName: "", server: "", reason: "", joined: "" },
        { guildName: "", server: "", reason: "", joined: "" },
      ],
      comments: "",
      references: [""],
      logs: {
        link: "",
        comment: "",
      },
    },
  });

  const referenseFieldArray = useFieldArray({
    control: form.control,
    name: "references" as never,
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.error || "Failed to submit application");
        return;
      }
      setError(null);

      setSubmitted(true);
      setInterval(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      setError(
        "There was an error submitting your application. Please try again later."
      );
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };
  //loading state for the form submission
  if (loading) {
    return (
      <div className="max-w-xl mx-auto my-10 p-6 bg-green-100 rounded-xl shadow dark:bg-green-950 relative">
        <h1 className="text-2xl font-bold text-center text-green-700">
          Sending your application...
        </h1>
        <div className="text-center mt-4">
          <p>Please wait while we process your application.</p>
        </div>
        <LoadingSpinner className="mx-auto mt-4 scale-350 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
    );
  }
  //completed state for the form submission
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
      {error && (
        <div className="bg-red-100 text-red-700 p-4 rounded mb-4">
          <p>{error}</p>
        </div>
      )}
      <Form {...form}>
        <input
          type="text"
          {...form.register("botcheck")}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <h3 className="text-2xl font-semibold">
            Character and Contact information
          </h3>
          <FormDescription>All fields with "*" are mandatory</FormDescription>

          <FormField
            control={form.control}
            name="characterName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Character Name*</FormLabel>
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
                <FormLabel>Discord Tag*</FormLabel>
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
                  <FormLabel htmlFor="role-select">Role*</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger id="role-select" className="w-[180px]">
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
                  <FormLabel htmlFor="class-select">Class*</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger id="class-select" className="w-[180px]">
                        <SelectValue placeholder="Your class..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Classes</SelectLabel>
                          <SelectItem value="DeathKnight">
                            Death Knight
                          </SelectItem>
                          <SelectItem value="DemonHunter">
                            Demon Hunter
                          </SelectItem>
                          <SelectItem value="Druid">Druid</SelectItem>
                          <SelectItem value="Evoker">Evoker</SelectItem>
                          <SelectItem value="Hunter">Hunter</SelectItem>
                          <SelectItem value="Mage">Mage</SelectItem>
                          <SelectItem value="Monk">Monk</SelectItem>
                          <SelectItem value="Paladin">Paladin</SelectItem>
                          <SelectItem value="Priest">Priest</SelectItem>
                          <SelectItem value="Rogue">Rogue</SelectItem>
                          <SelectItem value="Shaman">Shaman</SelectItem>
                          <SelectItem value="Warlock">Warlock</SelectItem>
                          <SelectItem value="Warrior">Warrior</SelectItem>
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

          <RaiderIoLinksComp form={form} />

          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Who are you?*</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us a bit about yourself..."
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

          <GuildHistoryComp control={form.control} />

          <h3 className="text-2xl font-semibold">Additional Information</h3>
          <FormDescription>
            Please provide any additional information that may help your
            application.
          </FormDescription>

          <FormField
            control={form.control}
            name="comments"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="personal-comments">
                  Miscellaneous Information
                </FormLabel>
                <FormControl>
                  <Textarea
                    id="personal-comments"
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
            <h3 className="text-lg">Optional Logs</h3>
            <FormDescription>
              This is an optional field where you can provide a link to your
              logs. If you have a specific log you are proud of, please share it
              here.
            </FormDescription>
            <div className="flex flex-col gap-0">
              <FormField
                control={form.control}
                name="logs.link"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Warcraft log</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://www.warcraftlogs.com/character/eu/..."
                        {...field}
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="logs.comment"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Why are you proud of this log?"
                        {...field}
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </FormItem>

          <FormField
            control={form.control}
            name="references"
            render={() => (
              <FormItem>
                <FormLabel htmlFor="new-ref">References</FormLabel>
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
                {referenseFieldArray.fields.length >= 7 && (
                  <span className="text-red-500">
                    You can only add up to 7 references.
                  </span>
                )}
                {/* Input field for adding new links */}
                <div className="flex gap-2">
                  <Input
                    id="new-ref"
                    placeholder="Write a reference name here"
                    className="flex-1"
                    disabled={referenseFieldArray.fields.length >= 7}
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
                    disabled={referenseFieldArray.fields.length >= 7}
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
                    className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-600 disabled:cursor-not-allowed"
                  >
                    Add
                  </button>
                </div>

                <FormMessage />
              </FormItem>
            )}
          />

          <Separator />
          <FormItem className="mt-6">
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
