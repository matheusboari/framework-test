import * as _ from 'lodash';

type Factors = {
  factors: number[];
  primeFactors: number[];
};

class FactorsService {
  findFactors(number: number): Factors {
    const factors = [1];
    const primeFactors = this.getPrimeFactors(number);

    for (let i = 2; i < number; i++) {
      if (number % i == 0) factors.push(i);
    }

    return {
      factors,
      primeFactors
    };
  }

  private getPrimeFactors(number: number): number[] {
    const factors = [1];
    let divisor = 2;

    while (number >= 2) {
      if (number % divisor == 0) {
        factors.push(divisor);
        number = number / divisor;
      } else {
        divisor++;
      }
    }

    return _.uniq(factors);
  }
}

export default new FactorsService();
