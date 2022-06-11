import factorsService from '../../src/app/services/factors.service';

describe('Find factors', () => {
  it('should properly return factors and prime factors', () => {
    const expected = {
      factors: [1, 3, 5, 9, 15],
      primeFactors: [1, 3, 5]
    }

    const factors = factorsService.findFactors(45);

    expect(factors).toStrictEqual(expected);
  });
});
