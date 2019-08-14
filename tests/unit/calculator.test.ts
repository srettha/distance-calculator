import DistanceCalculator from '../../src/calculator';

describe('DistanceCalculator', () => {
    let distanceCalculator: DistanceCalculator;

    beforeAll(() => {
        distanceCalculator = new DistanceCalculator();
    });

    it('should exist', () => {
        expect(distanceCalculator).toBeTruthy();
    });

    it('should throw an error with value of distance lower than 0', () => {
        try {
            distanceCalculator.calculate(-1);
        } catch (err) {
            expect(err.message).toEqual('Distance must be more than 0');
        }
    });

    it('should return price with rate of first range (0 - 40) case 1', () => {
        const expected = 450;
        const actual = distanceCalculator.calculate(0);

        expect(actual).toEqual(expected);
    });

    it('should return price with rate of first range (0 - 40) case 2', () => {
        const expected = 690;
        const actual = distanceCalculator.calculate(20);

        expect(actual).toEqual(expected);
    });

    it('should return price with rate of first range (0 - 40) case 3', () => {
        const expected = 930;
        const actual = distanceCalculator.calculate(40);

        expect(actual).toEqual(expected);
    });

    it('should return price with rate of second range (41 - 100) case 1', () => {
        const expected = 941;
        const actual = distanceCalculator.calculate(41);

        expect(actual).toEqual(expected);
    });

    it('should return price with rate of second range (41 - 100) case 2', () => {
        const expected = 1260;
        const actual = distanceCalculator.calculate(70);

        expect(actual).toEqual(expected);
    });

    it('should return price with rate of second range (41 - 100) case 3', () => {
        const expected = 1590;
        const actual = distanceCalculator.calculate(100);

        expect(actual).toEqual(expected);
    });

    it('should return price with rate of third range (101++) case 1', () => {
        const expected = 1600;
        const actual = distanceCalculator.calculate(101);

        expect(actual).toEqual(expected);
    });

    it('should return price with rate of third range (100++) case 2', () => {
        const expected = 1790;
        const actual = distanceCalculator.calculate(120);

        expect(actual).toEqual(expected);
    });
});
