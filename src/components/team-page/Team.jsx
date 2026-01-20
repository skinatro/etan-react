import React from "react";
import "./Team.css";
import TeamCard from "../profile-card/Profilecard";

function Team() {
  return (
    <section className="team-page full-width">

      {/* ===== ADVISORY TEAM ===== */}
      <section className="team-section">
        <h1 className="team-title">Advisory Team</h1>

        <div className="team-grid">
          <TeamCard
            name="Kunal Jadhav"
            title="Advisory Team Member"
            avatarUrl="/team/kunal.webp"
          />
          <TeamCard
            name="Shashaank Sajjanar"
            title="Advisory Team Member"
            avatarUrl="/team/shashaank.webp"
          />
          <TeamCard
            name="Kaushik Karkera"
            title="Advisory Team Member"
            avatarUrl="/team/kaushik.webp"
          />
          <TeamCard
            name="Dr. Vaqar Ansari"
            title="Convenor"
            avatarUrl="/team/vaqarsir.webp"
          />
        </div>
      </section>

      {/* ===== CONVENOR ===== */}
      <section className="team-section">
        <h1 className="team-title">Convenor</h1>

        <div className="team-grid">
          <TeamCard
            name="Dr. Vaqar Ansari"
            title="Convenor"
            avatarUrl="/team/vaqarsir.webp"
          />
          <TeamCard
            name="Ms. Snehal Lopes"
            title="Co-Convenor"
            avatarUrl="/team/snehalmaam.webp"
          />
        </div>
      </section>

      {/* ===== CORE TEAM ===== */}
      <section className="team-section">
        <h1 className="team-title">Core Team</h1>

        <div className="team-grid">
          <TeamCard
            name="Ayush Maurya"
            title="Chairman"
            avatarUrl="/team/ayush.webp"
          />
          <TeamCard
            name="Naman Jain"
            title="Co-Chairman"
            avatarUrl="/team/naman.webp"
          />
          <TeamCard
            name="Sharvari Sawant"
            title="Advisory Head"
            avatarUrl="/team/sharvari.webp"
          />
        </div>
      </section>

    </section>
  );
}

export default Team;