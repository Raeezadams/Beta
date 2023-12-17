using api.AuthService;
using api.Models;
using api.Services.Products;
using Microsoft.AspNetCore.Mvc;
using SmartService.Outcomes;
using SmartService.Outcomes.Results;

namespace api.Controllers;

[ApiController]
[Route("[controller]")]
public class ProductsController : ControllerBase
{
    private readonly IProductsService _productsService;
    private readonly IHandler _handler;

    public ProductsController(IProductsService productsService, IHandler handler)
    {
        _productsService = productsService;
        _handler = handler;
    }


    [HttpPost]
    public async Task<ActionResult<IOutcome<Product>>> AddProduct()
    {
        return _handler.HandleOutcome(await _productsService.AddProduct(Request));
    }


    [HttpGet]
    public List<Entities.Product> GetProducts()
    {
        return _productsService.GetProducts();
    }
}




