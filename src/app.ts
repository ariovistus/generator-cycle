export class App {
  prime = 991;
  primeInvalid = false;
  generator = 7;
  generatorInvalid = false;
  current = null;
  begun = false;
  cycleCount: number;
  intervalId;
  disapproval = false;

  constructor() {

  }

  numberIsValid(num2) {
    let num = parseFloat(num2);
    if(typeof num != 'number') {
      return false;
    }

    if(Math.floor(num) != num) {
      return false;
    }
    if(num <= 1) {
      return false;
    }
    return true;
  }

  start() {
    this.generatorInvalid = !this.numberIsValid(this.generator);
    this.primeInvalid = !this.numberIsValid(this.prime);

    if(this.generatorInvalid || this.primeInvalid) {
      return;
    }

    this.begun = true;
    this.current = this.generator;
    this.cycleCount = 1;
    this.disapproval = false;
    this.intervalId = setInterval(() => {
      this.current = (this.current * this.generator) % this.prime;
      this.cycleCount += 1;

      if(this.current == this.generator) {
        this.begun = false;
        clearInterval(this.intervalId);
        if(this.cycleCount != this.prime) {
          this.disapproval = true;
        }
      }
    }, 800);

  }

}
