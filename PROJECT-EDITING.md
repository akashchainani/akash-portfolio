# Adding projects to the portfolio

The fastest option is to upload the project images and text in ChatGPT and ask
for them to be added. The site can also be edited manually with the steps below.

## 1. Add the images

Create a folder inside `public/projects/` for the project, for example:

```text
public/projects/my-project/
  cover.jpg
  diagram.jpg
  interior.jpg
```

Use JPG or WebP for most images. A cover image around 1800-2400 pixels wide and
under 1 MB usually gives a good balance of sharpness and loading speed.

## 2. Add the project entry

Open `app/project-data.ts`, copy one object inside `practiceProjects`, and edit
the fields. This is the complete template:

```ts
{
  number: "07",
  title: "Project title",
  caption: "Project type · Location · Recognition",
  className: "visual-room",
  image: "/projects/my-project/cover.jpg",
  alt: "Clear description of the cover image",
  type: "Project type / Building type",
  year: "2026",
  description: "A concise project story in two or three sentences.",
  contribution: "What you personally designed, modeled, coordinated or produced.",
  tools: "Revit · Rhino · Grasshopper · Twinmotion",
  credit: "Academic studio, employer or collaborator credit",
  featured: false,
  gallery: [
    {
      src: "/projects/my-project/diagram.jpg",
      alt: "Project concept diagram",
    },
    {
      src: "/projects/my-project/interior.jpg",
      alt: "Interior rendering of the main space",
    },
  ],
},
```

- Set `featured: true` when the card should span two grid columns.
- Remove `gallery` if the project only has a cover image.
- Keep every image path beginning with `/projects/`.
- The grid and project detail panel update automatically when the entry is saved.

## 3. Publish the update

After the images and data are saved, create a new Sites checkpoint deployment.
