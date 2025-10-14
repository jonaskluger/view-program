// Data Fetcher for VIEW Conference 2025 Schedule
// This script fetches the latest session data from the official VIEW Conference website
// and converts it into the format used by your session management system

class ViewConferenceDataFetcher {
  constructor() {
    this.sourceUrl = "https://www.viewconference.it/assets/html/view_CET.html";
    this.sessions = [];
    this.sessionCounter = 1;
  }

  /**
   * Fetch the latest data from VIEW Conference website
   * @returns {Promise<Array>} Array of session objects
   */
  async fetchLatestData() {
    try {
      console.log("Fetching latest data from VIEW Conference website...");

      // Use a CORS proxy or direct fetch (may require CORS handling)
      const proxyUrl = "https://api.allorigins.win/get?url=";
      const response = await fetch(
        proxyUrl + encodeURIComponent(this.sourceUrl)
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const htmlContent = data.contents;

      return this.parseScheduleData(htmlContent);
    } catch (error) {
      console.error("Error fetching data:", error);

      // Fallback: try direct fetch (works if CORS is enabled)
      try {
        const response = await fetch(this.sourceUrl);
        const htmlContent = await response.text();
        return this.parseScheduleData(htmlContent);
      } catch (fallbackError) {
        console.error("Fallback fetch also failed:", fallbackError);
        throw new Error(
          "Unable to fetch data from VIEW Conference website. Please check CORS settings or try manual import."
        );
      }
    }
  }

  /**
   * Parse the HTML content and extract session information
   * @param {string} htmlContent - The HTML content from the website
   * @returns {Array} Array of parsed session objects
   */
  parseScheduleData(htmlContent) {
    console.log("Parsing schedule data...");

    this.sessions = [];
    this.sessionCounter = 1;

    // Split content by days
    const dayPattern = /## ⇨.*?(\w+ \d+th).*?VIEW Conference 2025.*?\[CET\]/g;
    const days = htmlContent.split(dayPattern);

    let currentDate = "";
    const dateMap = {
      "Sun 12th": "2025-10-12",
      "Mon 13th": "2025-10-13",
      "Tue 14th": "2025-10-14",
      "Wed 15th": "2025-10-15",
      "Thu 16th": "2025-10-16",
      "Fri 17th": "2025-10-17",
    };

    // Process each day's content
    for (let i = 1; i < days.length; i += 2) {
      if (days[i] && dateMap[days[i]]) {
        currentDate = dateMap[days[i]];
        const dayContent = days[i + 1] || "";
        this.parseDayContent(dayContent, currentDate);
      }
    }

    console.log(`Successfully parsed ${this.sessions.length} sessions`);
    return this.sessions;
  }

  /**
   * Parse content for a specific day
   * @param {string} content - HTML content for the day
   * @param {string} date - Date in YYYY-MM-DD format
   */
  parseDayContent(content, date) {
    // Split by time blocks (## HH:MM)
    const timePattern = /## (\d{2}:\d{2})/g;
    const timeBlocks = content.split(timePattern);

    let currentTime = "";

    for (let i = 1; i < timeBlocks.length; i += 2) {
      currentTime = timeBlocks[i];
      const blockContent = timeBlocks[i + 1] || "";
      this.parseTimeBlock(blockContent, date, currentTime);
    }
  }

  /**
   * Parse sessions within a time block
   * @param {string} content - Content for the time block
   * @param {string} date - Date in YYYY-MM-DD format
   * @param {string} startTime - Start time in HH:MM format
   */
  parseTimeBlock(content, date, startTime) {
    // Look for session entries starting with ### [Title](URL)
    const sessionPattern = /### \[(.*?)\]\((.*?)\)\s*([\s\S]*?)(?=###|\n##|$)/g;
    let match;

    while ((match = sessionPattern.exec(content)) !== null) {
      const title = match[1].trim();
      const url = match[2].trim();
      const sessionDetails = match[3].trim();

      if (title && this.isValidSession(title, sessionDetails)) {
        const session = this.parseSessionDetails(
          title,
          url,
          sessionDetails,
          date,
          startTime
        );
        if (session) {
          this.sessions.push(session);
        }
      }
    }
  }

  /**
   * Check if this is a valid session (not a screening or other event)
   * @param {string} title - Session title
   * @param {string} details - Session details
   * @returns {boolean}
   */
  isValidSession(title, details) {
    // Skip certain types of events
    const skipPatterns = [
      /screening/i,
      /sessions by speaker/i,
      /portfolio reviews/i,
      /^ask me anything/i,
    ];

    return !skipPatterns.some(
      (pattern) => pattern.test(title) || pattern.test(details)
    );
  }

  /**
   * Parse detailed session information
   * @param {string} title - Session title
   * @param {string} url - Session URL
   * @param {string} details - Session details text
   * @param {string} date - Date in YYYY-MM-DD format
   * @param {string} startTime - Start time in HH:MM format
   * @returns {Object|null} Parsed session object
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
      let type = "talk"; // default
      if (details.includes("Workshop")) type = "workshop";
      else if (details.includes("Masterclass")) type = "masterclass";
      else if (details.includes("Panel")) type = "panel";
      else if (details.includes("Keynote")) type = "keynote";
      else if (details.includes("Ask Me Anything")) type = "ama";
      else if (details.includes("Talk")) type = "talk";
      else if (details.includes("Presentation")) type = "presentation";

      // Extract location
      const locationMatch = details.match(/In ([A-Z\s\d]+)/);
      let location = "TBD";
      if (locationMatch) {
        location = locationMatch[1].trim();
      }

      // Extract speakers
      const speakers = this.extractSpeakers(details);

      // Extract description (first line after time info)
      let description = this.extractDescription(details);

      // Generate categories and tags based on title and content
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
        sourceUrl: url,
      };
    } catch (error) {
      console.warn(`Error parsing session "${title}":`, error);
      return null;
    }
  }

  /**
   * Extract speaker names from session details
   * @param {string} details - Session details text
   * @returns {Array} Array of speaker names
   */
  extractSpeakers(details) {
    const speakers = [];

    // Look for speaker patterns like [NAME](link)
    const speakerPattern = /\[(.*?)\]\(.*?speaker.*?\)/g;
    let match;

    while ((match = speakerPattern.exec(details)) !== null) {
      const speakerName = match[1]
        .trim()
        .replace(/^(Dr\.|Prof\.)?\s*/, "") // Remove titles
        .replace(/,.*$/, "") // Remove everything after comma (titles/positions)
        .trim();

      if (speakerName && !speakers.includes(speakerName)) {
        speakers.push(speakerName);
      }
    }

    return speakers.length > 0 ? speakers : ["TBD"];
  }

  /**
   * Extract session description from details
   * @param {string} details - Session details text
   * @returns {string} Cleaned description
   */
  extractDescription(details) {
    // Find the line that contains session description info
    const lines = details.split("\n").filter((line) => line.trim());

    // Look for lines that contain descriptive text (usually first meaningful line)
    for (const line of lines) {
      const cleaned = line
        .trim()
        .replace(/^\d{2}:\d{2}-\d{2}:\d{2}.*?\]/, "") // Remove time and type info
        .replace(/In [A-Z\s\d]+.*$/, "") // Remove location info
        .replace(/\[.*?\]\(.*?\)/g, "") // Remove markdown links
        .trim();

      if (cleaned.length > 20 && !cleaned.match(/^\d/)) {
        return cleaned;
      }
    }

    return "Session details to be announced";
  }

  /**
   * Generate categories and tags based on session content
   * @param {string} title - Session title
   * @param {string} description - Session description
   * @param {string} details - Full session details
   * @returns {Object} Object with categories and tags arrays
   */
  generateCategoriesAndTags(title, description, details) {
    const content = `${title} ${description} ${details}`.toLowerCase();

    const categories = [];
    const tags = [];

    // Category mapping
    const categoryMap = {
      vfx: ["vfx", "visual effects", "effects"],
      animation: ["animation", "animated", "character animation"],
      rendering: ["rendering", "rendersman", "shading", "lighting"],
      technology: [
        "ai",
        "virtual production",
        "unreal engine",
        "technical",
        "pipeline",
      ],
      gaming: ["game", "gaming", "interactive"],
      production: ["production", "pipeline", "workflow"],
    };

    // Tag mapping
    const tagMap = {
      ai: ["ai", "artificial intelligence", "machine learning"],
      unreal: ["unreal engine", "unreal"],
      vr: ["virtual reality", "vr", "ar"],
      mocap: ["motion capture", "mocap"],
      pipeline: ["pipeline", "workflow"],
      stylized: ["stylized", "style"],
      "real-time": ["real-time", "real time"],
      procedural: ["procedural", "houdini"],
      character: ["character", "facial", "creature"],
      environment: ["environment", "world", "landscape"],
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

    // Default category if none found
    if (categories.length === 0) {
      categories.push("general");
    }

    return { categories, tags };
  }

  /**
   * Update the existing session data with fetched data
   * @returns {Promise<boolean>} Success status
   */
  async updateSessionData() {
    try {
      const newSessions = await this.fetchLatestData();

      if (!newSessions || newSessions.length === 0) {
        throw new Error("No sessions found in fetched data");
      }

      // Use the session updater if available
      if (window.sessionUpdater) {
        const success = window.sessionUpdater.bulkUpdateSessions(newSessions);
        if (success) {
          console.log(
            `Successfully updated with ${newSessions.length} sessions from VIEW Conference website`
          );
          return true;
        }
      }

      // Fallback: update global sessionsData
      if (window.sessionsData) {
        window.sessionsData.length = 0; // Clear existing data
        window.sessionsData.push(...newSessions);

        // Refresh the app if available
        if (window.conferenceApp) {
          window.conferenceApp.allSessions = newSessions;
          window.conferenceApp.filteredSessions = [...newSessions];
          window.conferenceApp.sortSessionsByDateTime();
          window.conferenceApp.renderSessions();
          window.conferenceApp.updateResultsCount();
        }

        console.log(
          `Successfully updated sessionsData with ${newSessions.length} sessions`
        );
        return true;
      }

      throw new Error("No session management system found");
    } catch (error) {
      console.error("Failed to update session data:", error);
      return false;
    }
  }

  /**
   * Get preview of fetched data without updating
   * @returns {Promise<Array>} Array of session objects for preview
   */
  async previewData() {
    try {
      const sessions = await this.fetchLatestData();
      console.log("Preview of fetched data:", sessions.slice(0, 3));
      return sessions;
    } catch (error) {
      console.error("Failed to preview data:", error);
      return [];
    }
  }

  /**
   * Compare fetched data with existing data
   * @returns {Promise<Object>} Comparison results
   */
  async compareWithExisting() {
    try {
      const newSessions = await this.fetchLatestData();
      const existingSessions = window.sessionUpdater
        ? window.sessionUpdater.sessions
        : window.sessionsData || [];

      return {
        new: newSessions.length,
        existing: existingSessions.length,
        difference: newSessions.length - existingSessions.length,
        newSessions: newSessions,
        existingSessions: existingSessions,
      };
    } catch (error) {
      console.error("Failed to compare data:", error);
      return null;
    }
  }
}

// Create global instance
window.viewDataFetcher = new ViewConferenceDataFetcher();

// Convenience functions
window.fetchLatestViewData = () => window.viewDataFetcher.updateSessionData();
window.previewViewData = () => window.viewDataFetcher.previewData();
window.compareViewData = () => window.viewDataFetcher.compareWithExisting();

// Manual data update function (for use when CORS blocks automatic fetching)
window.updateSessionsFromManualData = function (htmlContent) {
  try {
    const fetcher = new ViewConferenceDataFetcher();
    const sessions = fetcher.parseScheduleData(htmlContent);

    if (window.sessionUpdater) {
      return window.sessionUpdater.bulkUpdateSessions(sessions);
    } else {
      console.warn(
        "Session updater not found. Please load update-sessions.js first."
      );
      return false;
    }
  } catch (error) {
    console.error("Failed to update from manual data:", error);
    return false;
  }
};

console.log(`
VIEW Conference Data Fetcher loaded! Available functions:

// Fetch and update with latest data from website
fetchLatestViewData();

// Preview data without updating
previewViewData();

// Compare fetched data with existing
compareViewData();

// Manual update (if CORS blocks automatic fetching)
// 1. Copy HTML from ${window.viewDataFetcher.sourceUrl}
// 2. Run: updateSessionsFromManualData(htmlContent);

Note: Due to CORS restrictions, automatic fetching may not work in all browsers.
Use the manual method if you encounter CORS errors.
`);

// Auto-fetch disabled due to CORS restrictions
// Use the CLI tool instead: ./update-sessions fetch
console.log("🎬 VIEW Conference Data Fetcher loaded");
console.log(
  "💡 To update session data, use the CLI tool: ./update-sessions fetch"
);
console.log("🌐 Browser-based fetching is disabled due to CORS restrictions");
