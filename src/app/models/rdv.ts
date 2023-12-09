export class Rdv {
  clientName: string;
  budget: number;
  projectType: string;
  deadline: Date;
  description: string;

  constructor(
    projectType: string,
    budget: number,

    clientName: string,
    deadline?: Date,
    description?: string
  ) {
    this.clientName = clientName;
    this.budget = budget;
    this.projectType = projectType;
    this.deadline = deadline;
    this.description = description;
  }
}
