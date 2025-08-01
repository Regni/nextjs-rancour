"use client";
import React, { useState } from "react";
import {
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

import { formSchema } from "@/lib/schemas/applicationZodSchema";
import { raiderIoLink } from "@/lib/schemas/applicationZodSchema";
import { useFieldArray } from "react-hook-form";

type Props = {
  form: UseFormReturn<z.infer<typeof formSchema>>;
};

const getOrdinalLabel = (index: number): string => {
  if (index === 0) return "Main:";
  const suffixes = ["th", "st", "nd", "rd"];
  const v = index;
  const suffix = suffixes[v % 100 >= 11 && v % 100 <= 13 ? 0 : v % 10] || "th";
  return `${v}${suffix} alt:`;
};

const RaiderIoLinksComp = ({ form }: Props) => {
  const [linkError, setLinkError] = useState<string | null>(null);

  const handleAddLink = (value: string, input: HTMLInputElement) => {
    const modifiedLink = value.trim().toLocaleLowerCase();
    if (!modifiedLink) return;

    const result = raiderIoLink.safeParse(modifiedLink);
    if (!result.success) {
      setLinkError(result.error.errors[0].message);
      return;
    }
    if (form.getValues("raiderIoLinks").includes(modifiedLink)) {
      setLinkError("This link already exists.");
      return;
    }
    if (form.getValues("raiderIoLinks").length >= 7) {
      setLinkError("You can only add up to 7 Raider.io links.");
    }

    setLinkError(null);
    append(modifiedLink);
    input.value = "";
  };

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "raiderIoLinks" as never,
  });

  return (
    <FormField
      control={form.control}
      name="raiderIoLinks"
      render={() => (
        <FormItem>
          <FormLabel htmlFor="new-link">Character Links*</FormLabel>
          <FormDescription>
            Add links to your character raider.io profile (mandatory) <br />
            and any other relevant alts (optional)
          </FormDescription>

          <FormMessage />
          {fields.length > 0 && (
            <div className="mb-3 border rounded-md p-3 bg-gray-50 dark:bg-gray-900">
              <div className="space-y-2">
                {fields.map((field, index) => {
                  return (
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
                        onClick={() => {
                          remove(index);
                          setLinkError(null);
                        }}
                        className="ml-2 p-1 rounded-full text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"
                      >
                        ✕
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Input field for adding new links */}
          {linkError && (
            <p className="text-sm text-[#FF6467] mt-1">{linkError}</p>
          )}
          <div className="flex gap-2">
            <Input
              disabled={fields.length >= 7}
              id="new-link"
              placeholder="https://raider.io/characters/..."
              className="flex-1"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleAddLink(e.currentTarget.value, e.currentTarget);
                }
              }}
            />
            <button
              disabled={fields.length >= 7}
              type="button"
              onClick={() => {
                const input = document.getElementById(
                  "new-link"
                ) as HTMLInputElement;
                if (input) {
                  handleAddLink(input.value, input);
                }
              }}
              className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-600 disabled:cursor-not-allowed"
            >
              Add
            </button>
          </div>
        </FormItem>
      )}
    />
  );
};

export default RaiderIoLinksComp;
