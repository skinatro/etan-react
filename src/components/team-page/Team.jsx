"use client";
import React from "react";
import "./Team.css";
import { CardBody, CardContainer, CardItem } from "../3d-card/3dCard";

function Team() {
  return (
    <section className="team-page full-width">

      {/* ===== ADVISORY TEAM ===== */}
      <section className="team-section">
        <h1 className="team-title">Advisory Team</h1>

        <div className="team-grid">
          <CardContainer className="inter-var" containerClassName="py-0">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[300px] h-auto rounded-xl p-6 border">
              <CardItem translateZ={100} className="w-full">
                <img
                  src="/team/kunal.webp"
                  height="300"
                  width="300"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Kunal Jadhav"
                />
              </CardItem>
              <CardItem
                translateZ={50}
                className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                Kunal Jadhav
              </CardItem>
              <CardItem
                as="p"
                translateZ={60}
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Advisory Team Member
              </CardItem>
            </CardBody>
          </CardContainer>

          <CardContainer className="inter-var" containerClassName="py-0">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[300px] h-auto rounded-xl p-6 border">
              <CardItem translateZ={100} className="w-full">
                <img
                  src="/team/shashaank.webp"
                  height="300"
                  width="300"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Shashaank Sajjanar"
                />
              </CardItem>
              <CardItem
                translateZ={50}
                className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                Shashaank Sajjanar
              </CardItem>
              <CardItem
                as="p"
                translateZ={60}
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Advisory Team Member
              </CardItem>
            </CardBody>
          </CardContainer>

          <CardContainer className="inter-var" containerClassName="py-0">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[300px] h-auto rounded-xl p-6 border">
              <CardItem translateZ={100} className="w-full">
                <img
                  src="/team/kaushik.webp"
                  height="300"
                  width="300"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Kaushik Karkera"
                />
              </CardItem>
              <CardItem
                translateZ={50}
                className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                Kaushik Karkera
              </CardItem>
              <CardItem
                as="p"
                translateZ={60}
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Advisory Team Member
              </CardItem>
            </CardBody>
          </CardContainer>

          <CardContainer className="inter-var" containerClassName="py-0">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[300px] h-auto rounded-xl p-6 border">
              <CardItem translateZ={100} className="w-full">
                <img
                  src="/team/vaqarsir.webp"
                  height="300"
                  width="300"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Dr. Vaqar Ansari"
                />
              </CardItem>
              <CardItem
                translateZ={50}
                className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                Dr. Vaqar Ansari
              </CardItem>
              <CardItem
                as="p"
                translateZ={60}
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Advisory Team Member
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
      </section>

      {/* ===== CONVENOR ===== */}
      <section className="team-section">
        <h1 className="team-title">Convenor</h1>

        <div className="team-grid">
          <CardContainer className="inter-var" containerClassName="py-0">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[300px] h-auto rounded-xl p-6 border">
              <CardItem translateZ={100} className="w-full">
                <img
                  src="/team/vaqarsir.webp"
                  height="300"
                  width="300"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Dr. Vaqar Ansari"
                />
              </CardItem>
              <CardItem
                translateZ={50}
                className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                Dr. Vaqar Ansari
              </CardItem>
              <CardItem
                as="p"
                translateZ={60}
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Convenor
              </CardItem>
            </CardBody>
          </CardContainer>

          <CardContainer className="inter-var" containerClassName="py-0">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[300px] h-auto rounded-xl p-6 border">
              <CardItem translateZ={100} className="w-full">
                <img
                  src="/team/snehalmaam.webp"
                  height="300"
                  width="300"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Ms. Snehal Lopes"
                />
              </CardItem>
              <CardItem
                translateZ={50}
                className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                Ms. Snehal Lopes
              </CardItem>
              <CardItem
                as="p"
                translateZ={60}
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Co-Convenor
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
      </section>

      {/* ===== CORE TEAM ===== */}
      <section className="team-section">
        <h1 className="team-title">Core Team</h1>

        <div className="team-grid">
          <CardContainer className="inter-var" containerClassName="py-0">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[300px] h-auto rounded-xl p-6 border">
              <CardItem translateZ={100} className="w-full">
                <img
                  src="/team/ayush.webp"
                  height="300"
                  width="300"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Ayush Maurya"
                />
              </CardItem>
              <CardItem
                translateZ={50}
                className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                Ayush Maurya
              </CardItem>
              <CardItem
                as="p"
                translateZ={60}
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Chairman
              </CardItem>
            </CardBody>
          </CardContainer>

          <CardContainer className="inter-var" containerClassName="py-0">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[300px] h-auto rounded-xl p-6 border">
              <CardItem translateZ={100} className="w-full">
                <img
                  src="/team/naman.webp"
                  height="300"
                  width="300"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Naman Jain"
                />
              </CardItem>
              <CardItem
                translateZ={50}
                className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                Naman Jain
              </CardItem>
              <CardItem
                as="p"
                translateZ={60}
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Co-Chairman
              </CardItem>
            </CardBody>
          </CardContainer>

          <CardContainer className="inter-var" containerClassName="py-0">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[300px] h-auto rounded-xl p-6 border">
              <CardItem translateZ={100} className="w-full">
                <img
                  src="/team/sharvari.webp"
                  height="300"
                  width="300"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Sharvari Sawant"
                />
              </CardItem>
              <CardItem
                translateZ={50}
                className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                Sharvari Sawant
              </CardItem>
              <CardItem
                as="p"
                translateZ={60}
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Advisory Head
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
      </section>

    </section>
  );
}

export default Team;