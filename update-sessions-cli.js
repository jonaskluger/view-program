#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const https = require("https");

/**
 * VIEW Conference Data Fetcher CLI Tool
 * Updates session data from the official VIEW Conference website
 */
class ViewDataCLI {
  constructor() {
    this.sourceUrl = "https://www.viewconference.it/assets/html/view_CET.html";
    this.sessions = [];
    this.sessionCounter = 1;
    this.scriptPath = path.join(process.cwd(), "script.js");
  }

  /**
   * Main CLI entry point
   */
  async run() {
    const args = process.argv.slice(2);
    const command = args[0];

    console.log("🎬 VIEW Conference Data Updater CLI");
    console.log("=====================================\n");

    try {
      switch (command) {
        case "fetch":
          await this.fetchAndUpdate();
          break;
        case "preview":
          await this.preview();
          break;
        case "compare":
          await this.compare();
          break;
        case "backup":
          await this.backup();
          break;
        case "restore":
          await this.restore(args[1]);
          break;
        case "stats":
          await this.showStats();
          break;
        case "help":
        case "--help":
        case "-h":
        default:
          this.showHelp();
          break;
      }
    } catch (error) {
      console.error("❌ Error:", error.message);
      process.exit(1);
    }
  }

  /**
   * Show help information
   */
  showHelp() {
    console.log(`Usage: node update-sessions-cli.js <command> [options]

Commands:
  fetch     Fetch latest data from VIEW Conference website and update script.js
  preview   Preview the latest data without updating
  compare   Compare current data with latest available data
  backup    Create a backup of current session data
  restore   Restore session data from a backup file
  stats     Show statistics about current session data
  help      Show this help message

Examples:
  node update-sessions-cli.js fetch           # Update with latest data
  node update-sessions-cli.js preview         # Preview without updating
  node update-sessions-cli.js backup          # Create backup
  node update-sessions-cli.js restore backup.json  # Restore from backup

Options:
  --output, -o    Specify output file (default: script.js)
  --format, -f    Output format: js|json (default: js)
  --verbose, -v   Verbose output
  --help, -h      Show help
`);
  }

  /**
   * Fetch data from VIEW Conference website
   */
  async fetchData() {
    return new Promise((resolve, reject) => {
      console.log("📡 Fetching data from VIEW Conference website...");

      const request = https.get(this.sourceUrl, (response) => {
        let data = "";

        response.on("data", (chunk) => {
          data += chunk;
        });

        response.on("end", () => {
          try {
            const sessions = this.parseScheduleData(data);
            console.log(`✅ Successfully fetched ${sessions.length} sessions`);
            resolve(sessions);
          } catch (error) {
            reject(new Error(`Failed to parse data: ${error.message}`));
          }
        });
      });

      request.on("error", (error) => {
        reject(new Error(`Failed to fetch data: ${error.message}`));
      });

      request.setTimeout(10000, () => {
        request.destroy();
        reject(new Error("Request timeout"));
      });
    });
  }

  /**
   * Parse HTML content to extract sessions data
   */
  parseScheduleData(html) {
    this.sessions = [];

    // Split by day sections to track dates properly
    const dayPattern =
      /<center><a[^>]*name="day(\d+)"[^>]*><\/a><h2[^>]*>.*?(Sun|Mon|Tue|Wed|Thu|Fri)\s+(\d+)[a-z]*.*?<\/h2>/g;
    const dayMatches = [];
    let dayMatch;

    while ((dayMatch = dayPattern.exec(html)) !== null) {
      const dayNum = dayMatch[1]; // This is the day number from name="day(\d+)"
      dayMatches.push({
        position: dayMatch.index,
        dayNum: dayNum,
        fullMatch: dayMatch[0],
      });
    }

    // If no day headers found, try alternative approach
    if (dayMatches.length === 0) {
      // Look for day indicators in the HTML with correct date mapping
      const altDayPattern = /(Sun 12|Mon 13|Tue 14|Wed 15|Thu 16|Fri 17)/g;
      while ((dayMatch = altDayPattern.exec(html)) !== null) {
        const dayStr = dayMatch[0];
        const dayNum = dayStr.split(" ")[1];
        dayMatches.push({
          position: dayMatch.index,
          dayNum: dayNum,
          fullMatch: dayMatch[0],
        });
      }
    }

    // Extract all session divs with their positions
    const sessionPattern = /<div class="session[^"]*"[^>]*>([\s\S]*?)<\/div>/g;
    let match;

    let sessionCount = 0;
    while ((match = sessionPattern.exec(html)) !== null) {
      const sessionHtml = match[1];
      const sessionPosition = match.index;
      sessionCount++;

      // Determine which day this session belongs to
      let sessionDate = "2025-10-14"; // default
      for (let i = dayMatches.length - 1; i >= 0; i--) {
        if (sessionPosition > dayMatches[i].position) {
          sessionDate = `2025-10-${dayMatches[i].dayNum}`;
          break;
        }
      }

      const session = this.parseSessionFromHtml(sessionHtml, sessionDate);
      if (session) {
        this.sessions.push(session);
      }
    }

    return this.sessions;
  }

  /**
   * Parse individual session from HTML
   */
  parseSessionFromHtml(sessionHtml, sessionDate) {
    try {
      // Extract title and URL - try multiple patterns
      let titleMatch = sessionHtml.match(
        /<h3 class="session-title"><a[^>]*href="([^"]*)"[^>]*>([^<]+)<\/a><\/h3>/
      );

      // Alternative pattern for different HTML structure
      if (!titleMatch) {
        titleMatch = sessionHtml.match(
          /<a[^>]*href="(https:\/\/www\.viewconference\.it\/article\/[^"]*)"[^>]*>([^<]+)<\/a>/
        );
      }

      if (!titleMatch) return null;

      const url = titleMatch[1];
      const title = titleMatch[2].trim();

      // Validate URL
      if (!url || !url.startsWith("https://www.viewconference.it/")) {
        console.warn(
          `⚠️  Warning: Invalid or missing URL for session "${title}": ${url}`
        );
      }

      // Extract time and room info
      const timeMatch = sessionHtml.match(
        /<span class="session-time">([^<]+)<span class="session-room">([^<]+)<\/span><\/span>/
      );
      if (!timeMatch) return null;

      const timeInfo = timeMatch[1].trim();
      const roomInfo = timeMatch[2].trim();

      // Parse time range
      const timeRangeMatch = timeInfo.match(/(\d{2}:\d{2})-(\d{2}:\d{2})/);
      if (!timeRangeMatch) return null;

      const startTime = timeRangeMatch[1];
      const endTime = timeRangeMatch[2];

      // Use provided session date
      const date = sessionDate;

      // Extract speakers
      const speakers = this.extractSpeakers(sessionHtml);

      // Extract room/location
      const location = this.extractLocation(roomInfo);

      // Determine session type and category
      const type = this.determineSessionType(title, timeInfo, roomInfo);
      const category = this.determineCategory(title, speakers.join(" "));

      // Generate better description from timeInfo
      const description = this.generateDescription(title, timeInfo, type);

      // Generate better tags
      const tags = this.generateBetterTags(title, type, category, description);

      return {
        title,
        startTime, // Keep for compatibility with existing data
        endTime, // Keep for compatibility with existing data
        time: `${startTime}-${endTime}`, // Format expected by the parsing function
        date,
        location,
        speakers,
        type,
        categories: [category], // Use array format like original
        tags,
        description,
        url,
      };
    } catch (error) {
      console.warn(`⚠️  Failed to parse session: ${error.message}`);
      return null;
    }
  }

  /**
   * Extract speakers from session HTML
   */
  extractSpeakers(sessionHtml) {
    const speakers = [];

    // Use the working pattern based on actual HTML structure
    const speakerPattern =
      /href="https:\/\/www\.viewconference\.it\/speaker\/[^"]*">([^<]+)<\/a>/g;
    let match;

    while ((match = speakerPattern.exec(sessionHtml)) !== null) {
      const speakerName = match[1].trim();
      if (
        speakerName &&
        speakerName !== "" &&
        !speakers.includes(speakerName)
      ) {
        // Convert from ALL CAPS to proper case
        const properCase = this.toProperCase(speakerName);
        speakers.push(properCase);
      }
    }

    return speakers.length > 0 ? speakers : ["TBD"];
  }

  /**
   * Convert text to proper case (Title Case)
   */
  toProperCase(text) {
    return text.toLowerCase().replace(/\b\w/g, (l) => l.toUpperCase());
  }

  /**
   * Extract location from room info
   */
  extractLocation(roomInfo) {
    // Clean up room info to get location
    return roomInfo
      .replace(/^In\s+/, "")
      .replace(/\s*\([^)]*\)$/, "")
      .trim();
  }

  /**
   * Determine session type from title and details
   */
  determineSessionType(title, timeInfo, roomInfo) {
    const content = `${title} ${timeInfo} ${roomInfo}`.toLowerCase();

    if (content.includes("workshop")) return "workshop";
    if (content.includes("masterclass")) return "masterclass";
    if (content.includes("panel")) return "panel";
    if (content.includes("keynote")) return "keynote";
    if (content.includes("ask me anything") || content.includes("ama"))
      return "ama";
    if (content.includes("clinic")) return "clinic";
    if (content.includes("portfolio")) return "portfolio";

    // Default to talk
    return "talk";
  }

  /**
   * Determine category from title and speaker info
   */
  determineCategory(title, speakerInfo) {
    const content = `${title} ${speakerInfo}`.toLowerCase();

    if (content.match(/vfx|visual effects|effects/)) return "vfx";
    if (content.match(/animation|animated|character/)) return "animation";
    if (content.match(/rendering|shader|lighting/)) return "rendering";
    if (content.match(/ai|artificial intelligence|machine learning/))
      return "technology";
    if (content.match(/unreal|unity|engine/)) return "technology";
    if (content.match(/game|gaming/)) return "gaming";
    if (content.match(/production|pipeline/)) return "production";
    if (content.match(/concept|design|art/)) return "art";

    return "general";
  }

  /**
   * Generate description from session details
   */
  generateDescription(title, timeInfo, type) {
    // Extract detailed info from timeInfo like "[3-Hour Workshop in English]"
    const detailsMatch = timeInfo.match(/\[(.*?)\]/);
    if (detailsMatch) {
      const details = detailsMatch[1];

      // Extract duration and session type info
      const durationMatch = details.match(
        /(\d+[\s-]*[Hh]our|[Mm]asterclass|[Ww]orkshop)/i
      );
      const languageMatch = details.match(/(in English|in Italian)/i);

      let description = "";
      if (durationMatch) {
        description = `${durationMatch[1]} `;
      }

      description += `${type} `;

      // Add specific context based on title
      if (title.toLowerCase().includes("history"))
        description += "exploring the evolution of visual effects in cinema";
      else if (title.toLowerCase().includes("unreal"))
        description +=
          "covering Pre-Visualization and Post-Visualization techniques with Unreal Engine";
      else if (title.toLowerCase().includes("gaussian"))
        description +=
          "on using Gaussian Splatting techniques in production environments";
      else if (title.toLowerCase().includes("katana"))
        description +=
          "covering advanced Katana techniques for stylized rendering workflows";
      else if (title.toLowerCase().includes("procreate"))
        description +=
          "on advanced Procreate techniques and digital illustration";
      else if (title.toLowerCase().includes("ai"))
        description +=
          "exploring artificial intelligence applications in creative workflows";
      else if (title.toLowerCase().includes("virtual production"))
        description += "on virtual production techniques and workflows";
      else description += `at VIEW Conference 2025`;

      return description.trim();
    }

    // Fallback description
    return `${
      type.charAt(0).toUpperCase() + type.slice(1)
    } session at VIEW Conference 2025`;
  }

  /**
   * Generate better tags from title, type, category and description
   */
  generateBetterTags(title, type, category, description) {
    const tags = [];
    const content = `${title} ${description}`.toLowerCase();

    // Add type as tag (but clean it up)
    if (type !== "talk") tags.push(type);

    // Add category-based tags
    if (category === "vfx") tags.push("vfx");
    if (category === "animation") tags.push("animation");
    if (category === "technology") tags.push("technology");

    // Add content-specific tags
    if (content.includes("history")) tags.push("history");
    if (content.includes("cinema")) tags.push("cinema");
    if (content.includes("unreal"))
      tags.push("unreal engine", "previz", "postviz", "visualization");
    if (content.includes("gaussian"))
      tags.push("gaussian splatting", "advanced");
    if (content.includes("katana"))
      tags.push("katana", "stylized", "rendering");
    if (content.includes("procreate"))
      tags.push("procreate", "digital art", "illustration");
    if (content.includes("ai") || content.includes("artificial intelligence"))
      tags.push("ai", "machine learning");
    if (content.includes("virtual production"))
      tags.push("virtual production", "realtime");
    if (content.includes("pipeline")) tags.push("pipeline", "workflow");
    if (content.includes("character")) tags.push("character");
    if (content.includes("environment")) tags.push("environment");

    // Remove duplicates and return
    return [...new Set(tags)];
  }

  /**
   * Generate tags from title, type, and category (legacy method)
   */
  generateTags(title, type, category) {
    return this.generateBetterTags(title, type, category, "");
  }

  /**
   * Check if this is a valid session
   */
  isValidSession(title, details) {
    const skipPatterns = [
      /screening/i,
      /sessions by speaker/i,
      /portfolio reviews/i,
    ];

    return !skipPatterns.some(
      (pattern) => pattern.test(title) || pattern.test(details)
    );
  }

  /**
   * Parse detailed session information
   */
  parseSessionDetails(title, url, details, date, startTime) {
    try {
      // Extract time range
      const timeMatch = details.match(/(\d{2}:\d{2})-(\d{2}:\d{2})/);
      let timeRange = `${startTime}-${startTime}`;
      if (timeMatch) {
        timeRange = `${timeMatch[1]}-${timeMatch[2]}`;
      }

      // Extract session type
      let type = "talk";
      if (details.includes("Workshop")) type = "workshop";
      else if (details.includes("Masterclass")) type = "masterclass";
      else if (details.includes("Panel")) type = "panel";
      else if (details.includes("Keynote")) type = "keynote";
      else if (details.includes("Ask Me Anything")) type = "ama";

      // Extract location
      const locationMatch = details.match(/In ([A-Z\s\d]+)/);
      let location = "TBD";
      if (locationMatch) {
        location = locationMatch[1].trim();
      }

      // Extract speakers
      const speakers = this.extractSpeakers(details);

      // Extract description
      const description = this.extractDescription(details);

      // Generate categories and tags
      const { categories, tags } = this.generateCategoriesAndTags(
        title,
        description,
        details
      );

      return {
        id: this.sessionCounter++,
        title: title.trim(),
        type: type,
        date: date,
        time: timeRange,
        location: location,
        speakers: speakers,
        description: description,
        categories: categories,
        tags: tags,
        url: url,
      };
    } catch (error) {
      console.warn(
        `⚠️  Warning: Could not parse session "${title}": ${error.message}`
      );
      return null;
    }
  }

  /**
   * Extract description
   */
  extractDescription(details) {
    const lines = details.split("\n").filter((line) => line.trim());

    for (const line of lines) {
      const cleaned = line
        .trim()
        .replace(/^\d{2}:\d{2}-\d{2}:\d{2}.*?\]/, "")
        .replace(/In [A-Z\s\d]+.*$/, "")
        .replace(/\[.*?\]\(.*?\)/g, "")
        .trim();

      if (cleaned.length > 20 && !cleaned.match(/^\d/)) {
        return cleaned;
      }
    }

    return "Session details to be announced";
  }

  /**
   * Generate categories and tags
   */
  generateCategoriesAndTags(title, description, details) {
    const content = `${title} ${description} ${details}`.toLowerCase();

    const categories = [];
    const tags = [];

    const categoryMap = {
      vfx: ["vfx", "visual effects", "effects"],
      animation: ["animation", "animated", "character animation"],
      rendering: ["rendering", "rendersman", "shading", "lighting"],
      technology: ["ai", "virtual production", "unreal engine", "technical"],
      gaming: ["game", "gaming", "interactive"],
      production: ["production", "pipeline", "workflow"],
    };

    const tagMap = {
      ai: ["ai", "artificial intelligence"],
      unreal: ["unreal engine", "unreal"],
      vr: ["virtual reality", "vr", "ar"],
      pipeline: ["pipeline", "workflow"],
      stylized: ["stylized", "style"],
      "real-time": ["real-time", "real time"],
    };

    // Check for categories
    for (const [category, keywords] of Object.entries(categoryMap)) {
      if (keywords.some((keyword) => content.includes(keyword))) {
        categories.push(category);
      }
    }

    // Check for tags
    for (const [tag, keywords] of Object.entries(tagMap)) {
      if (keywords.some((keyword) => content.includes(keyword))) {
        tags.push(tag);
      }
    }

    if (categories.length === 0) {
      categories.push("general");
    }

    return { categories, tags };
  }

  /**
   * Read current session data from script.js
   */
  readCurrentSessions() {
    try {
      if (!fs.existsSync(this.scriptPath)) {
        console.log("📝 No existing script.js found");
        return [];
      }

      const content = fs.readFileSync(this.scriptPath, "utf8");
      const match = content.match(/const sessionsData = (\[[\s\S]*?\]);/);

      if (match) {
        // Use eval to parse the JavaScript array (be careful in production!)
        const sessions = eval(match[1]);
        return sessions;
      }

      return [];
    } catch (error) {
      console.warn("⚠️  Could not read current sessions:", error.message);
      return [];
    }
  }

  /**
   * Update script.js with new session data
   */
  updateScriptFile(sessions) {
    try {
      let content;

      if (fs.existsSync(this.scriptPath)) {
        content = fs.readFileSync(this.scriptPath, "utf8");
      } else {
        // Create basic script structure if file doesn't exist
        content = `// Conference sessions data extracted from the schedule
const sessionsData = [];

// Rest of the script will be here...
`;
      }

      // Format sessions data
      const formattedSessions = JSON.stringify(sessions, null, 2)
        .replace(/"([^"]+)":/g, "$1:") // Remove quotes from keys
        .replace(/"/g, '"') // Ensure proper quotes
        .replace(/\n/g, "\n  "); // Proper indentation

      // Replace or add sessions data
      if (content.includes("const sessionsData = ")) {
        content = content.replace(
          /const sessionsData = \[[\s\S]*?\];/,
          `const sessionsData = ${formattedSessions};`
        );
      } else {
        content = `const sessionsData = ${formattedSessions};\n\n${content}`;
      }

      // Create backup
      const backupPath = `${this.scriptPath}.backup.${Date.now()}`;
      if (fs.existsSync(this.scriptPath)) {
        fs.copyFileSync(this.scriptPath, backupPath);
        console.log(`💾 Created backup: ${path.basename(backupPath)}`);
      }

      // Write updated content
      fs.writeFileSync(this.scriptPath, content, "utf8");
      console.log(
        `✅ Updated ${path.basename(this.scriptPath)} with ${
          sessions.length
        } sessions`
      );
    } catch (error) {
      throw new Error(`Failed to update script file: ${error.message}`);
    }
  }

  /**
   * Fetch and update command
   */
  async fetchAndUpdate() {
    try {
      const sessions = await this.fetchData();

      if (sessions.length === 0) {
        console.log("⚠️  No sessions found in fetched data");
        return;
      }

      // Report URL statistics
      const sessionsWithUrls = sessions.filter(
        (s) => s.url && s.url.startsWith("https://www.viewconference.it/")
      ).length;
      console.log(
        `📊 URL Status: ${sessionsWithUrls}/${sessions.length} sessions have valid URLs`
      );

      this.updateScriptFile(sessions);
      console.log("\n🎉 Session data updated successfully!");
    } catch (error) {
      throw new Error(`Update failed: ${error.message}`);
    }
  }

  /**
   * Preview command
   */
  async preview() {
    try {
      const sessions = await this.fetchData();

      console.log(`\n📋 Preview of ${sessions.length} sessions:\n`);

      sessions.slice(0, 10).forEach((session, index) => {
        console.log(`${index + 1}. ${session.title}`);
        console.log(`   📅 ${session.date} ${session.time}`);
        console.log(`   📍 ${session.location} (${session.type})`);
        console.log(`   👥 ${session.speakers.join(", ")}`);
        console.log(`   🏷️  ${session.categories.join(", ")}`);
        console.log(`   🔗 ${session.url || "No URL"}\n`);
      });

      if (sessions.length > 10) {
        console.log(`... and ${sessions.length - 10} more sessions`);
      }

      // Report URL statistics
      const sessionsWithUrls = sessions.filter(
        (s) => s.url && s.url.startsWith("https://www.viewconference.it/")
      ).length;
      console.log(
        `\n📊 URL Status: ${sessionsWithUrls}/${sessions.length} sessions have valid URLs`
      );
    } catch (error) {
      throw new Error(`Preview failed: ${error.message}`);
    }
  }

  /**
   * Compare command
   */
  async compare() {
    try {
      console.log("📊 Comparing current vs. latest data...\n");

      const currentSessions = this.readCurrentSessions();
      const latestSessions = await this.fetchData();

      console.log(`Current sessions: ${currentSessions.length}`);
      console.log(`Latest available: ${latestSessions.length}`);
      console.log(
        `Difference: ${
          latestSessions.length - currentSessions.length > 0 ? "+" : ""
        }${latestSessions.length - currentSessions.length}`
      );

      if (latestSessions.length > currentSessions.length) {
        console.log("\n🆕 New sessions available!");
      } else if (latestSessions.length < currentSessions.length) {
        console.log("\n⚠️  Some sessions may have been removed.");
      } else {
        console.log("\n✅ Your data appears to be up to date.");
      }
    } catch (error) {
      throw new Error(`Comparison failed: ${error.message}`);
    }
  }

  /**
   * Backup command
   */
  async backup() {
    try {
      const sessions = this.readCurrentSessions();
      const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
      const backupFile = `sessions-backup-${timestamp}.json`;

      fs.writeFileSync(backupFile, JSON.stringify(sessions, null, 2));
      console.log(`💾 Created backup: ${backupFile}`);
      console.log(`📊 Backed up ${sessions.length} sessions`);
    } catch (error) {
      throw new Error(`Backup failed: ${error.message}`);
    }
  }

  /**
   * Restore command
   */
  async restore(backupFile) {
    try {
      if (!backupFile) {
        throw new Error("Please specify a backup file to restore from");
      }

      if (!fs.existsSync(backupFile)) {
        throw new Error(`Backup file not found: ${backupFile}`);
      }

      const sessions = JSON.parse(fs.readFileSync(backupFile, "utf8"));
      this.updateScriptFile(sessions);

      console.log(`🔄 Restored ${sessions.length} sessions from ${backupFile}`);
    } catch (error) {
      throw new Error(`Restore failed: ${error.message}`);
    }
  }

  /**
   * Stats command
   */
  async showStats() {
    try {
      const sessions = this.readCurrentSessions();

      if (sessions.length === 0) {
        console.log("📊 No sessions found in current data");
        return;
      }

      console.log(`📊 Session Statistics:\n`);
      console.log(`Total sessions: ${sessions.length}`);

      // Count by type
      const byType = {};
      const byDate = {};
      const speakers = new Set();

      sessions.forEach((session) => {
        byType[session.type] = (byType[session.type] || 0) + 1;
        byDate[session.date] = (byDate[session.date] || 0) + 1;
        session.speakers.forEach((speaker) => speakers.add(speaker));
      });

      console.log("\nBy type:");
      Object.entries(byType).forEach(([type, count]) => {
        console.log(`  ${type}: ${count}`);
      });

      console.log("\nBy date:");
      Object.entries(byDate).forEach(([date, count]) => {
        console.log(`  ${date}: ${count}`);
      });

      console.log(`\nUnique speakers: ${speakers.size}`);
    } catch (error) {
      throw new Error(`Stats failed: ${error.message}`);
    }
  }
}

// Run CLI if called directly
if (require.main === module) {
  const cli = new ViewDataCLI();
  cli.run().catch((error) => {
    console.error("💥 Fatal error:", error.message);
    process.exit(1);
  });
}

module.exports = ViewDataCLI;
