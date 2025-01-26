# AI Timeline

An interactive timeline of artificial intelligence history at [ai-timeline.org](https://ai-timeline.org)

## Overview

AI Timeline is an open-source project to create an interactive timeline showcasing key events, breakthroughs, and developments on the road to AGI.

## Features

- Interactive timeline visualization
- Major AI milestones and developments
- Links to source material
- Filterable by different domains (`Model Release`, `Culture & Society`, `Business & Industry`, `Research & Papers`, `Policy & Regulation`)

## Local Development

To run this project locally:

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

## Contributing Events

We welcome contributions to the timeline! Either fill in the Google Form [here](https://forms.gle/SgW7LYM6pjajUTxw8) or do the following:

1. **Submit a Pull Request**
   - Fork the repository and create a new branch
   - Add your event to `src/data/timelineData.js`
   - Include the following information:
     - Event date (as precise as possible)
     - Event title (with link to source material)
     - Brief description
     - Category/domain

2. **Review Process**
   - Our team will review the pull request
   - We may request changes or additional information
   - Once approved, the PR will be merged and the event will appear on the timeline

This project is provided under the MIT license. See the LICENSE file for more details.