"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Combobox } from "@/components/ui/combobox"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { LOCATIONS, CATEGORIES, MONTHS } from "@/lib/suggestions-data"

export default function SuggestionsForm() {
  const router = useRouter()
  const [location, setLocation] = useState("")
  const [category, setCategory] = useState("")
  const [month, setMonth] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/onboarding")
  }

  const inputClass =
    "w-full px-5 py-1 md:py-3 h-8 md:h-auto rounded-lg bg-(--white) text-(--gray-800) placeholder-(--gray-500) focus:outline-none focus:ring-2 focus:ring-(--white)/40 text-sm md:text-base border-0";

  const labelClass =
    "font-albert font-medium text-[16px] leading-[24px] tracking-[0] text-(--white) mb-[14px] block";

  return (
    <section className="py-20 bg-(--brand-blue)">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-bricolage font-semibold text-3xl md:text-[48px] leading-tight md:leading-[60px] tracking-[-0.02em] text-(--white) mb-4">
            Got an Event Idea? Let&apos;s Make It Happen.
          </h2>

          <p className="font-albert font-normal text-[20px] leading-[24px] tracking-[0.5px] text-(--white) mb-5">
            At Baatasari, We believe that your city isn&apos;t shaped by the organizers alone – it&apos;s
            shaped by you.
            Have something you&apos;d love to see? A beach art night? A food festival? A music jam? A fitness meetup? Submit your idea below. If enough people are interested, local organizers can bring it to life. Because great events start with great ideas.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Top row */}
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <label className={labelClass}>Event Name</label>
              <Input
                type="text"
                placeholder="Ex: Prom Night"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Location</label>
              <Combobox
                items={LOCATIONS}
                value={location}
                onChange={setLocation}
                placeholder="Select Location"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Category</label>
              <Combobox
                items={CATEGORIES}
                value={category}
                onChange={setCategory}
                placeholder="Select Category"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Month</label>
              <Combobox
                items={MONTHS}
                value={month}
                onChange={setMonth}
                placeholder="Select Month"
                className={inputClass}
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className={labelClass}>Describe your suggestion.</label>
            <Textarea
              rows={4}
              placeholder="Ex: I would like to have an art event at RK Beach..."
              className={`${inputClass} resize-none h-auto md:h-auto py-3`}
            />
          </div>

          {/* Submit */}
          <div className="pt-8 flex justify-center">
            <Button
              type="submit"
              className="w-full max-w-[480px] h-[60px] px-5 py-[18px] rounded-full bg-(--brand-navy) border border-(--brand-navy) text-(--white) font-inter font-semibold text-[16px] leading-[24px] tracking-[0] flex items-center justify-center transition hover:bg-(--brand-navy)/90"
            >
              Let&apos;s Create
            </Button>
          </div>
        </form>
      </div>
    </section >
  );
}
