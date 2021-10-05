export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToInactiveCounter = 0;

  incrementActiveToInactive() {
    this.activeToInactiveCounter++;
    console.log("Active to inactive: " + this.activeToInactiveCounter);
  }

  incrementinActiveToInactive() {
    this.inactiveToInactiveCounter++;
    console.log("Inactive to active: " + this.inactiveToInactiveCounter);
  }
}
