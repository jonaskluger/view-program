// Conference sessions data extracted from the schedule
const sessionsData = [
  {
    id: 1,
    title: "Learn the History of Visual Effects",
    type: "workshop",
    date: "2025-10-12",
    time: "09:00-12:00",
    location: "ITS 1",
    speakers: ["Ian Failes"],
    description:
      "3-Hour Workshop exploring the evolution of visual effects in cinema",
    categories: ["vfx"],
    tags: ["history", "vfx", "cinema"],
  },
  {
    id: 2,
    title:
      "Aspects of Visualization with Unreal Engine: Hands-On Pre-Viz and Post-Viz",
    type: "workshop",
    date: "2025-10-12",
    time: "09:00-16:30",
    location: "ITS 2",
    speakers: ["Oleg Fryazinov"],
    description:
      "6 hour Workshop covering Pre-Visualization and Post-Visualization techniques with Unreal Engine",
    categories: ["technology", "vfx"],
    tags: ["unreal engine", "previz", "postviz", "visualization"],
  },
  {
    id: 3,
    title: "Gaussian Splatting for Production",
    type: "workshop",
    date: "2025-10-12",
    time: "12:15-16:15",
    location: "ITS 1",
    speakers: ["Eloi Champagne"],
    description:
      "Advanced workshop on using Gaussian Splatting techniques in production environments",
    categories: ["technology", "rendering"],
    tags: ["gaussian splatting", "rendering", "production"],
  },
  {
    id: 4,
    title: "Katana: From MultiShot to MultiStyle",
    type: "workshop",
    date: "2025-10-12",
    time: "09:00-11:00",
    location: "ITS 13",
    speakers: ["Christos Obretenov", "Ernst Janssen Groesbeek"],
    description:
      "Workshop covering advanced Katana techniques for stylized rendering workflows",
    categories: ["rendering", "technology"],
    tags: ["katana", "rendering", "stylized", "lookdev"],
  },
  {
    id: 5,
    title:
      "Stylized Rendering: Two Approaches From 2D Artwork to 3D and Back Again",
    type: "workshop",
    date: "2025-10-12",
    time: "13:15-16:15",
    location: "ITS 13",
    speakers: [
      "Christos Obretenov",
      "Ernst Janssen Groesbeek",
      "Denver Jackson",
    ],
    description:
      "Explore different approaches to stylized rendering from concept to final output",
    categories: ["rendering", "animation"],
    tags: ["stylized", "rendering", "2d", "3d", "pipeline"],
  },
  {
    id: 6,
    title: "Code to Creation: Modern Tools for the Solo Artist",
    type: "masterclass",
    date: "2025-10-12",
    time: "13:45-15:45",
    location: "ITS TEATRO",
    speakers: ["Boyan Georgiev"],
    description:
      "Masterclass on modern technical tools and workflows for independent artists",
    categories: ["technology", "production"],
    tags: ["tools", "workflow", "independent", "coding"],
  },
  {
    id: 7,
    title: "Code Meets Creativity: A Creative's Journey into Tech",
    type: "workshop",
    date: "2025-10-12",
    time: "09:00-11:00",
    location: "ITS TEATRO",
    speakers: ["Jonas Kluger"],
    description:
      "Workshop bridging the gap between creative work and technical implementation",
    categories: ["technology", "production"],
    tags: ["coding", "creativity", "technology", "career"],
  },
  {
    id: 8,
    title: "Particles & Fluids in Motion: Exploring VFX with Unreal Engine",
    type: "workshop",
    date: "2025-10-12",
    time: "11:15-17:15",
    location: "ITS 10",
    speakers: ["Christian Tagliapietra"],
    description:
      "Advanced workshop on particle and fluid systems in Unreal Engine for VFX",
    categories: ["vfx", "technology"],
    tags: ["particles", "fluids", "unreal engine", "vfx", "simulation"],
  },
  {
    id: 9,
    title: "Virtual Production",
    type: "workshop",
    date: "2025-10-13",
    time: "09:00-15:00",
    location: "ITS 15",
    speakers: ["Habib Zargarpour"],
    description:
      "Comprehensive workshop on virtual production techniques and workflows",
    categories: ["production", "technology"],
    tags: ["virtual production", "led walls", "realtime", "cinematography"],
  },
  {
    id: 10,
    title: "Stylized Worlds with RenderMan XPU: A Creative Workshop",
    type: "workshop",
    date: "2025-10-13",
    time: "12:15-14:15",
    location: "ITS 3",
    speakers: ["Dylan Sisson"],
    description:
      "Creative workshop using RenderMan XPU for stylized world creation",
    categories: ["rendering", "animation"],
    tags: ["renderman", "xpu", "stylized", "world building"],
  },
  {
    id: 11,
    title: "The Bad Guys 2",
    type: "talk",
    date: "2025-10-14",
    time: "09:00-10:00",
    location: "FUCINE",
    speakers: ["Matt Baer", "Pierre Perifel"],
    description:
      "Behind the scenes of The Bad Guys 2 VFX and animation production at Dreamworks",
    categories: ["animation", "vfx"],
    tags: ["dreamworks", "animation", "vfx", "production"],
  },
  {
    id: 12,
    title: "Wicked: For Good (Premiere Talk)",
    type: "talk",
    date: "2025-10-14",
    time: "10:15-11:15",
    location: "FUCINE",
    speakers: ["Dale Newton", "Pablo Helman"],
    description:
      "Premiere presentation of VFX work on Wicked featuring Framestore and ILM",
    categories: ["vfx"],
    tags: ["wicked", "musical", "framestore", "ilm", "vfx"],
  },
  {
    id: 13,
    title: "Beyond Prompts: Unlocking Creative Collaboration with AI Agents",
    type: "talk",
    date: "2025-10-14",
    time: "14:00-15:00",
    location: "FUCINE",
    speakers: ["Rick Champagne"],
    description:
      "Exploring advanced AI collaboration techniques beyond simple prompting",
    categories: ["ai", "technology"],
    tags: ["ai", "collaboration", "agents", "nvidia"],
  },
  {
    id: 14,
    title: "Transforming Creativity: How AI Can Elevate Your Ideas",
    type: "masterclass",
    date: "2025-10-14",
    time: "12:45-13:45",
    location: "MEZZANINO",
    speakers: ["Habib Zargarpour"],
    description: "Masterclass on leveraging AI tools for creative enhancement",
    categories: ["ai", "technology"],
    tags: ["ai", "creativity", "tools", "enhancement"],
  },
  {
    id: 15,
    title:
      "Beyond the Frame: 50 Years of ILM and the Next Era of Visual Storytelling",
    type: "talk",
    date: "2025-10-14",
    time: "15:15-16:15",
    location: "FUCINE",
    speakers: ["Janet Lewin", "Ian Failes"],
    description:
      "Celebrating ILM's 50-year legacy and looking ahead to future innovations",
    categories: ["vfx", "production"],
    tags: ["ilm", "history", "innovation", "storytelling"],
  },
  {
    id: 16,
    title:
      "Anatomy of a Battle: Rook's Rest and The Dance of Dragons in House of the Dragon Season 2",
    type: "talk",
    date: "2025-10-14",
    time: "16:15-17:15",
    location: "BINARIO3",
    speakers: ["Claudia Marvisi"],
    description:
      "Technical breakdown of complex VFX sequences from House of the Dragon Season 2",
    categories: ["vfx"],
    tags: ["house of dragon", "vfx", "creatures", "pixomondo"],
  },
  {
    id: 17,
    title: "SENTINEL and AI: Know Your Foe!",
    type: "panel",
    date: "2025-10-14",
    time: "16:30-17:30",
    location: "FUCINE",
    speakers: [
      "Phil Tippett",
      "Gary Mundell",
      "Mark Dubeau",
      "Tom Gibbons",
      "Marc Morissette",
    ],
    description:
      "Panel discussion on AI's impact on the animation and VFX industry",
    categories: ["ai", "animation"],
    tags: ["ai", "tippett", "stop motion", "industry"],
  },
  {
    id: 18,
    title:
      "A Minecraft Movie: How the Virtual Art Department Enabled Real-Time Collaboration with Unreal Engine",
    type: "talk",
    date: "2025-10-14",
    time: "16:30-17:30",
    location: "MEZZANINO",
    speakers: ["Talia Finlayson"],
    description:
      "Case study on virtual art department workflows using Unreal Engine",
    categories: ["production", "technology"],
    tags: ["minecraft", "unreal engine", "virtual art department", "realtime"],
  },
  {
    id: 19,
    title:
      "Stitching It Together: Embracing Chaos in Crafting VFX for Live-Action Lilo & Stitch",
    type: "talk",
    date: "2025-10-15",
    time: "09:00-10:00",
    location: "FUCINE",
    speakers: ["Craig Hammack"],
    description:
      "VFX challenges and solutions for the live-action Lilo & Stitch adaptation",
    categories: ["vfx"],
    tags: ["lilo stitch", "live action", "ilm", "character animation"],
  },
  {
    id: 20,
    title: "Fantastic Four: First Steps",
    type: "talk",
    date: "2025-10-15",
    time: "10:15-11:15",
    location: "FUCINE",
    speakers: ["Daniele Bigi"],
    description: "VFX breakdown of Fantastic Four: First Steps from ILM",
    categories: ["vfx"],
    tags: ["fantastic four", "marvel", "ilm", "superhero"],
  },
  {
    id: 21,
    title: "The Splat Frontier: Experimenting with 3D Gaussian Splatting",
    type: "talk",
    date: "2025-10-15",
    time: "10:15-11:15",
    location: "BINARIO3",
    speakers: ["Eloi Champagne"],
    description:
      "Exploring cutting-edge 3D Gaussian Splatting techniques and applications",
    categories: ["technology", "rendering"],
    tags: ["gaussian splatting", "3d", "nfb", "innovation"],
  },
  {
    id: 22,
    title: "Capturing the Human Essence: Advances in 3D & 4D Scanning",
    type: "talk",
    date: "2025-10-15",
    time: "11:30-12:30",
    location: "BINARIO3",
    speakers: ["Jingyi Zhang"],
    description:
      "Latest advances in human capture technology for digital humans",
    categories: ["technology", "vfx"],
    tags: ["scanning", "digital humans", "3d", "4d", "capture"],
  },
  {
    id: 23,
    title: "Advancing Visualization with Gaussian Splats in Feature Film",
    type: "talk",
    date: "2025-10-15",
    time: "12:45-13:45",
    location: "MEZZANINO",
    speakers: ["Pawl Fulker"],
    description:
      "Application of Gaussian Splatting in feature film visualization workflows",
    categories: ["technology", "vfx"],
    tags: ["gaussian splatting", "visualization", "feature film", "previz"],
  },
  {
    id: 24,
    title: "Caws & Effects: Wednesday Season 2",
    type: "talk",
    date: "2025-10-15",
    time: "13:30-14:30",
    location: "FUCINE",
    speakers: ["Kevin Buessecker", "Jethro Au"],
    description:
      "VFX breakdown of Wednesday Season 2 featuring Rocket Science VFX work",
    categories: ["vfx"],
    tags: ["wednesday", "netflix", "vfx", "tv series"],
  },
  {
    id: 25,
    title:
      "Small but Mighty: Getting Things Done with the Latest Tech, Tools & Small Teams",
    type: "panel",
    date: "2025-10-15",
    time: "14:00-15:00",
    location: "MEZZANINO",
    speakers: ["Andreas Maaninka", "John Canning", "Fulvio Sestito"],
    description:
      "Panel on leveraging new technology for efficient small team workflows",
    categories: ["technology", "production"],
    tags: ["small teams", "efficiency", "tools", "workflow"],
  },
  {
    id: 26,
    title: "Behind the Wheel of F1's Invisible VFX",
    type: "talk",
    date: "2025-10-15",
    time: "14:45-15:45",
    location: "FUCINE",
    speakers: ["Ryan Tudhope"],
    description: "Hidden VFX work in Formula 1 movie production at Framestore",
    categories: ["vfx"],
    tags: ["f1", "invisible vfx", "framestore", "racing"],
  },
  {
    id: 27,
    title: "From Location to Virtual Set: From Call Time to Render Time",
    type: "talk",
    date: "2025-10-15",
    time: "15:15-16:15",
    location: "BINARIO3",
    speakers: ["Andreas Maaninka"],
    description:
      "Transition from traditional filming to virtual production workflows",
    categories: ["production", "technology"],
    tags: ["virtual production", "sets", "workflow", "filming"],
  },
  {
    id: 28,
    title: "Creating the Spaceport Environment for Dune: Prophecy",
    type: "talk",
    date: "2025-10-15",
    time: "16:30-17:30",
    location: "BINARIO3",
    speakers: ["Apollonia Hartmann", "David Anastacio"],
    description: "Environment creation and VFX work for Dune: Prophecy",
    categories: ["vfx", "production"],
    tags: ["dune", "environment", "accenture song", "hbo"],
  },
  {
    id: 29,
    title: "When Worlds Collide: Bridging the Grid and Reality in TRON: Ares",
    type: "talk",
    date: "2025-10-15",
    time: "18:30-19:30",
    location: "FUCINE",
    speakers: ["David Seager"],
    description:
      "VFX production challenges in creating the TRON: Ares digital world",
    categories: ["vfx"],
    tags: ["tron", "digital world", "ilm", "visual effects"],
  },
  {
    id: 30,
    title: "Elio",
    type: "talk",
    date: "2025-10-16",
    time: "09:00-10:00",
    location: "FUCINE",
    speakers: ["Domee Shi", "Madeline Sharafian"],
    description: "Behind the scenes of Pixar's Elio animation and production",
    categories: ["animation"],
    tags: ["pixar", "elio", "animation", "production"],
  },
  {
    id: 31,
    title: "In Your Dreams (Premiere Talk)",
    type: "talk",
    date: "2025-10-16",
    time: "10:15-11:15",
    location: "FUCINE",
    speakers: ["Sacha Kapijimpanga", "Nicky Lavender", "Alex Woo"],
    description:
      "Premiere presentation of Sony Pictures Imageworks' In Your Dreams",
    categories: ["animation", "vfx"],
    tags: ["sony imageworks", "animation", "dreams", "production"],
  },
  {
    id: 32,
    title: "Creating Worlds: The Art and Design of Avatar",
    type: "talk",
    date: "2025-10-16",
    time: "11:30-12:30",
    location: "FUCINE",
    speakers: ["Dylan Cole"],
    description:
      "Production design insights from Avatar: The Way of Water & Avatar: Fire and Ash",
    categories: ["vfx", "production"],
    tags: ["avatar", "production design", "world building", "cameron"],
  },
  {
    id: 33,
    title: "To Infinity… and RenderMan XPU!",
    type: "talk",
    date: "2025-10-16",
    time: "12:45-13:45",
    location: "FUCINE",
    speakers: ["Dylan Sisson"],
    description: "Technical presentation on RenderMan XPU rendering technology",
    categories: ["rendering", "technology"],
    tags: ["renderman", "xpu", "pixar", "rendering"],
  },
  {
    id: 34,
    title:
      "The Rings of Power Season 2: Bringing life to Middle Earth Creatures",
    type: "talk",
    date: "2025-10-16",
    time: "12:45-13:45",
    location: "BINARIO3",
    speakers: ["Ara Khanikian"],
    description:
      "Creature animation and VFX work for The Rings of Power Season 2",
    categories: ["vfx", "animation"],
    tags: ["rings of power", "creatures", "rodeo fx", "middle earth"],
  },
  {
    id: 35,
    title: "What Remains in the Ruins: The VFX of 'The Last of Us - Season 2'",
    type: "talk",
    date: "2025-10-16",
    time: "14:00-15:00",
    location: "TECA B",
    speakers: ["Melaina Mace", "Roberto Rodricks"],
    description:
      "VFX breakdown of The Last of Us Season 2 apocalyptic environments",
    categories: ["vfx"],
    tags: ["last of us", "dneg", "apocalyptic", "environments"],
  },
  {
    id: 36,
    title:
      "The Future of Content Security: Protecting Creative IP and Stopping Hackers with Superfile",
    type: "talk",
    date: "2025-10-16",
    time: "14:45-15:45",
    location: "FUCINE",
    speakers: ["Shane Valdez", "Jake Maymudes"],
    description:
      "Technical solutions for protecting creative content and intellectual property",
    categories: ["technology", "production"],
    tags: ["security", "ip protection", "superfile", "cybersecurity"],
  },
  {
    id: 37,
    title: "The VFX of the The Penguin (HBO)",
    type: "talk",
    date: "2025-10-16",
    time: "16:00-17:00",
    location: "FUCINE",
    speakers: ["Johnny Han", "Goran Pavles", "Eugene Bondar"],
    description: "VFX production breakdown of The Penguin HBO series",
    categories: ["vfx"],
    tags: ["penguin", "hbo", "gotham", "vfx", "tv series"],
  },
  {
    id: 38,
    title:
      '"Sinners" VFX: Photochemical Soul, Digital Craft: Twinned & Twisted Southern Blues Gangster Western',
    type: "talk",
    date: "2025-10-16",
    time: "17:15-18:15",
    location: "FUCINE",
    speakers: [
      "Michael Ralla",
      "Guido Wolter",
      "Espen Nordahl",
      "Antoine Moulineau",
    ],
    description:
      "Complex VFX work blending practical and digital techniques for Sinners",
    categories: ["vfx"],
    tags: ["sinners", "photochemical", "digital craft", "western"],
  },
  {
    id: 39,
    title:
      "The Co-Pilots of Creativity: From Concept to Screen, Unlocking Potential Through AI & Technology",
    type: "masterclass",
    date: "2025-10-16",
    time: "17:45-19:15",
    location: "BINARIO3",
    speakers: ["Setareh Samandari", "Habib Zargarpour"],
    description: "Extended masterclass on AI-assisted creative workflows",
    categories: ["ai", "technology"],
    tags: ["ai", "creativity", "workflow", "interdimensional vfx"],
  },
  {
    id: 40,
    title: "How to Train Your Dragon",
    type: "talk",
    date: "2025-10-17",
    time: "09:00-10:00",
    location: "FUCINE",
    speakers: ["Christian Mänz", "Dean DeBlois", "Glen McIntosh"],
    description:
      "VFX and animation production of How to Train Your Dragon at Framestore",
    categories: ["animation", "vfx"],
    tags: ["how to train dragon", "framestore", "dreamworks", "animation"],
  },
  {
    id: 41,
    title: "The Cat in the Hat (2026) (Premiere Talk)",
    type: "talk",
    date: "2025-10-17",
    time: "10:15-11:15",
    location: "FUCINE",
    speakers: ["Alessandro Carloni"],
    description:
      "Premiere presentation of Warner Bros Animation's Cat in the Hat 2026",
    categories: ["animation"],
    tags: ["cat in hat", "warner bros", "animation", "2026"],
  },
  {
    id: 42,
    title: "Jurassic World: Rebirth",
    type: "talk",
    date: "2025-10-17",
    time: "11:30-12:30",
    location: "FUCINE",
    speakers: ["David Vickery"],
    description: "VFX production insights from Jurassic World: Rebirth at ILM",
    categories: ["vfx"],
    tags: ["jurassic world", "dinosaurs", "ilm", "creatures"],
  },
  {
    id: 43,
    title:
      "Directing GenAI Tools for Real World Productions: Fashion Industry Video Case Study",
    type: "talk",
    date: "2025-10-17",
    time: "11:30-12:30",
    location: "BINARIO3",
    speakers: ["Srikanth Srinivasan"],
    description:
      "Practical application of generative AI in fashion industry video production",
    categories: ["ai", "production"],
    tags: ["generative ai", "fashion", "production", "case study"],
  },
  {
    id: 44,
    title: "Interactive Samurai Cinema in Ghost of Yotei",
    type: "talk",
    date: "2025-10-17",
    time: "12:45-13:45",
    location: "FUCINE",
    speakers: ["Nathan Fox"],
    description:
      "Creative direction and technical innovation in Ghost of Yotei game cinematics",
    categories: ["game", "technology"],
    tags: ["ghost of yotei", "sucker punch", "cinematics", "samurai"],
  },
  {
    id: 45,
    title: "Creator's Tools: Innovation at Eyeline",
    type: "talk",
    date: "2025-10-17",
    time: "12:45-13:45",
    location: "BINARIO3",
    speakers: ["Kevin Baillie"],
    description: "Innovative tools and workflows developed at Eyeline Studios",
    categories: ["technology", "production"],
    tags: ["eyeline", "tools", "innovation", "workflow"],
  },
  {
    id: 46,
    title: "My 50 Years with ILM",
    type: "talk",
    date: "2025-10-17",
    time: "14:00-15:00",
    location: "FUCINE",
    speakers: ["Hal Hickel"],
    description:
      "Career retrospective and industry insights from 50 years at ILM",
    categories: ["vfx", "animation"],
    tags: ["ilm", "career", "history", "animation"],
  },
  {
    id: 47,
    title: "The Sandman: Crafting the Dreaming",
    type: "talk",
    date: "2025-10-17",
    time: "14:00-15:00",
    location: "BINARIO3",
    speakers: ["Martin Pelletier"],
    description:
      "VFX work creating the dream world environments for The Sandman",
    categories: ["vfx"],
    tags: ["sandman", "rodeo fx", "dreaming", "environments"],
  },
  {
    id: 48,
    title:
      "Superman: Building Superdog, Crafting Crystalline Fortress of Solitude, Pioneering 4D Gaussian Splat",
    type: "talk",
    date: "2025-10-17",
    time: "15:15-16:15",
    location: "FUCINE",
    speakers: ["Stéphane Nazé"],
    description:
      "Cutting-edge VFX techniques for Superman including 4D Gaussian Splatting",
    categories: ["vfx", "technology"],
    tags: ["superman", "gaussian splatting", "framestore", "fortress"],
  },
  {
    id: 49,
    title: "The Filmmaker and the Machine: AI, Cinema, and Real-Time 3D Worlds",
    type: "talk",
    date: "2025-10-17",
    time: "15:15-16:15",
    location: "BINARIO3",
    speakers: ["Dimitri Vallein"],
    description:
      "Exploration of AI's role in creating real-time 3D cinematic experiences",
    categories: ["ai", "technology"],
    tags: ["ai", "cinema", "realtime", "3d worlds"],
  },
  {
    id: 50,
    title: "Making It (Look) Big in Movies",
    type: "talk",
    date: "2025-10-17",
    time: "16:30-17:30",
    location: "FUCINE",
    speakers: ["Ian Hunter"],
    description:
      "Miniature and practical effects techniques from New Deal Studios",
    categories: ["vfx", "production"],
    tags: ["miniatures", "practical effects", "new deal studios", "scale"],
  },
  {
    id: 51,
    title: "Deep-Dive Procreate",
    type: "workshop",
    date: "2025-10-12",
    time: "09:00-13:00",
    location: "ITS 4",
    speakers: ["Kyle T. Webster"],
    description:
      "4-Hour Workshop on advanced Procreate techniques and digital illustration",
    categories: ["art", "technology"],
    tags: ["procreate", "digital art", "illustration", "drawing"],
  },
  {
    id: 52,
    title: "Creating the World of Game of Thrones: Environment Concept Art",
    type: "workshop",
    date: "2025-10-12",
    time: "09:00-16:30",
    location: "ITS 8",
    speakers: ["Kieran Belshaw"],
    description:
      "Environment concept art workshop based on Game of Thrones world-building",
    categories: ["art", "concept"],
    tags: ["game of thrones", "concept art", "environment", "fantasy"],
  },
  {
    id: 53,
    title: "From Zero to Hero",
    type: "workshop",
    date: "2025-10-12",
    time: "09:00-16:30",
    location: "ITS 9",
    speakers: ["Gennaro Esposito"],
    description: "Comprehensive workshop for beginners in 3D and digital arts",
    categories: ["education", "3d"],
    tags: ["beginner", "3d", "digital shark", "training"],
  },
  {
    id: 54,
    title: "Sketching! Create the Line Before The Code",
    type: "workshop",
    date: "2025-10-12",
    time: "09:00-16:30",
    location: "ITS 12",
    speakers: ["Michael Coldewey"],
    description:
      "Foundation workshop on concept art, drawing and design principles",
    categories: ["art", "concept"],
    tags: ["sketching", "concept art", "drawing", "design"],
  },
  {
    id: 55,
    title:
      "Designing for the Mind: A Dive into Product Psychology in UX and Product Design",
    type: "workshop",
    date: "2025-10-12",
    time: "09:00-13:00",
    location: "ITS 14",
    speakers: ["Riccardo Russiano"],
    description:
      "UX and product design workshop focusing on psychological principles",
    categories: ["design", "ux"],
    tags: ["ux design", "psychology", "product design", "user experience"],
  },
  {
    id: 56,
    title: "How to Make a Creature: Mastering Secondary and Tertiary Details",
    type: "workshop",
    date: "2025-10-12",
    time: "09:00-16:30",
    location: "ITS 15",
    speakers: ["Andrea Salvatori"],
    description:
      "Advanced creature creation workshop focusing on detailed modeling",
    categories: ["3d", "vfx"],
    tags: ["creature", "modeling", "details", "3d art"],
  },
  {
    id: 57,
    title: "Showreel Clinic: Bring Yours to Get Feedback",
    type: "clinic",
    date: "2025-10-12",
    time: "09:00-10:00",
    location: "SALA POLIFUNZIONALE",
    speakers: ["Saint Walker"],
    description: "Interactive session for showreel review and feedback",
    categories: ["career", "education"],
    tags: ["showreel", "portfolio", "feedback", "career"],
  },
  {
    id: 58,
    title: "Portfolio Reviews: 3D Animation, 3D Generalists",
    type: "portfolio",
    date: "2025-10-12",
    time: "10:15-11:15",
    location: "SALA POLIFUNZIONALE",
    speakers: ["Brenda Ximena Roldan Romero", "Ethan Francis"],
    description:
      "Portfolio review session for 3D animation and generalist work",
    categories: ["career", "animation"],
    tags: ["portfolio", "3d animation", "dneg", "career advice"],
  },
  {
    id: 59,
    title: "Evolve from Seeing to Vision, from Watching to Storytelling",
    type: "workshop",
    date: "2025-10-12",
    time: "10:30-17:30",
    location: "ITS 3",
    speakers: ["Asa Mathat"],
    description:
      "Photography and visual storytelling workshop by award-winning photographer",
    categories: ["photography", "art"],
    tags: ["photography", "storytelling", "vision", "composition"],
  },
  {
    id: 60,
    title: "Making the Most of Your Showreel in an Age of AI",
    type: "talk",
    date: "2025-10-12",
    time: "11:15-12:15",
    location: "ITS TEATRO",
    speakers: ["Saint Walker"],
    description: "Adapting showreels and portfolios for the AI era",
    categories: ["career", "ai"],
    tags: ["showreel", "ai", "career", "portfolio"],
  },
  {
    id: 61,
    title: "Animating with Purpose: Finding Your Voice in Big Productions",
    type: "talk",
    date: "2025-10-12",
    time: "11:30-12:30",
    location: "SALA POLIFUNZIONALE",
    speakers: ["Brenda Ximena Roldan Romero"],
    description:
      "Finding your artistic voice while working on large animation productions",
    categories: ["animation", "career"],
    tags: ["animation", "artistic voice", "dneg", "production"],
  },
  {
    id: 62,
    title: "Portfolio Reviews",
    type: "portfolio",
    date: "2025-10-12",
    time: "12:30-13:30",
    location: "ITS TEATRO",
    speakers: ["Saint Walker"],
    description: "General portfolio review session",
    categories: ["career", "education"],
    tags: ["portfolio", "review", "feedback"],
  },
  {
    id: 63,
    title: "The Evolving VFX Landscape",
    type: "panel",
    date: "2025-10-12",
    time: "12:45-13:45",
    location: "SALA POLIFUNZIONALE",
    speakers: ["Mara Froehlich", "Hayley Miller", "Heike Kluger"],
    description:
      "Panel discussion on current trends and future of the VFX industry",
    categories: ["vfx", "industry"],
    tags: ["vfx industry", "trends", "future", "business"],
  },
  {
    id: 64,
    title: "Using Reference with Purpose – From Footage to Performance",
    type: "workshop",
    date: "2025-10-12",
    time: "13:15-16:15",
    location: "ITS 4",
    speakers: ["Alexis Wanneroy"],
    description:
      "Animation workshop on using reference footage for character performance",
    categories: ["animation"],
    tags: ["animation", "reference", "performance", "fortiche"],
  },
  {
    id: 65,
    title: "Shaping Brand Stories, VFX in Advertising",
    type: "talk",
    date: "2025-10-12",
    time: "14:00-15:00",
    location: "SALA POLIFUNZIONALE",
    speakers: ["Kate Gabriel"],
    description: "VFX applications in advertising and brand storytelling",
    categories: ["vfx", "advertising"],
    tags: ["advertising", "brand", "commercial vfx"],
  },
  {
    id: 66,
    title: "The Purpose and Principles of Architecture",
    type: "workshop",
    date: "2025-10-12",
    time: "15:15-16:15",
    location: "SALA POLIFUNZIONALE",
    speakers: ["Matthias Buehler"],
    description: "Architecture principles applied to digital world building",
    categories: ["architecture", "design"],
    tags: ["architecture", "design principles", "world building"],
  },
  {
    id: 67,
    title: "Bridging the Gap between Education and Industry",
    type: "talk",
    date: "2025-10-12",
    time: "15:30-16:30",
    location: "ITS 14",
    speakers: ["Morten Thorning"],
    description: "Connecting educational programs with industry needs",
    categories: ["education", "career"],
    tags: ["education", "industry", "career", "training"],
  },
  {
    id: 68,
    title: "Ask Me Anything About Character Animation for VFX (2025)",
    type: "ama",
    date: "2025-10-12",
    time: "16:00-17:00",
    location: "ITS TEATRO",
    speakers: ["Hal Hickel"],
    description: "Q&A session with ILM's Oscar-winning animation director",
    categories: ["animation", "vfx"],
    tags: ["character animation", "ilm", "oscar winner", "q&a"],
  },
  {
    id: 69,
    title: "From Animation to Reality: Bringing an animated character to life!",
    type: "talk",
    date: "2025-10-12",
    time: "16:30-17:30",
    location: "SALA POLIFUNZIONALE",
    speakers: ["Alexis Wanneroy", "Stuart Ward"],
    description: "Process of translating animated characters to live action",
    categories: ["animation", "vfx"],
    tags: ["character animation", "live action", "translation"],
  },
  {
    id: 70,
    title: "Beyond VFX: Hidden Career Gems",
    type: "ama",
    date: "2025-10-12",
    time: "17:15-18:15",
    location: "ITS TEATRO",
    speakers: [
      "Kate Gabriel",
      "Beata Parczewska",
      "Boyan Georgiev",
      "Agata M. Soccini",
      "Eva Krpanov",
    ],
    description:
      "Exploring alternative career paths in the digital arts industry",
    categories: ["career"],
    tags: ["career paths", "alternative careers", "industry"],
  },
  {
    id: 71,
    title: "Career Advice: My First Job and What I Learned",
    type: "masterclass",
    date: "2025-10-12",
    time: "17:45-18:45",
    location: "SALA POLIFUNZIONALE",
    speakers: [
      "Hal Hickel",
      "Saint Walker",
      "Eloi Champagne",
      "Jan-Bart van Beek",
      "Alexis Wanneroy",
    ],
    description:
      "Industry veterans share their early career experiences and lessons learned",
    categories: ["career"],
    tags: ["career advice", "first job", "industry veterans"],
  },
  {
    id: 72,
    title: "More Than Pixels: A Friendship's Guide to a Long Career in VFX",
    type: "ama",
    date: "2025-10-12",
    time: "18:30-19:30",
    location: "ITS TEATRO",
    speakers: ["Filippo Robino", "Roberto Rodricks"],
    description: "Long-term career perspective in VFX from industry friends",
    categories: ["career", "vfx"],
    tags: ["career longevity", "vfx career", "friendship", "alps studios"],
  },
  {
    id: 73,
    title:
      "Acting Beats, Accents & Facial Connection: Making Performance Feel Real",
    type: "workshop",
    date: "2025-10-13",
    time: "09:00-12:00",
    location: "ITS 3",
    speakers: ["Alexis Wanneroy"],
    description:
      "Advanced character animation workshop focusing on realistic performance",
    categories: ["animation"],
    tags: ["character animation", "performance", "facial animation", "acting"],
  },
  {
    id: 74,
    title: "Knock Knock. Who's There?",
    type: "workshop",
    date: "2025-10-13",
    time: "09:00-16:30",
    location: "ITS 4",
    speakers: ["Kris Pearn"],
    description: "Animation workshop by Sony Pictures Animation director",
    categories: ["animation"],
    tags: ["animation", "sony pictures", "director", "storytelling"],
  },
  {
    id: 75,
    title: "Concept Art for Games",
    type: "workshop",
    date: "2025-10-13",
    time: "09:00-16:30",
    location: "ITS 8",
    speakers: ["Michael Coldewey"],
    description:
      "Game concept art workshop covering design principles and workflows",
    categories: ["art", "game"],
    tags: ["concept art", "games", "design", "workflow"],
  },
  {
    id: 76,
    title: "3D Modeling/Texturing in Maya and Substance Painter",
    type: "workshop",
    date: "2025-10-13",
    time: "09:00-12:00",
    location: "ITS 10",
    speakers: ["Gennaro Esposito"],
    description: "Technical workshop on 3D modeling and texturing workflows",
    categories: ["3d", "technology"],
    tags: ["3d modeling", "texturing", "maya", "substance painter"],
  },
  {
    id: 77,
    title: "Observation and Study for Advancing Your Animation! Part 1",
    type: "workshop",
    date: "2025-10-13",
    time: "09:00-11:00",
    location: "SALA POLIFUNZIONALE",
    speakers: ["Ted Ty"],
    description:
      "Animation fundamentals workshop part 1 by DNEG's head of character animation",
    categories: ["animation"],
    tags: [
      "animation fundamentals",
      "observation",
      "dneg",
      "character animation",
    ],
  },
  {
    id: 78,
    title: "Observation and Study for Advancing Your Animation! Part 2",
    type: "workshop",
    date: "2025-10-13",
    time: "11:00-13:00",
    location: "SALA POLIFUNZIONALE",
    speakers: ["Ted Ty"],
    description: "Animation fundamentals workshop part 2",
    categories: ["animation"],
    tags: ["animation fundamentals", "study", "dneg", "character animation"],
  },
  {
    id: 79,
    title:
      "From Phoenician Scheme to Grand Budapest Hotel: Designing Miniature Sets for Wes Anderson Films",
    type: "masterclass",
    date: "2025-10-13",
    time: "13:15-15:15",
    location: "SALA POLIFUNZIONALE",
    speakers: ["Simon Weisse"],
    description: "Masterclass on miniature set design for Wes Anderson films",
    categories: ["production", "art"],
    tags: ["miniatures", "wes anderson", "set design", "practical effects"],
  },
  {
    id: 80,
    title: "Ask Me Anything About Animation",
    type: "ama",
    date: "2025-10-13",
    time: "14:30-15:30",
    location: "ITS 3",
    speakers: ["Ted Ty"],
    description:
      "Q&A session about animation with DNEG's head of character animation",
    categories: ["animation"],
    tags: ["animation", "q&a", "dneg", "character animation"],
  },
  {
    id: 81,
    title:
      "Creative Careers Unfiltered: Motivation, Mentorship & Meaningful Networking",
    type: "ama",
    date: "2025-10-13",
    time: "14:30-15:30",
    location: "ITS 10",
    speakers: ["Brenda Ximena Roldan Romero", "Ethan Francis"],
    description:
      "Career development discussion focusing on networking and mentorship",
    categories: ["career"],
    tags: ["career development", "networking", "mentorship", "motivation"],
  },
  {
    id: 82,
    title: "Portfolio Reviews: Concept Art",
    type: "portfolio",
    date: "2025-10-13",
    time: "15:15-16:15",
    location: "ITS 15",
    speakers: ["Kieran Belshaw"],
    description: "Portfolio review session for concept artists",
    categories: ["art", "career"],
    tags: ["concept art", "portfolio", "review", "feedback"],
  },
  {
    id: 83,
    title: "AMA: Nonno Edition. Doubts and Hopes for a Future Self",
    type: "ama",
    date: "2025-10-13",
    time: "15:30-16:30",
    location: "SALA POLIFUNZIONALE",
    speakers: ["Luca Prasso"],
    description:
      "Reflective discussion on career progression and future aspirations",
    categories: ["career"],
    tags: ["career reflection", "google", "future", "personal growth"],
  },
  {
    id: 84,
    title: "Portfolio Reviews: Tips and Tricks",
    type: "portfolio",
    date: "2025-10-13",
    time: "15:45-16:45",
    location: "ITS 3",
    speakers: ["Brenda Ximena Roldan Romero", "Ethan Francis"],
    description: "Portfolio improvement tips and industry insights",
    categories: ["career"],
    tags: ["portfolio tips", "industry insights", "career advice"],
  },
  {
    id: 85,
    title:
      "Ask Me Anything: Bringing Creatures and Characters to Life in Production",
    type: "ama",
    date: "2025-10-13",
    time: "15:45-16:45",
    location: "ITS 10",
    speakers: ["Andrea Salvatori"],
    description: "Q&A about creature and character creation in production",
    categories: ["3d", "vfx"],
    tags: ["creature creation", "character creation", "production"],
  },
  {
    id: 86,
    title: "How It Started, How Its Going",
    type: "ama",
    date: "2025-10-13",
    time: "16:45-17:45",
    location: "SALA POLIFUNZIONALE",
    speakers: [
      "Dylan Sisson",
      "Ted Ty",
      "Kyle T. Webster",
      "Luca Prasso",
      "Kris Pearn",
    ],
    description:
      "Panel of industry professionals sharing their career journeys",
    categories: ["career"],
    tags: ["career journey", "pixar", "procreate", "google", "sony animation"],
  },
  {
    id: 87,
    title: "KPop Demon Hunters",
    type: "talk",
    date: "2025-10-14",
    time: "11:30-12:30",
    location: "FUCINE",
    speakers: ["Maggie Kang", "Chris Appelhans"],
    description:
      "Behind the scenes of Netflix's KPop Demon Hunters animated series",
    categories: ["animation"],
    tags: ["netflix", "kpop", "animation", "series"],
  },
  {
    id: 88,
    title:
      "Creating a Family-Friendly Apocalypse: The Development of Lego Horizon Adventures",
    type: "talk",
    date: "2025-10-14",
    time: "12:45-13:45",
    location: "FUCINE",
    speakers: ["Jan-Bart van Beek", "Jochen Willemsen"],
    description:
      "Game development insights from Guerrilla Games' Lego Horizon Adventures",
    categories: ["game", "animation"],
    tags: ["lego", "horizon", "guerrilla games", "family friendly"],
  },
  {
    id: 89,
    title: "Guillermo del Toro's Frankenstein",
    type: "talk",
    date: "2025-10-14",
    time: "12:45-13:45",
    location: "BINARIO3",
    speakers: ["Dan Laustsen"],
    description:
      "Cinematography insights from Guillermo del Toro's Frankenstein",
    categories: ["cinematography"],
    tags: ["del toro", "frankenstein", "cinematography", "horror"],
  },
  {
    id: 90,
    title: "Procreate Demo: Procreate Dreams 2",
    type: "masterclass",
    date: "2025-10-14",
    time: "14:00-15:00",
    location: "BINARIO3",
    speakers: ["Kyle T. Webster"],
    description:
      "Live demonstration of Procreate Dreams 2 features and workflows",
    categories: ["art", "technology"],
    tags: ["procreate", "animation", "digital art", "demo"],
  },
  {
    id: 91,
    title: "White Rabbit: The Art of Audience Engagement in the Age of AI",
    type: "talk",
    date: "2025-10-14",
    time: "14:00-15:00",
    location: "MEZZANINO",
    speakers: ["Maciej Kuciara"],
    description:
      "Interactive storytelling and audience engagement in AI-driven content",
    categories: ["ai", "storytelling"],
    tags: ["white rabbit", "audience engagement", "ai", "interactive"],
  },
  {
    id: 92,
    title: "Cinema.3: A New Era of Film",
    type: "panel",
    date: "2025-10-14",
    time: "15:00-16:00",
    location: "BINARIO3",
    speakers: [
      "Giaime Alonge",
      "Giulia Carluccio",
      "Francesco Casetti",
      "Simone Natale",
      "Gabriella Taddeo",
      "Habib Zargarpour",
    ],
    description:
      "Academic panel on the future of cinema and digital storytelling",
    categories: ["cinema", "technology"],
    tags: ["cinema future", "academic", "digital storytelling", "university"],
  },
  {
    id: 93,
    title: "The Artist in Command: Taking Creative Control with Generative AI",
    type: "talk",
    date: "2025-10-14",
    time: "15:15-16:15",
    location: "MEZZANINO",
    speakers: [],
    description: "Empowering artists with generative AI tools and techniques",
    categories: ["ai", "art"],
    tags: ["generative ai", "artist control", "creative tools"],
  },
  {
    id: 94,
    title: "The Future of Storytelling 2025",
    type: "panel",
    date: "2025-10-14",
    time: "17:45-18:45",
    location: "FUCINE",
    speakers: [
      "Pierre Perifel",
      "Camille Balsamo-Gillis",
      "Alex Woo",
      "Maggie Kang",
      "Chris Appelhans",
      "Kris Pearn",
    ],
    description: "Industry leaders discuss the future of animated storytelling",
    categories: ["storytelling", "animation"],
    tags: ["future", "storytelling", "animation", "dreamworks", "netflix"],
  },
  {
    id: 95,
    title:
      "Artistic Integrity and Quieting the Noise: Navigating Emotion and Digital Storytelling",
    type: "talk",
    date: "2025-10-14",
    time: "17:45-18:45",
    location: "MEZZANINO",
    speakers: ["Arissa Ackerman"],
    description: "Maintaining artistic vision in digital storytelling mediums",
    categories: ["art", "storytelling"],
    tags: ["artistic integrity", "digital storytelling", "emotion", "scad"],
  },
  {
    id: 96,
    title:
      "The Case of the Missing Afikomen: An Interactive Detective Story with Ctrl Movie",
    type: "talk",
    date: "2025-10-15",
    time: "09:00-10:00",
    location: "BINARIO3",
    speakers: ["Zane Swift"],
    description:
      "Interactive storytelling techniques and audience participation",
    categories: ["storytelling", "technology"],
    tags: ["interactive", "detective", "ctrl movie", "audience participation"],
  },
  {
    id: 97,
    title: "Visual Poetry: The Art of Japanese Cinema Posters",
    type: "talk",
    date: "2025-10-15",
    time: "09:00-10:00",
    location: "MEZZANINO",
    speakers: ["Jeff Dillinger"],
    description:
      "Design principles and cultural significance of Japanese film posters",
    categories: ["art", "design"],
    tags: ["poster design", "japanese cinema", "visual design", "cultural art"],
  },
  {
    id: 98,
    title:
      "Claynosaurz: Rise of the Interactive Franchises: Why the Future Belongs to Creators",
    type: "talk",
    date: "2025-10-15",
    time: "10:15-11:15",
    location: "MEZZANINO",
    speakers: ["Nicholas Cabana"],
    description: "Building interactive franchises and creator-driven content",
    categories: ["business", "creative"],
    tags: ["claynosaurz", "interactive", "franchise", "creators"],
  },
  {
    id: 99,
    title: "Short Films, Epic Ambitions",
    type: "talk",
    date: "2025-10-15",
    time: "11:30-12:30",
    location: "FUCINE",
    speakers: ["Chris Lavis", "Eric Pouliot"],
    description: "Creating ambitious short films with limited resources",
    categories: ["production", "animation"],
    tags: ["short films", "nfb", "animation", "independent"],
  },
  {
    id: 100,
    title: "Is VFX a Sustainable Business Model?",
    type: "talk",
    date: "2025-10-15",
    time: "11:30-12:30",
    location: "MEZZANINO",
    speakers: ["Heiko Burkardsmaier"],
    description:
      "Business analysis of VFX industry sustainability and economics",
    categories: ["business", "vfx"],
    tags: ["vfx business", "sustainability", "economics", "industry analysis"],
  },
  {
    id: 101,
    title: "The VFX Behind the Emmy Award Winning Comedy: The Studio",
    type: "talk",
    date: "2025-10-15",
    time: "12:45-13:15",
    location: "FUCINE",
    speakers: ["Jake Maymudes", "Sandro Blattner"],
    description: "VFX work on the Emmy-winning comedy series The Studio",
    categories: ["vfx", "comedy"],
    tags: ["the studio", "emmy winner", "comedy vfx", "television"],
  },
  {
    id: 102,
    title: "Walking With Animators",
    type: "talk",
    date: "2025-10-15",
    time: "12:45-13:45",
    location: "BINARIO3",
    speakers: ["Alexandre Poncet"],
    description:
      "Documentary exploration of animator lives and creative processes",
    categories: ["animation", "documentary"],
    tags: ["documentary", "animators", "creative process", "behind scenes"],
  },
  {
    id: 103,
    title:
      "Inspiring the Next Generation of Storytellers: AI & Innovation Technology in Education",
    type: "panel",
    date: "2025-10-15",
    time: "14:00-15:00",
    location: "BINARIO3",
    speakers: [
      "Oleg Fryazinov",
      "Morten Thorning",
      "Simon Davies",
      "Camille Jaulent",
      "Andrea Bottino",
      "Terrence Masson",
      "Saint Walker",
    ],
    description:
      "Educational panel on integrating AI and innovation in creative curriculum",
    categories: ["education", "ai"],
    tags: ["education", "ai", "innovation", "curriculum", "universities"],
  },
  {
    id: 104,
    title: "Pixels, Pressure and People: Creative Leadership in VFX",
    type: "panel",
    date: "2025-10-15",
    time: "15:15-16:15",
    location: "MEZZANINO",
    speakers: [
      "Filippo Robino",
      "Claudia Marvisi",
      "Heiko Burkardsmaier",
      "Tracy McCreary",
    ],
    description: "Leadership challenges and strategies in VFX production",
    categories: ["leadership", "vfx"],
    tags: ["leadership", "vfx management", "production", "team management"],
  },
  {
    id: 105,
    title:
      "Ready for Launch: Creating Fantastic Four's Miniature Ships with Cutting-Edge and Classic Techniques",
    type: "panel",
    date: "2025-10-15",
    time: "16:00-17:00",
    location: "FUCINE",
    speakers: ["Ian Hunter", "Reid Collums", "Camille Balsamo-Gillis"],
    description:
      "Miniature effects work for Fantastic Four combining traditional and modern techniques",
    categories: ["vfx", "production"],
    tags: [
      "fantastic four",
      "miniatures",
      "practical effects",
      "new deal studios",
    ],
  },
  {
    id: 106,
    title: "The Art of Game Cinematics: The Witcher 4 Cinematic Trailer",
    type: "talk",
    date: "2025-10-15",
    time: "16:30-17:30",
    location: "MEZZANINO",
    speakers: ["Tomek Suwalkski", "Magdalena Rudnicka"],
    description:
      "Behind the scenes of The Witcher 4 cinematic trailer production",
    categories: ["game", "cinematics"],
    tags: ["witcher 4", "cinematics", "game trailer", "platige image"],
  },
  {
    id: 107,
    title: "Stop Motion: Bring the Goods",
    type: "panel",
    date: "2025-10-15",
    time: "17:15-18:15",
    location: "FUCINE",
    speakers: [
      "Phil Tippett",
      "Gary Mundell",
      "Mark Dubeau",
      "Tom Gibbons",
      "Ken Rogerson",
    ],
    description:
      "Panel on stop motion animation techniques and industry insights",
    categories: ["animation"],
    tags: [
      "stop motion",
      "tippett studio",
      "traditional animation",
      "practical",
    ],
  },
  {
    id: 108,
    title: "Innovation and Creativity at the Service of Audiovisual Production",
    type: "talk",
    date: "2025-10-15",
    time: "17:45-18:45",
    location: "BINARIO3",
    speakers: ["Monica Galantucci", "Giulio Campiglia"],
    description:
      "Innovation in audiovisual production workflows and creative processes",
    categories: ["production", "innovation"],
    tags: ["m74", "audiovisual", "innovation", "production"],
  },
  {
    id: 109,
    title: "Driving a Show, Success from the Art Department",
    type: "talk",
    date: "2025-10-15",
    time: "17:45-18:45",
    location: "MEZZANINO",
    speakers: ["Javier Romero"],
    description: "Art department leadership and its impact on show success",
    categories: ["art", "production"],
    tags: [
      "art department",
      "leadership",
      "production management",
      "show success",
    ],
  },
  {
    id: 110,
    title: "Solving for Creativity: Technical Experiments at the NFB",
    type: "talk",
    date: "2025-10-16",
    time: "11:30-12:30",
    location: "BINARIO3",
    speakers: ["Eloi Champagne"],
    description:
      "Experimental technical approaches to creative problems at the National Film Board",
    categories: ["technology", "innovation"],
    tags: ["nfb", "technical experiments", "innovation", "creative technology"],
  },
  {
    id: 111,
    title: "VFX and Animation Worldwide: A Data-Driven Look at Our Industry",
    type: "talk",
    date: "2025-10-16",
    time: "11:30-12:30",
    location: "TECA B",
    speakers: ["Joseph Bell"],
    description:
      "Data analysis and trends in the global VFX and animation industry",
    categories: ["industry", "data"],
    tags: [
      "industry data",
      "global trends",
      "vfx statistics",
      "animation market",
    ],
  },
  {
    id: 112,
    title: "The Purposes of Creativity & Art",
    type: "keynote",
    date: "2025-10-16",
    time: "14:00-14:30",
    location: "FUCINE",
    speakers: ["Matthias Buehler"],
    description:
      "Keynote exploring the fundamental purposes and value of creativity and art",
    categories: ["art", "philosophy"],
    tags: ["creativity", "art purpose", "philosophy", "keynote"],
  },
  {
    id: 113,
    title: "Once Upon a Toon: Folktales and History with an Animated Twist!",
    type: "talk",
    date: "2025-10-16",
    time: "14:00-15:00",
    location: "BINARIO3",
    speakers: ["Munjal B. Shroff"],
    description:
      "Using animation to tell traditional folktales and historical stories",
    categories: ["animation", "storytelling"],
    tags: ["folktales", "history", "animated stories", "graphiti studios"],
  },
  {
    id: 114,
    title:
      "GAME-ER Clusters in Action: Co-Op Mode as the New Industry Standard",
    type: "panel",
    date: "2025-10-16",
    time: "15:15-16:15",
    location: "BINARIO3",
    speakers: [
      "Valerio Di Donato",
      "Darshana Jayemanne",
      "Luís Leça",
      "Matteo Sapio",
      "Matteo Pessione",
    ],
    description:
      "Gaming industry collaboration and cluster development strategies",
    categories: ["game", "business"],
    tags: ["gaming clusters", "collaboration", "industry standards", "co-op"],
  },
  {
    id: 115,
    title:
      "Embodiment of Motion: Loïe Fuller & Aesthetics of Performance in Emerging Tech",
    type: "talk",
    date: "2025-10-16",
    time: "15:15-16:15",
    location: "TECA B",
    speakers: ["Rochele Gloor"],
    description:
      "Performance art aesthetics applied to emerging technology and digital media",
    categories: ["art", "technology"],
    tags: ["performance art", "motion", "emerging tech", "aesthetics"],
  },
  {
    id: 116,
    title: "Women in Animation: VFX and Live Action",
    type: "panel",
    date: "2025-10-16",
    time: "16:30-17:30",
    location: "BINARIO3",
    speakers: [
      "Domee Shi",
      "Claudia Marvisi",
      "Delphine Coudray",
      "Madeline Sharafian",
      "Janet Lewin",
    ],
    description: "Panel celebrating women's contributions to animation and VFX",
    categories: ["animation", "vfx", "diversity"],
    tags: ["women in animation", "diversity", "pixar", "ilm", "industry"],
  },
  {
    id: 117,
    title: "The Future of Filmmaking (2025)",
    type: "panel",
    date: "2025-10-16",
    time: "18:30-19:30",
    location: "FUCINE",
    speakers: [
      "Ramsey Naito",
      "Doug Chiang",
      "Kevin Baillie",
      "Jeff Dillinger",
      "Janet Lewin",
      "Fiona Walkinshaw",
      "Laurens Ehrmann",
      "Ian Failes",
    ],
    description:
      "Industry leaders discuss the future direction of filmmaking technology and creativity",
    categories: ["filmmaking", "future"],
    tags: [
      "future filmmaking",
      "lucasfilm",
      "ilm",
      "framestore",
      "industry leaders",
    ],
  },
  {
    id: 118,
    title: "Studio Ready: Tips and Q&A on Getting Hired in Animation & VFX!",
    type: "ama",
    date: "2025-10-17",
    time: "09:00-10:00",
    location: "MEZZANINO",
    speakers: ["Siva Kumar Kasetty"],
    description:
      "Practical advice on getting hired in animation and VFX studios",
    categories: ["career", "education"],
    tags: ["job hunting", "studio hiring", "career advice", "za studios"],
  },
  {
    id: 119,
    title: "Immersive Entertainment: Building Cinematic Stories on Vision Pro",
    type: "talk",
    date: "2025-10-17",
    time: "10:15-11:15",
    location: "BINARIO3",
    speakers: ["Victor Agulhon"],
    description:
      "Creating immersive cinematic experiences for Apple Vision Pro",
    categories: ["technology", "immersive"],
    tags: ["vision pro", "immersive", "ar", "cinematic storytelling"],
  },
  {
    id: 120,
    title: "How to Become the 3D Artist of Tomorrow",
    type: "talk",
    date: "2025-10-17",
    time: "10:15-11:15",
    location: "MEZZANINO",
    speakers: ["Gennaro Esposito"],
    description: "Future skills and career development for 3D artists",
    categories: ["career", "3d"],
    tags: ["3d artist", "future skills", "career development", "digital shark"],
  },
  {
    id: 121,
    title: "NORA: the First Italian V-Idol and Digital Pop Star",
    type: "talk",
    date: "2025-10-17",
    time: "11:30-12:30",
    location: "MEZZANINO",
    speakers: ["Serena Tripepi", "Max Carrier Ragazzi"],
    description: "Creating Italy's first virtual idol and digital performer",
    categories: ["technology", "entertainment"],
    tags: ["virtual idol", "digital performer", "italy", "maga animation"],
  },
  {
    id: 122,
    title: "From Script to Screen",
    type: "panel",
    date: "2025-10-17",
    time: "12:45-13:45",
    location: "MEZZANINO",
    speakers: ["Heike Kluger", "Tara DeMarco", "Christina Caspers-Roemer"],
    description:
      "The complete production pipeline from initial script to final screen",
    categories: ["production"],
    tags: ["production pipeline", "script to screen", "workflow", "cinesite"],
  },
  {
    id: 123,
    title:
      "Bridging the Gap in VFX: Collaboration & Innovation (In Partnership with VES)",
    type: "panel",
    date: "2025-10-17",
    time: "14:00-15:00",
    location: "MEZZANINO",
    speakers: [
      "Kevin Baillie",
      "Christine Resch",
      "Michael Ralla",
      "Christina Caspers-Roemer",
    ],
    description:
      "VES-sponsored panel on collaboration and innovation in VFX industry",
    categories: ["vfx", "collaboration"],
    tags: ["ves", "collaboration", "innovation", "adobe", "eyeline"],
  },
  {
    id: 124,
    title: "From Slot Machine to Meaningful Creative Control",
    type: "talk",
    date: "2025-10-17",
    time: "15:15-16:15",
    location: "MEZZANINO",
    speakers: ["Martin Nebelong"],
    description:
      "Evolution from randomized content to meaningful creative control in digital media",
    categories: ["art", "technology"],
    tags: ["creative control", "google", "vr", "meaningful creation"],
  },
  {
    id: 125,
    title: "A Life in Film Design",
    type: "keynote",
    date: "2025-10-17",
    time: "17:45-18:45",
    location: "FUCINE",
    speakers: ["Doug Chiang", "Alexandre Poncet"],
    description:
      "Keynote celebrating Doug Chiang's career and contributions to film design",
    categories: ["design", "career"],
    tags: [
      "doug chiang",
      "lucasfilm",
      "film design",
      "career retrospective",
      "visionary award",
    ],
  },
];

class ConferenceSessionsFilter {
  constructor() {
    this.allSessions = sessionsData;
    this.filteredSessions = [...this.allSessions];
    this.initializeElements();
    this.attachEventListeners();
    this.renderSessions();
    this.updateResultsCount();
  }

  initializeElements() {
    this.dayFilter = document.getElementById("day-filter");
    this.categoryFilter = document.getElementById("category-filter");
    this.typeFilter = document.getElementById("type-filter");
    this.searchInput = document.getElementById("search-input");
    this.clearFiltersBtn = document.getElementById("clear-filters");
    this.sessionsContainer = document.getElementById("sessions-container");
    this.resultsCount = document.getElementById("results-count");
  }

  attachEventListeners() {
    this.dayFilter.addEventListener("change", () => this.applyFilters());
    this.categoryFilter.addEventListener("change", () => this.applyFilters());
    this.typeFilter.addEventListener("change", () => this.applyFilters());
    this.searchInput.addEventListener("input", () =>
      this.debounce(() => this.applyFilters(), 300)
    );
    this.clearFiltersBtn.addEventListener("click", () =>
      this.clearAllFilters()
    );
  }

  debounce(func, wait) {
    clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(func, wait);
  }

  applyFilters() {
    this.filteredSessions = this.allSessions.filter((session) => {
      const dayMatch =
        !this.dayFilter.value || session.date === this.dayFilter.value;
      const categoryMatch =
        !this.categoryFilter.value ||
        session.categories.includes(this.categoryFilter.value);
      const typeMatch =
        !this.typeFilter.value || session.type === this.typeFilter.value;

      const searchTerm = this.searchInput.value.toLowerCase().trim();
      const searchMatch =
        !searchTerm ||
        session.title.toLowerCase().includes(searchTerm) ||
        session.speakers.some((speaker) =>
          speaker.toLowerCase().includes(searchTerm)
        ) ||
        session.description.toLowerCase().includes(searchTerm) ||
        session.tags.some((tag) => tag.toLowerCase().includes(searchTerm));

      return dayMatch && categoryMatch && typeMatch && searchMatch;
    });

    this.renderSessions();
    this.updateResultsCount();
  }

  clearAllFilters() {
    this.dayFilter.value = "";
    this.categoryFilter.value = "";
    this.typeFilter.value = "";
    this.searchInput.value = "";
    this.applyFilters();
  }

  renderSessions() {
    if (this.filteredSessions.length === 0) {
      this.sessionsContainer.innerHTML = `
                <div class="no-results">
                    <h3>No sessions found</h3>
                    <p>Try adjusting your filters or search terms</p>
                </div>
            `;
      return;
    }

    this.sessionsContainer.innerHTML = this.filteredSessions
      .map((session) => this.createSessionCard(session))
      .join("");
  }

  createSessionCard(session) {
    const formattedDate = this.formatDate(session.date);
    const speakersHtml =
      session.speakers.length > 0
        ? `<div class="session-speakers">
                <h4>Speakers</h4>
                <div class="speakers-list">
                    ${session.speakers
                      .map(
                        (speaker) =>
                          `<span class="speaker-tag">${speaker}</span>`
                      )
                      .join("")}
                </div>
            </div>`
        : "";

    const tagsHtml =
      session.tags.length > 0
        ? `<div class="session-tags">
                ${session.tags
                  .map((tag) => {
                    const category = this.getTagCategory(tag);
                    return `<span class="tag ${category}">${tag}</span>`;
                  })
                  .join("")}
            </div>`
        : "";

    return `
            <div class="session-card" data-session-id="${session.id}">
                <div class="session-header">
                    <h3 class="session-title">${session.title}</h3>
                    <span class="session-type ${session.type}">${session.type}</span>
                </div>
                
                <div class="session-info">
                    <div class="info-item">
                        <span class="info-icon">📅</span>
                        <span>${formattedDate}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-icon">⏰</span>
                        <span>${session.time} CET</span>
                    </div>
                    <div class="info-item">
                        <span class="info-icon">📍</span>
                        <span>${session.location}</span>
                    </div>
                </div>

                ${speakersHtml}

                <div class="session-description">
                    ${session.description}
                </div>

                ${tagsHtml}
            </div>
        `;
  }

  getTagCategory(tag) {
    const tagMappings = {
      vfx: "vfx",
      "visual effects": "vfx",
      animation: "animation",
      rendering: "rendering",
      renderman: "rendering",
      ai: "ai",
      "artificial intelligence": "ai",
      "unreal engine": "technology",
      technology: "technology",
      tools: "technology",
      production: "production",
      game: "game",
      games: "game",
    };

    const lowerTag = tag.toLowerCase();
    for (const [key, category] of Object.entries(tagMappings)) {
      if (lowerTag.includes(key)) {
        return category;
      }
    }
    return "technology"; // default category
  }

  formatDate(dateString) {
    const date = new Date(dateString);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  }

  updateResultsCount() {
    const count = this.filteredSessions.length;
    const total = this.allSessions.length;
    this.resultsCount.textContent = `${count} of ${total} sessions`;
  }
}

// Initialize the application when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new ConferenceSessionsFilter();
});

// Add some utility functions for enhanced interactivity
function addSessionToCalendar(sessionId) {
  const session = sessionsData.find((s) => s.id === sessionId);
  if (!session) return;

  const startDate = new Date(
    `${session.date}T${session.time.split("-")[0]}:00`
  );
  const endTime = session.time.split("-")[1];
  const endDate = new Date(`${session.date}T${endTime}:00`);

  const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    session.title
  )}&dates=${startDate
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d{3}/, "")}/${endDate
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d{3}/, "")}&details=${encodeURIComponent(
    session.description
  )}&location=${encodeURIComponent(session.location)}`;

  window.open(calendarUrl, "_blank");
}

function shareSession(sessionId) {
  const session = sessionsData.find((s) => s.id === sessionId);
  if (!session) return;

  if (navigator.share) {
    navigator.share({
      title: `VIEW Conference 2025: ${session.title}`,
      text: session.description,
      url: window.location.href,
    });
  } else {
    // Fallback to clipboard
    const shareText = `Check out this session at VIEW Conference 2025: "${session.title}" - ${session.description}`;
    navigator.clipboard.writeText(shareText).then(() => {
      alert("Session details copied to clipboard!");
    });
  }
}
