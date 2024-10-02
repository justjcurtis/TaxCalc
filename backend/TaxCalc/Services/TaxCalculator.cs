namespace TaxCalc.Services
{
    public class TaxCalculator
    {
        private readonly int[] taxBands;
        private readonly decimal[] taxRates;

        public TaxCalculator()
        {
            taxBands = [0, 5000, 20000];
            taxRates = [0.0m, 0.2m, 0.4m];
        }

        public decimal CalculateTax(decimal grossIncome)
        {
            var taxAmount = 0m;
            for (int i = taxBands.Length - 1; i >= 0; i--)
            {
                if(grossIncome > taxBands[i])
                {
                    taxAmount += (grossIncome - taxBands[i]) * taxRates[i];
                    grossIncome = taxBands[i];
                }
            }
            return taxAmount;
        }
    }
}
