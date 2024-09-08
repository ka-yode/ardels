"use client";
import { Star } from "lucide-react";
import { useState } from "react";

export default function StarRate({ userRating }: { userRating?: number }) {
  const [rating, setRating] = useState<number>(userRating ?? 0);
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((star, index) => {
        const currentRate = index + 1;
        return (
          <button
            key={index}
            type="button"
            name="rate"
            onClick={() => {
              setRating(currentRate);
            }}
          >
            <Star
              key={index + star}
              size={20}
              fill={currentRate <= rating ? "black" : "none"}
            />
          </button>
        );
      })}
    </div>
  );
}
