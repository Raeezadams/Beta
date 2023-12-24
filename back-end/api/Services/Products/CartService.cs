using api.Context;
using api.Entities;
using api.Models;
using ServiceLayer;
using SmartService.Outcomes.Results;
using SmartService.Services.Utils;

namespace api.Services.Products
{
    public class CartService : ICartService
    {
        private readonly APIDbContext _dbContext;
        private readonly IConfiguration _configuration;
        public CartService(APIDbContext dbContext, IConfiguration configuration)
        {
            _dbContext = dbContext;
            _configuration = configuration;
        }

        public List<Entities.Product> GetProducts()
        {
            return _dbContext.Products.ToList();
        }

        public async Task<IOutcome<Models.AddCartItem>> AddToCart(AddCartItem addCartItem)
        {
            try
            {
                var product = _dbContext.Products.Single(p => p.Id == addCartItem.ProductID);
                var user = _dbContext.Users.Single(u => u.id == addCartItem.UserID);

                var cart = _dbContext.CartItems.SingleOrDefault(c => c.UserId == addCartItem.UserID);

                if(cart == null)
                {
                    cart = new Cart()
                    { 
                        UserId = addCartItem.UserID,
                        Total = product.Price,
                        Products = new List<Entities.Product> { product }

                    };

                }
                else
                {
                    cart.Products.Add(product);
                    cart.Total = cart.Total + product.Price;
                }

                return new Success<Models.AddCartItem>(addCartItem);
            }
            catch (Exception ex)
            {
                return new Failure<Models.AddCartItem>(ex.Message);
            }
        }
    }
}
