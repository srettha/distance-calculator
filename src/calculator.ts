import { Calculator } from './base';

export default class DistanceCalculator implements Calculator {
    constructor(
        protected readonly basePrice: number = 450,
        protected readonly ranges: number[] = [40, 100, 200],
        protected readonly rate: number = 12,
    ) {
        this.ranges = ranges.sort((a, b) => a - b);
    }

    public calculate(distance: number): number {
        if (distance < 0) {
            throw new Error('Distance must be more than 0');
        }

        if (distance === 0) {
            return this.basePrice;
        }

        if (this.ranges.length === 0) {
            return this.basePrice + (distance * this.rate);
        }

        let sum = this.basePrice;

        for (let i = 0; i < this.ranges.length; i++) {
            const previousRange = this.ranges[i - 1] || 0;
            const currentRange = this.ranges[i];
            const currentRate = this.rate - i;

            if (distance >= currentRange && i === this.ranges.length - 1) {
                sum += (distance - previousRange) * currentRate;
            }

            if (distance >= currentRange  && i !== this.ranges.length - 1) {
                sum += (currentRange - previousRange) * currentRate;
                continue;
            }

            if (distance < currentRange) {
                return sum += (distance - previousRange) * currentRate;
            }
        }

        return sum;
    }
}
