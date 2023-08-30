# Work Day Scheduler Starter Code
# Work Day Scheduler

Work Day Scheduler is a simple calendar application that allows users to save events for each hour of a typical working day, from 9 AM to 5 PM. This web application runs in the browser and features dynamically updated HTML and CSS powered by jQuery.

## Features

- **Time Blocks**: The application displays time blocks for each hour of the working day, providing a structured way to input and save events.

- **Current Date**: The current date is prominently displayed at the top of the page, allowing users to easily identify the date.

- **Color-Coded Blocks**: Time blocks are color-coded to indicate whether an hour is in the past, present, or future, based on the current time.

- **Local Storage**: Users can input events in the text areas and save them. The events are stored in the browser's local storage, so they persist even if the page is refreshed or closed.

## Usage

1. Open the Work Day Scheduler in your web browser.

2. The current date is displayed at the top of the page.

3. Each hour of the working day is represented as a time block. The blocks are color-coded:
   - Gray: Past hours.
   - Red: The current hour.
   - Green: Future hours.

4. Click on the text area for an hour to input your event.

5. Click the save button (the floppy disk icon) to save your event for that hour. The event will be stored in your browser's local storage.

6. Even if you close the page or refresh it, your saved events will persist and be displayed when you revisit the page.

## Technologies Used

- **HTML/CSS**: The structure and styling of the web page.
- **Bootstrap**: Provides additional styling and responsiveness.
- **Font Awesome**: For icons used in the save buttons.
- **Day.js**: A JavaScript library for working with dates and times.
- **jQuery**: A JavaScript library for DOM manipulation and event handling.

## File Structure

- `index.html`: The main HTML file for the application.
- `style.css`: The CSS file for styling the application.
- `script.js`: The JavaScript file containing the application logic.

## Installation

Since this is a web-based application, there's no installation required. You can simply open `index.html` in a web browser to use the scheduler.

## Development

If you want to further develop or customize the Work Day Scheduler, you can modify the HTML, CSS, and JavaScript files according to your needs. You may also consider using a different date and time library if preferred.

## Credits

- This project was created as a coding challenge and sample application.

## License

This project is open-source and available under the [MIT License](LICENSE).
