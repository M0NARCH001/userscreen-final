"use client"

import { useState } from "react"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import {
    SLOT_OPTIONS,
    AVAILABLE_OPTIONS,
    SKILL_OPTIONS,
    EXPERIENCE_LEVEL_OPTIONS,
    BOOKING_FROM_OPTIONS,
    PRICE_OPTIONS,
} from "@/lib/talent-data"

export function TalentInformationForm() {
    const [skills, setSkills] = useState("")
    const [experienceLevel, setExperienceLevel] = useState("")
    const [yearOfExperience, setYearOfExperience] = useState("")
    const [bio, setBio] = useState("")
    const [preferredSlots, setPreferredSlots] = useState<string[]>([])
    const [location, setLocation] = useState("")
    const [availableFor, setAvailableFor] = useState<string[]>([])
    const [acceptBookingFrom, setAcceptBookingFrom] = useState("")
    const [price, setPrice] = useState("")
    const [uploadWork, setUploadWork] = useState("")
    const [workLinks, setWorkLinks] = useState<string[]>([])
    const [customSkill, setCustomSkill] = useState("")

    /* 🔒 FIXED SIZE – SAME AS IMAGE */
    const commonClass = "!h-[56px] !w-full !rounded-md !border !border-(--gray-300) !px-4 !text-base !text-(--gray-700) md:!text-base !bg-(--white) !shadow-sm"
    const selectClass = `${commonClass} flex items-center`
    const inputClass = `${commonClass} block`

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({
            skills: skills === "Others" ? customSkill : skills,
            experienceLevel, yearOfExperience, bio, preferredSlots, location, availableFor, acceptBookingFrom, price,
            uploadWork: [...workLinks, ...(uploadWork.trim() ? [uploadWork.trim()] : [])]
        });
        alert("Application submitted! (This is a demo)");
    }

    const handleSlotClick = (slot: string) => {
        if (slot === "Everyday") {
            if (preferredSlots.includes("Everyday")) {
                setPreferredSlots([])
            } else {
                setPreferredSlots(SLOT_OPTIONS)
            }
            return
        }

        let newSlots = [...preferredSlots]
        if (newSlots.includes(slot)) {
            newSlots = newSlots.filter(s => s !== slot)
            // If we deselected a day, "Everyday" should also be deselected
            newSlots = newSlots.filter(s => s !== "Everyday")
        } else {
            newSlots.push(slot)
            // Check if all other days are now selected
            const allDaysStart = 1 // assuming "Everyday" is at index 0
            const allOtherDays = SLOT_OPTIONS.slice(allDaysStart)
            const isAllSelected = allOtherDays.every(day => newSlots.includes(day))
            if (isAllSelected) {
                newSlots.push("Everyday")
            }
        }
        setPreferredSlots(newSlots)
    }

    const handleAvailableClick = (option: string) => {
        if (option === "All") {
            if (availableFor.includes("All")) {
                setAvailableFor([])
            } else {
                setAvailableFor(AVAILABLE_OPTIONS)
            }
            return
        }

        let newOptions = [...availableFor]
        if (newOptions.includes(option)) {
            newOptions = newOptions.filter(o => o !== option)
            newOptions = newOptions.filter(o => o !== "All")
        } else {
            newOptions.push(option)
            const allOptionsStart = 1
            const allOtherOptions = AVAILABLE_OPTIONS.slice(allOptionsStart)
            const isAllSelected = allOtherOptions.every(opt => newOptions.includes(opt))
            if (isAllSelected) {
                newOptions.push("All")
            }
        }
        setAvailableFor(newOptions)
    }

    const handleLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value
        if (val.endsWith(" ")) {
            const newLink = val.trim()
            if (newLink) {
                setWorkLinks([...workLinks, newLink])
                setUploadWork("")
            }
        } else {
            setUploadWork(val)
        }
    }

    const removeLink = (index: number) => {
        setWorkLinks(workLinks.filter((_, i) => i !== index))
    }

    return (
        <form className="space-y-8" onSubmit={handleSubmit}>
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                    <Label className="text-sm font-bold text-(--black)">Skills</Label>
                    {skills === "Others" ? (
                        <div className="relative">
                            <Input
                                placeholder="Please specify your skill"
                                value={customSkill}
                                onChange={(e) => setCustomSkill(e.target.value)}
                                className={inputClass}
                                autoFocus
                            />
                            <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={() => {
                                    setSkills("")
                                    setCustomSkill("")
                                }}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-(--gray-500) hover:text-(--gray-700) hover:bg-transparent h-6 w-6"
                            >
                                <X className="h-4 w-4" />
                            </Button>
                        </div>
                    ) : (
                        <Select value={skills} onValueChange={setSkills}>
                            <SelectTrigger className={selectClass}>
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                {SKILL_OPTIONS.map((opt) => (
                                    <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    )}
                </div>

                <div className="space-y-2">
                    <Label className="text-sm font-bold text-(--black)">Experience level</Label>
                    <Select value={experienceLevel} onValueChange={setExperienceLevel}>
                        <SelectTrigger className={selectClass}>
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            {EXPERIENCE_LEVEL_OPTIONS.map((opt) => (
                                <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label className="text-sm font-bold text-(--black)">Year of experience</Label>
                    <Input
                        placeholder="Ex: 3"
                        value={yearOfExperience}
                        onChange={(e) => setYearOfExperience(e.target.value)}
                        className={inputClass}
                    />
                </div>
            </div>

            {/* Bio */}
            <div className="space-y-2">
                <Label className="text-sm font-bold text-(--black)">Bio/Description</Label>
                <Textarea
                    placeholder="Write a few words describing your talent"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    className="min-h-[120px] w-full rounded-md border border-(--gray-300) px-4 py-3 text-base text-(--gray-700) resize-none"
                />
            </div>

            {/* Slots (Full Width) */}
            <div className="space-y-2">
                <Label className="text-sm font-bold text-(--black)">Preferred slots</Label>
                <div className="flex flex-wrap gap-2">
                    {SLOT_OPTIONS.map((slot) => (
                        <Button
                            key={slot}
                            type="button"
                            variant="outline"
                            onClick={() => handleSlotClick(slot)}
                            className={`rounded-full border px-4 py-2 text-sm transition-colors h-auto ${preferredSlots.includes(slot)
                                ? "bg-(--brand-navy) text-(--white) border-(--brand-navy) hover:bg-(--brand-navy)/90 hover:text-(--white)"
                                : "bg-(--white) text-(--gray-700) border-(--gray-300) hover:bg-(--gray-50)"
                                }`}
                        >
                            {slot}
                        </Button>
                    ))}
                </div>
            </div>

            {/* Location (Full Width or separate line) */}
            <div className="space-y-2">
                <Label className="text-sm font-bold text-(--black)">Location</Label>
                <Input
                    placeholder="Ex: vizag"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className={inputClass}
                />
            </div>

            {/* Available For (Full Width) */}
            <div className="space-y-2">
                <Label className="text-sm font-bold text-(--black)">Available for</Label>
                <div className="flex flex-wrap gap-2">
                    {AVAILABLE_OPTIONS.map((option) => (
                        <Button
                            key={option}
                            type="button"
                            variant="outline"
                            onClick={() => handleAvailableClick(option)}
                            className={`rounded-full border px-4 py-2 text-sm transition-colors h-auto ${availableFor.includes(option)
                                ? "bg-(--brand-navy) text-(--white) border-(--brand-navy) hover:bg-(--brand-navy)/90 hover:text-(--white)"
                                : "bg-(--white) text-(--gray-700) border-(--gray-300) hover:bg-(--gray-50)"
                                }`}
                        >
                            {option}
                        </Button>
                    ))}
                </div>
            </div>

            {/* Last Row: Booking & Price */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label className="text-sm font-bold text-(--black)">Accept booking from</Label>
                    <Select value={acceptBookingFrom} onValueChange={setAcceptBookingFrom}>
                        <SelectTrigger className={selectClass}>
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            {BOOKING_FROM_OPTIONS.map((opt) => (
                                <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label className="text-sm font-bold text-(--black)">Price</Label>
                    <Select value={price} onValueChange={setPrice}>
                        <SelectTrigger className={selectClass}>
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            {PRICE_OPTIONS.map((opt) => (
                                <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Upload */}
            <div className="space-y-2">
                <Label className="text-sm font-bold text-(--black)">Upload your work</Label>
                <div className={`min-h-[56px]! w-full! rounded-md! border! border-(--gray-300)! px-4! py-3! text-base! bg-(--white)! shadow-sm! flex flex-wrap gap-2 items-center`}>
                    {workLinks.map((link, index) => (
                        <div key={index} className="flex items-center gap-1 bg-(--brand-navy) px-2 py-1 rounded text-sm text-(--white)">
                            <span>{link}</span>
                            <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={() => removeLink(index)}
                                className="text-(--gray-300) hover:text-(--white) hover:bg-transparent h-4 w-4 p-0"
                            >
                                <X className="h-3 w-3" />
                            </Button>
                        </div>
                    ))}
                    <Input
                        placeholder={workLinks.length === 0 ? "Paste your Google drive or Youtube link (Space to add)" : ""}
                        value={uploadWork}
                        onChange={handleLinkChange}
                        className="bg-transparent border-0 shadow-none focus-visible:ring-0 flex-1 min-w-[200px] text-(--gray-700) placeholder:text-(--gray-500) h-auto p-0"
                    />
                </div>
                <p className="text-xs text-(--gray-400)">Supporting text</p>
            </div>

            <div className="pt-4">
                <Button type="submit" className="w-full md:w-auto px-8 bg-(--brand-navy) rounded-full hover:bg-(--brand-navy)/90 text-(--white)">
                    Submit Application
                </Button>
            </div>

        </form >
    )
}
