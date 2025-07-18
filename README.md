# Design Mode Toggler Extension

A simple browser extension to toggle `document.designMode` on any webpage, allowing you to edit text content directly in your browser.

## About The Project

This extension provides a quick and easy way to enable and disable the `designMode` property of the current document. When activated, you can edit text on any webpage as if it were a rich text editor. This is a useful tool for web developers, designers, and anyone who wants to experiment with webpage content without using developer tools.

## Features

*   **Toggle Design Mode**: Easily switch `designMode` on and off for the current tab.
*   **Simple Interface**: A straightforward browser action icon to indicate the current mode.
*   **Lightweight**: A minimal extension with no unnecessary permissions or background processes.

## Getting Started

To get a local copy up and running, follow these simple installation steps.

### Prerequisites

*   A web browser that supports extensions, such as Google Chrome, Microsoft Edge, or Firefox.

### Installation with "Load Unpacked"

To install this extension, you will need to load it as an "unpacked" extension in your browser's developer mode. Here are the detailed steps for Google Chrome:

1.  **Download the code**: Download the repository files as a ZIP archive and extract them to a local folder on your computer.
2.  **Open the Extensions Page**: In your Chrome browser, navigate to `chrome://extensions`. You can also access this page by clicking on the three-dot menu in the top-right corner, selecting **Extensions**, and then **Manage Extensions**.
3.  **Enable Developer Mode**: On the top right of the Extensions page, you will find a toggle for "Developer mode". Make sure this is enabled. This will reveal a new set of options.
4.  **Load the Extension**: Click on the **Load unpacked** button that has appeared.
5.  **Select the Folder**: In the file selection dialog that opens, navigate to the folder where you extracted the extension's files. It is important to select the folder that contains the `manifest.json` file. Click the "Select Folder" button.
6.  **Installation Complete**: The extension is now installed and should appear in your list of extensions. You will be able to manage it like any other extension.

## Usage

Once installed, you can use the extension by clicking on its icon in your browser's toolbar.

1.  Click the extension icon to enable `designMode` on the current page.
2.  You can now click on any text on the page and start typing to edit it.
3.  Click the extension icon again to disable `designMode` and return the page to its normal state.

**Note:** Any changes you make to the page will be lost when you reload the page.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.