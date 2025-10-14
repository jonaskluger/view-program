// Session Data Update Script
// This script provides utilities to update the sessionsData array

class SessionDataUpdater {
  constructor() {
    // Reference to the existing sessionsData
    this.sessions = window.sessionsData || [];
    this.conferenceApp = window.conferenceApp;
  }

  /**
   * Add a new session to the data
   * @param {Object} sessionData - The session object to add
   * @returns {boolean} - Success status
   */
  addSession(sessionData) {
    try {
      // Validate required fields
      const requiredFields = [
        "title",
        "type",
        "date",
        "time",
        "location",
        "speakers",
        "description",
      ];
      for (const field of requiredFields) {
        if (!sessionData[field]) {
          throw new Error(`Missing required field: ${field}`);
        }
      }

      // Generate new ID
      const maxId = Math.max(...this.sessions.map((s) => s.id), 0);
      const newSession = {
        id: maxId + 1,
        categories: [],
        tags: [],
        ...sessionData,
      };

      // Add to sessions array
      this.sessions.push(newSession);

      // Update the app if available
      this.refreshApp();

      console.log(`Added session: ${newSession.title} (ID: ${newSession.id})`);
      return true;
    } catch (error) {
      console.error("Error adding session:", error);
      return false;
    }
  }

  /**
   * Update an existing session
   * @param {number} sessionId - ID of the session to update
   * @param {Object} updates - Object containing fields to update
   * @returns {boolean} - Success status
   */
  updateSession(sessionId, updates) {
    try {
      const sessionIndex = this.sessions.findIndex((s) => s.id === sessionId);
      if (sessionIndex === -1) {
        throw new Error(`Session with ID ${sessionId} not found`);
      }

      // Update the session
      this.sessions[sessionIndex] = {
        ...this.sessions[sessionIndex],
        ...updates,
      };

      // Update the app if available
      this.refreshApp();

      console.log(`Updated session ID ${sessionId}:`, updates);
      return true;
    } catch (error) {
      console.error("Error updating session:", error);
      return false;
    }
  }

  /**
   * Remove a session by ID
   * @param {number} sessionId - ID of the session to remove
   * @returns {boolean} - Success status
   */
  removeSession(sessionId) {
    try {
      const initialLength = this.sessions.length;
      this.sessions = this.sessions.filter((s) => s.id !== sessionId);

      if (this.sessions.length === initialLength) {
        throw new Error(`Session with ID ${sessionId} not found`);
      }

      // Update global reference
      if (window.sessionsData) {
        window.sessionsData = this.sessions;
      }

      // Update the app if available
      this.refreshApp();

      console.log(`Removed session ID ${sessionId}`);
      return true;
    } catch (error) {
      console.error("Error removing session:", error);
      return false;
    }
  }

  /**
   * Bulk update sessions
   * @param {Array} sessionsArray - Array of session objects to replace current data
   * @returns {boolean} - Success status
   */
  bulkUpdateSessions(sessionsArray) {
    try {
      if (!Array.isArray(sessionsArray)) {
        throw new Error("Sessions data must be an array");
      }

      // Validate each session
      for (const session of sessionsArray) {
        if (!session.id || !session.title) {
          throw new Error("Each session must have at least id and title");
        }
      }

      this.sessions = [...sessionsArray];

      // Update global reference
      if (window.sessionsData) {
        window.sessionsData = this.sessions;
      }

      // Update the app if available
      this.refreshApp();

      console.log(`Bulk updated ${sessionsArray.length} sessions`);
      return true;
    } catch (error) {
      console.error("Error in bulk update:", error);
      return false;
    }
  }

  /**
   * Find sessions by various criteria
   * @param {Object} criteria - Search criteria
   * @returns {Array} - Array of matching sessions
   */
  findSessions(criteria) {
    return this.sessions.filter((session) => {
      for (const [key, value] of Object.entries(criteria)) {
        if (key === "speakers") {
          // Check if any speaker matches
          if (
            !session.speakers.some((speaker) =>
              speaker.toLowerCase().includes(value.toLowerCase())
            )
          ) {
            return false;
          }
        } else if (key === "categories" || key === "tags") {
          // Check if any category/tag matches
          if (
            !session[key].some((item) =>
              item.toLowerCase().includes(value.toLowerCase())
            )
          ) {
            return false;
          }
        } else if (typeof session[key] === "string") {
          // String field search
          if (!session[key].toLowerCase().includes(value.toLowerCase())) {
            return false;
          }
        } else {
          // Exact match for other types
          if (session[key] !== value) {
            return false;
          }
        }
      }
      return true;
    });
  }

  /**
   * Get session statistics
   * @returns {Object} - Statistics object
   */
  getStats() {
    const stats = {
      total: this.sessions.length,
      byType: {},
      byDate: {},
      byLocation: {},
      speakers: new Set(),
    };

    this.sessions.forEach((session) => {
      // Count by type
      stats.byType[session.type] = (stats.byType[session.type] || 0) + 1;

      // Count by date
      stats.byDate[session.date] = (stats.byDate[session.date] || 0) + 1;

      // Count by location
      stats.byLocation[session.location] =
        (stats.byLocation[session.location] || 0) + 1;

      // Collect unique speakers
      session.speakers.forEach((speaker) => stats.speakers.add(speaker));
    });

    stats.speakers = Array.from(stats.speakers);
    return stats;
  }

  /**
   * Export sessions data as JSON
   * @returns {string} - JSON string of all sessions
   */
  exportData() {
    return JSON.stringify(this.sessions, null, 2);
  }

  /**
   * Import sessions from JSON string
   * @param {string} jsonString - JSON string containing sessions data
   * @returns {boolean} - Success status
   */
  importData(jsonString) {
    try {
      const importedSessions = JSON.parse(jsonString);
      return this.bulkUpdateSessions(importedSessions);
    } catch (error) {
      console.error("Error importing data:", error);
      return false;
    }
  }

  /**
   * Refresh the conference app with updated data
   */
  refreshApp() {
    if (this.conferenceApp) {
      // Update the app's session data
      this.conferenceApp.allSessions = this.sessions;
      this.conferenceApp.filteredSessions = [...this.sessions];
      this.conferenceApp.sortSessionsByDateTime();
      this.conferenceApp.renderSessions();
      this.conferenceApp.updateResultsCount();
    }

    // Update global reference
    if (window.sessionsData) {
      window.sessionsData = this.sessions;
    }
  }

  /**
   * Create a sample session object for reference
   * @returns {Object} - Sample session structure
   */
  getSampleSession() {
    return {
      title: "Sample Session Title",
      type: "workshop", // workshop, masterclass, presentation, etc.
      date: "2025-10-13", // YYYY-MM-DD format
      time: "10:00-12:00", // HH:MM-HH:MM format
      location: "Room Name",
      speakers: ["Speaker Name"],
      description: "Detailed description of the session content and objectives",
      categories: ["category1", "category2"], // Optional
      tags: ["tag1", "tag2", "tag3"], // Optional
    };
  }
}

// Create global updater instance
window.sessionUpdater = new SessionDataUpdater();

// Utility functions for easy access
window.addSession = (sessionData) =>
  window.sessionUpdater.addSession(sessionData);
window.updateSession = (id, updates) =>
  window.sessionUpdater.updateSession(id, updates);
window.removeSession = (id) => window.sessionUpdater.removeSession(id);
window.findSessions = (criteria) =>
  window.sessionUpdater.findSessions(criteria);
window.getSessionStats = () => window.sessionUpdater.getStats();
window.exportSessions = () => window.sessionUpdater.exportData();
window.importSessions = (jsonString) =>
  window.sessionUpdater.importData(jsonString);

// Example usage functions
console.log(`
Session Data Updater loaded! Available functions:

// Add a new session
addSession({
  title: "New Workshop",
  type: "workshop",
  date: "2025-10-13",
  time: "14:00-16:00",
  location: "ITS 5",
  speakers: ["John Doe"],
  description: "A new workshop description",
  categories: ["technology"],
  tags: ["new", "workshop"]
});

// Update existing session
updateSession(1, { title: "Updated Title", time: "10:00-13:00" });

// Remove a session
removeSession(1);

// Find sessions
findSessions({ type: "workshop", speakers: "Jonas" });

// Get statistics
getSessionStats();

// Export/Import
exportSessions(); // Returns JSON string
importSessions(jsonString); // Import from JSON string

// Get sample session structure
sessionUpdater.getSampleSession();
`);
