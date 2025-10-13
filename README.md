# VIEW Conference 2025 Session Scheduler

A web application for browsing and saving VIEW Conference 2025 sessions with **dynamic data loading** from the official conference website. This tool allows users to filter, search, and save conference talks they want to attend.

## Features

- **🔄 Dynamic Data Loading**: Automatically fetches the latest session data from [viewconference.it](https://www.viewconference.it/assets/html/view_CET.html)
- **Browse all sessions**: View all sessions from VIEW Conference 2025 with real-time updates
- **Filter by criteria**: Filter sessions by day, category, type, or search term
- **Save sessions**: Save talks to your personal schedule using the "Save to Schedule" button
- **Saved sessions view**: View all your saved sessions in one place
- **Calendar integration**: Add sessions to your calendar (iCal or Google Calendar)
- **Responsive design**: Works on desktop and mobile devices
- **Offline fallback**: Gracefully falls back to demo data if live data cannot be fetched

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

## Dynamic Data Loading

The application now dynamically loads session data from the official VIEW Conference website:

- **Primary source**: `https://www.viewconference.it/assets/html/view_CET.html`
- **CORS handling**: Uses multiple fallback strategies including CORS proxies
- **Parsing strategies**: Intelligent HTML parsing that adapts to different schedule formats
- **Error handling**: Graceful degradation to demo data if live data is unavailable
- **Loading states**: Shows loading spinner while fetching data
- **Console logging**: Detailed fetch and parsing information in browser console

### How It Works

1. **Fetch Attempts**: Tries multiple methods to fetch the schedule HTML:

   - Direct fetch (may fail due to CORS)
   - AllOrigins.win CORS proxy
   - CorSProxy.io service
   - CORS-Anywhere (if available)

2. **HTML Parsing**: Uses multiple parsing strategies:

   - Table-based schedule parsing
   - Div-based schedule parsing
   - List-based schedule parsing
   - Generic time-pattern parsing

3. **Fallback**: If all methods fail, displays demo data with clear indication

## Technical Details

- **Frontend**: Pure HTML, CSS, and JavaScript (no external dependencies)
- **Storage**: Uses browser localStorage to save sessions (no backend required)
- **Data source**: Live data from VIEW Conference website with fallback to embedded demo data
- **Responsive**: Mobile-friendly design using CSS Grid and Flexbox
- **Cross-origin**: Handles CORS limitations with multiple proxy strategies

## Files

- `index.html`: Main HTML structure
- `styles.css`: Styling for the application
- `script.js`: JavaScript functionality including session filtering and saving
- `img/view-logo.png`: Conference logo image

## Browser Support

The application works in all modern browsers that support localStorage and ES6 JavaScript features.

## What to Expect

### First Load

- Shows loading spinner while fetching live data
- May take 3-10 seconds depending on network and CORS proxy availability
- Check browser console (F12) for detailed fetch progress

### Successful Load

- Displays current sessions from the VIEW Conference website
- Session count will reflect actual conference schedule
- All filtering and saving features work normally

### Fallback Mode

- If live data cannot be fetched, shows clearly marked demo sessions
- Demo sessions are prefixed with "[DEMO]"
- Console will show detailed error information
- Retry button available to attempt fetch again

## Troubleshooting

**Loading takes too long or fails:**

- Check browser console for specific error messages
- Try refreshing the page
- Ensure internet connection is stable
- CORS proxies may occasionally be unavailable

**Only seeing demo data:**

- This indicates the fetch from viewconference.it failed
- Check if the target URL is accessible: https://www.viewconference.it/assets/html/view_CET.html
- CORS restrictions may prevent direct access
- Try the retry button in the error message

## Local Development

To run the application locally:

1. Clone or download the repository
2. **Use a local server** (required for fetch functionality):
   ```bash
   python3 -m http.server 8000
   # or
   ./start_dev_server.sh
   ```
3. Navigate to `http://localhost:8000`
4. **Note**: Opening `index.html` directly in browser may not work due to CORS restrictions

## Testing the Dynamic Loading

Use the included test page to verify fetch functionality:

- Navigate to `http://localhost:8000/test-fetch.html`
- Click "Test Fetch" to see detailed fetch results
- Check console for comprehensive fetch attempt logs

## Data Source

The conference session data is sourced from the [official VIEW Conference 2025 schedule](https://www.viewconference.it/assets/html/view_CET.html).

## Author

This tool was created to enhance the VIEW Conference experience by providing an easy way to browse and save sessions.
