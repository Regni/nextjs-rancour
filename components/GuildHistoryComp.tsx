import React from "react";
import { Control } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { z } from "zod";
import { Input } from "@/components/ui/input";
import { formSchema } from "../app/apply/page";
import { Textarea } from "./ui/textarea";
import { Separator } from "./ui/separator";

type Props = {
  control: Control<z.infer<typeof formSchema>>;
};

const GuildHistoryComp = ({ control }: Props) => {
  const DateInput = React.forwardRef<
    HTMLInputElement,
    React.InputHTMLAttributes<HTMLInputElement>
  >(({ value, onChange, ...props }, ref) => {
    // Handle input change with formatting
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      // Get only digits
      const inputDigits = e.target.value.replace(/\D/g, "");
      const limitedDigits = inputDigits.slice(0, 8);

      // Format with slashes
      let formattedValue = "";

      if (limitedDigits.length > 0) {
        formattedValue = limitedDigits.slice(0, 2);

        if (limitedDigits.length > 2) {
          formattedValue += "/" + limitedDigits.slice(2, 4);
        }

        if (limitedDigits.length > 4) {
          formattedValue += "/" + limitedDigits.slice(4, 8);
        }
      }

      // Create synthetic event
      const syntheticEvent = {
        ...e,
        target: {
          ...e.target,
          value: formattedValue,
        },
      };

      if (onChange) {
        onChange(syntheticEvent as any);
      }
    };

    return (
      <Input
        ref={ref}
        value={value}
        onChange={handleChange}
        placeholder="DD/MM/YYYY"
        maxLength={10}
        {...props}
      />
    );
  });

  DateInput.displayName = "DateInput";

  return (
    <FormItem className="space-y-2">
      <Separator className="mb-4" />
      <FormLabel className="text-2xl font-semibold">Guild History</FormLabel>
      <FormDescription>
        Please provide information about your previous guilds
      </FormDescription>

      <div className="space-y-6">
        {/* First Guild */}
        <div>
          <h3 className="text-base font-medium mb-2">Most Recent Guild</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <FormField
              control={control}
              name="guildHistory.0.guildName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Guild Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Guild name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="guildHistory.0.server"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Server</FormLabel>
                  <FormControl>
                    <Input placeholder="Server name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="guildHistory.0.joined"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date Joined</FormLabel>
                  <FormControl>
                    <DateInput placeholder="dd/mm/yyyy" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="guildHistory.0.progress"
              render={({ field }) => (
                <FormItem className="col-span-full">
                  <FormLabel>Progress with this guild</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="What progress did you do in this guild?"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="guildHistory.0.reason"
              render={({ field }) => (
                <FormItem className="col-span-full">
                  <FormLabel>Reason for Leaving</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Why did you leave?" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <Collapsible>
          {/* Second Guild */}
          <div>
            <CollapsibleTrigger className="text-blue-500 hover:underline">
              <h3 className="text-base font-medium mb-3">
                Previous Guild 1 (optional)
              </h3>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <FormField
                  control={control}
                  name="guildHistory.1.guildName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Guild Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Guild name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={control}
                  name="guildHistory.1.server"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Server</FormLabel>
                      <FormControl>
                        <Input placeholder="Server name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={control}
                  name="guildHistory.1.joined"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date Joined</FormLabel>
                      <FormControl>
                        <Input placeholder="dd/mm/yyyy" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="guildHistory.1.progress"
                  render={({ field }) => (
                    <FormItem className="col-span-full">
                      <FormLabel>Progress with this guild</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="What progress did you do in this guild?"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="guildHistory.1.reason"
                  render={({ field }) => (
                    <FormItem className="col-span-full">
                      <FormLabel>Reason for Leaving</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Why did you leave?" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CollapsibleContent>
          </div>
        </Collapsible>
        <Collapsible>
          {/* Third Guild */}
          <div>
            <CollapsibleTrigger className="text-blue-500 hover:underline">
              <h3 className="text-base font-medium mb-3">
                Previous Guild 2 (optional)
              </h3>
            </CollapsibleTrigger>

            <CollapsibleContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField
                  control={control}
                  name="guildHistory.2.guildName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Guild Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Guild name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={control}
                  name="guildHistory.2.server"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Server</FormLabel>
                      <FormControl>
                        <Input placeholder="Server name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={control}
                  name="guildHistory.2.joined"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date Joined</FormLabel>
                      <FormControl>
                        <Input placeholder="dd/mm/yyyy" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={control}
                  name="guildHistory.2.progress"
                  render={({ field }) => (
                    <FormItem className="col-span-full">
                      <FormLabel>Progress with this guild</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="What progress did you do in this guild?"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={control}
                  name="guildHistory.2.reason"
                  render={({ field }) => (
                    <FormItem className="col-span-full">
                      <FormLabel>Reason for Leaving</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Why did you leave?" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CollapsibleContent>
          </div>
        </Collapsible>
      </div>
      <Separator className="mb-4" />
    </FormItem>
  );
};

export default GuildHistoryComp;
