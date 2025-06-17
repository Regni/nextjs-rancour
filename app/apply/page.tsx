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

const page = () => {
 const [form, setForm] = useState({
    name: '',
    discord: '',
    role: '',
    class: '',
    availability: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleGChange = (name: string, value: string) => {
    console.log(`Selected ${name}:`, value);
    setForm(prev => ({ ...prev, [name]: value }));
    
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you could POST to an API or backend
    console.log('Form submitted:', form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto mt-10 p-6 bg-green-100 rounded-xl shadow">
        <h1 className="text-2xl font-bold text-center text-green-700">Application Submitted!</h1>
        <p className="text-center mt-4">Thanks for applying to our guild. We'll review your application soon.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white dark:bg-background-accent rounded-xl shadow">
      <h1 className="text-3xl font-bold text-center mb-6">Guild Application</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="characterName"
          placeholder="Character Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded"
        />

        <input
          name="discord"
          placeholder="Discord Tag (e.g. JohnDoe#1234)"
          value={form.discord}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded"
        />
        <div className="flex gap-4 justify-around">
      <Select onValueChange={(value:string)=> handleGChange("class" , value)  } value={form.class} name='class' >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Your class..." />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>classes</SelectLabel>
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

        <Select onValueChange={(value:string)=> handleGChange("role" , value)  } value={form.role} name='role'>
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
</div>
        <input
          name="availability"
          placeholder="Availability (e.g. Mon, Wed, Fri nights)"
          value={form.availability}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded"
        />

        <textarea
          name="message"
          placeholder="Tell us a bit about yourself..."
          value={form.message}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded"
          rows={4}
        />

        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700">
          Submit Application
        </button>
      </form>
    </div>
  );
}

export default page