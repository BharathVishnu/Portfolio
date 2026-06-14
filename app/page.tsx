import Homepage from "@/components/Homepage";
import projects from "@/data/projects.json";
import skills from "@/data/skills.json";
import contact from "@/data/contact.json";

export default function Page() {
  return (
    <Homepage
      projects={projects}
      skills={skills}
      contact={contact}
    />
  );
}