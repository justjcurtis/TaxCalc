namespace TaxCalc.Models
{
    public class TaxCalculationResult
    { 
        public decimal GrossIncome { get; set; }
        public decimal NetIncome { get; set; }
        public decimal TaxAmount { get; set; }
    }
}
