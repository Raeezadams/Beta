using api.Models;
using SmartService.Outcomes.Results;

namespace api.Services.Products
{
    public interface ICartService
    {
        Task<IOutcome<Models.AddCartItem>> AddToCart(AddCartItem addCartItem);

        //List<Entities.Product> GetProducts();
    }
}
