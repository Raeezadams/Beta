using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace SmartService.Outcomes.Results
{
    public class FailedOutcomeResult : ObjectResult
    {
        public FailedOutcomeResult(object value) : base(value)
        {
            StatusCode = StatusCodes.Status422UnprocessableEntity;
        }
    }
}
