"use client";

import { Contact, Project } from "@/app/types/portfolio";

interface HomepageProps {
  projects: Project[];
  skills: string[];
  contact: Contact;
}