import AnimatedSection from "@/components/AnimatedSection";

const projects = [
  {
    name: "Automated Market Intelligence Platform",
    description:
      "Real-time competitive intelligence tool built for a live business using n8n, Lovable, and a custom database layer. Monitors competitor moves, funding activity, and industry trends. Owner uses it for investor prep and sales calls — replacing hours of manual research.",
    tags: ["Software", "n8n", "Automation", "AI"],
    year: "2024–present",
    category: "Software",
  },
  {
    name: "CLD-9 Automated Dosing Machine",
    description:
      "Designed and fabricated a custom automated supplement dosing machine from scratch for a consumer startup that won the CU New Venture Challenge. Machine accepted customer orders, then automatically dosed, filled, and sealed individual packets end-to-end. Built using CNC machining, 3D printing, and custom assembly.",
    tags: ["Hardware", "Startup", "Fabrication", "CNC"],
    year: "2024",
    category: "Startup",
  },
  {
    name: "Pumped Thermal Energy Storage (PTES)",
    description:
      "Led business model evaluation and legal research on grid integration for a modular long-duration energy storage concept at CU's Sustainability Hackathon. Pitched to judges and faculty alongside a multidisciplinary team.",
    tags: ["Energy", "Hackathon", "Business"],
    year: "2024",
    category: "Hackathon",
  },
  {
    name: "IoT Cellular Telemetry System",
    description:
      "Integrated SIM7000A LTE/GPS module with Arduino for remote data transmission in low-connectivity environments. Independently debugged serial communication failures and shipped a reliable end-to-end system.",
    tags: ["Hardware", "IoT", "Arduino"],
    year: "2024",
    category: "Hardware",
  },
  {
    name: "Caseworker Communication Device",
    description:
      "Embedded device for social workers with secure messaging and an integrated SOS system for sending emergency alerts directly to caseworkers.",
    tags: ["Embedded", "Hardware"],
    year: "2023",
    category: "Hardware",
  },
  {
    name: "Bike Alarm System",
    description:
      "Motion-sensing security system that triggers automatically when a bicycle is moved. Silently disarmed via RFID key fob.",
    tags: ["Hardware", "Electronics"],
    year: "2023",
    category: "Hardware",
  },
  {
    name: "Automatic Plant Watering System",
    description:
      "Low-power irrigation system using a homemade capacitive moisture sensor. Automatically waters when soil dryness reaches a threshold.",
    tags: ["Hardware", "Electronics"],
    year: "2022",
    category: "Hardware",
  },
];

export default function Projects() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <AnimatedSection>
        <h1
          className="text-4xl font-serif font-semibold text-[#1a1714] mb-3"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Projects
        </h1>
        <p className="text-[#6b6560] mb-14">
          Things I&apos;ve built — hardware, software, and somewhere in between.
        </p>
      </AnimatedSection>

      <div className="flex flex-col gap-4">
        {projects.map((project, i) => (
          <AnimatedSection key={project.name} delay={i * 0.06}>
            <div className="border border-[#d4cdc4] bg-[#ede8df] rounded-lg p-6 hover:-translate-y-0.5 transition-transform duration-200">
              <div className="flex items-start justify-between gap-4 mb-2">
                <h2
                  className="font-serif font-semibold text-[#1a1714] text-lg leading-snug"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {project.name}
                </h2>
                <span className="text-xs text-[#6b6560] whitespace-nowrap mt-1">
                  {project.year}
                </span>
              </div>
              <p className="text-sm text-[#6b6560] leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex gap-2 flex-wrap">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-full border border-[#d4cdc4] text-[#6b6560]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
