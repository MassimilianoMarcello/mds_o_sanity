// Il tuo componente principale

import React from "react";
import { getEarlyChildhood } from "@/sanity/sanity.query";
import EarlyCard from "./EarlyCard";

export default async function Early() {
  const earlys = await getEarlyChildhood();

  // Mappa gli elementi utilizzando il componente EarlyCard
  const earlyCards = earlys.map((early) => (
    <EarlyCard key={early._id} early={early} />
  ));

  // Restituisci l'array di componenti React generati dinamicamente
  return <div className="main-container">{earlyCards}</div>;
}
