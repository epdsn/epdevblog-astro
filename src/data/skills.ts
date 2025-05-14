interface SkillItem {
  name: string;
  icon: string;
}

interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend",
    items: [
      { name: "Next.js", icon: "nextjs" },
      { name: "React", icon: "react" },
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "javascript" },
    ],
  },
  {
    category: "Backend & Cloud",
    items: [
      { name: "AWS Lambda", icon: "aws-lambda" },
      { name: "AWS", icon: "aws" },
      { name: "SQL", icon: "postgresql" },
      { name: "Auth0", icon: "auth0" },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "Git", icon: "git" },
      { name: "C#", icon: "csharp" },
      { name: ".NET", icon: "dotnet" },
    ],
  },
];
