
class GoalTracker {
  constructor(goal, actual) {
      this.goal = goal;  
      this.actual = actual; 
  }

 
  getProgressMessage() {
      const percentage = Math.min((this.actual / this.goal) * 100, 100);
      return `You have completed ${Math.round(percentage)}% of your goal. Keep it up!`;
  }

 
  setActual(newActual) {
      if (newActual >= 0) {
          this.actual = newActual;
      } else {
          alert('Please enter a valid number for actual progress.');
      }
  }

 
  displayProgress() {
      return this.getProgressMessage(); 
  }
}

class SleepTracker extends GoalTracker {
  constructor(goal, actual, sleepQuality) {
    super(goal, actual); 
    this.sleepQuality = sleepQuality;  
  }

  
  displayProgress() {
    const percentage = Math.min((this.actual / this.goal) * 100, 100);
    return `You have slept for ${this.actual} hours out of ${this.goal} hours. Sleep quality: ${this.sleepQuality}. Progress: ${Math.round(percentage)}%`;
  }
}


class WaterTracker extends GoalTracker {
  constructor(goal, actual, unit = "ml") {
    super(goal, actual); 
    this.unit = unit; 
  }

 
  displayProgress() {
    const percentage = Math.min((this.actual / this.goal) * 100, 100);
    return `You have drunk ${this.actual} ${this.unit} of water out of ${this.goal} ${this.unit}. Progress: ${Math.round(percentage)}% Keep it up!`;
  }
}


class WalkingTracker extends GoalTracker {
  constructor(goal, actual, terrain = "flat") {
    super(goal, actual);
    this.terrain = terrain;  
  }

  
  displayProgress() {
    const percentage = Math.min((this.actual / this.goal) * 100, 100);
    return `You have walked ${this.actual} steps out of ${this.goal} steps. Terrain: ${this.terrain}. Progress: ${Math.round(percentage)}% Keep moving!`;
  }
}


const sleepTracker = new SleepTracker(8, 0, "Good");
const waterTracker = new WaterTracker(2000, 0, "ml");
const walkingTracker = new WalkingTracker(10000, 0, "hilly");


document.getElementById('sleepForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const sleepActual = parseInt(document.getElementById('sleepActual').value);
  sleepTracker.setActual(sleepActual); 
  document.getElementById('sleepProgressMessage').textContent = sleepTracker.displayProgress();  
});

document.getElementById('waterForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const waterActual = parseInt(document.getElementById('waterActual').value);
  waterTracker.setActual(waterActual);  
  document.getElementById('waterProgressMessage').textContent = waterTracker.displayProgress();  
});

document.getElementById('walkingForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const walkingActual = parseInt(document.getElementById('walkingActual').value);
  walkingTracker.setActual(walkingActual); 
  document.getElementById('walkingProgressMessage').textContent = walkingTracker.displayProgress();  
});
