interface CatchAllParams {
  slug: string[];
}

interface PageProps {
  params: CatchAllParams;
}

export interface CatchAllProps {
  params: CatchAllParams;
}

const PageComponent: React.FC<PageProps> = ({ params }) => {
  const { slug } = params;

  return (
    <div>
      <h1>Dynamic Route</h1>
      <p>
        {slug
          ? `Slug: ${slug.join("/")}` // Join the array to display the full path
          : "No slug provided (root route)"}
      </p>
    </div>
  );
};

// Optionally, handle specific metadata for the dynamic route
export async function generateMetadata({ params }: CatchAllProps) {
  const slug = params.slug ? params.slug.join(" / ") : "Home";
  return {
    title: `Dynamic Page - ${slug}`,
    description: `Page for ${slug}`,
  };
}
