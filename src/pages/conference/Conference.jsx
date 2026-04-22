import React from "react";
import ConferenceAmenities from "@/components/ConferenceAmenities";
import ConferenceSpace from "@/components/ConferenceSpace";
import HeroConference from "@/components/HeroConference";
import IntroConference from "@/components/IntroConference";
import ConferenceStats from "@/components/ConferenceStats";
import ConferenceCta from "@/components/ConferenceCta";

export default function Conference() {
  return (
    <div className="overflow-hidden bg-background pt-[70px]">
      <HeroConference />
      <IntroConference />
      <ConferenceSpace />
      <ConferenceAmenities />
      <ConferenceStats />
      <ConferenceCta />
    </div>
  );
}