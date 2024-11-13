---

# AI-Enabled Calculator

This is an AI-powered calculator inspired by the Apple iPad's math notes app. It enables users to perform hand-drawn math calculations directly on a canvas, where expressions are recognized, solved, and rendered in LaTeX for a polished display.

## Features
- **Handwritten Math Recognition**: Recognizes mathematical expressions drawn on a canvas and converts them into digital form.
- **AI-Powered Calculations**: Processes math calculations using FastAPI and the Google Gemini API for image analysis.
- **Expression Rendering with LaTeX**: Converts math expressions into beautiful LaTeX-rendered output for easy reading.
- **Interactive Frontend**: Built with React and TypeScript, providing a smooth user interface.
- **Calculation History**: Stores calculations in ChromaDB, allowing users to review past expressions.
- **Drag-and-Drop Interface**: Drag-and-drop functionality lets users easily move around LaTeX-rendered expressions.

## Tech Stack
- **Frontend**: React, TypeScript, Tailwind CSS, Mantine
- **Backend**: FastAPI, Google Gemini API for image recognition
- **Database**: ChromaDB
- **Rendering**: LaTeX, MathJax for math rendering on the canvas

## Getting Started

### Prerequisites
- Node.js
- Python 3.x
- Google Gemini API key

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/ai-enabled-calculator.git
    cd ai-enabled-calculator
    ```

2. **Set up the backend**:
    - Install Python dependencies:
      ```bash
      pip install -r requirements.txt
      ```
    - Add your Google Gemini API key to `.env`.

3. **Set up the frontend**:
    - Navigate to the frontend directory:
      ```bash
      cd frontend
      ```
    - Install dependencies:
      ```bash
      npm install
      ```

4. **Run the app**:
    - Start the backend server:
      ```bash
      uvicorn main:app --reload
      ```
    - Start the frontend server:
      ```bash
      npm run dev
      ```

### Usage
1. Draw a math problem on the canvas (e.g., `2 + 3`, or `integral of x^2 dx`).
2. Watch the AI recognize and compute the answer, displaying the solution in rendered LaTeX.

## Future Enhancements
- Support for more complex calculations (e.g., matrix operations).
- Integration with other AI models for enhanced accuracy.
- Expanded history view for easier reference to past calculations.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

## License
This project is licensed under the MIT License.

---
