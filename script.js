// Conference sessions data extracted from the schedule
const sessionsData = [
    {
      title: "Learn the History of Visual Effects",
      startTime: "09:00",
      endTime: "12:00",
      time: "09:00-12:00",
      date: "2025-10-12",
      location: "ITS 1",
      speakers: [
        "Ian Failes"
      ],
      type: "workshop",
      categories: [
        "vfx"
      ],
      tags: [
        "workshop",
        "vfx",
        "history",
        "cinema"
      ],
      description: "3-Hour workshop exploring the evolution of visual effects in cinema",
      url: "https://www.viewconference.it/article/1111"
    },
    {
      title: "Aspects of Visualization with Unreal Engine: Hands-On Pre-Viz and Post-Viz",
      startTime: "09:00",
      endTime: "16:30",
      time: "09:00-16:30",
      date: "2025-10-12",
      location: "ITS 2",
      speakers: [
        "Oleg  Fryazinov"
      ],
      type: "workshop",
      categories: [
        "technology"
      ],
      tags: [
        "workshop",
        "technology",
        "unreal engine",
        "previz",
        "postviz",
        "visualization"
      ],
      description: "6 hour workshop covering Pre-Visualization and Post-Visualization techniques with Unreal Engine",
      url: "https://www.viewconference.it/article/1144"
    },
    {
      title: "Deep-Dive Procreate",
      startTime: "09:00",
      endTime: "13:00",
      time: "09:00-13:00",
      date: "2025-10-12",
      location: "ITS 4",
      speakers: [
        "Kyle T. Webster"
      ],
      type: "workshop",
      categories: [
        "general"
      ],
      tags: [
        "workshop",
        "procreate",
        "digital art",
        "illustration"
      ],
      description: "4-Hour workshop on advanced Procreate techniques and digital illustration",
      url: "https://www.viewconference.it/article/1121"
    },
    {
      title: "Creating the World of Game of Thrones: Environment Concept Art",
      startTime: "09:00",
      endTime: "16:30",
      time: "09:00-16:30",
      date: "2025-10-12",
      location: "ITS 8",
      speakers: [
        "Kieran Belshaw"
      ],
      type: "workshop",
      categories: [
        "gaming"
      ],
      tags: [
        "workshop",
        "environment"
      ],
      description: "Workshop workshop at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1157"
    },
    {
      title: "From Zero to Hero",
      startTime: "09:00",
      endTime: "16:30",
      time: "09:00-16:30",
      date: "2025-10-12",
      location: "ITS 9",
      speakers: [
        "Gennaro Esposito"
      ],
      type: "workshop",
      categories: [
        "general"
      ],
      tags: [
        "workshop"
      ],
      description: "Workshop workshop at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1169"
    },
    {
      title: "Sketching! Create the Line Before The Code",
      startTime: "09:00",
      endTime: "16:30",
      time: "09:00-16:30",
      date: "2025-10-12",
      location: "ITS 12",
      speakers: [
        "Michael Coldewey"
      ],
      type: "workshop",
      categories: [
        "general"
      ],
      tags: [
        "workshop"
      ],
      description: "Workshop workshop at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1149"
    },
    {
      title: "Katana: From MultiShot to MultiStyle",
      startTime: "09:00",
      endTime: "11:00",
      time: "09:00-11:00",
      date: "2025-10-12",
      location: "ITS 13",
      speakers: [
        "Christos Obretenov",
        "Ernst Janssen Groesbeek"
      ],
      type: "workshop",
      categories: [
        "general"
      ],
      tags: [
        "workshop",
        "katana",
        "stylized",
        "rendering"
      ],
      description: "Workshop workshop covering advanced Katana techniques for stylized rendering workflows",
      url: "https://www.viewconference.it/article/1175"
    },
    {
      title: "Designing for the Mind: A Dive into Product Psychology in UX and Product Design",
      startTime: "09:00",
      endTime: "13:00",
      time: "09:00-13:00",
      date: "2025-10-12",
      location: "ITS 14",
      speakers: [
        "Riccardo Russiano"
      ],
      type: "workshop",
      categories: [
        "art"
      ],
      tags: [
        "workshop"
      ],
      description: "Workshop workshop at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1134"
    },
    {
      title: "How to Make a Creature: Mastering Secondary and Tertiary Details",
      startTime: "09:00",
      endTime: "16:30",
      time: "09:00-16:30",
      date: "2025-10-12",
      location: "ITS 15",
      speakers: [
        "Andrea Salvatori"
      ],
      type: "workshop",
      categories: [
        "technology"
      ],
      tags: [
        "workshop",
        "technology",
        "ai",
        "machine learning"
      ],
      description: "Workshop workshop exploring artificial intelligence applications in creative workflows",
      url: "https://www.viewconference.it/article/1197"
    },
    {
      title: "Code Meets Creativity: A Creative’s Journey into Tech",
      startTime: "09:00",
      endTime: "11:00",
      time: "09:00-11:00",
      date: "2025-10-12",
      location: "ITS TEATRO",
      speakers: [
        "Jonas Kluger"
      ],
      type: "workshop",
      categories: [
        "general"
      ],
      tags: [
        "workshop"
      ],
      description: "Workshop workshop at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1137"
    },
    {
      title: "Showreel Clinic: Bring Yours to Get Feedback",
      startTime: "09:00",
      endTime: "10:00",
      time: "09:00-10:00",
      date: "2025-10-12",
      location: "SALA POLIFUNZIONALE",
      speakers: [
        "Saint Walker"
      ],
      type: "ama",
      categories: [
        "technology"
      ],
      tags: [
        "ama",
        "technology"
      ],
      description: "ama at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1163"
    },
    {
      title: "Portfolio Reviews: 3D Animation, 3D Generalists",
      startTime: "10:15",
      endTime: "11:15",
      time: "10:15-11:15",
      date: "2025-10-12",
      location: "SALA POLIFUNZIONALE",
      speakers: [
        "Brenda Ximena Roldan Romero",
        "Ethan Francis"
      ],
      type: "portfolio",
      categories: [
        "animation"
      ],
      tags: [
        "portfolio",
        "animation"
      ],
      description: "portfolio at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1164"
    },
    {
      title: "Evolve from Seeing to Vision, from Watching to Storytelling",
      startTime: "10:30",
      endTime: "17:30",
      time: "10:30-17:30",
      date: "2025-10-12",
      location: "ITS 3",
      speakers: [
        "Asa Mathat"
      ],
      type: "workshop",
      categories: [
        "general"
      ],
      tags: [
        "workshop"
      ],
      description: "Workshop workshop at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1168"
    },
    {
      title: "Particles &amp; Fluids in Motion: Exploring VFX with Unreal Engine",
      startTime: "11:15",
      endTime: "17:15",
      time: "11:15-17:15",
      date: "2025-10-12",
      location: "ITS 10",
      speakers: [
        "Christian Tagliapietra"
      ],
      type: "workshop",
      categories: [
        "vfx"
      ],
      tags: [
        "workshop",
        "vfx",
        "unreal engine",
        "previz",
        "postviz",
        "visualization"
      ],
      description: "Workshop workshop covering Pre-Visualization and Post-Visualization techniques with Unreal Engine",
      url: "https://www.viewconference.it/article/1162"
    },
    {
      title: "Making the Most of Your Showreel in an Age of AI",
      startTime: "11:15",
      endTime: "12:15",
      time: "11:15-12:15",
      date: "2025-10-12",
      location: "ITS TEATRO",
      speakers: [
        "Saint Walker"
      ],
      type: "ama",
      categories: [
        "technology"
      ],
      tags: [
        "ama",
        "technology",
        "ai",
        "machine learning"
      ],
      description: "ama exploring artificial intelligence applications in creative workflows",
      url: "https://www.viewconference.it/article/1106"
    },
    {
      title: "Animating with Purpose: Finding Your Voice in Big Productions",
      startTime: "11:30",
      endTime: "12:30",
      time: "11:30-12:30",
      date: "2025-10-12",
      location: "SALA POLIFUNZIONALE",
      speakers: [
        "Brenda Ximena Roldan Romero"
      ],
      type: "talk",
      categories: [
        "production"
      ],
      tags: [],
      description: "talk at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1141"
    },
    {
      title: "Gaussian Splatting for Production",
      startTime: "12:15",
      endTime: "16:15",
      time: "12:15-16:15",
      date: "2025-10-12",
      location: "ITS 1",
      speakers: [
        "Eloi Champagne"
      ],
      type: "workshop",
      categories: [
        "production"
      ],
      tags: [
        "workshop",
        "gaussian splatting",
        "advanced",
        "environment"
      ],
      description: "Workshop workshop on using Gaussian Splatting techniques in production environments",
      url: "https://www.viewconference.it/article/1104"
    },
    {
      title: "The Evolving VFX Landscape",
      startTime: "12:45",
      endTime: "13:45",
      time: "12:45-13:45",
      date: "2025-10-12",
      location: "SALA POLIFUNZIONALE",
      speakers: [
        "Mara Froehlich",
        "Hayley Miller",
        "Heike Kluger"
      ],
      type: "panel",
      categories: [
        "vfx"
      ],
      tags: [
        "panel",
        "vfx"
      ],
      description: "panel at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1161"
    },
    {
      title: "Using Reference with Purpose – From Footage to Performance",
      startTime: "13:15",
      endTime: "16:15",
      time: "13:15-16:15",
      date: "2025-10-12",
      location: "ITS 4",
      speakers: [
        "Alexis Wanneroy"
      ],
      type: "workshop",
      categories: [
        "general"
      ],
      tags: [
        "workshop"
      ],
      description: "Workshop workshop at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1079"
    },
    {
      title: "Stylized Rendering: Two Approaches From 2D Artwork to 3D and Back Again",
      startTime: "13:15",
      endTime: "16:15",
      time: "13:15-16:15",
      date: "2025-10-12",
      location: "ITS 13",
      speakers: [
        "Christos Obretenov",
        "Ernst Janssen Groesbeek",
        "Denver Jackson"
      ],
      type: "workshop",
      categories: [
        "rendering"
      ],
      tags: [
        "workshop",
        "ai",
        "machine learning"
      ],
      description: "Workshop workshop exploring artificial intelligence applications in creative workflows",
      url: "https://www.viewconference.it/article/1103"
    },
    {
      title: "Code to Creation: Modern Tools for the Solo Artist",
      startTime: "13:45",
      endTime: "15:45",
      time: "13:45-15:45",
      date: "2025-10-12",
      location: "ITS TEATRO",
      speakers: [
        "Boyan Georgiev"
      ],
      type: "masterclass",
      categories: [
        "art"
      ],
      tags: [
        "masterclass"
      ],
      description: "Masterclass masterclass at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1176"
    },
    {
      title: "Shaping Brand Stories, VFX in Advertising",
      startTime: "14:00",
      endTime: "15:00",
      time: "14:00-15:00",
      date: "2025-10-12",
      location: "SALA POLIFUNZIONALE",
      speakers: [
        "Kate Gabriel"
      ],
      type: "talk",
      categories: [
        "vfx"
      ],
      tags: [
        "vfx"
      ],
      description: "talk at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1143"
    },
    {
      title: "The Purpose and Principles of Architecture",
      startTime: "15:15",
      endTime: "16:15",
      time: "15:15-16:15",
      date: "2025-10-12",
      location: "SALA POLIFUNZIONALE",
      speakers: [
        "Matthias Buehler"
      ],
      type: "workshop",
      categories: [
        "general"
      ],
      tags: [
        "workshop"
      ],
      description: "Workshop workshop at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1152"
    },
    {
      title: "Bridging the Gap between Education and Industry",
      startTime: "15:30",
      endTime: "16:30",
      time: "15:30-16:30",
      date: "2025-10-12",
      location: "ITS 14",
      speakers: [
        "Morten Thorning"
      ],
      type: "ama",
      categories: [
        "general"
      ],
      tags: [
        "ama"
      ],
      description: "ama at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1177"
    },
    {
      title: "Ask Me Anything About Character Animation for VFX (2025)",
      startTime: "16:00",
      endTime: "17:00",
      time: "16:00-17:00",
      date: "2025-10-12",
      location: "ITS TEATRO",
      speakers: [
        "Hal Hickel"
      ],
      type: "ama",
      categories: [
        "vfx"
      ],
      tags: [
        "ama",
        "vfx",
        "character"
      ],
      description: "ama at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1165"
    },
    {
      title: "From Animation to Reality: Bringing an animated character to life!",
      startTime: "16:30",
      endTime: "17:30",
      time: "16:30-17:30",
      date: "2025-10-12",
      location: "SALA POLIFUNZIONALE",
      speakers: [
        "Alexis Wanneroy",
        "Stuart Ward"
      ],
      type: "talk",
      categories: [
        "animation"
      ],
      tags: [
        "animation",
        "character"
      ],
      description: "talk at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1190"
    },
    {
      title: "Beyond VFX: Hidden Career Gems",
      startTime: "17:15",
      endTime: "18:15",
      time: "17:15-18:15",
      date: "2025-10-12",
      location: "ITS TEATRO",
      speakers: [
        "Kate Gabriel",
        "Beata Parczewska",
        "Boyan Georgiev",
        "Agata M. Soccini",
        "Eva Krpanov"
      ],
      type: "ama",
      categories: [
        "vfx"
      ],
      tags: [
        "ama",
        "vfx"
      ],
      description: "ama at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1182"
    },
    {
      title: "Career Advice: My First Job and What I Learned",
      startTime: "17:45",
      endTime: "18:45",
      time: "17:45-18:45",
      date: "2025-10-12",
      location: "SALA POLIFUNZIONALE",
      speakers: [
        "Hal Hickel",
        "Saint Walker",
        "Eloi Champagne",
        "Jan-Bart Van Beek",
        "Alexis Wanneroy"
      ],
      type: "masterclass",
      categories: [
        "technology"
      ],
      tags: [
        "masterclass",
        "technology"
      ],
      description: "Masterclass masterclass at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1166"
    },
    {
      title: "More Than Pixels: A Friendship's Guide to a Long Career in VFX",
      startTime: "18:30",
      endTime: "19:30",
      time: "18:30-19:30",
      date: "2025-10-12",
      location: "ITS TEATRO",
      speakers: [
        "Filippo Robino",
        "Roberto Rodricks"
      ],
      type: "ama",
      categories: [
        "vfx"
      ],
      tags: [
        "ama",
        "vfx"
      ],
      description: "ama at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1188"
    },
    {
      title: "Acting Beats, Accents &amp; Facial Connection: Making Performance Feel Real",
      startTime: "09:00",
      endTime: "12:00",
      time: "09:00-12:00",
      date: "2025-10-13",
      location: "ITS 3",
      speakers: [
        "Alexis Wanneroy"
      ],
      type: "workshop",
      categories: [
        "general"
      ],
      tags: [
        "workshop"
      ],
      description: "Workshop workshop at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1147"
    },
    {
      title: "Knock Knock. Who's There?",
      startTime: "09:00",
      endTime: "16:30",
      time: "09:00-16:30",
      date: "2025-10-13",
      location: "ITS 4",
      speakers: [
        "Kris Pearn"
      ],
      type: "workshop",
      categories: [
        "general"
      ],
      tags: [
        "workshop"
      ],
      description: "Workshop workshop at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1093"
    },
    {
      title: "Concept Art for Games",
      startTime: "09:00",
      endTime: "16:30",
      time: "09:00-16:30",
      date: "2025-10-13",
      location: "ITS 8",
      speakers: [
        "Michael Coldewey"
      ],
      type: "workshop",
      categories: [
        "gaming"
      ],
      tags: [
        "workshop"
      ],
      description: "Workshop workshop at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1148"
    },
    {
      title: "3D Modeling/Texturing in Maya and Substance Painter",
      startTime: "09:00",
      endTime: "12:00",
      time: "09:00-12:00",
      date: "2025-10-13",
      location: "ITS 10",
      speakers: [
        "Gennaro Esposito"
      ],
      type: "workshop",
      categories: [
        "technology"
      ],
      tags: [
        "workshop",
        "technology",
        "ai",
        "machine learning"
      ],
      description: "Workshop workshop exploring artificial intelligence applications in creative workflows",
      url: "https://www.viewconference.it/article/1172"
    },
    {
      title: "Virtual Production",
      startTime: "09:00",
      endTime: "15:00",
      time: "09:00-15:00",
      date: "2025-10-13",
      location: "ITS 15",
      speakers: [
        "Habib Zargarpour"
      ],
      type: "workshop",
      categories: [
        "production"
      ],
      tags: [
        "workshop",
        "virtual production",
        "realtime"
      ],
      description: "Workshop workshop on virtual production techniques and workflows",
      url: "https://www.viewconference.it/article/1200"
    },
    {
      title: "Observation and Study for Advancing Your Animation! Part 1",
      startTime: "09:00",
      endTime: "11:00",
      time: "09:00-11:00",
      date: "2025-10-13",
      location: "SALA POLIFUNZIONALE",
      speakers: [
        "Ted Ty"
      ],
      type: "workshop",
      categories: [
        "animation"
      ],
      tags: [
        "workshop",
        "animation"
      ],
      description: "Workshop workshop at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1082"
    },
    {
      title: "Observation and Study for Advancing Your Animation! Part 2",
      startTime: "11:00",
      endTime: "13:00",
      time: "11:00-13:00",
      date: "2025-10-13",
      location: "SALA POLIFUNZIONALE",
      speakers: [
        "Ted Ty"
      ],
      type: "workshop",
      categories: [
        "animation"
      ],
      tags: [
        "workshop",
        "animation"
      ],
      description: "Workshop workshop at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1129"
    },
    {
      title: "Stylized Worlds with RenderMan XPU: A Creative Workshop",
      startTime: "12:15",
      endTime: "14:15",
      time: "12:15-14:15",
      date: "2025-10-13",
      location: "ITS 3",
      speakers: [
        "Dylan Sisson"
      ],
      type: "workshop",
      categories: [
        "general"
      ],
      tags: [
        "workshop"
      ],
      description: "Workshop workshop at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1124"
    },
    {
      title: "From Phoenician Scheme to Grand Budapest Hotel: Designing Miniature Sets for Wes Anderson\n                  Films",
      startTime: "13:15",
      endTime: "15:15",
      time: "13:15-15:15",
      date: "2025-10-13",
      location: "SALA POLIFUNZIONALE",
      speakers: [
        "Simon Weisse"
      ],
      type: "masterclass",
      categories: [
        "art"
      ],
      tags: [
        "masterclass"
      ],
      description: "Masterclass masterclass at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1109"
    },
    {
      title: "Creative Careers Unfiltered: Motivation, Mentorship &amp; Meaningful Networking",
      startTime: "14:30",
      endTime: "15:30",
      time: "14:30-15:30",
      date: "2025-10-13",
      location: "ITS 10",
      speakers: [
        "Brenda Ximena Roldan Romero",
        "Ethan Francis"
      ],
      type: "ama",
      categories: [
        "general"
      ],
      tags: [
        "ama"
      ],
      description: "ama at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1142"
    },
    {
      title: "AMA: Nonno Edition. Doubts and Hopes for a Future Self",
      startTime: "15:30",
      endTime: "16:30",
      time: "15:30-16:30",
      date: "2025-10-13",
      location: "SALA POLIFUNZIONALE",
      speakers: [
        "Luca Prasso"
      ],
      type: "ama",
      categories: [
        "general"
      ],
      tags: [
        "ama"
      ],
      description: "ama at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1192"
    },
    {
      title: "Portfolio Reviews: Tips and Tricks",
      startTime: "15:45",
      endTime: "16:45",
      time: "15:45-16:45",
      date: "2025-10-13",
      location: "ITS 3",
      speakers: [
        "Brenda Ximena Roldan Romero",
        "Ethan Francis"
      ],
      type: "portfolio",
      categories: [
        "general"
      ],
      tags: [
        "portfolio"
      ],
      description: "portfolio at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1167"
    },
    {
      title: "Ask Me Anything: Bringing Creatures and Characters to Life in Production",
      startTime: "15:45",
      endTime: "16:45",
      time: "15:45-16:45",
      date: "2025-10-13",
      location: "ITS 10",
      speakers: [
        "Andrea Salvatori"
      ],
      type: "ama",
      categories: [
        "animation"
      ],
      tags: [
        "ama",
        "animation",
        "character"
      ],
      description: "ama at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1196"
    },
    {
      title: "How It Started, How Its Going",
      startTime: "16:45",
      endTime: "17:45",
      time: "16:45-17:45",
      date: "2025-10-13",
      location: "SALA POLIFUNZIONALE",
      speakers: [
        "Dylan Sisson",
        "Ted Ty",
        "Kyle T. Webster",
        "Luca Prasso",
        "Kris Pearn",
        "Barbara Robertson"
      ],
      type: "ama",
      categories: [
        "art"
      ],
      tags: [
        "ama"
      ],
      description: "ama at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1203"
    },
    {
      title: "The Bad Guys 2",
      startTime: "09:00",
      endTime: "10:00",
      time: "09:00-10:00",
      date: "2025-10-14",
      location: "FUCINE",
      speakers: [
        "Matt Baer",
        "Pierre Perifel"
      ],
      type: "talk",
      categories: [
        "general"
      ],
      tags: [],
      description: "talk at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1112"
    },
    {
      title: "Wicked: For Good (Premiere Talk)",
      startTime: "10:15",
      endTime: "11:15",
      time: "10:15-11:15",
      date: "2025-10-14",
      location: "FUCINE",
      speakers: [
        "Dale Newton",
        "Pablo Helman"
      ],
      type: "talk",
      categories: [
        "general"
      ],
      tags: [],
      description: "talk at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1139"
    },
    {
      title: "KPop Demon Hunters",
      startTime: "11:30",
      endTime: "12:30",
      time: "11:30-12:30",
      date: "2025-10-14",
      location: "FUCINE",
      speakers: [
        "Maggie Kang",
        "Chris Appelhans"
      ],
      type: "talk",
      categories: [
        "general"
      ],
      tags: [],
      description: "talk at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1131"
    },
    {
      title: "Creating a Family-Friendly Apocalypse: The Development of Lego Horizon Adventures",
      startTime: "12:45",
      endTime: "13:45",
      time: "12:45-13:45",
      date: "2025-10-14",
      location: "FUCINE",
      speakers: [
        "Jan-Bart Van Beek",
        "Jochen Willemsen"
      ],
      type: "talk",
      categories: [
        "art"
      ],
      tags: [],
      description: "talk at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1094"
    },
    {
      title: "Guillermo del Toro's Frankenstein",
      startTime: "12:45",
      endTime: "13:45",
      time: "12:45-13:45",
      date: "2025-10-14",
      location: "BINARIO3",
      speakers: [
        "Dan Laustsen",
        "Carolyn Giardina"
      ],
      type: "talk",
      categories: [
        "general"
      ],
      tags: [],
      description: "talk at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1208"
    },
    {
      title: "Transforming Creativity: How AI Can Elevate Your Ideas",
      startTime: "12:45",
      endTime: "13:45",
      time: "12:45-13:45",
      date: "2025-10-14",
      location: "MEZZANINO",
      speakers: [
        "Habib Zargarpour"
      ],
      type: "masterclass",
      categories: [
        "technology"
      ],
      tags: [
        "masterclass",
        "technology",
        "ai",
        "machine learning"
      ],
      description: "Masterclass masterclass exploring artificial intelligence applications in creative workflows",
      url: "https://www.viewconference.it/article/1171"
    },
    {
      title: "Beyond Prompts: Unlocking Creative Collaboration with AI Agents",
      startTime: "14:00",
      endTime: "15:00",
      time: "14:00-15:00",
      date: "2025-10-14",
      location: "FUCINE",
      speakers: [
        "Rick Champagne"
      ],
      type: "talk",
      categories: [
        "technology"
      ],
      tags: [
        "technology",
        "ai",
        "machine learning"
      ],
      description: "talk exploring artificial intelligence applications in creative workflows",
      url: "https://www.viewconference.it/article/1179"
    },
    {
      title: "Procreate Demo: Procreate Dreams 2",
      startTime: "14:00",
      endTime: "15:00",
      time: "14:00-15:00",
      date: "2025-10-14",
      location: "BINARIO3",
      speakers: [
        "Kyle T. Webster"
      ],
      type: "masterclass",
      categories: [
        "general"
      ],
      tags: [
        "masterclass",
        "procreate",
        "digital art",
        "illustration"
      ],
      description: "2-Hour masterclass on advanced Procreate techniques and digital illustration",
      url: "https://www.viewconference.it/article/1128"
    },
    {
      title: "White Rabbit: The Art of Audience Engagement in the Age of AI",
      startTime: "14:00",
      endTime: "15:00",
      time: "14:00-15:00",
      date: "2025-10-14",
      location: "MEZZANINO",
      speakers: [
        "Maciej Kuciara"
      ],
      type: "talk",
      categories: [
        "technology"
      ],
      tags: [
        "technology",
        "ai",
        "machine learning"
      ],
      description: "talk exploring artificial intelligence applications in creative workflows",
      url: "https://www.viewconference.it/article/1151"
    },
    {
      title: "Cinema.3: A New Era of Film",
      startTime: "15:00",
      endTime: "16:00",
      time: "15:00-16:00",
      date: "2025-10-14",
      location: "BINARIO3",
      speakers: [
        "Giaime Alonge",
        "Giulia Carluccio",
        "Francesco Casetti",
        "Simone Natale",
        "Gabriella Taddeo",
        "Habib Zargarpour"
      ],
      type: "panel",
      categories: [
        "technology"
      ],
      tags: [
        "panel",
        "technology",
        "cinema"
      ],
      description: "panel at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1135"
    },
    {
      title: "Beyond the Frame: 50 Years of ILM and the Next Era of Visual Storytelling",
      startTime: "15:15",
      endTime: "16:15",
      time: "15:15-16:15",
      date: "2025-10-14",
      location: "FUCINE",
      speakers: [
        "Janet Lewin",
        "Ian Failes"
      ],
      type: "talk",
      categories: [
        "technology"
      ],
      tags: [
        "technology"
      ],
      description: "talk at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1084"
    },
    {
      title: "The Artist in Command: Taking Creative Control with Generative AI",
      startTime: "15:15",
      endTime: "16:15",
      time: "15:15-16:15",
      date: "2025-10-14",
      location: "MEZZANINO",
      speakers: [
        "Ian Massingham"
      ],
      type: "talk",
      categories: [
        "technology"
      ],
      tags: [
        "technology",
        "ai",
        "machine learning"
      ],
      description: "talk exploring artificial intelligence applications in creative workflows",
      url: "https://www.viewconference.it/article/1181"
    },
    {
      title: "Anatomy of a Battle: Rook’s Rest and The Dance of Dragons in House of the Dragon Season\n                  2",
      startTime: "16:15",
      endTime: "17:15",
      time: "16:15-17:15",
      date: "2025-10-14",
      location: "BINARIO3",
      speakers: [
        "Claudia Marvisi"
      ],
      type: "talk",
      categories: [
        "general"
      ],
      tags: [],
      description: "talk at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1184"
    },
    {
      title: "SENTINEL and AI: Know Your Foe!",
      startTime: "16:30",
      endTime: "17:30",
      time: "16:30-17:30",
      date: "2025-10-14",
      location: "FUCINE",
      speakers: [
        "Phil Tippett",
        "Gary Mundell",
        "Mark Dubeau",
        "Tom Gibbons",
        "Marc Morissette",
        "Remko Noteboom",
        "Colin Geddes"
      ],
      type: "panel",
      categories: [
        "technology"
      ],
      tags: [
        "panel",
        "technology",
        "ai",
        "machine learning"
      ],
      description: "panel exploring artificial intelligence applications in creative workflows",
      url: "https://www.viewconference.it/article/1108"
    },
    {
      title: "A Minecraft Movie: How the Virtual Art Department Enabled Real-Time Collaboration\n                  with Unreal Engine",
      startTime: "16:30",
      endTime: "17:30",
      time: "16:30-17:30",
      date: "2025-10-14",
      location: "MEZZANINO",
      speakers: [
        "Talia Finlayson"
      ],
      type: "talk",
      categories: [
        "technology"
      ],
      tags: [
        "technology",
        "unreal engine",
        "previz",
        "postviz",
        "visualization"
      ],
      description: "talk covering Pre-Visualization and Post-Visualization techniques with Unreal Engine",
      url: "https://www.viewconference.it/article/1198"
    },
    {
      title: "Assets for Production: VFX &amp; Real-Time",
      startTime: "17:30",
      endTime: "18:30",
      time: "17:30-18:30",
      date: "2025-10-14",
      location: "BINARIO3",
      speakers: [
        "Gennaro Esposito"
      ],
      type: "portfolio",
      categories: [
        "vfx"
      ],
      tags: [
        "portfolio",
        "vfx"
      ],
      description: "portfolio at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1205"
    },
    {
      title: "The Future of Storytelling 2025",
      startTime: "17:45",
      endTime: "18:45",
      time: "17:45-18:45",
      date: "2025-10-14",
      location: "FUCINE",
      speakers: [
        "Pierre Perifel",
        "Camille Balsamo-Gillis",
        "Alex Woo",
        "Maggie Kang",
        "Chris Appelhans",
        "Kris Pearn",
        "Dan Sarto"
      ],
      type: "panel",
      categories: [
        "art"
      ],
      tags: [
        "panel"
      ],
      description: "panel at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1155"
    },
    {
      title: "Artistic Integrity and Quieting the Noise: Navigating Emotion and Digital Storytelling",
      startTime: "17:45",
      endTime: "18:45",
      time: "17:45-18:45",
      date: "2025-10-14",
      location: "MEZZANINO",
      speakers: [
        "Arissa Ackerman"
      ],
      type: "talk",
      categories: [
        "art"
      ],
      tags: [],
      description: "talk at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1191"
    },
    {
      title: "Stitching It Together: Embracing Chaos in Crafting VFX for Live-Action Lilo &amp; Stitch",
      startTime: "09:00",
      endTime: "10:00",
      time: "09:00-10:00",
      date: "2025-10-15",
      location: "FUCINE",
      speakers: [
        "Craig Hammack"
      ],
      type: "talk",
      categories: [
        "vfx"
      ],
      tags: [
        "vfx"
      ],
      description: "talk at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1085"
    },
    {
      title: "The Case of the Missing Afikomen: An Interactive Detective Story with Ctrl Movie",
      startTime: "09:00",
      endTime: "10:00",
      time: "09:00-10:00",
      date: "2025-10-15",
      location: "BINARIO3",
      speakers: [
        "Zane Swift"
      ],
      type: "talk",
      categories: [
        "general"
      ],
      tags: [],
      description: "talk at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1107"
    },
    {
      title: "Visual Poetry: The Art of Japanese Cinema Posters",
      startTime: "09:00",
      endTime: "10:00",
      time: "09:00-10:00",
      date: "2025-10-15",
      location: "MEZZANINO",
      speakers: [
        "Jeff Dillinger"
      ],
      type: "talk",
      categories: [
        "art"
      ],
      tags: [
        "cinema"
      ],
      description: "talk at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1102"
    },
    {
      title: "Fantastic Four: First Steps",
      startTime: "10:15",
      endTime: "11:15",
      time: "10:15-11:15",
      date: "2025-10-15",
      location: "FUCINE",
      speakers: [
        "Daniele Bigi"
      ],
      type: "talk",
      categories: [
        "general"
      ],
      tags: [],
      description: "talk at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1132"
    },
    {
      title: "The Splat Frontier: Experimenting with 3D Gaussian Splatting",
      startTime: "10:15",
      endTime: "11:15",
      time: "10:15-11:15",
      date: "2025-10-15",
      location: "BINARIO3",
      speakers: [
        "Eloi Champagne"
      ],
      type: "talk",
      categories: [
        "general"
      ],
      tags: [
        "gaussian splatting",
        "advanced",
        "environment"
      ],
      description: "talk on using Gaussian Splatting techniques in production environments",
      url: "https://www.viewconference.it/article/1154"
    },
    {
      title: "Claynosaurz: Rise of the Interactive Franchises: Why the Future Belongs to Creators",
      startTime: "10:15",
      endTime: "11:15",
      time: "10:15-11:15",
      date: "2025-10-15",
      location: "MEZZANINO",
      speakers: [
        "Nicholas Cabana"
      ],
      type: "talk",
      categories: [
        "general"
      ],
      tags: [],
      description: "talk at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1187"
    },
    {
      title: "Short Films, Epic Ambitions",
      startTime: "11:30",
      endTime: "12:30",
      time: "11:30-12:30",
      date: "2025-10-15",
      location: "FUCINE",
      speakers: [
        "Chris Lavis",
        "Eric Pouliot"
      ],
      type: "talk",
      categories: [
        "general"
      ],
      tags: [],
      description: "talk at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1160"
    },
    {
      title: "Capturing the Human Essence: Advances in 3D &amp; 4D Scanning",
      startTime: "11:30",
      endTime: "12:30",
      time: "11:30-12:30",
      date: "2025-10-15",
      location: "BINARIO3",
      speakers: [
        "Jingyi Zhang"
      ],
      type: "talk",
      categories: [
        "general"
      ],
      tags: [],
      description: "talk at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1091"
    },
    {
      title: "Is VFX a Sustainable Business Model?",
      startTime: "11:30",
      endTime: "12:30",
      time: "11:30-12:30",
      date: "2025-10-15",
      location: "MEZZANINO",
      speakers: [
        "Heiko Burkardsmaier"
      ],
      type: "talk",
      categories: [
        "vfx"
      ],
      tags: [
        "vfx",
        "ai",
        "machine learning"
      ],
      description: "talk exploring artificial intelligence applications in creative workflows",
      url: "https://www.viewconference.it/article/1088"
    },
    {
      title: "The VFX Behind the Emmy Award Winning Comedy: The Studio",
      startTime: "12:45",
      endTime: "13:15",
      time: "12:45-13:15",
      date: "2025-10-15",
      location: "FUCINE",
      speakers: [
        "Jake Maymudes",
        "Sandro Blattner"
      ],
      type: "talk",
      categories: [
        "vfx"
      ],
      tags: [
        "vfx"
      ],
      description: "talk at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1081"
    },
    {
      title: "Walking With Animators",
      startTime: "12:45",
      endTime: "13:45",
      time: "12:45-13:45",
      date: "2025-10-15",
      location: "BINARIO3",
      speakers: [
        "Alexandre Poncet"
      ],
      type: "talk",
      categories: [
        "general"
      ],
      tags: [],
      description: "talk at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1086"
    },
    {
      title: "Advancing Visualization with Gaussian Splats in Feature Film",
      startTime: "12:45",
      endTime: "13:45",
      time: "12:45-13:45",
      date: "2025-10-15",
      location: "MEZZANINO",
      speakers: [
        "Pawl Fulker"
      ],
      type: "talk",
      categories: [
        "general"
      ],
      tags: [
        "gaussian splatting",
        "advanced",
        "environment"
      ],
      description: "talk on using Gaussian Splatting techniques in production environments",
      url: "https://www.viewconference.it/article/1110"
    },
    {
      title: "Caws &amp; Effects: Wednesday Season 2",
      startTime: "13:30",
      endTime: "14:30",
      time: "13:30-14:30",
      date: "2025-10-15",
      location: "FUCINE",
      speakers: [
        "Kevin Buessecker",
        "Jethro Au"
      ],
      type: "talk",
      categories: [
        "vfx"
      ],
      tags: [
        "vfx"
      ],
      description: "talk at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1150"
    },
    {
      title: "Inspiring the Next Generation of Storytellers: AI &amp; Innovation Technology in Education",
      startTime: "14:00",
      endTime: "15:00",
      time: "14:00-15:00",
      date: "2025-10-15",
      location: "BINARIO3",
      speakers: [
        "Oleg  Fryazinov",
        "Morten Thorning",
        "Simon Davies",
        "Camille Jaulent",
        "Andrea Bottino",
        "Terrence Masson",
        "Saint Walker"
      ],
      type: "panel",
      categories: [
        "technology"
      ],
      tags: [
        "panel",
        "technology",
        "ai",
        "machine learning"
      ],
      description: "panel exploring artificial intelligence applications in creative workflows",
      url: "https://www.viewconference.it/article/1100"
    },
    {
      title: "Small but Mighty: Getting Things Done with the Latest Tech, Tools &amp; Small Teams",
      startTime: "14:00",
      endTime: "15:00",
      time: "14:00-15:00",
      date: "2025-10-15",
      location: "MEZZANINO",
      speakers: [
        "Andreas Maaninka",
        "John Canning",
        "Fulvio Sestito"
      ],
      type: "panel",
      categories: [
        "general"
      ],
      tags: [
        "panel"
      ],
      description: "panel at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1174"
    },
    {
      title: "Behind the Wheel of F1’s Invisible VFX",
      startTime: "14:45",
      endTime: "15:45",
      time: "14:45-15:45",
      date: "2025-10-15",
      location: "FUCINE",
      speakers: [
        "Ryan Tudhope"
      ],
      type: "talk",
      categories: [
        "vfx"
      ],
      tags: [
        "vfx"
      ],
      description: "talk at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1133"
    },
    {
      title: "Pixels, Pressure and People: Creative Leadership in VFX",
      startTime: "15:15",
      endTime: "16:15",
      time: "15:15-16:15",
      date: "2025-10-15",
      location: "MEZZANINO",
      speakers: [
        "Filippo Robino",
        "Claudia Marvisi",
        "Heiko Burkardsmaier",
        "Tracy Mccreary"
      ],
      type: "panel",
      categories: [
        "vfx"
      ],
      tags: [
        "panel",
        "vfx"
      ],
      description: "panel at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1126"
    },
    {
      title: "Ready for Launch: Creating Fantastic Four's Miniature Ships with Cutting-Edge and\n                  Classic Techniques",
      startTime: "16:00",
      endTime: "17:00",
      time: "16:00-17:00",
      date: "2025-10-15",
      location: "FUCINE",
      speakers: [
        "Ian Hunter",
        "Reid Collums",
        "Camille Balsamo-Gillis"
      ],
      type: "panel",
      categories: [
        "general"
      ],
      tags: [
        "panel"
      ],
      description: "panel at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1120"
    },
    {
      title: "Creating the Spaceport Environment for Dune: Prophecy",
      startTime: "16:30",
      endTime: "17:30",
      time: "16:30-17:30",
      date: "2025-10-15",
      location: "BINARIO3",
      speakers: [
        "Apollonia Hartmann",
        "David Anastacio"
      ],
      type: "talk",
      categories: [
        "art"
      ],
      tags: [
        "environment"
      ],
      description: "talk at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1089"
    },
    {
      title: "The Art of Game Cinematics: The Witcher 4 Cinematic Trailer",
      startTime: "16:30",
      endTime: "17:30",
      time: "16:30-17:30",
      date: "2025-10-15",
      location: "MEZZANINO",
      speakers: [
        "Tomek Suwalkski",
        "Magdalena Rudnicka"
      ],
      type: "talk",
      categories: [
        "technology"
      ],
      tags: [
        "technology",
        "cinema",
        "ai",
        "machine learning"
      ],
      description: "talk exploring artificial intelligence applications in creative workflows",
      url: "https://www.viewconference.it/article/1158"
    },
    {
      title: "Stop Motion: Bring the Goods",
      startTime: "17:15",
      endTime: "18:15",
      time: "17:15-18:15",
      date: "2025-10-15",
      location: "FUCINE",
      speakers: [
        "Phil Tippett",
        "Gary Mundell",
        "Mark Dubeau",
        "Tom Gibbons",
        "Ken Rogerson"
      ],
      type: "panel",
      categories: [
        "general"
      ],
      tags: [
        "panel"
      ],
      description: "panel at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1087"
    },
    {
      title: "Innovation and Creativity at the Service of Audiovisual Production",
      startTime: "17:45",
      endTime: "18:45",
      time: "17:45-18:45",
      date: "2025-10-15",
      location: "BINARIO3",
      speakers: [
        "Monica Galantucci",
        "Giulio Campiglia"
      ],
      type: "talk",
      categories: [
        "production"
      ],
      tags: [],
      description: "talk at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1178"
    },
    {
      title: "Driving a Show, Success from the Art Department",
      startTime: "17:45",
      endTime: "18:45",
      time: "17:45-18:45",
      date: "2025-10-15",
      location: "MEZZANINO",
      speakers: [
        "Javier Romero"
      ],
      type: "talk",
      categories: [
        "art"
      ],
      tags: [],
      description: "talk at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1127"
    },
    {
      title: "When Worlds Collide: Bridging the Grid and Reality in TRON: Ares",
      startTime: "18:30",
      endTime: "19:30",
      time: "18:30-19:30",
      date: "2025-10-15",
      location: "FUCINE",
      speakers: [
        "David Seager"
      ],
      type: "talk",
      categories: [
        "general"
      ],
      tags: [],
      description: "talk at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1194"
    },
    {
      title: "Elio",
      startTime: "09:00",
      endTime: "10:00",
      time: "09:00-10:00",
      date: "2025-10-16",
      location: "FUCINE",
      speakers: [
        "Domee Shi",
        "Madeline Sharafian"
      ],
      type: "talk",
      categories: [
        "general"
      ],
      tags: [],
      description: "talk at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1075"
    },
    {
      title: "In Your Dreams (Premiere Talk)",
      startTime: "10:15",
      endTime: "11:15",
      time: "10:15-11:15",
      date: "2025-10-16",
      location: "FUCINE",
      speakers: [
        "Sacha Kapijimpanga",
        "Nicky Lavender",
        "Alex Woo",
        "Ian Failes"
      ],
      type: "talk",
      categories: [
        "technology"
      ],
      tags: [
        "technology"
      ],
      description: "talk at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1113"
    },
    {
      title: "Creating Worlds: The Art and Design of Avatar",
      startTime: "11:30",
      endTime: "12:30",
      time: "11:30-12:30",
      date: "2025-10-16",
      location: "FUCINE",
      speakers: [
        "Dylan Cole"
      ],
      type: "talk",
      categories: [
        "art"
      ],
      tags: [],
      description: "talk at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1207"
    },
    {
      title: "Solving for Creativity: Technical Experiments at the NFB",
      startTime: "11:30",
      endTime: "12:30",
      time: "11:30-12:30",
      date: "2025-10-16",
      location: "BINARIO3",
      speakers: [
        "Eloi Champagne"
      ],
      type: "talk",
      categories: [
        "general"
      ],
      tags: [],
      description: "talk at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1115"
    },
    {
      title: "VFX and Animation Worldwide: A Data-Driven Look at Our Industry",
      startTime: "11:30",
      endTime: "12:30",
      time: "11:30-12:30",
      date: "2025-10-16",
      location: "TECA B",
      speakers: [
        "Joseph Bell"
      ],
      type: "talk",
      categories: [
        "vfx"
      ],
      tags: [
        "vfx"
      ],
      description: "talk at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1180"
    },
    {
      title: "To Infinity… and RenderMan XPU!",
      startTime: "12:45",
      endTime: "13:45",
      time: "12:45-13:45",
      date: "2025-10-16",
      location: "FUCINE",
      speakers: [
        "Dylan Sisson"
      ],
      type: "talk",
      categories: [
        "general"
      ],
      tags: [],
      description: "talk at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1123"
    },
    {
      title: "The Rings of Power Season 2: Bringing life to Middle Earth Creatures",
      startTime: "12:45",
      endTime: "13:45",
      time: "12:45-13:45",
      date: "2025-10-16",
      location: "BINARIO3",
      speakers: [
        "Ara Khanikian"
      ],
      type: "talk",
      categories: [
        "art"
      ],
      tags: [],
      description: "talk at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1118"
    },
    {
      title: "The Purposes of Creativity &amp; Art",
      startTime: "14:00",
      endTime: "14:30",
      time: "14:00-14:30",
      date: "2025-10-16",
      location: "FUCINE",
      speakers: [
        "Matthias Buehler"
      ],
      type: "keynote",
      categories: [
        "art"
      ],
      tags: [
        "keynote"
      ],
      description: "keynote at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1153"
    },
    {
      title: "Once Upon a Toon: Folktales and History with an Animated Twist!",
      startTime: "14:00",
      endTime: "15:00",
      time: "14:00-15:00",
      date: "2025-10-16",
      location: "BINARIO3",
      speakers: [
        "Munjal B. Shroff"
      ],
      type: "talk",
      categories: [
        "animation"
      ],
      tags: [
        "animation",
        "history",
        "cinema"
      ],
      description: "talk exploring the evolution of visual effects in cinema",
      url: "https://www.viewconference.it/article/1099"
    },
    {
      title: "What Remains in the Ruins: The VFX of ‘The Last of Us - Season 2’",
      startTime: "14:00",
      endTime: "15:00",
      time: "14:00-15:00",
      date: "2025-10-16",
      location: "TECA B",
      speakers: [
        "Melaina Mace",
        "Roberto Rodricks"
      ],
      type: "talk",
      categories: [
        "vfx"
      ],
      tags: [
        "vfx",
        "ai",
        "machine learning"
      ],
      description: "talk exploring artificial intelligence applications in creative workflows",
      url: "https://www.viewconference.it/article/1138"
    },
    {
      title: "Superman: Building Superdog, Crafting Crystalline Fortress of Solitude, Pioneering\n                  4D Gaussian Splat",
      startTime: "14:45",
      endTime: "15:45",
      time: "14:45-15:45",
      date: "2025-10-16",
      location: "FUCINE",
      speakers: [
        "StéPhane Nazé"
      ],
      type: "talk",
      categories: [
        "general"
      ],
      tags: [
        "gaussian splatting",
        "advanced",
        "environment"
      ],
      description: "talk on using Gaussian Splatting techniques in production environments",
      url: "https://www.viewconference.it/article/1159"
    },
    {
      title: "GAME-ER Clusters in Action: Co-Op Mode as the New Industry Standard",
      startTime: "15:15",
      endTime: "16:15",
      time: "15:15-16:15",
      date: "2025-10-16",
      location: "BINARIO3",
      speakers: [
        "Valerio Di Donato",
        "Darshana Jayemanne",
        "LuíS LeçA",
        "Matteo Sapio",
        "Matteo Pessione"
      ],
      type: "panel",
      categories: [
        "gaming"
      ],
      tags: [
        "panel"
      ],
      description: "panel at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1202"
    },
    {
      title: "Embodiment of Motion: Loïe Fuller &amp; Aesthetics of Performance in Emerging Tech",
      startTime: "15:15",
      endTime: "16:15",
      time: "15:15-16:15",
      date: "2025-10-16",
      location: "TECA B",
      speakers: [
        "Rochele Gloor"
      ],
      type: "talk",
      categories: [
        "general"
      ],
      tags: [],
      description: "talk at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1101"
    },
    {
      title: "The VFX of the The Penguin (HBO)",
      startTime: "16:00",
      endTime: "17:00",
      time: "16:00-17:00",
      date: "2025-10-16",
      location: "FUCINE",
      speakers: [
        "Johnny Han",
        "Goran Pavles",
        "Eugene Bondar"
      ],
      type: "talk",
      categories: [
        "vfx"
      ],
      tags: [
        "vfx"
      ],
      description: "talk at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1156"
    },
    {
      title: "Women in Animation: VFX and Live Action",
      startTime: "16:30",
      endTime: "17:30",
      time: "16:30-17:30",
      date: "2025-10-16",
      location: "BINARIO3",
      speakers: [
        "Domee Shi",
        "Claudia Marvisi",
        "Madeline Sharafian",
        "Janet Lewin",
        "Janet Lewin",
        "Fiona Walkinshaw",
        "Carolyn Giardina"
      ],
      type: "panel",
      categories: [
        "vfx"
      ],
      tags: [
        "panel",
        "vfx"
      ],
      description: "panel at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1201"
    },
    {
      title: "\"Sinners\" VFX: Photochemical Soul, Digital Craft: Twinned &amp; Twisted Southern Blues\n                  Gangster Western",
      startTime: "17:15",
      endTime: "18:15",
      time: "17:15-18:15",
      date: "2025-10-16",
      location: "FUCINE",
      speakers: [
        "Michael Ralla",
        "Guido Wolter",
        "Espen Nordahl",
        "Antoine Moulineau"
      ],
      type: "talk",
      categories: [
        "vfx"
      ],
      tags: [
        "vfx"
      ],
      description: "talk at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1092"
    },
    {
      title: "The Co-Pilots of Creativity: From Concept to Screen, Unlocking Potential Through AI\n                  &amp; Technology",
      startTime: "17:45",
      endTime: "19:15",
      time: "17:45-19:15",
      date: "2025-10-16",
      location: "BINARIO3",
      speakers: [
        "Setareh Samandari",
        "Francesco Casetti",
        "Habib Zargarpour"
      ],
      type: "masterclass",
      categories: [
        "technology"
      ],
      tags: [
        "masterclass",
        "technology",
        "ai",
        "machine learning"
      ],
      description: "Masterclass masterclass exploring artificial intelligence applications in creative workflows",
      url: "https://www.viewconference.it/article/1105"
    },
    {
      title: "The Future of Filmmaking (2025)",
      startTime: "18:30",
      endTime: "19:30",
      time: "18:30-19:30",
      date: "2025-10-16",
      location: "FUCINE",
      speakers: [
        "Ramsey Naito",
        "Doug Chiang",
        "Kevin Baillie",
        "Jeff Dillinger",
        "Janet Lewin",
        "Fiona Walkinshaw",
        "Laurens Ehrmann",
        "Ian Failes"
      ],
      type: "panel",
      categories: [
        "technology"
      ],
      tags: [
        "panel",
        "technology"
      ],
      description: "panel at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1186"
    },
    {
      title: "How to Train Your Dragon",
      startTime: "09:00",
      endTime: "10:00",
      time: "09:00-10:00",
      date: "2025-10-17",
      location: "FUCINE",
      speakers: [
        "Christian MäNz",
        "Dean Deblois",
        "Glen Mcintosh"
      ],
      type: "talk",
      categories: [
        "technology"
      ],
      tags: [
        "technology",
        "ai",
        "machine learning"
      ],
      description: "talk exploring artificial intelligence applications in creative workflows",
      url: "https://www.viewconference.it/article/1095"
    },
    {
      title: "Studio Ready: Tips and Q&amp;A on Getting Hired in Animation &amp; VFX!",
      startTime: "09:00",
      endTime: "10:00",
      time: "09:00-10:00",
      date: "2025-10-17",
      location: "MEZZANINO",
      speakers: [
        "Siva Kumar Kasetty"
      ],
      type: "ama",
      categories: [
        "vfx"
      ],
      tags: [
        "ama",
        "vfx"
      ],
      description: "ama at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1195"
    },
    {
      title: "The Cat in the Hat (2026) (Premiere Talk)",
      startTime: "10:15",
      endTime: "11:15",
      time: "10:15-11:15",
      date: "2025-10-17",
      location: "FUCINE",
      speakers: [
        "Alessandro Carloni"
      ],
      type: "talk",
      categories: [
        "general"
      ],
      tags: [],
      description: "talk at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1114"
    },
    {
      title: "Immersive Entertainment: Building Cinematic Stories on Vision Pro",
      startTime: "10:15",
      endTime: "11:15",
      time: "10:15-11:15",
      date: "2025-10-17",
      location: "BINARIO3",
      speakers: [
        "Victor Agulhon"
      ],
      type: "talk",
      categories: [
        "technology"
      ],
      tags: [
        "technology",
        "cinema",
        "ai",
        "machine learning"
      ],
      description: "talk exploring artificial intelligence applications in creative workflows",
      url: "https://www.viewconference.it/article/1140"
    },
    {
      title: "How to Become the 3D Artist of Tomorrow",
      startTime: "10:15",
      endTime: "11:15",
      time: "10:15-11:15",
      date: "2025-10-17",
      location: "MEZZANINO",
      speakers: [
        "Gennaro Esposito"
      ],
      type: "talk",
      categories: [
        "art"
      ],
      tags: [],
      description: "talk at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1183"
    },
    {
      title: "Jurassic World: Rebirth",
      startTime: "11:30",
      endTime: "12:30",
      time: "11:30-12:30",
      date: "2025-10-17",
      location: "FUCINE",
      speakers: [
        "David Vickery"
      ],
      type: "talk",
      categories: [
        "general"
      ],
      tags: [],
      description: "talk at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1098"
    },
    {
      title: "Directing GenAI Tools for Real World Productions: Fashion Industry Video Case Study",
      startTime: "11:30",
      endTime: "12:30",
      time: "11:30-12:30",
      date: "2025-10-17",
      location: "BINARIO3",
      speakers: [
        "Srikanth Srinivasan"
      ],
      type: "talk",
      categories: [
        "technology"
      ],
      tags: [
        "technology",
        "ai",
        "machine learning"
      ],
      description: "talk exploring artificial intelligence applications in creative workflows",
      url: "https://www.viewconference.it/article/1116"
    },
    {
      title: "NORA: the First Italian V-Idol and Digital Pop Star",
      startTime: "11:30",
      endTime: "12:30",
      time: "11:30-12:30",
      date: "2025-10-17",
      location: "MEZZANINO",
      speakers: [
        "Serena Tripepi",
        "Max Carrier Ragazzi"
      ],
      type: "talk",
      categories: [
        "general"
      ],
      tags: [],
      description: "talk at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1206"
    },
    {
      title: "Interactive Samurai Cinema in Ghost of Yotei",
      startTime: "12:45",
      endTime: "13:45",
      time: "12:45-13:45",
      date: "2025-10-17",
      location: "FUCINE",
      speakers: [
        "Nathan Fox"
      ],
      type: "talk",
      categories: [
        "technology"
      ],
      tags: [
        "technology",
        "cinema",
        "ai",
        "machine learning"
      ],
      description: "talk exploring artificial intelligence applications in creative workflows",
      url: "https://www.viewconference.it/article/1097"
    },
    {
      title: "Creator's Tools: Innovation at Eyeline",
      startTime: "12:45",
      endTime: "13:45",
      time: "12:45-13:45",
      date: "2025-10-17",
      location: "BINARIO3",
      speakers: [
        "Kevin Baillie"
      ],
      type: "talk",
      categories: [
        "technology"
      ],
      tags: [
        "technology"
      ],
      description: "talk at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1170"
    },
    {
      title: "From Script to Screen",
      startTime: "12:45",
      endTime: "13:45",
      time: "12:45-13:45",
      date: "2025-10-17",
      location: "MEZZANINO",
      speakers: [
        "Heike Kluger",
        "Tara Demarco",
        "Christina Caspers-Roemer"
      ],
      type: "panel",
      categories: [
        "general"
      ],
      tags: [
        "panel"
      ],
      description: "panel at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1136"
    },
    {
      title: "My 50 Years with ILM",
      startTime: "14:00",
      endTime: "15:00",
      time: "14:00-15:00",
      date: "2025-10-17",
      location: "FUCINE",
      speakers: [
        "Hal Hickel"
      ],
      type: "talk",
      categories: [
        "general"
      ],
      tags: [],
      description: "talk at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1096"
    },
    {
      title: "The Sandman: Crafting the Dreaming",
      startTime: "14:00",
      endTime: "15:00",
      time: "14:00-15:00",
      date: "2025-10-17",
      location: "BINARIO3",
      speakers: [
        "Martin Pelletier"
      ],
      type: "talk",
      categories: [
        "art"
      ],
      tags: [],
      description: "talk at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1117"
    },
    {
      title: "Bridging the Gap in VFX: Collaboration &amp; Innovation (In Partnership with VES)",
      startTime: "14:00",
      endTime: "15:00",
      time: "14:00-15:00",
      date: "2025-10-17",
      location: "MEZZANINO",
      speakers: [
        "Kevin Baillie",
        "Christine Resch",
        "Michael Ralla",
        "Christina Caspers-Roemer"
      ],
      type: "panel",
      categories: [
        "vfx"
      ],
      tags: [
        "panel",
        "vfx"
      ],
      description: "panel at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1199"
    },
    {
      title: "From Slot Machine to Meaningful Creative Control",
      startTime: "15:15",
      endTime: "16:15",
      time: "15:15-16:15",
      date: "2025-10-17",
      location: "FUCINE",
      speakers: [
        "Martin Nebelong"
      ],
      type: "talk",
      categories: [
        "art"
      ],
      tags: [],
      description: "talk at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1083"
    },
    {
      title: "The Filmmaker and the Machine: AI, Cinema, and Real-Time 3D Worlds",
      startTime: "15:15",
      endTime: "16:15",
      time: "15:15-16:15",
      date: "2025-10-17",
      location: "BINARIO3",
      speakers: [
        "Dimitri Vallein"
      ],
      type: "talk",
      categories: [
        "technology"
      ],
      tags: [
        "technology",
        "cinema",
        "ai",
        "machine learning"
      ],
      description: "talk exploring artificial intelligence applications in creative workflows",
      url: "https://www.viewconference.it/article/1125"
    },
    {
      title: "The Future of Content Security: Protecting Creative IP and Stopping Hackers with Superfile",
      startTime: "15:15",
      endTime: "16:15",
      time: "15:15-16:15",
      date: "2025-10-17",
      location: "MEZZANINO",
      speakers: [
        "Shane Valdez",
        "Jake Maymudes"
      ],
      type: "talk",
      categories: [
        "general"
      ],
      tags: [],
      description: "talk at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1145"
    },
    {
      title: "Making It (Look) Big in Movies",
      startTime: "16:30",
      endTime: "17:30",
      time: "16:30-17:30",
      date: "2025-10-17",
      location: "FUCINE",
      speakers: [
        "Ian Hunter"
      ],
      type: "talk",
      categories: [
        "general"
      ],
      tags: [],
      description: "talk at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1119"
    },
    {
      title: "A Life in Film Design",
      startTime: "17:45",
      endTime: "18:45",
      time: "17:45-18:45",
      date: "2025-10-17",
      location: "FUCINE",
      speakers: [
        "Doug Chiang",
        "Alexandre Poncet"
      ],
      type: "keynote",
      categories: [
        "art"
      ],
      tags: [
        "keynote"
      ],
      description: "keynote at VIEW Conference 2025",
      url: "https://www.viewconference.it/article/1130"
    }
  ];

class ConferenceSessionsFilter {
  constructor() {
    this.allSessions = sessionsData;
    this.filteredSessions = [...this.allSessions];
    // Sort sessions by date and time initially
    this.sortSessionsByDateTime();
    this.initializeElements();
    this.attachEventListeners();
    this.renderSessions();
    this.updateResultsCount();

    // Update session statuses every 30 seconds
    setInterval(() => {
      this.renderSessions();
    }, 30000);

    // Log current time for debugging
    console.log("Current time in Italy:", this.getCurrentTimeInItaly());
  }

  initializeElements() {
    this.dayFilter = document.getElementById("day-filter");
    this.categoryFilter = document.getElementById("category-filter");
    this.typeFilter = document.getElementById("type-filter");
    this.searchInput = document.getElementById("search-input");
    this.clearFiltersBtn = document.getElementById("clear-filters");
    this.sessionsContainer = document.getElementById("sessions-container");
    this.resultsCount = document.getElementById("results-count");
    this.allSessionsTab = document.getElementById("all-sessions-tab");
    this.savedSessionsTab = document.getElementById("saved-sessions-tab");
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

    // Add event listeners for the new tabs
    this.allSessionsTab.addEventListener("click", () => this.showAllSessions());
    this.savedSessionsTab.addEventListener("click", () =>
      this.showSavedSessions()
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

    // Sort sessions by date and time
    this.sortSessionsByDateTime();

    this.renderSessions();
    this.updateResultsCount();
  }

  sortSessionsByDateTime() {
    this.filteredSessions.sort((a, b) => {
      // Get session status for both sessions
      const aStatus = this.getSessionStatus(a);
      const bStatus = this.getSessionStatus(b);

      // If one is past and the other is not, move past sessions to the end
      if (aStatus.isPast !== bStatus.isPast) {
        return aStatus.isPast ? 1 : -1; // Past sessions go to the end (1), upcoming sessions stay at the beginning (-1)
      }

      // If both have the same status (both past or both upcoming), sort chronologically
      // First sort by date
      const dateComparison = a.date.localeCompare(b.date);
      if (dateComparison !== 0) {
        return dateComparison;
      }

      // If dates are the same, sort by start time
      const aStartTime = a.time.split("-")[0]; // Get start time (before the dash)
      const bStartTime = b.time.split("-")[0]; // Get start time (before the dash)

      return aStartTime.localeCompare(bStartTime);
    });
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

    // Group sessions by date and create HTML with dividers
    let html = "";
    let currentDate = null;

    this.filteredSessions.forEach((session, index) => {
      // Add day divider when the date changes
      if (session.date !== currentDate) {
        currentDate = session.date;
        const dayName = this.getDayName(session.date);

        html += `
          <div class="day-divider">
            <h2 class="day-header">
              <span class="day-name">${dayName}</span>
            </h2>
          </div>
        `;
      }

      // Add the session card
      html += this.createSessionCard(session);
    });

    this.sessionsContainer.innerHTML = html;
  }

  createSessionCard(session) {
    const formattedDate = this.formatDate(session.date);
    const sessionStatus = this.getSessionStatus(session);
    const statusBadge = this.createStatusBadge(sessionStatus);

    // Debug logging for today's sessions
    const today = new Date().toISOString().split("T")[0];
    if (
      session.date === today ||
      sessionStatus.isOngoing ||
      sessionStatus.startingSoon
    ) {
      console.log(
        `Session ${session.id} (${session.title}):`,
        sessionStatus.debug
      );
      console.log(
        `Status: isPast=${sessionStatus.isPast}, isOngoing=${sessionStatus.isOngoing}, startingSoon=${sessionStatus.startingSoon}`
      );
    }

    // Show less information for completed sessions
    const speakersHtml =
      !sessionStatus.isPast && session.speakers.length > 0
        ? `<div class="session-speakers">
                <h4>Speakers</h4>
                <div class="speakers-list">
                    ${session.speakers
                      .map((speaker) => {
                        const speakerUrl = this.generateSpeakerUrl(speaker);
                        return `<a href="${speakerUrl}" target="_blank" class="speaker-tag" title="View ${speaker}'s profile">${speaker}</a>`;
                      })
                      .join("")}
                </div>
            </div>`
        : "";

    const tagsHtml =
      !sessionStatus.isPast && session.tags.length > 0
        ? `<div class="session-tags">
          ${[...session.tags]
            .sort((a, b) => a.localeCompare(b))
            .map((tag) => {
              const category = this.getTagCategory(tag);
              return `<span class="tag ${category}">${tag}</span>`;
            })
            .join("")}
        </div>`
        : "";

    const sessionActionsHtml = !sessionStatus.isPast
      ? `<div class="session-actions">
                    <button class="save-btn ${
                      this.isSessionSaved(session.id) ? "saved" : ""
                    }" onclick="toggleSaveSession(${session.id})">
                        ${
                          this.isSessionSaved(session.id)
                            ? "★ Saved"
                            : "☆ Save to Schedule"
                        }
                    </button>
                    <div class="dropdown">
                        <button class="calendar-btn">Add to Calendar</button>
                        <div class="dropdown-content">
                            <a href="#" onclick="event.preventDefault(); addSessionToIcal(${
                              session.id
                            })">iCal</a>
                            <a href="#" onclick="event.preventDefault(); addSessionToGoogleCalendar(${
                              session.id
                            })">Google</a>
                        </div>
                    </div>
                </div>`
      : "";

    return `
            <div class="session-card ${
              sessionStatus.isPast ? "session-past" : ""
            }" data-session-id="${session.id}">
                <div class="session-header">
                    <div class="session-title-container">
                        ${statusBadge}
                        <h3 class="session-title">
                            ${
                              session.url
                                ? `<a href="${session.url}" target="_blank" class="session-title-link" title="View session details">${session.title}</a>`
                                : session.title
                            }
                        </h3>
                    </div>
                    <div class="session-badges">
                        <span class="session-type ${session.type}">${
      session.type
    }</span>
                    </div>
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

                ${tagsHtml}

                ${sessionActionsHtml}
            </div>
        `;
  }

  getCurrentTimeInItaly() {
    // Get current time in Italy (CET/CEST timezone)
    return new Date(
      new Date().toLocaleString("en-US", {
        timeZone: "Europe/Rome",
      })
    );
  }

  parseSessionDateTime(session) {
    // Parse session date and time in Italy timezone (CET/CEST)
    const [startTime, endTime] = session.time.split("-");
    const [startHour, startMinute] = startTime.split(":").map(Number);
    const [endHour, endMinute] = endTime.split(":").map(Number);

    // Create date objects for Italy timezone
    // Session times are in CET/CEST, so we need to create them properly
    const startDateTime = new Date(`${session.date}T${startTime}:00+02:00`); // CEST is UTC+2
    const endDateTime = new Date(`${session.date}T${endTime}:00+02:00`);

    return { startDateTime, endDateTime };
  }

  getSessionStatus(session) {
    // Get current time in Italy
    const nowInItaly = this.getCurrentTimeInItaly();
    const { startDateTime, endDateTime } = this.parseSessionDateTime(session);

    // Calculate time differences in milliseconds
    const timeToStart = startDateTime.getTime() - nowInItaly.getTime();
    const timeToEnd = endDateTime.getTime() - nowInItaly.getTime();

    // Check if session is in the past
    const isPast = timeToEnd < 0;

    // Check if session is currently ongoing
    const isOngoing = timeToStart <= 0 && timeToEnd > 0;

    // Check if session starts within 30 minutes
    const startingSoon = timeToStart > 0 && timeToStart <= 30 * 60 * 1000; // 30 minutes in milliseconds

    return {
      isPast,
      isOngoing,
      startingSoon,
      timeToStart,
      timeToEnd,
      debug: {
        nowInItaly: nowInItaly.toISOString(),
        startDateTime: startDateTime.toISOString(),
        endDateTime: endDateTime.toISOString(),
        timeToStart: Math.round(timeToStart / 1000 / 60), // minutes
        timeToEnd: Math.round(timeToEnd / 1000 / 60), // minutes
      },
    };
  }

  createStatusBadge(status) {
    if (status.isOngoing) {
      return '<span class="status-badge ongoing">In Progress</span>';
    } else if (status.startingSoon) {
      return '<span class="status-badge starting-soon">Starting Soon</span>';
    } else if (status.isPast) {
      return '<span class="status-badge done">Done</span>';
    }
    return "";
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

  generateSpeakerUrl(speakerName) {
    // Convert speaker name to URL-friendly format based on VIEW Conference patterns
    // Examples:
    // "Ian Failes" -> "ian-failes"
    // "Kyle T. Webster" -> "kyle-t.-webster"
    // "Oleg Fryazinov" -> "oleg--fryazinov"
    const urlName = speakerName
      .toLowerCase()
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/--+/g, "--") // Keep double hyphens but limit to double
      .replace(/^-|-$/g, ""); // Remove leading/trailing hyphens

    return `https://www.viewconference.it/speaker/${urlName}`;
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

  getDayName(dateString) {
    const date = new Date(dateString);
    const options = { weekday: "long" };
    return date.toLocaleDateString("en-US", options);
  }

  updateResultsCount() {
    const count = this.filteredSessions.length;
    const total = this.allSessions.length;
    this.resultsCount.textContent = `${count} of ${total} sessions`;
  }

  // Get saved sessions from localStorage
  getSavedSessions() {
    const saved = localStorage.getItem("savedSessions");
    return saved ? JSON.parse(saved) : [];
  }

  // Save sessions to localStorage
  saveSession(sessionId) {
    let savedSessions = this.getSavedSessions();
    if (!savedSessions.includes(sessionId)) {
      savedSessions.push(sessionId);
      localStorage.setItem("savedSessions", JSON.stringify(savedSessions));
      this.updateTabIndicators();
      return true;
    }
    return false;
  }

  // Remove session from saved
  removeSavedSession(sessionId) {
    let savedSessions = this.getSavedSessions();
    savedSessions = savedSessions.filter((id) => id !== sessionId);
    localStorage.setItem("savedSessions", JSON.stringify(savedSessions));
    this.updateTabIndicators();
    return true;
  }

  // Check if a session is saved
  isSessionSaved(sessionId) {
    const savedSessions = this.getSavedSessions();
    return savedSessions.includes(sessionId);
  }

  // Show all sessions
  showAllSessions() {
    this.allSessionsTab.classList.add("active");
    this.savedSessionsTab.classList.remove("active");
    this.applyFilters(); // Re-apply current filters to show all sessions
  }

  // Show only saved sessions
  showSavedSessions() {
    this.allSessionsTab.classList.remove("active");
    this.savedSessionsTab.classList.add("active");

    // Get saved session IDs
    const savedSessionIds = this.getSavedSessions();

    // Filter sessions to show only saved ones
    this.filteredSessions = this.allSessions.filter((session) =>
      savedSessionIds.includes(session.id)
    );

    // Sort the saved sessions by date and time
    this.sortSessionsByDateTime();

    this.renderSessions();
    this.updateResultsCount();
  }

  // Update tab indicators (show count of saved sessions)
  updateTabIndicators() {
    const savedCount = this.getSavedSessions().length;
    if (savedCount > 0) {
      this.savedSessionsTab.innerHTML = `Saved Sessions <span class="saved-count">${savedCount}</span>`;
    } else {
      this.savedSessionsTab.textContent = "Saved Sessions";
    }
  }
}

// Initialize the application when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const app = new ConferenceSessionsFilter();
  // Store the app instance globally so it can be accessed by other functions
  window.conferenceApp = app;
  // Update tab indicators after initialization
  app.updateTabIndicators();
});

function addSessionToIcal(sessionId) {
  const session = sessionsData.find((s) => s.id === sessionId);
  if (!session) {
    console.error("Session not found for ID:", sessionId);
    alert("Error: Session details not found.");
    return;
  }

  try {
    const [startTime, endTime] = session.time.split("-");
    const startDate = new Date(`${session.date}T${startTime}:00`);
    const endDate = new Date(`${session.date}T${endTime}:00`);

    // Helper to format date for iCal
    const toIcalDate = (date) => {
      return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    };

    const icalContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//YourAppName//NONSGML v1.0//EN",
      "BEGIN:VEVENT",
      `UID:${session.id}@viewconference.it`,
      `DTSTAMP:${toIcalDate(new Date())}`,
      `DTSTART:${toIcalDate(startDate)}`,
      `DTEND:${toIcalDate(endDate)}`,
      `SUMMARY:${session.title}`,
      `DESCRIPTION:${session.description.replace(/\n/g, "\\n")}`,
      `LOCATION:${session.location}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icalContent], {
      type: "text/calendar;charset=utf-8",
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    const filename = `${session.title
      .replace(/[^a-z0-9]/gi, "_")
      .toLowerCase()}.ics`;
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (e) {
    console.error("Failed to generate iCal file:", e);
    alert("An unexpected error occurred while creating the iCal file.");
  }
}

// Add some utility functions for enhanced interactivity
function addSessionToGoogleCalendar(sessionId) {
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

// Function to toggle save status of a session
function toggleSaveSession(sessionId) {
  const app = window.conferenceApp;
  if (!app) {
    console.error("Conference app instance not found");
    return;
  }

  const saveBtn = event.target.classList.contains("save-btn")
    ? event.target
    : event.target.closest(".save-btn");

  if (!saveBtn) return;

  if (app.isSessionSaved(sessionId)) {
    // Remove from saved
    app.removeSavedSession(sessionId);
    saveBtn.textContent = "☆ Save to Schedule";
    saveBtn.classList.remove("saved");

    // If we're currently viewing saved sessions, update the view
    if (
      document.getElementById("saved-sessions-tab").classList.contains("active")
    ) {
      app.showSavedSessions();
    }
  } else {
    // Add to saved
    app.saveSession(sessionId);
    saveBtn.textContent = "★ Saved";
    saveBtn.classList.add("saved");
  }
}
