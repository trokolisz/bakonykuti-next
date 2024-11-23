interface CatchAllParams {
    slug: string[];
  } 

export interface CatchAllProps {
    params: CatchAllParams 
}


export default async function CatchAll({ params }: CatchAllProps) {
    const { slug } = await params;
  
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
  }
  
  // Optionally, handle specific metadata for the dynamic route
  export async function generateMetadata({ params }: CatchAllProps) {
    const slug = (await params).slug ? (await params).slug.join(" / ") : "Home";
    return {
      title: `Dynamic Page - ${slug}`,
      description: `Page for ${slug}`,
    };
  }
