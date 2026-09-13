# Ocean Trace-login Landing Page

## Goal

Create a cinematic landing page that appears after log in/ sign-in, closely following the supplied SpillX screenshot while preserving the existing OceanTrace console as the destination after login.

## What will be built

- Replace the blank home page with a full-viewport ocean surveillance landing page.
- Use the new photorealistic ocean, satellite, and patrol-vessel artwork as the full-screen background.
- Add the ocean trace  identity, India EEZ status, live systems indicator, and an “Enter Operations Console” button leading to sign-in.
- Recreate the main incident search, quick-launch examples, telemetry timeline, confidence metrics, scanning reticle, and satellite sweep shown in the reference.
- Add restrained motion: background drift, scanning beam, tracking reticle, live pulse, and staged content entrance, with reduced-motion support.
- Make the layout adapt cleanly from widescreen displays to phones without overlapping content.
- Add a matching sign-in page as the bridge to the existing console; it will remain frontend-only until the FastAPI deployment URL is available.
- Apply route-specific metadata and replace placeholder branding.
- remeber the animated realsitic landing page is only shown after the log in page 
- also our product i mean team name is ocean trace spill x is just the sample team idea also im attaching the more screen shot of the ida prototype like esa hi apnabhi banana chaiye 

## Technical details

- Build in the existing React/TanStack app using semantic Tailwind design tokens.
- Keep FastAPI integration isolated so the local `http://localhost:8000` setting can be replaced later without redesigning the page.
- Use accessible controls, visible focus states, and sufficient text contrast over the image.
- Validate the rendered desktop and mobile layouts and check the preview for errors.