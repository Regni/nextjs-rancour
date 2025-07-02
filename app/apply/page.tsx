"use client";
import React from 'react'
import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm , useFieldArray} from "react-hook-form"
import { z } from "zod"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Separator } from '@radix-ui/react-select';

const formSchema = z.object({characterName: z.string().min(1, "Character name is required"),
discord: z.string().min(1, "Discord tag is required"),  
class: z.string().min(1, "Class is required "),
realm: z.string().min(1, "Server name is required"),
role: z.enum(["DPS", "Healer", "Tank"], {
    errorMap: () => ({ message: "Role is required" }),
  }),
raiderIoLinks: z.array(z.string().url("This should be a URL")),
bio: z.string().min(1, "Introduction is required")
})


const page = () => {


    const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      characterName: "",
      realm: "",
      discord: "",
      class: "",
      role: undefined,
      raiderIoLinks: [""],
      bio: ""
    },
  })

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "raiderIoLinks" as never,
  });


  const [submitted, setSubmitted] = useState(false);


  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    
    // Here you could POST to an API or backend
    console.log('Form submitted:', values);
    
    setSubmitted(true);
  };


  const getOrdinalLabel= (index: number): string => {
  if (index === 0) return "Main:";
  const suffixes = ["th", "st", "nd", "rd"];
  const v = index;
  const suffix = suffixes[(v % 100 >= 11 && v % 100 <= 13) ? 0 : (v % 10)] || "th";
  return `${v}${suffix} alt:`;
}

  

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto mt-10 p-6 bg-green-100 rounded-xl shadow">
        <h1 className="text-2xl font-bold text-center text-green-700">Application Submitted!</h1>
        <p className="text-center mt-4">Thanks for applying to our guild. We'll review your application soon.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white dark:bg-background-accent rounded-xl shadow flex-1">
      <h1 className="text-3xl font-bold text-center mb-6">Guild Application</h1>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
       <FormField control={form.control} name="characterName" render={({field})=>(
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
        
        )}/>


        <FormField control={form.control} name="realm" render={({field})=>(
        <FormItem>
              <FormLabel>Server Name</FormLabel>
              <FormControl>
                <Input placeholder="The realm you play on" {...field} />
              </FormControl>
              <FormDescription>
                The server where your character resides.
              </FormDescription>
              <FormMessage />
        </FormItem>
        
        )}/>
        
        <FormField control={form.control} name="discord" render={({field})=>(
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
        )}/>

        <div className='flex justify-between'>
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
              <SelectItem value="death-knight">Death Knight</SelectItem>
              <SelectItem value="demon-hunter">Demon Hunter</SelectItem>
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
        Add links to your character raider.io profile (mandatory) <br/>
        and any other relevant alts (optional)
      </FormDescription>
      
      {fields.length > 0 && (
        <div className="mb-3 border rounded-md p-3 bg-gray-50 dark:bg-gray-900">
          <div className="space-y-2">
            {fields.map((field, index) => (
              <div key={field.id} className="flex justify-between items-center py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
                <span className="truncate flex-1">
                 {getOrdinalLabel(index) } {form.getValues(`raiderIoLinks.${index}`)}
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
            if (e.key === 'Enter') {
              e.preventDefault();
              const input = e.currentTarget;
              if (input.value.trim()) {
                append(input.value.trim());
                input.value = '';
              }
            }
          }}
        />
        <button
          type="button"
          onClick={() => {
            const input = document.getElementById('new-link') as HTMLInputElement;
            if (input.value.trim()) {
              append(input.value.trim());
              input.value = '';
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

<Separator/>


 <FormField control={form.control} name="bio" render={({field})=>(
        <FormItem>
              <FormLabel>Who are you?</FormLabel>
              <FormControl>
                 <Textarea placeholder="Tell us a bit about yourself..." {...field}
        
          className="w-full p-3 border border-gray-300 rounded"
          rows={4}
        />
              </FormControl>
              <FormDescription>
                Please provide your Discord tag for communication.
              </FormDescription>
              <FormMessage />
        </FormItem>
        )}/>

        {/* 
        <Textarea placeholder='Previous raid experience..'/>
        <Textarea
          name="message"
          placeholder="Tell us a bit about yourself..."
          value={form.message}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded"
          rows={4}
        /> */}

        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700">
          Submit Application
        </button>
      </form>
      </Form>
    </div>
  );
}

export default page