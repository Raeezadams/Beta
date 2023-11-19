using SmartService.Outcomes.Results;
using Microsoft.AspNetCore.Mvc;

namespace SmartService.Outcomes
{
    public interface IHandler
    {
        ActionResult<IOutcome> HandleOutcome(IOutcome outcome);
        ActionResult<IOutcome<T>> HandleOutcome<T>(IOutcome<T> outcome);
    }
}
