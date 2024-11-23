import type { Metadata } from "next";
import "./globals.css";
import Banner from "@/components/banner/Banner";
import NavigationMenuDemo from "@/components/nav";

export const metadata: Metadata = {
  title: "Bakonykuti",
  description: "Bakonykuti hivatalos weboldala",
};

interface Items {
  name: string;
  components: { title: string; href: string; description: string }[];
}

const items: Items[] = [
  {
    "name": "Primitives", 
    "components": [
      {
        "title": "Alert Dialog",
        "href": "/docs/primitives/alert-dialog",
        "description": "A modal dialog that interrupts the user with important content and expects a response."
      },
      {
        "title": "Hover Card",
        "href": "/docs/primitives/hover-card",
        "description": "For sighted users to preview content available behind a link."
      },
      {
        "title": "Progress",
        "href": "/docs/primitives/progress",
        "description": "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar."
      },
      {
        "title": "Scroll-area",
        "href": "/docs/primitives/scroll-area",
        "description": "Visually or semantically separates content."
      },
      {
        "title": "Tabs",
        "href": "/docs/primitives/tabs",
        "description": "A set of layered sections of content—known as tab panels—that are displayed one at a time."
      },
      {
        "title": "Tooltip",
        "href": "/docs/primitives/tooltip",
        "description": "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."
      },
      {
        "title": "Accordion",
        "href": "/docs/primitives/accordion",
        "description": "A vertically stacked set of expandable panels, each hiding or revealing associated content."
      },
      {
        "title": "Dropdown Menu",
        "href": "/docs/primitives/dropdown-menu",
        "description": "A menu that opens below the trigger element, providing options or actions."
      },
      {
        "title": "Switch",
        "href": "/docs/primitives/switch",
        "description": "A toggle component that allows users to switch between two states, such as on/off."
      },
      {
        "title": "Slider",
        "href": "/docs/primitives/slider",
        "description": "An input component for selecting a numeric value from a range using a sliding handle."
      }
    ]
  },
  {
    "name": "UI Primitives",
    "components": [
      {
        "title": "Alert Dialog",
        "href": "/docs/primitives/alert-dialog",
        "description": "A modal dialog that interrupts the user with important content and expects a response."
      },
      {
        "title": "Hover Card",
        "href": "/docs/primitives/hover-card",
        "description": "For sighted users to preview content available behind a link."
      },
      {
        "title": "Progress",
        "href": "/docs/primitives/progress",
        "description": "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar."
      },
      {
        "title": "Scroll-area",
        "href": "/docs/primitives/scroll-area",
        "description": "Visually or semantically separates content."
      },
      {
        "title": "Tabs",
        "href": "/docs/primitives/tabs",
        "description": "A set of layered sections of content—known as tab panels—that are displayed one at a time."
      }
    ]
  },
  {
    "name": "Form Elements",
    "components": [
      {
        "title": "Text Input",
        "href": "/docs/elements/text-input",
        "description": "A basic input field for entering text values."
      },
      {
        "title": "Checkbox",
        "href": "/docs/elements/checkbox",
        "description": "A component for toggling between checked and unchecked states."
      },
      {
        "title": "Radio Button",
        "href": "/docs/elements/radio-button",
        "description": "Allows users to select one option from a set of mutually exclusive options."
      },
      {
        "title": "Textarea",
        "href": "/docs/elements/textarea",
        "description": "A larger input field for entering multi-line text."
      },
      {
        "title": "Select Dropdown",
        "href": "/docs/elements/select-dropdown",
        "description": "A dropdown menu for selecting a single option from a list."
      }
    ]
  },
  {
    "name": "Navigation Components",
    "components": [
      {
        "title": "Breadcrumb",
        "href": "/docs/navigation/breadcrumb",
        "description": "A navigation component that indicates the current page’s location within a hierarchy."
      },
      {
        "title": "Pagination",
        "href": "/docs/navigation/pagination",
        "description": "A component for navigating through multiple pages of content."
      },
      {
        "title": "Navbar",
        "href": "/docs/navigation/navbar",
        "description": "A header navigation component that provides links to different sections of a website."
      },
      {
        "title": "Sidebar",
        "href": "/docs/navigation/sidebar",
        "description": "A vertical navigation component for quick access to sections of an app or site."
      },
      {
        "title": "Tabs",
        "href": "/docs/navigation/tabs",
        "description": "A set of layered sections of content displayed one at a time."
      }
    ]
  }
  
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-primary">
      <body className="bg-primary">
       
        <Banner />
        <NavigationMenuDemo  items={items}/>
        {children}
      </body>
    </html>
  );
}
