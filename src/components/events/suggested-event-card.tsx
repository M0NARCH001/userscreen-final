"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Heart } from "lucide-react";

export interface SuggestedEventCardProps {
    id: string;
    name: string;
    location: string;
    category: string;
    month: string;
    description: string;
    upvotes: number;
    hasUpvoted: boolean;
}

export function SuggestedEventCard({
    id,
    name,
    location,
    category,
    month,
    description,
    upvotes: initialUpvotes,
    hasUpvoted: initialHasUpvoted,
}: SuggestedEventCardProps) {
    const [hasUpvoted, setHasUpvoted] = useState(initialHasUpvoted);
    const [upvotes, setUpvotes] = useState(initialUpvotes);

    const handleUpvote = () => {
        if (hasUpvoted) {
            setUpvotes((prev) => prev - 1);
            setHasUpvoted(false);
        } else {
            setUpvotes((prev) => prev + 1);
            setHasUpvoted(true);
        }
    };

    return (
        <Card className="w-full shrink-0 border border-(--border)/50 shadow-sm transition-all duration-300 rounded-[24px] overflow-hidden bg-card hover:shadow-lg hover:-translate-y-1">
            <CardContent className="p-6 flex flex-col h-full">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <Badge variant="secondary" className="bg-(--brand-blue)/10 text-(--brand-blue) hover:bg-(--brand-blue)/20 rounded-full mb-3 font-medium">
                            {category}
                        </Badge>
                        <h3 className="font-albert font-bold text-xl leading-tight text-foreground line-clamp-2">
                            {name}
                        </h3>
                    </div>
                </div>

                {/* Info block */}
                <div className="flex flex-col gap-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 text-(--gray-400)" />
                        <span className="font-albert">{location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 text-(--gray-400)" />
                        <span className="font-albert">{month}</span>
                    </div>
                </div>

                {/* Description Excerpt */}
                <div className="mb-6 grow">
                    <p className="font-albert text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                        "{description}"
                    </p>
                </div>

                {/* Actions / Footer */}
                <div className="pt-4 border-t border-(--border)/50 flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2">
                        <span className="font-albert font-semibold text-foreground text-lg">{upvotes}</span>
                        <span className="font-albert text-xs text-muted-foreground uppercase tracking-wider">Interested</span>
                    </div>

                    <Button
                        onClick={handleUpvote}
                        variant={hasUpvoted ? "default" : "outline"}
                        className={`rounded-full gap-2 transition-all ${hasUpvoted
                            ? "bg-(--brand-navy) text-white hover:bg-(--brand-navy-hover)"
                            : "text-(--brand-navy) border-(--brand-navy) hover:bg-(--brand-blue)/5"
                            }`}
                    >
                        <Heart className={`w-4 h-4 ${hasUpvoted ? "fill-current" : ""}`} />
                        {hasUpvoted ? "Interested!" : "I'm Interested"}
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
