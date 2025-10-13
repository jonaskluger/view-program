# VIEW Conference 2025 Session Scheduler

A web application for browsing and saving VIEW Conference 2025 sessions. This tool allows users to filter, search, and save conference talks they want to attend.

## Features

- **Browse all sessions**: View all 125+ sessions from VIEW Conference 2025
- **Filter by criteria**: Filter sessions by day, category, type, or search term
- **Save sessions**: Save talks to your personal schedule using the "Save to Schedule" button
- **Saved sessions view**: View all your saved sessions in one place
- **Calendar integration**: Add sessions to your calendar (iCal or Google Calendar)
- **Responsive design**: Works on desktop and mobile devices

## How to Use

1. **Browse sessions**: All conference sessions are displayed chronologically
2. **Filter sessions**: Use the filters at the top to narrow down sessions by:
   - Day (October 12-17, 2025)
   - Category (VFX, Animation, AI, Technology, etc.)
   - Session type (Talks, Workshops, Masterclasses, etc.)
   - Search by title, speaker, or technology
3. **Save sessions**: Click the "Save to Schedule" button on any session card to save it
4. **View saved sessions**: Switch to the "Saved Sessions" tab to see all your saved talks
5. **Add to calendar**: Use the "Add to Calendar" dropdown to export sessions to your calendar

## Technical Details

- **Frontend**: Pure HTML, CSS, and JavaScript (no external dependencies)
- **Storage**: Uses browser localStorage to save sessions (no backend required)
- **Data source**: Conference schedule data embedded in the application
- **Responsive**: Mobile-friendly design using CSS Grid and Flexbox

## Files

- `index.html`: Main HTML structure
- `styles.css`: Styling for the application
- `script.js`: JavaScript functionality including session filtering and saving
- `img/view-logo.png`: Conference logo image

## Browser Support

The application works in all modern browsers that support localStorage and ES6 JavaScript features.

## Local Development

To run the application locally:

1. Clone or download the repository
2. Open `index.html` in your browser, or
3. Use a local server (e.g., `python3 -m http.server 8000`) and navigate to `http://localhost:8000`

## Data Source

The conference session data is sourced from the [official VIEW Conference 2025 schedule](https://www.viewconference.it/assets/html/view_CET.html).

## Author

This tool was created to enhance the VIEW Conference experience by providing an easy way to browse and save sessions.