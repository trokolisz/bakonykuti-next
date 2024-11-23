/* eslint-disable @typescript-eslint/no-unused-vars */

import type { Metadata } from "next";
import "./globals.css";
import Banner from "@/components/banner/Banner";
import Menu from "@/components/menu";

export const metadata: Metadata = {
  title: "Bakonykuti",
  description: "Bakonykuti hivatalos weboldala",
}; 

interface MenuItem {
  name: string;
  components: { 
      title: string; 
      href: string; 

      subComponents?: { title: string; href: string; }[] 
  }[];
}


const Items: MenuItem[] = [
  {
    name: "Home",
    components: [
      {
        title: "Overview",
        href: "/home/overview",
      
      },
      {
        title: "Announcements",
        href: "/home/announcements",

        subComponents: [
          {
            title: "Company Updates",
            href: "/home/announcements/company-updates",
           
          },
          {
            title: "Community Events",
            href: "/home/announcements/community-events",
           
          }
        ]
      }
    ]
  },
  {
    name: "About",
    components: [
      {
        title: "Mission",
        href: "/about/mission",
       
      },
      {
        title: "Team",
        href: "/about/team",
    
        subComponents: [
          {
            title: "Leadership",
            href: "/about/team/leadership",
            
          },
          {
            title: "Staff",
            href: "/about/team/staff",
           
          }
        ]
      }
    ]
  },
  {
    name: "Services",
    components: [
      {
        title: "Consulting",
        href: "/services/consulting",
        
      },
      {
        title: "Support",
        href: "/services/support",
      
        subComponents: [
          {
            title: "Technical Support",
            href: "/services/support/technical",
            
          },
          {
            title: "Customer Service",
            href: "/services/support/customer-service",

          }
        ]
      }
    ]
  }
];



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-primary">
      <body className="bg-primary">
       
        <Banner />
        <Menu items={Items}/>
        {children}
      </body>
    </html>
  );
}
