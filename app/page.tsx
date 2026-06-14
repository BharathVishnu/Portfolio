import Homepage from "@/components/Homepage";
import projects from "@/data/projects.json";
import skills from "@/data/skills.json";
import contact from "@/data/contact.json";

import type { Project, Contact } from "@/types/portfolio";

export default function Page() {
  return (
    <Homepage
      projects={projects as Project[]}
      skills={skills as string[]}
      contact={contact as Contact}
    />
  );
}