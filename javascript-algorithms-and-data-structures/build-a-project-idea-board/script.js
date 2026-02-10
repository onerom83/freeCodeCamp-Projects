const projectStatus = {
  PENDING: { description: "Pending Execution"},
  SUCCESS: { description: "Executed Successfully"},
  FAILURE: { description: "Execution Failed"},
}

class ProjectIdea {
  status = projectStatus.PENDING;
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }
  updateProjectStatus(newStatus) {
    this.status = newStatus;
  }
}
class ProjectIdeaBoard {
  ideas = [];
  constructor(title) {
    this.title = title;
  }
  pin(projectIdea) {
    this.ideas.push(projectIdea);
  }
  unpin(projectIdea) {
    this.ideas = this.ideas.filter((idea) => idea !== projectIdea );
  }
  count() {
    return this.ideas.length;
  }
  formatToString() {
    let output =  `${this.title} has ${this.count()} idea(s)\n`;
    this.ideas.forEach(idea => {
      output += `${idea.title} (${idea.status.description}) - ${idea.description}\n`;
    });
    return output;
  }
}
const melones = new ProjectIdea('Como Hacer Melones', 'Descripción de cómo hacer melones');
const comoHacer = new ProjectIdeaBoard("Como Hacer");
comoHacer.pin(melones);
comoHacer.unpin(melones);
console.log(comoHacer.formatToString())