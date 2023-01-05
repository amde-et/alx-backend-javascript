/// <reference path="Teacher.ts" />
/// <reference path="Subjects.ts" />

namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class ReactClass extends Subject{
    getRequirements = () => 'Here is the list of requirements for React';

    getAvailableTeacher = () => {
      if (!this.teacher?.experienceTeachingReact) return 'No available teacher';

      return `Available Teacher: ${this.teacher}`;
    } 
  }
}