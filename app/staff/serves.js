import React from "react";
import { getStaff } from "@/sanity/sanity.query";
import StaffCard from "./StaffCard";

export default async function Staff() {
  const staffs = await getStaff();

  // Mappa gli elementi utilizzando il componente EarlyCard
  const staffCards = staffs.map((staff) => (
    <StaffCard key={staff._id} staff={staff} />
  ));

  // Restituisci l'array di componenti React generati dinamicamente
  return <div className="main-container">{staffCards}</div>;
}