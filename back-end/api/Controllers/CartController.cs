using api.AuthService;
using api.Models;
using api.Services.Products;
using Microsoft.AspNetCore.Mvc;
using SmartService.Outcomes;
using SmartService.Outcomes.Results;

namespace api.Controllers;

[ApiController]
[Route("[controller]")]
public class CartController 
{
    private readonly ICartService _cartService;
    private readonly IHandler _handler;

    public CartController(ICartService CartService, IHandler handler)
    {
        _cartService = CartService;
        _handler = handler;
    }


    [HttpPost]
    public async Task<ActionResult<IOutcome<AddCartItem>>> AddToCart(AddCartItem addCartItem)
    {
        return _handler.HandleOutcome(await _cartService.AddToCart(addCartItem));
    }


    //[HttpGet]
    //public List<Entities.Product> GetProducts()
    //{
    //    return _productsService.GetProducts();
    //}
}




