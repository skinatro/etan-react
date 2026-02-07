"use client";
import React from "react";
import "./Team.css";
import { CardBody, CardContainer, CardItem } from "../threedeffects/threedeffect";
import FloatingLines from "../floating-lines/FloatingLines";

function Team() {
  console.log("🔄 Team component rendering...");
  const imageTranslateZ = 0; // Adjust this value to increase/decrease the 3D effect
  return (
    <div className="app-wrapper">
      {/* Background Animation Layer */}
      <div className="bg-layer">
        <FloatingLines
          linesGradient={["#34D399", "#06B6D4", "#8B5CF6", "#afacac"]}
          enabledWaves={['middle', 'bottom']}
          lineCount={[15, 15]}
          lineDistance={[8, 8]}
          bottomWavePosition={{ x: 0, y: -1.5, rotate: 1.85 }}
          middleWavePosition={{ x: 2, y: 1.5, rotate: 1.85 }}
          animationSpeed={3.3}
          parallaxStrength={0.5}
          interactive={true}
          bendStrength={-3}
        />
      </div>

      {/* Content Layer */}
      <div className="content-layer">
        <section className="team-page full-width">

      {/* ===== ADVISORY TEAM ===== */}
      <section className="team-section">
        <h1 className="team-title">Advisory Team</h1>

        <div className="team-grid">
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
              <CardItem translateZ={imageTranslateZ} className="w-full">
                <div className="image-box">
                  <img
                    src="/team/kunal.webp"
                    className="h-60 w-full object-cover"
                    alt="Kunal Jadhav"
                  />
                </div>
              </CardItem>
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                Kunal Jadhav
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Advisory Team Member
              </CardItem>
            </CardBody>
          </CardContainer>

          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
              <CardItem translateZ={imageTranslateZ} className="w-full">
                <div className="image-box">
                  <img
                    src="/team/shashaank.webp"
                    className="h-60 w-full object-cover"
                    alt="Shashaank Sajjanar"
                  />
                </div>
              </CardItem>
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                Shashaank Sajjanar
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Advisory Team Member
              </CardItem>
            </CardBody>
          </CardContainer>

          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
              <CardItem translateZ={imageTranslateZ} className="w-full">
                <div className="image-box">
                  <img
                    src="/team/kaushik.webp"
                    className="h-60 w-full object-cover"
                    alt="Kaushik Karkera"
                  />
                </div>
              </CardItem>
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                Kaushik Karkera
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Advisory Team Member
              </CardItem>
            </CardBody>
          </CardContainer>

          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
              <CardItem translateZ={imageTranslateZ} className="w-full">
                <div className="image-box">
                  <img
                    src="/team/vaqarsir.webp"
                    className="h-60 w-full object-cover"
                    alt="Dr. Vaqar Ansari"
                  />
                </div>
              </CardItem>
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                Dr. Vaqar Ansari
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
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
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
              <CardItem translateZ={imageTranslateZ} className="w-full">
                <div className="image-box">
                  <img
                    src="/team/vaqarsir.webp"
                    className="h-60 w-full object-cover"
                    alt="Dr. Vaqar Ansari"
                  />
                </div>
              </CardItem>
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                Dr. Vaqar Ansari
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Convenor
              </CardItem>
            </CardBody>
          </CardContainer>

          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
              <CardItem translateZ={imageTranslateZ} className="w-full">
                <div className="image-box">
                  <img
                    src="/team/snehalmaam.webp"
                    className="h-60 w-full object-cover"
                    alt="Ms. Snehal Lopes"
                  />
                </div>
              </CardItem>
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                Ms. Snehal Lopes
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
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
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
              <CardItem translateZ={imageTranslateZ} className="w-full">
                <div className="image-box">
                  <img
                    src="/team/ayush.webp"
                    className="h-60 w-full object-cover"
                    alt="Ayush Maurya"
                  />
                </div>
              </CardItem>
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                Ayush Maurya
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Chairman
              </CardItem>
            </CardBody>
          </CardContainer>

          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
              <CardItem translateZ={imageTranslateZ} className="w-full">
                <div className="image-box">
                  <img
                    src="/team/naman.webp"
                    className="h-60 w-full object-cover"
                    alt="Naman Jain"
                  />
                </div>
              </CardItem>
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                Naman Jain
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Co-Chairman
              </CardItem>
            </CardBody>
          </CardContainer>

          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
              <CardItem translateZ={imageTranslateZ} className="w-full">
                <div className="image-box">
                  <img
                    src="/team/sharvari.webp"
                    className="h-60 w-full object-cover"
                    alt="Sharvari Sawant"
                  />
                </div>
              </CardItem>
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                Sharvari Sawant
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Advisory Head
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
      </section>

    </section>
      </div>
    </div>
  );
}

export default Team;