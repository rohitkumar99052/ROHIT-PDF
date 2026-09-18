import React from 'react';

interface DbmsDiagramProps {
  type: string;
  subType?: string;
  caption?: string;
}

export const DbmsDiagramRenderer: React.FC<DbmsDiagramProps> = ({ type, subType, caption }) => {
  return (
    <div className="my-3 p-3 sm:p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-x-auto shadow-xs">
      {caption && (
        <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2.5 text-center">
          {caption}
        </div>
      )}

      {/* Assignment 3 Q3: Contact Maintains User & Specialization */}
      {type === 'asgn3-q3-er' && (
        <div className="flex justify-center">
          <svg viewBox="0 0 460 210" className="w-full max-w-[440px] text-slate-800 dark:text-slate-200 text-[11px] font-sans">
            {/* Contact Entity */}
            <rect x="30" y="20" width="90" height="60" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <line x1="30" y1="40" x2="120" y2="40" stroke="currentColor" strokeWidth="1" />
            <text x="75" y="34" textAnchor="middle" fontWeight="bold">Contact</text>
            <text x="36" y="55" fontSize="10">Name</text>
            <text x="36" y="70" fontSize="10" textDecoration="underline">Number</text>

            {/* Maintains Relationship */}
            <polygon points="180,50 220,25 260,50 220,75" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <text x="220" y="54" textAnchor="middle" fontSize="10" fontWeight="600">Maintains</text>
            <line x1="120" y1="50" x2="180" y2="50" stroke="currentColor" strokeWidth="1.5" />
            <line x1="260" y1="50" x2="310" y2="50" stroke="currentColor" strokeWidth="1.5" />

            {/* User Entity */}
            <rect x="310" y="20" width="90" height="60" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <line x1="310" y1="40" x2="400" y2="40" stroke="currentColor" strokeWidth="1" />
            <text x="355" y="34" textAnchor="middle" fontWeight="bold">User</text>
            <text x="316" y="55" fontSize="10" textDecoration="underline">ID</text>
            <text x="316" y="70" fontSize="10">UName</text>

            {/* Specialization Triangle */}
            <line x1="75" y1="80" x2="75" y2="105" stroke="currentColor" strokeWidth="1.5" />
            <polygon points="75,105 68,118 82,118" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <line x1="75" y1="118" x2="75" y2="135" stroke="currentColor" strokeWidth="1.5" />
            <line x1="50" y1="135" x2="155" y2="135" stroke="currentColor" strokeWidth="1.5" />

            {/* Personal Sub-entity */}
            <line x1="50" y1="135" x2="50" y2="145" stroke="currentColor" strokeWidth="1.5" />
            <rect x="15" y="145" width="75" height="50" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <line x1="15" y1="165" x2="90" y2="165" stroke="currentColor" strokeWidth="1" />
            <text x="52" y="159" textAnchor="middle" fontWeight="600" fontSize="10">Personal</text>
            <text x="20" y="180" fontSize="9">Social_site</text>

            {/* Professional Sub-entity */}
            <line x1="155" y1="135" x2="155" y2="145" stroke="currentColor" strokeWidth="1.5" />
            <rect x="115" y="145" width="85" height="50" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <line x1="115" y1="165" x2="200" y2="165" stroke="currentColor" strokeWidth="1" />
            <text x="157" y="159" textAnchor="middle" fontWeight="600" fontSize="10">Professional</text>
            <text x="122" y="180" fontSize="9">Email</text>
          </svg>
        </div>
      )}

      {/* Assignment 3 Q4: Windows (Weak entity), Room, Occupant */}
      {type === 'asgn3-q4-er' && (
        <div className="flex justify-center">
          <svg viewBox="0 0 460 210" className="w-full max-w-[440px] text-slate-800 dark:text-slate-200 text-[11px] font-sans">
            {/* Windows Weak Entity (Double Rectangle) */}
            <rect x="15" y="20" width="85" height="56" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <rect x="18" y="23" width="79" height="50" fill="none" stroke="currentColor" strokeWidth="1" />
            <line x1="15" y1="38" x2="100" y2="38" stroke="currentColor" strokeWidth="1" />
            <text x="57" y="33" textAnchor="middle" fontWeight="bold">Windows</text>
            <text x="22" y="52" fontSize="9.5">Count</text>
            <text x="22" y="65" fontSize="9.5" strokeDasharray="2,2" textDecoration="underline">GlassType</text>

            {/* Room_Win Identifying Relationship (Double Diamond) */}
            <line x1="100" y1="48" x2="160" y2="48" stroke="currentColor" strokeWidth="1.5" />
            <line x1="100" y1="52" x2="160" y2="52" stroke="currentColor" strokeWidth="1.5" />
            <polygon points="160,50 200,25 240,50 200,75" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <polygon points="164,50 200,28 236,50 200,72" fill="none" stroke="currentColor" strokeWidth="1" />
            <text x="200" y="54" textAnchor="middle" fontSize="9.5" fontWeight="bold">Room_Win</text>
            <line x1="240" y1="50" x2="300" y2="50" stroke="currentColor" strokeWidth="1.5" />

            {/* Room Entity */}
            <rect x="300" y="15" width="85" height="70" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <line x1="300" y1="32" x2="385" y2="32" stroke="currentColor" strokeWidth="1" />
            <text x="342" y="27" textAnchor="middle" fontWeight="bold">Room</text>
            <text x="306" y="45" fontSize="9" textDecoration="underline">RNo</text>
            <text x="306" y="57" fontSize="9">BedCount</text>
            <text x="306" y="68" fontSize="9">WallColor</text>
            <text x="306" y="79" fontSize="8.5">DecorType</text>

            {/* Room_Occ Relationship */}
            <line x1="342" y1="85" x2="342" y2="135" stroke="currentColor" strokeWidth="1.5" />
            <polygon points="305,160 342,135 380,160 342,185" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <text x="342" y="164" textAnchor="middle" fontSize="9.5" fontWeight="bold">Room_Occ</text>

            {/* Occupant Entity */}
            <line x1="245" y1="160" x2="305" y2="160" stroke="currentColor" strokeWidth="1.5" />
            <rect x="160" y="130" width="85" height="60" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <line x1="160" y1="148" x2="245" y2="148" stroke="currentColor" strokeWidth="1" />
            <text x="202" y="143" textAnchor="middle" fontWeight="bold">Occupant</text>
            <text x="166" y="160" fontSize="9" textDecoration="underline">OID</text>
            <text x="166" y="172" fontSize="9">FamCount</text>
            <text x="166" y="184" fontSize="9">Phone</text>
          </svg>
        </div>
      )}

      {/* Assignment 3 Q6: Specialization Hierarchy Animals */}
      {type === 'asgn3-q6-er' && (
        <div className="flex justify-center">
          <svg viewBox="0 0 460 210" className="w-full max-w-[430px] text-slate-800 dark:text-slate-200 text-[10px] font-sans">
            {/* Animals Entity */}
            <rect x="180" y="15" width="80" height="48" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <line x1="180" y1="30" x2="260" y2="30" stroke="currentColor" strokeWidth="1" />
            <text x="220" y="26" textAnchor="middle" fontWeight="bold">ANIMALS</text>
            <text x="185" y="42" fontSize="9" textDecoration="underline">SCNAME</text>
            <text x="185" y="55" fontSize="9">LOCATION</text>

            {/* Downward connecting line */}
            <line x1="220" y1="63" x2="220" y2="85" stroke="currentColor" strokeWidth="1.2" />
            <line x1="75" y1="85" x2="365" y2="85" stroke="currentColor" strokeWidth="1.2" />

            {/* Omnivores */}
            <line x1="75" y1="85" x2="75" y2="98" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#arrow)" />
            <rect x="35" y="98" width="80" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <line x1="35" y1="113" x2="115" y2="113" stroke="currentColor" strokeWidth="1" />
            <text x="75" y="109" textAnchor="middle" fontWeight="bold">OMNIVORES</text>
            <text x="40" y="127" fontSize="8.5">HABITAT</text>

            {/* Carnivores */}
            <line x1="220" y1="85" x2="220" y2="98" stroke="currentColor" strokeWidth="1.2" />
            <rect x="180" y="98" width="80" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <line x1="180" y1="113" x2="260" y2="113" stroke="currentColor" strokeWidth="1" />
            <text x="220" y="109" textAnchor="middle" fontWeight="bold">CARNIVORES</text>
            <text x="185" y="127" fontSize="8.5">FOODCHOICE</text>

            {/* Herbivores */}
            <line x1="365" y1="85" x2="365" y2="98" stroke="currentColor" strokeWidth="1.2" />
            <rect x="325" y="98" width="80" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <line x1="325" y1="113" x2="405" y2="113" stroke="currentColor" strokeWidth="1" />
            <text x="365" y="109" textAnchor="middle" fontWeight="bold">HERBIVORES</text>
            <text x="330" y="127" fontSize="8.5">USE</text>

            {/* Dogs inheriting from Carnivores */}
            <line x1="220" y1="138" x2="220" y2="160" stroke="currentColor" strokeWidth="1.2" />
            <rect x="180" y="160" width="80" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <line x1="180" y1="175" x2="260" y2="175" stroke="currentColor" strokeWidth="1" />
            <text x="220" y="171" textAnchor="middle" fontWeight="bold">DOGS</text>
            <text x="185" y="190" fontSize="8.5">BREED</text>
          </svg>
        </div>
      )}

      {/* Assignment 5 Q7: Drawing Competition ER Diagram */}
      {type === 'asgn5-q7-er' && (
        <div className="flex justify-center">
          <svg viewBox="0 0 460 160" className="w-full max-w-[430px] text-slate-800 dark:text-slate-200 text-[10px] font-sans">
            {/* Group Entity */}
            <rect x="40" y="70" width="70" height="36" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <text x="75" y="92" textAnchor="middle" fontWeight="bold">Group</text>

            {/* Attributes of Group: GName (PK), AgeLimit */}
            <ellipse cx="60" cy="35" rx="30" ry="15" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <text x="60" y="38" textAnchor="middle" fontSize="9" textDecoration="underline">GName</text>
            <line x1="60" y1="50" x2="65" y2="70" stroke="currentColor" strokeWidth="1.2" />

            <ellipse cx="60" cy="135" rx="30" ry="14" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <text x="60" y="139" textAnchor="middle" fontSize="8.5">AgeLimit</text>
            <line x1="60" y1="121" x2="65" y2="106" stroke="currentColor" strokeWidth="1.2" />

            {/* Participate Relationship */}
            <line x1="110" y1="88" x2="160" y2="88" stroke="currentColor" strokeWidth="1.5" />
            <text x="125" y="82" fontSize="10" fontWeight="bold">1</text>
            <polygon points="160,88 200,68 240,88 200,108" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <text x="200" y="92" textAnchor="middle" fontSize="9.5" fontWeight="bold">Participate</text>
            <line x1="240" y1="88" x2="290" y2="88" stroke="currentColor" strokeWidth="1.5" />
            <text x="275" y="82" fontSize="10" fontWeight="bold">n</text>

            {/* Attribute on Participate: Result */}
            <ellipse cx="200" cy="35" rx="28" ry="14" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <text x="200" y="39" textAnchor="middle" fontSize="9">Result</text>
            <line x1="200" y1="49" x2="200" y2="68" stroke="currentColor" strokeWidth="1.2" />

            {/* Participant Entity */}
            <rect x="290" y="70" width="85" height="36" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <text x="332" y="92" textAnchor="middle" fontWeight="bold">Participant</text>

            {/* Attributes of Participant: PID, Name, Age */}
            <ellipse cx="300" cy="35" rx="25" ry="14" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <text x="300" y="39" textAnchor="middle" fontSize="9" textDecoration="underline">PID</text>
            <line x1="300" y1="49" x2="310" y2="70" stroke="currentColor" strokeWidth="1.2" />

            <ellipse cx="365" cy="35" rx="25" ry="14" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <text x="365" y="39" textAnchor="middle" fontSize="9">Name</text>
            <line x1="365" y1="49" x2="350" y2="70" stroke="currentColor" strokeWidth="1.2" />

            <ellipse cx="332" cy="135" rx="24" ry="14" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <text x="332" y="139" textAnchor="middle" fontSize="9">Age</text>
            <line x1="332" y1="121" x2="332" y2="106" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </div>
      )}

      {/* Assignment 6 Q4: 2-3-4 Tree Insertion Result */}
      {type === 'asgn6-q4-tree' && (
        <div className="flex justify-center">
          <svg viewBox="0 0 380 160" className="w-full max-w-[360px] text-slate-800 dark:text-slate-200 text-[11px] font-mono">
            {/* Root: [38] */}
            <rect x="160" y="10" width="48" height="26" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <text x="184" y="27" textAnchor="middle" fontWeight="bold">[38]</text>

            {/* Level 1 lines */}
            <line x1="170" y1="36" x2="115" y2="65" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#arrow)" />
            <line x1="198" y1="36" x2="250" y2="65" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#arrow)" />

            {/* Level 1: [24] and [51 59] */}
            <rect x="95" y="65" width="48" height="26" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <text x="119" y="82" textAnchor="middle" fontWeight="bold">[24]</text>

            <rect x="220" y="65" width="70" height="26" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <text x="255" y="82" textAnchor="middle" fontWeight="bold">[51  59]</text>

            {/* Level 2 lines from [24] */}
            <line x1="105" y1="91" x2="70" y2="120" stroke="currentColor" strokeWidth="1.2" />
            <line x1="130" y1="91" x2="135" y2="120" stroke="currentColor" strokeWidth="1.2" />

            {/* Level 2 leaves for [24]: [11] and [31] */}
            <rect x="50" y="120" width="44" height="26" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <text x="72" y="137" textAnchor="middle" fontWeight="bold">[11]</text>

            <rect x="115" y="120" width="44" height="26" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <text x="137" y="137" textAnchor="middle" fontWeight="bold">[31]</text>

            {/* Level 2 lines from [51 59] (3 children) */}
            <line x1="230" y1="91" x2="195" y2="120" stroke="currentColor" strokeWidth="1.2" />
            <line x1="255" y1="91" x2="255" y2="120" stroke="currentColor" strokeWidth="1.2" />
            <line x1="280" y1="91" x2="315" y2="120" stroke="currentColor" strokeWidth="1.2" />

            {/* Level 2 leaves for [51 59]: [45], [52], [66 73] */}
            <rect x="175" y="120" width="44" height="26" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <text x="197" y="137" textAnchor="middle" fontWeight="bold">[45]</text>

            <rect x="235" y="120" width="44" height="26" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <text x="257" y="137" textAnchor="middle" fontWeight="bold">[52]</text>

            <rect x="295" y="120" width="68" height="26" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <text x="329" y="137" textAnchor="middle" fontWeight="bold">[66  73]</text>
          </svg>
        </div>
      )}

      {/* Assignment 6 Q6: 2-3-4 Tree Character Search for 'M' */}
      {type === 'asgn6-q6-tree' && (
        <div className="flex justify-center">
          <svg viewBox="0 0 380 160" className="w-full max-w-[360px] text-slate-800 dark:text-slate-200 text-[11px] font-sans">
            {/* Root: [J] */}
            <rect x="170" y="10" width="34" height="26" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <text x="187" y="27" textAnchor="middle" fontWeight="bold">J</text>

            {/* Level 1 branches */}
            <line x1="175" y1="36" x2="115" y2="65" stroke="currentColor" strokeWidth="1.2" />
            <line x1="198" y1="36" x2="255" y2="65" stroke="currentColor" strokeWidth="1.2" />

            {/* Node [C] and [N T] */}
            <rect x="100" y="65" width="34" height="26" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <text x="117" y="82" textAnchor="middle" fontWeight="bold">C</text>

            <rect x="230" y="65" width="58" height="26" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <line x1="259" y1="65" x2="259" y2="91" stroke="currentColor" strokeWidth="1" />
            <text x="245" y="82" textAnchor="middle" fontWeight="bold">N</text>
            <text x="273" y="82" textAnchor="middle" fontWeight="bold">T</text>

            {/* Leaves from [C]: [A], [E G H] */}
            <line x1="105" y1="91" x2="60" y2="120" stroke="currentColor" strokeWidth="1.2" />
            <line x1="125" y1="91" x2="125" y2="120" stroke="currentColor" strokeWidth="1.2" />

            <rect x="45" y="120" width="34" height="26" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <text x="62" y="137" textAnchor="middle" fontWeight="bold">A</text>

            <rect x="95" y="120" width="68" height="26" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <line x1="117" y1="120" x2="117" y2="146" stroke="currentColor" strokeWidth="1" />
            <line x1="140" y1="120" x2="140" y2="146" stroke="currentColor" strokeWidth="1" />
            <text x="106" y="137" textAnchor="middle" fontWeight="bold">E</text>
            <text x="129" y="137" textAnchor="middle" fontWeight="bold">G</text>
            <text x="151" y="137" textAnchor="middle" fontWeight="bold">H</text>

            {/* Leaves from [N T]: [K L], [P], [U Y] */}
            <line x1="240" y1="91" x2="200" y2="120" stroke="currentColor" strokeWidth="1.2" />
            <line x1="259" y1="91" x2="259" y2="120" stroke="currentColor" strokeWidth="1.2" />
            <line x1="278" y1="91" x2="315" y2="120" stroke="currentColor" strokeWidth="1.2" />

            <rect x="180" y="120" width="48" height="26" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <line x1="204" y1="120" x2="204" y2="146" stroke="currentColor" strokeWidth="1" />
            <text x="192" y="137" textAnchor="middle" fontWeight="bold">K</text>
            <text x="216" y="137" textAnchor="middle" fontWeight="bold">L</text>

            <rect x="245" y="120" width="30" height="26" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <text x="260" y="137" textAnchor="middle" fontWeight="bold">P</text>

            <rect x="295" y="120" width="48" height="26" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <line x1="319" y1="120" x2="319" y2="146" stroke="currentColor" strokeWidth="1" />
            <text x="307" y="137" textAnchor="middle" fontWeight="bold">U</text>
            <text x="331" y="137" textAnchor="middle" fontWeight="bold">Y</text>
          </svg>
        </div>
      )}

      {/* Assignment 7 Q1: Precedence Graph */}
      {type === 'asgn7-q1-graph' && (
        <div className="flex justify-center">
          <svg viewBox="0 0 280 180" className="w-full max-w-[260px] text-slate-800 dark:text-slate-200 text-xs font-bold font-sans">
            <defs>
              <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6" fill="currentColor" />
              </marker>
            </defs>
            {/* Nodes: T1, T2, T3, T4, T5 */}
            <circle cx="90" cy="40" r="16" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <text x="90" y="44" textAnchor="middle">T₁</text>

            <circle cx="190" cy="40" r="16" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <text x="190" y="44" textAnchor="middle">T₂</text>

            <circle cx="50" cy="110" r="16" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <text x="50" y="114" textAnchor="middle">T₅</text>

            <circle cx="90" cy="150" r="16" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <text x="90" y="154" textAnchor="middle">T₄</text>

            <circle cx="190" cy="150" r="16" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <text x="190" y="154" textAnchor="middle">T₃</text>

            {/* Directed Edges */}
            <line x1="106" y1="40" x2="174" y2="40" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
            <line x1="90" y1="56" x2="90" y2="134" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
            <line x1="77" y1="48" x2="59" y2="96" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
            <line x1="102" y1="50" x2="180" y2="138" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
            <line x1="190" y1="56" x2="190" y2="134" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
          </svg>
        </div>
      )}

      {/* Assignment 7 Q2: Precedence Graph */}
      {type === 'asgn7-q2-graph' && (
        <div className="flex justify-center">
          <svg viewBox="0 0 280 180" className="w-full max-w-[260px] text-slate-800 dark:text-slate-200 text-xs font-bold font-sans">
            <defs>
              <marker id="arrowhead2" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6" fill="currentColor" />
              </marker>
            </defs>
            <circle cx="100" cy="45" r="16" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <text x="100" y="49" textAnchor="middle">T₁</text>

            <circle cx="200" cy="45" r="16" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <text x="200" y="49" textAnchor="middle">T₂</text>

            <circle cx="45" cy="115" r="16" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <text x="45" y="119" textAnchor="middle">T₅</text>

            <circle cx="100" cy="155" r="16" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <text x="100" y="159" textAnchor="middle">T₄</text>

            <circle cx="200" cy="155" r="16" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <text x="200" y="159" textAnchor="middle">T₃</text>

            {/* Edges: T4->T1, T1->T2, T1->T3, T1->T5, T2->T3 */}
            <line x1="100" y1="139" x2="100" y2="61" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrowhead2)" />
            <line x1="116" y1="45" x2="184" y2="45" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrowhead2)" />
            <line x1="112" y1="56" x2="188" y2="144" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrowhead2)" />
            <line x1="86" y1="53" x2="54" y2="101" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrowhead2)" />
            <line x1="200" y1="61" x2="200" y2="139" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrowhead2)" />
          </svg>
        </div>
      )}

      {/* Assignment 7 Q3: Wait-For Graphs (Options a, b, c, d) */}
      {type === 'asgn7-q3-waitfor' && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {(['a', 'b', 'c', 'd'] as const).map(opt => {
            const isCorrect = opt === 'c';
            return (
              <div key={opt} className={`p-2 rounded-xl border text-center ${isCorrect ? 'border-cyan-500/60 bg-cyan-50/40 dark:bg-cyan-950/20' : 'border-slate-200 dark:border-slate-800'}`}>
                <div className="text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1">Option ({opt})</div>
                <svg viewBox="0 0 140 140" className="w-full max-w-[120px] mx-auto text-slate-800 dark:text-slate-200 text-[10px] font-bold">
                  <defs>
                    <marker id={`arrow-${opt}`} markerWidth="6" markerHeight="5" refX="5" refY="2.5" orient="auto">
                      <polygon points="0 0, 6 2.5, 0 5" fill="currentColor" />
                    </marker>
                  </defs>
                  {/* Nodes */}
                  <circle cx="35" cy="30" r="13" fill="none" stroke="currentColor" strokeWidth="1.2" />
                  <text x="35" y="34" textAnchor="middle">T₁</text>

                  <circle cx="105" cy="30" r="13" fill="none" stroke="currentColor" strokeWidth="1.2" />
                  <text x="105" y="34" textAnchor="middle">T₂</text>

                  <circle cx="35" cy="110" r="13" fill="none" stroke="currentColor" strokeWidth="1.2" />
                  <text x="35" y="114" textAnchor="middle">T₄</text>

                  <circle cx="105" cy="110" r="13" fill="none" stroke="currentColor" strokeWidth="1.2" />
                  <text x="105" y="114" textAnchor="middle">T₃</text>

                  {/* Specific edges based on option in PDF */}
                  {opt === 'a' && (
                    <>
                      <line x1="35" y1="97" x2="35" y2="43" stroke="currentColor" strokeWidth="1.2" markerEnd={`url(#arrow-${opt})`} />
                      <line x1="95" y1="100" x2="45" y2="40" stroke="currentColor" strokeWidth="1.2" markerEnd={`url(#arrow-${opt})`} />
                      <line x1="105" y1="97" x2="105" y2="43" stroke="currentColor" strokeWidth="1.2" markerEnd={`url(#arrow-${opt})`} />
                      <line x1="48" y1="110" x2="92" y2="110" stroke="currentColor" strokeWidth="1.2" markerEnd={`url(#arrow-${opt})`} />
                    </>
                  )}
                  {opt === 'b' && (
                    <>
                      <line x1="35" y1="97" x2="35" y2="43" stroke="currentColor" strokeWidth="1.2" markerEnd={`url(#arrow-${opt})`} />
                      <line x1="95" y1="100" x2="45" y2="40" stroke="currentColor" strokeWidth="1.2" markerEnd={`url(#arrow-${opt})`} />
                      <line x1="105" y1="97" x2="105" y2="43" stroke="currentColor" strokeWidth="1.2" markerEnd={`url(#arrow-${opt})`} />
                      <line x1="92" y1="110" x2="48" y2="110" stroke="currentColor" strokeWidth="1.2" markerEnd={`url(#arrow-${opt})`} />
                    </>
                  )}
                  {opt === 'c' && (
                    <>
                      {/* Correct: T1->T3, T1->T4, T2->T3, T3->T4 */}
                      <line x1="45" y1="40" x2="95" y2="100" stroke="currentColor" strokeWidth="1.2" markerEnd={`url(#arrow-${opt})`} />
                      <line x1="35" y1="43" x2="35" y2="97" stroke="currentColor" strokeWidth="1.2" markerEnd={`url(#arrow-${opt})`} />
                      <line x1="105" y1="43" x2="105" y2="97" stroke="currentColor" strokeWidth="1.2" markerEnd={`url(#arrow-${opt})`} />
                      <line x1="92" y1="110" x2="48" y2="110" stroke="currentColor" strokeWidth="1.2" markerEnd={`url(#arrow-${opt})`} />
                    </>
                  )}
                  {opt === 'd' && (
                    <>
                      <line x1="35" y1="43" x2="35" y2="97" stroke="currentColor" strokeWidth="1.2" markerEnd={`url(#arrow-${opt})`} />
                      <line x1="45" y1="40" x2="95" y2="100" stroke="currentColor" strokeWidth="1.2" markerEnd={`url(#arrow-${opt})`} />
                      <line x1="105" y1="97" x2="105" y2="43" stroke="currentColor" strokeWidth="1.2" markerEnd={`url(#arrow-${opt})`} />
                      <line x1="48" y1="110" x2="92" y2="110" stroke="currentColor" strokeWidth="1.2" markerEnd={`url(#arrow-${opt})`} />
                    </>
                  )}
                </svg>
              </div>
            );
          })}
        </div>
      )}

      {/* Assignment 8 Q5: Checkpoint Timeline Diagram */}
      {type === 'asgn8-q5-checkpoint' && (
        <div className="flex justify-center">
          <svg viewBox="0 0 460 210" className="w-full max-w-[440px] text-slate-800 dark:text-slate-200 text-[10px] font-sans">
            <defs>
              <marker id="arrow-time" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6" fill="currentColor" />
              </marker>
            </defs>

            {/* Time arrow */}
            <line x1="30" y1="20" x2="420" y2="20" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow-time)" />

            {/* Check Point 1 Vertical Line */}
            <line x1="130" y1="18" x2="130" y2="175" stroke="currentColor" strokeWidth="2.5" />
            <text x="130" y="192" textAnchor="middle" fontWeight="bold">Check Point 1</text>

            {/* Check Point 2 Vertical Line */}
            <line x1="240" y1="18" x2="240" y2="175" stroke="currentColor" strokeWidth="2.5" />
            <text x="240" y="192" textAnchor="middle" fontWeight="bold">Check Point 2</text>

            {/* System Failure Vertical Line */}
            <line x1="350" y1="18" x2="350" y2="175" stroke="currentColor" strokeWidth="2.5" />
            <text x="350" y="192" textAnchor="middle" fontWeight="bold">System Failure</text>

            {/* Transaction T1: Starts before CP1, ends before CP1 */}
            <line x1="70" y1="38" x2="115" y2="38" stroke="currentColor" strokeWidth="2" />
            <line x1="70" y1="33" x2="70" y2="43" stroke="currentColor" strokeWidth="1.5" />
            <line x1="115" y1="33" x2="115" y2="43" stroke="currentColor" strokeWidth="1.5" />
            <text x="92" y="34" textAnchor="middle" fontWeight="bold">T1</text>

            {/* Transaction T2: Starts before CP1, ends after CP1 before CP2 */}
            <line x1="78" y1="65" x2="160" y2="65" stroke="currentColor" strokeWidth="2" />
            <line x1="78" y1="60" x2="78" y2="70" stroke="currentColor" strokeWidth="1.5" />
            <line x1="160" y1="60" x2="160" y2="70" stroke="currentColor" strokeWidth="1.5" />
            <text x="145" y="60" textAnchor="middle" fontWeight="bold">T2</text>

            {/* Transaction T3: Starts after CP1, ends before CP2 */}
            <line x1="145" y1="92" x2="225" y2="92" stroke="currentColor" strokeWidth="2" />
            <line x1="145" y1="87" x2="145" y2="97" stroke="currentColor" strokeWidth="1.5" />
            <line x1="225" y1="87" x2="225" y2="97" stroke="currentColor" strokeWidth="1.5" />
            <text x="175" y="87" textAnchor="middle" fontWeight="bold">T3</text>

            {/* Transaction T4: Starts before CP2, ends before Failure */}
            <line x1="218" y1="118" x2="335" y2="118" stroke="currentColor" strokeWidth="2" />
            <line x1="218" y1="113" x2="218" y2="123" stroke="currentColor" strokeWidth="1.5" />
            <line x1="335" y1="113" x2="335" y2="123" stroke="currentColor" strokeWidth="1.5" />
            <text x="288" y="113" textAnchor="middle" fontWeight="bold">T4</text>

            {/* Transaction T5: Starts after CP2, crosses System Failure */}
            <line x1="225" y1="145" x2="350" y2="145" stroke="currentColor" strokeWidth="2" />
            <line x1="225" y1="140" x2="225" y2="150" stroke="currentColor" strokeWidth="1.5" />
            <text x="280" y="140" textAnchor="middle" fontWeight="bold">T5</text>

            {/* Transaction T6: Starts before CP2, crosses System Failure */}
            <line x1="218" y1="168" x2="350" y2="168" stroke="currentColor" strokeWidth="2" />
            <line x1="218" y1="163" x2="218" y2="173" stroke="currentColor" strokeWidth="1.5" />
            <text x="270" y="163" textAnchor="middle" fontWeight="bold">T6</text>
          </svg>
        </div>
      )}

      {/* Assignment 8 Q6: Query Trees (Figure 1 and Figure 2) */}
      {type === 'asgn8-q6-trees' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Figure 1 */}
          <div className="border border-slate-200 dark:border-slate-800 rounded-xl p-3 text-center bg-slate-50/50 dark:bg-slate-900/40">
            <div className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">Figure 1:</div>
            <svg viewBox="0 0 200 230" className="w-full max-w-[190px] mx-auto text-slate-800 dark:text-slate-200 text-[10px] font-sans">
              <text x="100" y="20" textAnchor="middle" fontWeight="bold">Π vehicle_name, owner_name</text>
              <line x1="100" y1="26" x2="100" y2="50" stroke="currentColor" strokeWidth="1.5" />

              <text x="100" y="65" textAnchor="middle" fontWeight="bold">σ service_cost &gt; 5000</text>
              <line x1="100" y1="71" x2="100" y2="95" stroke="currentColor" strokeWidth="1.5" />

              <text x="100" y="112" textAnchor="middle" fontSize="16" fontWeight="bold">⨝</text>
              <line x1="100" y1="118" x2="100" y2="140" stroke="currentColor" strokeWidth="1.5" />
              <line x1="108" y1="115" x2="155" y2="160" stroke="currentColor" strokeWidth="1.5" />
              <text x="160" y="175" textAnchor="middle" fontWeight="bold">Owner</text>

              <text x="100" y="155" textAnchor="middle" fontSize="16" fontWeight="bold">⨝</text>
              <line x1="92" y1="158" x2="50" y2="200" stroke="currentColor" strokeWidth="1.5" />
              <line x1="108" y1="158" x2="145" y2="200" stroke="currentColor" strokeWidth="1.5" />
              <text x="45" y="215" textAnchor="middle" fontWeight="bold">Vehicle</text>
              <text x="145" y="215" textAnchor="middle" fontWeight="bold">Service_Record</text>
            </svg>
          </div>

          {/* Figure 2 */}
          <div className="border border-slate-200 dark:border-slate-800 rounded-xl p-3 text-center bg-slate-50/50 dark:bg-slate-900/40">
            <div className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">Figure 2:</div>
            <svg viewBox="0 0 200 230" className="w-full max-w-[190px] mx-auto text-slate-800 dark:text-slate-200 text-[10px] font-sans">
              <text x="100" y="20" textAnchor="middle" fontWeight="bold">Π vehicle_name, owner_name</text>
              <line x1="100" y1="26" x2="100" y2="55" stroke="currentColor" strokeWidth="1.5" />

              <text x="100" y="70" textAnchor="middle" fontSize="16" fontWeight="bold">⨝</text>
              <line x1="90" y1="73" x2="55" y2="110" stroke="currentColor" strokeWidth="1.5" />
              <line x1="110" y1="73" x2="160" y2="120" stroke="currentColor" strokeWidth="1.5" />
              <text x="165" y="135" textAnchor="middle" fontWeight="bold">Owner</text>

              <text x="55" y="125" textAnchor="middle" fontSize="16" fontWeight="bold">⨝</text>
              <line x1="45" y1="128" x2="25" y2="165" stroke="currentColor" strokeWidth="1.5" />
              <text x="25" y="180" textAnchor="middle" fontWeight="bold">Vehicle</text>

              <line x1="65" y1="128" x2="90" y2="150" stroke="currentColor" strokeWidth="1.5" />
              <text x="110" y="155" textAnchor="middle" fontWeight="bold">σ service_cost &gt; 5000</text>
              <line x1="110" y1="160" x2="110" y2="185" stroke="currentColor" strokeWidth="1.5" />
              <text x="110" y="200" textAnchor="middle" fontWeight="bold">Service_Record</text>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};
