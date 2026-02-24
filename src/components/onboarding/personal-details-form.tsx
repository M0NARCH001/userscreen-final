"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, CalendarIcon } from "lucide-react"
import Image from "next/image"
import { format, parse } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { useAuth } from "@/context/auth-context"
import { useRouter } from "next/navigation"

interface PersonalDetailsFormProps {
    onContinue: () => void
}

export default function PersonalDetailsForm({ onContinue }: PersonalDetailsFormProps) {
    const { userProfile, updateUserProfile } = useAuth();
    const router = useRouter();
    const [profileImage, setProfileImage] = useState<string | null>(null)
    const [partnerProfileImage, setPartnerProfileImage] = useState<string | null>(null)
    const [formData, setFormData] = useState({
        fullName: userProfile?.fullName || "",
        mobileNumber: userProfile?.mobileNumber || "",
        emailId: userProfile?.emailId || "",
        dateOfBirth: userProfile?.dateOfBirth || "",
        gender: userProfile?.gender || "",
        relationshipStatus: userProfile?.relationshipStatus || "",
        location: userProfile?.location || "",
        profession: userProfile?.profession || "",
    })

    const [partnerData, setPartnerData] = useState({
        fullName: "",
        mobileNumber: "",
        anniversaryDate: "",
        dateOfBirth: "",
    })

    const [errors, setErrors] = useState<Record<string, string>>({})

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setProfileImage(reader.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

    const handlePartnerImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setPartnerProfileImage(reader.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: "" }))
        }
    }

    const handlePartnerInputChange = (field: string, value: string) => {
        setPartnerData((prev) => ({ ...prev, [field]: value }))
        if (errors[`partner_${field}`]) {
            setErrors((prev) => ({ ...prev, [`partner_${field}`]: "" }))
        }
    }

    const handleDateSelect = (date: Date | undefined, field: string, isPartner = false) => {
        if (!date) return
        const formattedDate = format(date, "dd/MM/yyyy")
        if (isPartner) {
            handlePartnerInputChange(field, formattedDate)
        } else {
            handleInputChange(field, formattedDate)
        }
    }

    const getDateObject = (dateString: string) => {
        if (!dateString) return undefined
        try {
            return parse(dateString, "dd/MM/yyyy", new Date())
        } catch (e) {
            return undefined
        }
    }

    const validateForm = () => {
        const newErrors: Record<string, string> = {}

        // Phone regex: exactly 10 digits
        const phoneRegex = /^\d{10}$/
        // Basic email regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (!formData.fullName.trim()) newErrors.fullName = "Full name is required"

        if (!formData.mobileNumber.trim()) {
            newErrors.mobileNumber = "Mobile number is required"
        } else if (!phoneRegex.test(formData.mobileNumber.trim())) {
            newErrors.mobileNumber = "Mobile number must be 10 digits"
        }

        if (!formData.emailId.trim()) {
            newErrors.emailId = "Email is required"
        } else if (!emailRegex.test(formData.emailId.trim())) {
            newErrors.emailId = "Invalid email address"
        }

        if (!formData.dateOfBirth.trim()) newErrors.dateOfBirth = "Date of birth is required"
        if (!formData.gender) newErrors.gender = "Gender is required"
        if (!formData.relationshipStatus) newErrors.relationshipStatus = "Relationship status is required"
        if (!formData.location.trim()) newErrors.location = "Location is required"
        if (!formData.profession.trim()) newErrors.profession = "Profession is required"

        if (formData.relationshipStatus && formData.relationshipStatus !== "single") {
            if (!partnerData.fullName.trim()) newErrors.partner_fullName = "Partner full name is required"

            if (!partnerData.mobileNumber.trim()) {
                newErrors.partner_mobileNumber = "Partner mobile number is required"
            } else if (!phoneRegex.test(partnerData.mobileNumber.trim())) {
                newErrors.partner_mobileNumber = "Partner mobile number must be 10 digits"
            }

            if (!partnerData.anniversaryDate.trim()) newErrors.partner_anniversaryDate = "Anniversary date is required"
            if (!partnerData.dateOfBirth.trim()) newErrors.partner_dateOfBirth = "Partner date of birth is required"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (validateForm()) {
            console.log("Form data:", formData)
            console.log("Partner data:", partnerData)
            updateUserProfile(formData);
            onContinue()
        } else {
            console.log("Validation errors:", errors)
        }
    }

    const showPartnerDetails = formData.relationshipStatus && formData.relationshipStatus !== "single"

    // CSS class for the label sitting on the border
    const labelOnBorderClass = "absolute -top-2 left-3 px-1 bg-(--white) text-[11px] font-medium text-(--pref-label) z-10"

    return (
        <main className="mx-auto max-w-7xl px-6 py-12">
            <h1 className="text-4xl font-bold mb-12 text-(--brand-blue)">Personal Details</h1>

            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12">
                    {/* Profile Image Section */}
                    <div className="flex flex-col items-center lg:items-start">
                        <div className="relative">
                            <div className="h-52 w-52 rounded-full overflow-hidden bg-(--yellow-400) border-4 border-white shadow-lg">
                                {/* Using standard placeholder if no image */}
                                <div className="w-full h-full bg-(--gray-200) flex items-center justify-center text-(--gray-500)">
                                    {profileImage ? (
                                        <Image
                                            src={profileImage}
                                            alt="Profile"
                                            width={208}
                                            height={208}
                                            className="h-full w-full object-cover"
                                        />
                                    ) : <span>No Image</span>}
                                </div>
                            </div>
                        </div>
                        <div className="mt-6">
                            <label htmlFor="profile-upload">
                                <div className="flex items-center gap-2 px-6 py-3 bg-(--brand-navy) text-(--white) rounded-full cursor-pointer hover:bg-(--gray-800) transition-colors">
                                    <Upload className="h-4 w-4" />
                                    <span className="font-medium">Change picture</span>
                                </div>
                                <Input
                                    id="profile-upload"
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleImageChange}
                                />
                            </label>
                        </div>
                    </div>

                    {/* Form Fields Section */}
                    <div className="space-y-10">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-10">
                            {/* Full Name */}
                            <div className="relative">
                                <Label htmlFor="fullName" className={labelOnBorderClass}>
                                    Full Name
                                </Label>
                                <Input
                                    id="fullName"
                                    placeholder="Enter your name"
                                    value={formData.fullName}
                                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                                    className="h-14 bg-(--white) border-(--gray-400) focus-visible:ring-0"
                                />
                                {errors.fullName && <p className="text-(--red-500) text-xs mt-1 absolute">{errors.fullName}</p>}
                            </div>

                            {/* Mobile Number */}
                            <div className="relative">
                                <Label htmlFor="mobileNumber" className={labelOnBorderClass}>
                                    Mobile Number
                                </Label>
                                <Input
                                    id="mobileNumber"
                                    type="tel"
                                    placeholder="Enter mobile number"
                                    value={formData.mobileNumber}
                                    onChange={(e) => {
                                        // Allow only numbers
                                        const value = e.target.value.replace(/\D/g, '')
                                        handleInputChange("mobileNumber", value)
                                    }}
                                    className="h-14 bg-(--white) border-(--gray-400) focus-visible:ring-0"
                                />
                                {errors.mobileNumber && <p className="text-(--red-500) text-xs mt-1 absolute">{errors.mobileNumber}</p>}
                            </div>

                            {/* Email Id */}
                            <div className="relative">
                                <Label htmlFor="emailId" className={labelOnBorderClass}>
                                    Email Id
                                </Label>
                                <Input
                                    id="emailId"
                                    type="email"
                                    placeholder="Enter your email id"
                                    value={formData.emailId}
                                    onChange={(e) => handleInputChange("emailId", e.target.value)}
                                    className="h-14 bg-(--white) border-(--gray-400) focus-visible:ring-0"
                                />
                                {errors.emailId && <p className="text-(--red-500) text-xs mt-1 absolute">{errors.emailId}</p>}
                            </div>

                            {/* Date of Birth */}
                            <div className="relative">
                                <Label htmlFor="dateOfBirth" className={labelOnBorderClass}>
                                    Date of Birth
                                </Label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "!h-14 w-full justify-start text-left font-normal bg-(--white) border-(--gray-400) hover:bg-(--white) text-base md:text-sm",
                                                !formData.dateOfBirth && "text-muted-foreground"
                                            )}
                                        >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {formData.dateOfBirth ? formData.dateOfBirth : <span>Pick a date</span>}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={getDateObject(formData.dateOfBirth)}
                                            onSelect={(date) => handleDateSelect(date, "dateOfBirth")}
                                            captionLayout="dropdown"
                                            fromYear={1900}
                                            toYear={new Date().getFullYear()}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                                {errors.dateOfBirth && <p className="text-(--red-500) text-xs mt-1 absolute">{errors.dateOfBirth}</p>}
                            </div>

                            {/* Gender */}
                            <div className="relative">
                                <Label htmlFor="gender" className={labelOnBorderClass}>
                                    Gender
                                </Label>
                                <Select value={formData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
                                    <SelectTrigger id="gender" className="!h-14 w-full bg-(--white) border-(--gray-400) focus-visible:ring-0 text-base md:text-sm items-center px-3">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="male">Male</SelectItem>
                                        <SelectItem value="female">Female</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                                {errors.gender && <p className="text-(--red-500) text-xs mt-1 absolute">{errors.gender}</p>}
                            </div>

                            {/* Relationship Status */}
                            <div className="relative">
                                <Label htmlFor="relationshipStatus" className={labelOnBorderClass}>
                                    Relationship Status
                                </Label>
                                <Select
                                    value={formData.relationshipStatus}
                                    onValueChange={(value) => handleInputChange("relationshipStatus", value)}
                                >
                                    <SelectTrigger id="relationshipStatus" className="!h-14 w-full bg-(--white) border-(--gray-400) focus-visible:ring-0 text-base md:text-sm items-center px-3">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="single">Single</SelectItem>
                                        <SelectItem value="married">Married</SelectItem>
                                        <SelectItem value="in-relationship">In a relationship</SelectItem>
                                    </SelectContent>
                                </Select>
                                {errors.relationshipStatus && <p className="text-(--red-500) text-xs mt-1 absolute">{errors.relationshipStatus}</p>}
                            </div>

                            {/* Location */}
                            <div className="relative">
                                <Label htmlFor="location" className={labelOnBorderClass}>
                                    Location
                                </Label>
                                <Input
                                    id="location"
                                    placeholder="Enter current location"
                                    value={formData.location}
                                    onChange={(e) => handleInputChange("location", e.target.value)}
                                    className="h-14 bg-(--white) border-(--gray-400) focus-visible:ring-0"
                                />
                                {errors.location && <p className="text-(--red-500) text-xs mt-1 absolute">{errors.location}</p>}
                            </div>

                            {/* Profession */}
                            <div className="relative">
                                <Label htmlFor="profession" className={labelOnBorderClass}>
                                    Profession
                                </Label>
                                <Select value={formData.profession} onValueChange={(value) => handleInputChange("profession", value)}>
                                    <SelectTrigger id="profession" className="!h-14 w-full bg-(--white) border-(--gray-400) focus-visible:ring-0 text-base md:text-sm items-center px-3">
                                        <SelectValue placeholder="Select your profession" />
                                    </SelectTrigger>
                                    <SelectContent side="bottom" sideOffset={8}>
                                        <SelectItem value="software-engineer">Software Engineer</SelectItem>
                                        <SelectItem value="product-manager">Product Manager</SelectItem>
                                        <SelectItem value="designer">Designer</SelectItem>
                                        <SelectItem value="consultant">Consultant</SelectItem>
                                        <SelectItem value="doctor">Doctor</SelectItem>
                                        <SelectItem value="engineer">Engineer</SelectItem>
                                        <SelectItem value="lawyer">Lawyer</SelectItem>
                                        <SelectItem value="accountant">Accountant</SelectItem>
                                        <SelectItem value="teacher">Teacher</SelectItem>
                                        <SelectItem value="entrepreneur">Entrepreneur</SelectItem>
                                        <SelectItem value="marketing-executive">Marketing Executive</SelectItem>
                                        <SelectItem value="sales-executive">Sales Executive</SelectItem>
                                        <SelectItem value="financial-analyst">Financial Analyst</SelectItem>
                                        <SelectItem value="hr-executive">HR Executive</SelectItem>
                                        <SelectItem value="data-scientist">Data Scientist</SelectItem>
                                        <SelectItem value="journalist">Journalist</SelectItem>
                                        <SelectItem value="student">Student</SelectItem>
                                        <SelectItem value="homemaker">Homemaker</SelectItem>
                                        <SelectItem value="retired">Retired</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                                {errors.profession && <p className="text-(--red-500) text-xs mt-1 absolute">{errors.profession}</p>}
                            </div>
                        </div>
                    </div>
                </div>

                {showPartnerDetails && (
                    <div className="mt-20">
                        <h2 className="text-4xl font-bold mb-12">Partner Details</h2>

                        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12">
                            <div className="flex flex-col items-center lg:items-start">
                                <div className="relative">
                                    <div className="h-52 w-52 rounded-full overflow-hidden bg-(--yellow-400) border-4 border-white shadow-lg">
                                        <div className="w-full h-full bg-(--gray-200) flex items-center justify-center text-(--gray-500)">
                                            {partnerProfileImage ? (
                                                <Image
                                                    src={partnerProfileImage}
                                                    alt="Partner Profile"
                                                    width={208}
                                                    height={208}
                                                    className="h-full w-full object-cover"
                                                />
                                            ) : <span>No Image</span>}
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <label htmlFor="partner-profile-upload">
                                        <div className="flex items-center gap-2 px-6 py-3 bg-(--brand-navy) text-(--white) rounded-full cursor-pointer hover:bg-(--gray-800) transition-colors">
                                            <Upload className="h-4 w-4" />
                                            <span className="font-medium">Change picture</span>
                                        </div>
                                        <Input
                                            id="partner-profile-upload"
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            onChange={handlePartnerImageChange}
                                        />
                                    </label>
                                </div>
                            </div>

                            <div className="space-y-10">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-10">
                                    {/* Partner Full Name */}
                                    <div className="relative">
                                        <Label htmlFor="partnerFullName" className={labelOnBorderClass}>
                                            Full Name
                                        </Label>
                                        <Input
                                            id="partnerFullName"
                                            placeholder="xyz"
                                            value={partnerData.fullName}
                                            onChange={(e) => handlePartnerInputChange("fullName", e.target.value)}
                                            className="h-14 bg-(--white) border-(--gray-400) focus-visible:ring-0"
                                        />
                                        {errors.partner_fullName && <p className="text-(--red-500) text-xs mt-1 absolute">{errors.partner_fullName}</p>}
                                    </div>

                                    {/* Partner Mobile Number */}
                                    <div className="relative">
                                        <Label htmlFor="partnerMobileNumber" className={labelOnBorderClass}>
                                            Mobile Number
                                        </Label>
                                        <Input
                                            id="partnerMobileNumber"
                                            type="tel"
                                            placeholder="1234567890"
                                            value={partnerData.mobileNumber}
                                            onChange={(e) => {
                                                const value = e.target.value.replace(/\D/g, '')
                                                handlePartnerInputChange("mobileNumber", value)
                                            }}
                                            className="h-14 bg-(--white) border-(--gray-400) focus-visible:ring-0"
                                        />
                                        {errors.partner_mobileNumber && <p className="text-(--red-500) text-xs mt-1 absolute">{errors.partner_mobileNumber}</p>}
                                    </div>

                                    {/* Anniversary Date */}
                                    <div className="relative">
                                        <Label htmlFor="anniversaryDate" className={labelOnBorderClass}>
                                            Anniversary Date
                                        </Label>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "!h-14 w-full justify-start text-left font-normal bg-(--white) border-(--gray-400) hover:bg-(--white) text-base md:text-sm",
                                                        !partnerData.anniversaryDate && "text-muted-foreground"
                                                    )}
                                                >
                                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                                    {partnerData.anniversaryDate ? partnerData.anniversaryDate : <span>Pick a date</span>}
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar
                                                    mode="single"
                                                    selected={getDateObject(partnerData.anniversaryDate)}
                                                    onSelect={(date) => handleDateSelect(date, "anniversaryDate", true)}
                                                    captionLayout="dropdown"
                                                    fromYear={1900}
                                                    toYear={new Date().getFullYear()}
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                        {errors.partner_anniversaryDate && <p className="text-(--red-500) text-xs mt-1 absolute">{errors.partner_anniversaryDate}</p>}
                                    </div>

                                    {/* Partner Date of Birth */}
                                    <div className="relative">
                                        <Label htmlFor="partnerDateOfBirth" className={labelOnBorderClass}>
                                            Date of Birth
                                        </Label>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "!h-14 w-full justify-start text-left font-normal bg-(--white) border-(--gray-400) hover:bg-(--white) text-base md:text-sm",
                                                        !partnerData.dateOfBirth && "text-muted-foreground"
                                                    )}
                                                >
                                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                                    {partnerData.dateOfBirth ? partnerData.dateOfBirth : <span>Pick a date</span>}
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar
                                                    mode="single"
                                                    selected={getDateObject(partnerData.dateOfBirth)}
                                                    onSelect={(date) => handleDateSelect(date, "dateOfBirth", true)}
                                                    captionLayout="dropdown"
                                                    fromYear={1900}
                                                    toYear={new Date().getFullYear()}
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                        {errors.partner_dateOfBirth && <p className="text-(--red-500) text-xs mt-1 absolute">{errors.partner_dateOfBirth}</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Submit Button */}
                <div className="flex justify-center mt-12 pt-8 border-t border-(--gray-200)">
                    <Button
                        type="submit"
                        className="px-8 py-6 bg-(--brand-navy) text-(--white) hover:bg-(--gray-800) rounded-full text-base font-medium"
                    >
                        Save & Continue
                    </Button>
                </div>
            </form>
        </main>
    )
}
