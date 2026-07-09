// src/routes/gallery.tsx
import { createFileRoute } from "@tanstack/react-router";
import { Gallery } from "@/components/gallery";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Gallery />
    </div>
  );
}