/**
 * ADD A PRACTICE PROJECT
 * 1. Put its image in public/projects/ (JPG, PNG, or WebP).
 * 2. Copy one object inside practiceProjects.
 * 3. Change every field and give it the next number.
 * The grid and project detail panel update automatically.
 */

export type Project = {
  number: string;
  title: string;
  caption: string;
  className: string;
  image?: string;
  alt?: string;
  type: string;
  year: string;
  description: string;
  contribution: string;
  tools: string;
  credit?: string;
  featured?: boolean;
  gallery?: Array<{
    src: string;
    alt: string;
  }>;
};

export const practiceProjects: Project[] = [
  {
    number: "01",
    title: "The Century Zenith",
    caption: "Adaptive reuse · Chicago · Best Design Award",
    className: "visual-transit",
    image: "/projects/century-zenith.jpg",
    alt: "Street view rendering of The Century Zenith adaptive reuse project in Chicago",
    type: "Adaptive reuse / Student residence",
    year: "2025",
    description:
      "A 110-year-old Chicago landmark meets a new vertical art school residence. The preserved Century Building provides memory and weight; a transparent triangulated tower expresses the creative life within.",
    contribution:
      "Concept design, adaptive-reuse strategy, program development, plans, sections, parametric façade modeling and visualization.",
    tools: "Revit · AutoCAD · Twinmotion · Photoshop",
    credit: "M.Arch Graduate Studio 05 · SAIC",
    featured: true,
  },
  {
    number: "02",
    title: "More Tree",
    caption: "Garden center · Chicago · Best Design Award",
    className: "visual-mega",
    image: "/projects/more-tree.jpg",
    alt: "Landscape rendering of the More Tree garden center in downtown Chicago",
    type: "Landscape / Urban community",
    year: "2024",
    description:
      "A green-grey volume inserted among downtown towers: garden center, public landscape and sensory pause. Curved planted surfaces move between building and terrain to create an everyday urban refuge.",
    contribution:
      "Site research, landscape concept, spatial sequence, topographic modeling, architectural design and visual storytelling.",
    tools: "Rhino · AutoCAD · Twinmotion · Photoshop",
    credit: "M.Arch Graduate Studio 03 · SAIC",
  },
  {
    number: "03",
    title: "Wood Craft Centre",
    caption: "Exhibition + workshop · Jodhpur, India",
    className: "visual-threshold",
    image: "/projects/wood-craft.jpg",
    alt: "Physical model studies for a wood craft exhibition and workshop center in Jodhpur",
    type: "Cultural / Educational",
    year: "2019",
    description:
      "An exhibition and workshop complex for Jodhpur's woodcraft community. The project reinterprets the dense edges, shaded passages, plinths and terraces of the historic city.",
    contribution:
      "Urban-context study, concept and massing, program planning, material research, technical resolution and physical models.",
    tools: "AutoCAD · SketchUp · Physical models · Adobe Suite",
    credit: "B.Arch Studio 09 · Indus University",
  },
  {
    number: "04",
    title: "Sustainable Housing, Sikkim",
    caption: "Climate-responsive housing · Sikkim, India",
    className: "visual-earth",
    image: "/projects/sikkim-housing.jpg",
    alt: "Axonometric view of a sustainable housing community in Sikkim",
    type: "Housing / Environmental systems",
    year: "2018",
    description:
      "A neighborhood system shaped by Sikkim's steep terrain, heavy rainfall and seismic conditions. Modular homes, shared landscape and water strategies form a resilient collective settlement.",
    contribution:
      "Climate and terrain research, housing typologies, master planning, passive systems, phasing and technical drawings.",
    tools: "AutoCAD · SketchUp · Environmental analysis",
    credit: "B.Arch Studio 08 · Indus University",
  },
  {
    number: "05",
    title: "Mall of Saudi",
    caption: "Interior architecture + BIM · Riyadh · AECOM",
    className: "visual-district",
    image: "/projects/mall-of-saudi.jpg",
    alt: "BIM documentation and technical drawings prepared for Mall of Saudi",
    type: "Commercial / Interior architecture",
    year: "2023–24",
    description:
      "Selected work from a large multidisciplinary team delivering a major retail destination in Riyadh. The sample demonstrates interior detailing, coordinated documentation and BIM rigor at exceptional scale.",
    contribution:
      "Design-development packages, interior architectural documentation, Revit model coordination and multidisciplinary issue resolution.",
    tools: "Revit · BIM 360 · AutoCAD · Bluebeam",
    credit: "Professional work · AECOM",
    featured: true,
  },
  {
    number: "06",
    title: "AU McDowell Hall Renovation",
    caption: "Residence hall renewal · Washington, DC · AECOM",
    className: "visual-room",
    image: "/projects/mcdowell-hall.jpg",
    alt: "Revit model and renovation drawings for AU McDowell Hall in Washington DC",
    type: "Renovation / Student housing",
    year: "2023",
    description:
      "A renovation of American University's residence hall built from thirty-year-old record drawings. Existing conditions became a coordinated Revit model and a precise set for demolition and new construction.",
    contribution:
      "Existing-condition BIM, demolition and new-construction drawings, room and key schedules, consultant coordination and detailing.",
    tools: "Revit · AutoCAD · BIM coordination",
    credit: "Professional work · AECOM",
  },
];

export const skizProjects: Project[] = [
  {
    number: "S1",
    title: "Perception Is the First Architecture",
    caption: "Philosophy · Reality / observer",
    className: "visual-dream",
    type: "Thought fragment",
    year: "Ongoing",
    description:
      "There is only one reality in existence—the universe as it is. What differs from my version to yours is our perception of it.",
    contribution: "A growing set of notes on perception, truth and constructed reality.",
    tools: "Writing · Diagramming · Observation",
  },
  {
    number: "S2",
    title: "Playable Worlds",
    caption: "Collection · Games / systems",
    className: "visual-world",
    type: "Game design archive",
    year: "In progress",
    description:
      "Worlds where space does not sit still: environments, interaction rules and small systems that let architecture become playable.",
    contribution: "A home for your Unity, Unreal and interactive-environment experiments.",
    tools: "Unity · Unreal Engine · Blender",
  },
  {
    number: "S3",
    title: "Notes on Cities",
    caption: "Writing · Movement / encounter",
    className: "visual-city",
    type: "Creative writing",
    year: "Ongoing",
    description:
      "Observations from sidewalks, stations and tall buildings—writing about how cities look at us while we look back at them.",
    contribution: "Experiential essays, urban fragments and architectural criticism.",
    tools: "Writing · Photography · Field notes",
  },
  {
    number: "S4",
    title: "Digital Matter",
    caption: "Collection · 3D experiments",
    className: "visual-object",
    type: "Computational objects",
    year: "In progress",
    description:
      "Forms created to test what modeling tools want to become when they are released from the obligation to make a building.",
    contribution: "Procedural forms, simulations, impossible objects and visual studies.",
    tools: "Rhino · Grasshopper · Blender",
  },
  {
    number: "S5",
    title: "A Manual for Getting Lost",
    caption: "Interactive narrative · Routes / choices",
    className: "visual-lost",
    type: "Narrative system",
    year: "Prototype",
    description:
      "A shelf for nonlinear journeys: choices, maps, failures and detours that turn navigation into a form of storytelling.",
    contribution: "Interactive narratives and speculative game mechanics will live here.",
    tools: "World building · Story systems · Prototyping",
  },
  {
    number: "S6",
    title: "The Unfinished Shelf",
    caption: "Archive · Questions without clients",
    className: "visual-notes",
    type: "Open notebook",
    year: "Always",
    description:
      "Not every thought needs to become a polished project. This is where incomplete drawings, arguments and strange beginnings remain alive.",
    contribution: "An expandable archive for writing, sketches, audio, video and works in progress.",
    tools: "Everything useful · Nothing compulsory",
  },
];
