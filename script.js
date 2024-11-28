const sleepData = { goal: 8, actual: 6 };
const waterData = { goal: 2000, actual: 1500 };
const walkingData = { goal: 10000, actual: 7500 };

function updateProgress(goal, actual, progressElementId, trackerName) {
    const percentage = Math.min((actual / goal) * 100, 100);
    const progressMessage = `You have completed ${Math.round(percentage)}% of your ${trackerName} goal. Keep it up!`;
    document.getElementById(progressElementId).textContent = progressMessage;
  }

  document.getElementById('sleepForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const actualSleep = parseFloat(document.getElementById('sleepActual').value);
    if (isNaN(actualSleep) || actualSleep < 0) {
      alert('Please enter a valid number for your actual sleep.');
    } else {
      sleepData.actual = actualSleep;
      updateProgress(sleepData.goal, sleepData.actual, 'sleepProgressMessage', 'Sleep');
    }
  });

  document.getElementById('waterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const actualWater = parseFloat(document.getElementById('waterActual').value);
    if (isNaN(actualWater) || actualWater < 0) {
      alert('Please enter a valid number for your actual water intake.');
    } else {
      waterData.actual = actualWater;
      updateProgress(waterData.goal, waterData.actual, 'waterProgressMessage', 'Water Intake');
    }
  });

  document.getElementById('walkingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const actualSteps = parseInt(document.getElementById('walkingActual').value);
    if (isNaN(actualSteps) || actualSteps < 0) {
      alert('Please enter a valid number for your actual walking steps.');
    } else {
      walkingData.actual = actualSteps;
      updateProgress(walkingData.goal, walkingData.actual, 'walkingProgressMessage', 'Walking');
    }
  });

