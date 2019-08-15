import DistanceCalculator from '../../src/calculator';

describe('DistanceCalculator', () => {
    let distanceCalculator: DistanceCalculator;

    describe('base case', () => {
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
    });

    describe('default constructor', () => {
        beforeAll(() => {
            distanceCalculator = new DistanceCalculator();
        });

        it('should return price with rate of first range (40)', () => {
            const expected = 450;
            const actual = distanceCalculator.calculate(0);

            expect(actual).toEqual(expected);
        });

        it('should return price with rate of first range (40)', () => {
            const expected = 690;
            const actual = distanceCalculator.calculate(20);

            expect(actual).toEqual(expected);
        });

        it('should return price with rate of first range (40)', () => {
            const expected = 930;
            const actual = distanceCalculator.calculate(40);

            expect(actual).toEqual(expected);
        });

        it('should return price with rate of second range (100)', () => {
            const expected = 941;
            const actual = distanceCalculator.calculate(41);

            expect(actual).toEqual(expected);
        });

        it('should return price with rate of second range (100)', () => {
            const expected = 1260;
            const actual = distanceCalculator.calculate(70);

            expect(actual).toEqual(expected);
        });

        it('should return price with rate of second range (100)', () => {
            const expected = 1590;
            const actual = distanceCalculator.calculate(100);

            expect(actual).toEqual(expected);
        });

        it('should return price with rate of third range (200)', () => {
            const expected = 1600;
            const actual = distanceCalculator.calculate(101);

            expect(actual).toEqual(expected);
        });

        it('should return price with rate of third range (200)', () => {
            const expected = 1790;
            const actual = distanceCalculator.calculate(120);

            expect(actual).toEqual(expected);
        });

        it('should return price with rate of third range (200)', () => {
            const expected = 2390;
            const actual = distanceCalculator.calculate(180);

            expect(actual).toEqual(expected);
        });
    });

    describe('new base price', () => {
        beforeAll(() => {
            distanceCalculator = new DistanceCalculator(35, undefined, undefined);
        });

        it('should return price with rate of third range (40)', () => {
            const expected = 1175;
            const actual = distanceCalculator.calculate(100);

            expect(actual).toEqual(expected);
        });

        it('should return price with rate of second range (100)', () => {
            const expected = 2075;
            const actual = distanceCalculator.calculate(190);

            expect(actual).toEqual(expected);
        });

        it('should return price with rate of third range (200)', () => {
            const expected = 5175;
            const actual = distanceCalculator.calculate(500);

            expect(actual).toEqual(expected);
        });
    });

    describe('empty ranges', () => {
        beforeAll(() => {
            distanceCalculator = new DistanceCalculator(undefined, [], undefined);
        });

        it('should return price from base price + (distance * rate)', () => {
            const expected = 1650;
            const actual = distanceCalculator.calculate(100);

            expect(actual).toEqual(expected);
        });

        it('should return price from base price + (distance * rate)', () => {
            const expected = 4050;
            const actual = distanceCalculator.calculate(300);

            expect(actual).toEqual(expected);
        });

        it('should return price from base price + (distance * rate)', () => {
            const expected = 6450;
            const actual = distanceCalculator.calculate(500);

            expect(actual).toEqual(expected);
        });
    });

    describe('new rate', () => {
        beforeAll(() => {
            distanceCalculator = new DistanceCalculator(undefined, undefined, 15);
        });

        it('should return price with rate of third range (40)', () => {
            const expected = 1890;
            const actual = distanceCalculator.calculate(100);

            expect(actual).toEqual(expected);
        });

        it('should return price with rate of second range (100)', () => {
            const expected = 3060;
            const actual = distanceCalculator.calculate(190);

            expect(actual).toEqual(expected);
        });

        it('should return price with rate of third range (200)', () => {
            const expected = 7090;
            const actual = distanceCalculator.calculate(500);

            expect(actual).toEqual(expected);
        });
    });
});
