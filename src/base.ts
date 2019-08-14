export interface ICalculator {
    calculate(no: number): number;
}

export abstract class Calculator implements ICalculator {
    public calculate(no: number): number {
        throw new Error('Method not implemented.');
    }
}
