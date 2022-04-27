export default class JobsArray {
  constructor() {
    this.jobs = [];
    this._subscribes = [];
  }

  addJob(title, text) {
    const newJob = new Job(title, text);
    this.jobs.push(newJob);
    this.notify();
  }

  deleteJob(index) {
    this.jobs.splice(index, 1);
    this.notify();
  }

  subscribe(func) {
    this._subscribes.push(func);
  }

  unsubscribe(func) {
    this._subscribes = this._subscribes.filter(f => f !== func);
  }

  notify() {
    this._subscribes.forEach(func => {
      func(this.jobs);
    });
  }
}

class Job {
  constructor(title, text) {
    this.title = title;
    this.text = text;
  }
}