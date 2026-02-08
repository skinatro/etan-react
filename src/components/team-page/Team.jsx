"use client";
import React from "react";
import "./Team.css";
import { CardBody, CardContainer, CardItem } from "../threedeffects/threedeffect";
import FloatingLines from "../floating-lines/FloatingLines";

function Team() {
  console.log("📄 Team component rendering...");
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

          {/* ===== CONVENOR ===== */}
          <section className="team-section">
            <h1 className="team-title">Convenor</h1>

            <div className="team-grid">
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem translateZ={imageTranslateZ} className="w-full">
                    <div className="image-box">
                      <img
                        src="/team/kevin.webp"
                        className="h-60 w-full object-cover"
                        alt="Dr. Kevin Noronha"
                      />
                    </div>
                  </CardItem>
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                    Dr. Kevin Noronha
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    EXTC HOD
                  </CardItem>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem translateZ={imageTranslateZ} className="w-full">
                    <div className="image-box">
                      <img
                        src="/team/vaqar.webp"
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
                        src="/team/snehal.webp"
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

              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem translateZ={imageTranslateZ} className="w-full">
                    <div className="image-box">
                      <img
                        src="/team/tanmayee.webp"
                        className="h-60 w-full object-cover"
                        alt="Tanmayee Desai"
                      />
                    </div>
                  </CardItem>
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                    Tanmayee Desai
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    Secretary Head
                  </CardItem>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem translateZ={imageTranslateZ} className="w-full">
                    <div className="image-box">
                      <img
                        src="/team/abhishek.webp"
                        className="h-60 w-full object-cover"
                        alt="Abhishek Kanojiya"
                      />
                    </div>
                  </CardItem>
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                    Abhishek Kanojiya
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    Treasurer Head
                  </CardItem>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem translateZ={imageTranslateZ} className="w-full">
                    <div className="image-box">
                      <img
                        src="/team/sumit.webp"
                        className="h-60 w-full object-cover"
                        alt="Sumit Mankar"
                      />
                    </div>
                  </CardItem>
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                    Sumit Mankar
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    Social Media Head
                  </CardItem>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem translateZ={imageTranslateZ} className="w-full">
                    <div className="image-box">
                      <img
                        src="/team/akshata.webp"
                        className="h-60 w-full object-cover"
                        alt="Akshata Jadhav"
                      />
                    </div>
                  </CardItem>
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                    Akshata Jadhav
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    Survey & PR Head
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          </section>

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
                    Advisory Team-Member
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
                    Advisory Team-Member
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
                    Advisory Team-Member
                  </CardItem>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem translateZ={imageTranslateZ} className="w-full">
                    <div className="image-box">
                      <img
                        src="/team/madiha.webp"
                        className="h-60 w-full object-cover"
                        alt="Madiha Sayyed"
                      />
                    </div>
                  </CardItem>
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                    Madiha Sayyed
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    Advisory Team-Member
                  </CardItem>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem translateZ={imageTranslateZ} className="w-full">
                    <div className="image-box">
                      <img
                        src="/team/nabil.webp"
                        className="h-60 w-full object-cover"
                        alt="Nabil Shaikh"
                      />
                    </div>
                  </CardItem>
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                    Nabil Shaikh
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    Advisory Team-Member
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          </section>

          {/* ===== R&D TEAM ===== */}
          <section className="team-section">
            <h1 className="team-title">R&D Team</h1>

            <div className="team-grid">
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem translateZ={imageTranslateZ} className="w-full">
                    <div className="image-box">
                      <img
                        src="/team/shravan.webp"
                        className="h-60 w-full object-cover"
                        alt="Shravan Acharya"
                      />
                    </div>
                  </CardItem>
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                    Shravan Acharya
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    R&D Head
                  </CardItem>
                </CardBody>
              </CardContainer>

              {/* R&D Team Members */}
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem translateZ={imageTranslateZ} className="w-full">
                    <div className="image-box">
                      <img src="/team/sakshi.webp" className="h-60 w-full object-cover" alt="Sakshi Gaikwad" />
                    </div>
                  </CardItem>
                  <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                    Sakshi Gaikwad
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    R&D Team-Member
                  </CardItem>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem translateZ={imageTranslateZ} className="w-full">
                    <div className="image-box">
                      <img src="/team/marmik.webp" className="h-60 w-full object-cover" alt="Marmik Parmar" />
                    </div>
                  </CardItem>
                  <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                    Marmik Parmar
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    R&D Team-Member
                  </CardItem>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem translateZ={imageTranslateZ} className="w-full">
                    <div className="image-box">
                      <img src="/team/om.webp" className="h-60 w-full object-cover" alt="Om Kate" />
                    </div>
                  </CardItem>
                  <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                    Om Kate
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    R&D Team-Member
                  </CardItem>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem translateZ={imageTranslateZ} className="w-full">
                    <div className="image-box">
                      <img src="/team/shivamyadav.webp" className="h-60 w-full object-cover" alt="Shivam Yadav" />
                    </div>
                  </CardItem>
                  <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                    Shivam Yadav
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    R&D Team-Member
                  </CardItem>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem translateZ={imageTranslateZ} className="w-full">
                    <div className="image-box">
                      <img src="/team/vasistha.webp" className="h-60 w-full object-cover" alt="Vasishtha Birari" />
                    </div>
                  </CardItem>
                  <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                    Vasishtha Birari
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    R&D Team-Member
                  </CardItem>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem translateZ={imageTranslateZ} className="w-full">
                    <div className="image-box">
                      <img src="/team/athea.webp" className="h-60 w-full object-cover" alt="Athea Ganguli" />
                    </div>
                  </CardItem>
                  <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                    Athea Ganguli
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    R&D Team-Member
                  </CardItem>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem translateZ={imageTranslateZ} className="w-full">
                    <div className="image-box">
                      <img src="/team/sahil.webp" className="h-60 w-full object-cover" alt="Sahil Sahu" />
                    </div>
                  </CardItem>
                  <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                    Sahil Sahu
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    R&D Team-Member
                  </CardItem>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem translateZ={imageTranslateZ} className="w-full">
                    <div className="image-box">
                      <img src="/team/adityaa.webp" className="h-60 w-full object-cover" alt="Aditya Atkare" />
                    </div>
                  </CardItem>
                  <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                    Aditya Atkare
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    R&D Team-Member
                  </CardItem>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem translateZ={imageTranslateZ} className="w-full">
                    <div className="image-box">
                      <img src="/team/rohan.webp" className="h-60 w-full object-cover" alt="Rohan Menon" />
                    </div>
                  </CardItem>
                  <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                    Rohan Menon
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    R&D Team-Member
                  </CardItem>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem translateZ={imageTranslateZ} className="w-full">
                    <div className="image-box">
                      <img src="/team/advait.webp" className="h-60 w-full object-cover" alt="Advait Gorivale" />
                    </div>
                  </CardItem>
                  <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                    Advait Gorivale
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    R&D Team-Member
                  </CardItem>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem translateZ={imageTranslateZ} className="w-full">
                    <div className="image-box">
                      <img src="/team/tanish.webp" className="h-60 w-full object-cover" alt="Tanish Gaddam" />
                    </div>
                  </CardItem>
                  <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                    Tanish Gaddam
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    R&D Team-Member
                  </CardItem>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem translateZ={imageTranslateZ} className="w-full">
                    <div className="image-box">
                      <img src="/team/pratam.webp" className="h-60 w-full object-cover" alt="Pratam Suvarna" />
                    </div>
                  </CardItem>
                  <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                    Pratam Suvarna
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    R&D Team-Member
                  </CardItem>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem translateZ={imageTranslateZ} className="w-full">
                    <div className="image-box">
                      <img src="/team/darshan.webp" className="h-60 w-full object-cover" alt="Darshan Barekar" />
                    </div>
                  </CardItem>
                  <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                    Darshan Barekar
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    R&D Team-Member
                  </CardItem>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem translateZ={imageTranslateZ} className="w-full">
                    <div className="image-box">
                      <img src="/team/mahesh.webp" className="h-60 w-full object-cover" alt="Mahesh Kendre" />
                    </div>
                  </CardItem>
                  <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                    Mahesh Kendre
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    R&D Team-Member
                  </CardItem>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem translateZ={imageTranslateZ} className="w-full">
                    <div className="image-box">
                      <img src="/team/arpita.webp" className="h-60 w-full object-cover" alt="Arpita Gawde" />
                    </div>
                  </CardItem>
                  <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                    Arpita Gawde
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    R&D Team-Member
                  </CardItem>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem translateZ={imageTranslateZ} className="w-full">
                    <div className="image-box">
                      <img src="/team/ziyaan.webp" className="h-60 w-full object-cover" alt="Ziyaan Qureshi" />
                    </div>
                  </CardItem>
                  <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                    Ziyaan Qureshi
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    R&D Team-Member
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          </section>

          {/* ===== SECRETARY TEAM ===== */}
          <section className="team-section">
            <h1 className="team-title">Secretary Team</h1>

            <div className="team-grid">
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem translateZ={imageTranslateZ} className="w-full">
                    <div className="image-box">
                      <img src="/team/harsh.webp" className="h-60 w-full object-cover" alt="Harsh Chollangi" />
                    </div>
                  </CardItem>
                  <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                    Harsh Chollangi
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    Secretary Team-Member
                  </CardItem>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem translateZ={imageTranslateZ} className="w-full">
                    <div className="image-box">
                      <img src="/team/durvesh.webp" className="h-60 w-full object-cover" alt="Durvesh Bhalekar" />
                    </div>
                  </CardItem>
                  <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                    Durvesh Bhalekar
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    Secretary Team-Member
                  </CardItem>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem translateZ={imageTranslateZ} className="w-full">
                    <div className="image-box">
                      <img src="/team/aditya.webp" className="h-60 w-full object-cover" alt="Aditya Bhole" />
                    </div>
                  </CardItem>
                  <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                    Aditya Bhole
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    Secretary Team-Member
                  </CardItem>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem translateZ={imageTranslateZ} className="w-full">
                    <div className="image-box">
                      <img src="/team/israel.webp" className="h-60 w-full object-cover" alt="Israel Dsouza" />
                    </div>
                  </CardItem>
                  <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                    Israel Dsouza
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    Secretary Team-Member
                  </CardItem>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem translateZ={imageTranslateZ} className="w-full">
                    <div className="image-box">
                      <img src="/team/suraj.webp" className="h-60 w-full object-cover" alt="Suraj Dalvi" />
                    </div>
                  </CardItem>
                  <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                    Suraj Dalvi
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    Secretary Team-Member
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          </section>

          {/* ===== TREASURER TEAM ===== */}
          <section className="team-section">
            <h1 className="team-title">Treasurer Team</h1>

            <div className="team-grid">
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem translateZ={imageTranslateZ} className="w-full">
                    <div className="image-box">
                      <img src="/team/unnati.webp" className="h-60 w-full object-cover" alt="Unnati Mania" />
                    </div>
                  </CardItem>
                  <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                    Unnati Mania
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    Treasurer Team-Member
                  </CardItem>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem translateZ={imageTranslateZ} className="w-full">
                    <div className="image-box">
                      <img src="/team/fairy.webp" className="h-60 w-full object-cover" alt="Fairy Gala" />
                    </div>
                  </CardItem>
                  <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                    Fairy Gala
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    Treasurer Team-Member
                  </CardItem>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem translateZ={imageTranslateZ} className="w-full">
                    <div className="image-box">
                      <img src="/team/armaan.webp" className="h-60 w-full object-cover" alt="Armaan Gowda" />
                    </div>
                  </CardItem>
                  <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                    Armaan Gowda
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    Treasurer Team-Member
                  </CardItem>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem translateZ={imageTranslateZ} className="w-full">
                    <div className="image-box">
                      <img src="/team/mohd.webp" className="h-60 w-full object-cover" alt="Mohd Aleem" />
                    </div>
                  </CardItem>
                  <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                    Mohd Aleem
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    Treasurer Team-Member
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          </section>

          {/* ===== SOCIAL MEDIA TEAM ===== */}
          <section className="team-section">
            <h1 className="team-title">Social Media Team</h1>

            <div className="team-grid">
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem translateZ={imageTranslateZ} className="w-full">
                    <div className="image-box">
                      <img src="/team/amey.webp" className="h-60 w-full object-cover" alt="Amey Manjrekar" />
                    </div>
                  </CardItem>
                  <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                    Amey Manjrekar
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    Social Media Team-Member
                  </CardItem>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem translateZ={imageTranslateZ} className="w-full">
                    <div className="image-box">
                      <img src="/team/shivam.webp" className="h-60 w-full object-cover" alt="Shivam Gupta" />
                    </div>
                  </CardItem>
                  <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                    Shivam Gupta
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    Social Media Team-Member
                  </CardItem>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem translateZ={imageTranslateZ} className="w-full">
                    <div className="image-box">
                      <img src="/team/bhumika.webp" className="h-60 w-full object-cover" alt="Bhumika Dhotre" />
                    </div>
                  </CardItem>
                  <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                    Bhumika Dhotre
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    Social Media Team-Member
                  </CardItem>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem translateZ={imageTranslateZ} className="w-full">
                    <div className="image-box">
                      <img src="/team/prachi.webp" className="h-60 w-full object-cover" alt="Prachi Sanap" />
                    </div>
                  </CardItem>
                  <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                    Prachi Sanap
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    Social Media Team-Member
                  </CardItem>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem translateZ={imageTranslateZ} className="w-full">
                    <div className="image-box">
                      <img src="/team/palak.webp" className="h-60 w-full object-cover" alt="Palak Sodhani" />
                    </div>
                  </CardItem>
                  <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                    Palak Sodhani
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    Social Media Team-Member
                  </CardItem>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem translateZ={imageTranslateZ} className="w-full">
                    <div className="image-box">
                      <img src="/team/shantala.webp" className="h-60 w-full object-cover" alt="Shantala Purav" />
                    </div>
                  </CardItem>
                  <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                    Shantala Purav
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    Social Media Team-Member
                  </CardItem>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem translateZ={imageTranslateZ} className="w-full">
                    <div className="image-box">
                      <img src="/team/vyoma.webp" className="h-60 w-full object-cover" alt="Vyoma Doshi" />
                    </div>
                  </CardItem>
                  <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                    Vyoma Doshi
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    Social Media Team-Member
                  </CardItem>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem translateZ={imageTranslateZ} className="w-full">
                    <div className="image-box">
                      <img src="/team/utsavi.webp" className="h-60 w-full object-cover" alt="Utsavi Hatkar" />
                    </div>
                  </CardItem>
                  <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                    Utsavi Hatkar
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    Social Media Team-Member
                  </CardItem>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem translateZ={imageTranslateZ} className="w-full">
                    <div className="image-box">
                      <img src="/team/rashi.webp" className="h-60 w-full object-cover" alt="Rashi Gupta" />
                    </div>
                  </CardItem>
                  <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                    Rashi Gupta
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    Social Media Team-Member
                  </CardItem>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem translateZ={imageTranslateZ} className="w-full">
                    <div className="image-box">
                      <img src="/team/satyam.webp" className="h-60 w-full object-cover" alt="Satyam Jha" />
                    </div>
                  </CardItem>
                  <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                    Satyam Jha
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    Social Media Team-Member
                  </CardItem>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem translateZ={imageTranslateZ} className="w-full">
                    <div className="image-box">
                      <img src="/team/advaitgharat.webp" className="h-60 w-full object-cover" alt="Advait Gharat" />
                    </div>
                  </CardItem>
                  <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                    Advait Gharat
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    Social Media Team-Member
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          </section>

          {/* ===== SURVEY & PR TEAM ===== */}
          <section className="team-section">
            <h1 className="team-title">Survey & PR Team</h1>

            <div className="team-grid">
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem translateZ={imageTranslateZ} className="w-full">
                    <div className="image-box">
                      <img src="/team/sradha.webp" className="h-60 w-full object-cover" alt="Sradhanjali Das" />
                    </div>
                  </CardItem>
                  <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                    Sradhanjali Das
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    Survey Team-Member
                  </CardItem>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem translateZ={imageTranslateZ} className="w-full">
                    <div className="image-box">
                      <img src="/team/siddhesh.webp" className="h-60 w-full object-cover" alt="Siddhesh Dubey" />
                    </div>
                  </CardItem>
                  <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                    Siddhesh Dubey
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    Survey Team-Member
                  </CardItem>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem translateZ={imageTranslateZ} className="w-full">
                    <div className="image-box">
                      <img src="/team/ganesh.webp" className="h-60 w-full object-cover" alt="Ganesh Mandala" />
                    </div>
                  </CardItem>
                  <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                    Ganesh Mandala
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    Survey Team-Member
                  </CardItem>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem translateZ={imageTranslateZ} className="w-full">
                    <div className="image-box">
                      <img src="/team/sarthak.webp" className="h-60 w-full object-cover" alt="Sarthak Pawar" />
                    </div>
                  </CardItem>
                  <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
                    Sarthak Pawar
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    Survey Team-Member
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