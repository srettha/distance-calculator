import { Calculator } from './base';

export default class DistanceCalculator implements Calculator {
    protected readonly firstRangeRate: number = 12;
    protected readonly minFristRange: number = 0;
    protected readonly maxFirstRange: number = 40;
    protected readonly secondRangeRate: number = 11;
    protected readonly minSecondRange: number = 41;
    protected readonly maxSecondRange: number = 100;
    protected readonly thirdRangeRate: number = 10;
    protected readonly minThirdRange: number = 101;

    constructor(
        protected readonly basePrice: number = 450,
    ) {}

    public calculate(distance: number): number {
        if (distance < 0) {
            throw new Error('Distance must be more than 0');
        }

        if (this.isFirstRange(distance)) {
            const firstRangePrice = distance * this.firstRangeRate;

            return this.basePrice + firstRangePrice;
        }

        if (this.isSecondRange(distance)) {
            const fullPriceFromFirstRange = this.maxFirstRange * this.firstRangeRate;
            const secondRangePrice = (distance - this.maxFirstRange) * this.secondRangeRate;

            return this.basePrice + fullPriceFromFirstRange + secondRangePrice;
        }

        if (this.isThirdRange(distance)) {
            const fullPriceFromFirstRange = this.maxFirstRange * this.firstRangeRate;
            const fullPriceFromSecondRange = (this.maxSecondRange - this.maxFirstRange) * this.secondRangeRate;
            const thirdRangePrice = (distance - this.maxSecondRange) * this.thirdRangeRate;

            return this.basePrice + fullPriceFromFirstRange + fullPriceFromSecondRange + thirdRangePrice;
        }

        return 0;
    }

    private isFirstRange(distance: number): boolean {
        return distance >= this.minFristRange && distance <= this.maxFirstRange;
    }

    private isSecondRange(distance: number): boolean {
        return distance >= this.minSecondRange && distance <= this.maxSecondRange;
    }

    private isThirdRange(distance: number): boolean {
        return distance >= this.minThirdRange;
    }
}
