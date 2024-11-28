const sleepData = { goal: 8, actual: 6 };
const waterData = { goal: 2000, actual: 1500 };
const walkingData = { goal: 10000, actual: 7500 };

function updateProgress(goal, actual, progressElementId, trackerName) {
    const percentage = Math.min((actual / goal) * 100, 100);
    const progressMessage = `You have completed ${Math.round(percentage)}% of your ${trackerName} goal. Keep it up!`;
    document.getElementById(progressElementId).textContent = progressMessage;
  }
