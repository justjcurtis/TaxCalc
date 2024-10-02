using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using TaxCalc.Models;
using TaxCalc.Services;

namespace TaxCalc.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaxCalcController : ControllerBase
    {
        private readonly TaxCalculator _taxCalc;
        public TaxCalcController(TaxCalculator taxCalc)
        {
            _taxCalc = taxCalc;
        }

        [HttpPost]
        public IActionResult CalculateTax([FromBody] TaxCalculationRequest request)
        {
            var grossIncome = request.GrossIncome;
            if(grossIncome < 0)
            {
                return BadRequest(new JsonResult("Gross income must be greater than or equal to zero."));
            }

            var tax = _taxCalc.CalculateTax(grossIncome);

            var result = new TaxCalculationResult
            {
                GrossIncome = grossIncome,
                NetIncome = grossIncome - tax,
                TaxAmount = tax
            };

            return Ok(new JsonResult(result));
        }
    }
}
