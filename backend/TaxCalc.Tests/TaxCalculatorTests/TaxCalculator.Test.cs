using TaxCalc.Services;

namespace TaxCalc.Tests.TaxCalculatorTests
{
    public class TaxCalulatorTests
    {
        private readonly int[] taxBands;
        private readonly decimal[] taxRates;

        public TaxCalulatorTests()
        {
            taxBands = [ 0, 5000, 20000 ];
            taxRates = [ 0.0m, 0.2m, 0.4m ];
        }

        [Fact]
        public void Tax_Calculator_CalculateTax_ReturnsCorrectTax()
        {
            // Arrange
            var testsPerBand = 100000;
            var taxCalc = new TaxCalculator();
            var rand = new Random();

            // Act
            for (int i = 0; i < taxBands.Length; i++)
            {
                for (int j = 0; j < testsPerBand; j++)
                {
                    var min = taxBands[i]*100;
                    var max = (i < taxBands.Length - 1 ? taxBands[i + 1] : taxBands[i] * 10)*100;
                    var grossIncome = rand.Next(min, max)/100m;
                    var tax = taxCalc.CalculateTax(grossIncome);

                    var expected = 0m;
                    for (int k = i; k >= 0; k--)
                    {
                        expected += (grossIncome - taxBands[k]) * taxRates[k];
                        grossIncome = taxBands[k];
                    }

                    // Assert
                    Assert.Equal(expected, tax);
                }
            }
        }
    }
}
