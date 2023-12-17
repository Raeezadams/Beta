using SmartService.Outcomes.Results;

namespace api.Services.Products
{
    public interface IProductsService
    {
        Task<IOutcome<Models.Product>> AddProduct(HttpRequest httpRequest);

        List<Entities.Product> GetProducts();
    }
}
