using api.Context;
using api.Entities;
using ServiceLayer;
using SmartService.Outcomes.Results;
using SmartService.Services.Utils;

namespace api.Services.Products
{
    public class ProductsService : IProductsService
    {
        private readonly APIDbContext _dbContext;
        private readonly IConfiguration _configuration;
        public ProductsService(APIDbContext dbContext, IConfiguration configuration)
        {
            _dbContext = dbContext;
            _configuration = configuration;
        }

        public List<Entities.Product> GetProducts()
        {
            return _dbContext.Products.ToList();
        }

        public async Task<IOutcome<Models.Product>> AddProduct(HttpRequest httpRequest)
        {
            try
            {
                var file = httpRequest.Form.Files[0];
                //var price = int.Parse(httpRequest.Form["price"][0]);

                var mimeType = file.ContentType;
                var fileData = await FormFileExtensions.GetBytes(file);

                BlobStorageService objBlobService = new BlobStorageService(_configuration);


                var imageUrl = objBlobService.UploadFileToBlob(file.FileName, fileData, mimeType);

                var product = new Product()
                {
                    Price = Convert.ToInt32(httpRequest.Form["price"]),
                    Name = httpRequest.Form["name"],
                    Quantity = Convert.ToInt32(httpRequest.Form["qauntity"]),
                    Description = httpRequest.Form["description"],
                    Image = imageUrl
                };

                var productModel = new Models.Product()
                {
                    Price = Convert.ToInt32(httpRequest.Form["price"]),
                    Name = httpRequest.Form["name"],
                    Quantity = Convert.ToInt32(httpRequest.Form["qauntity"]),
                    Description = httpRequest.Form["description"],
                    Image = imageUrl
                };

                _dbContext.Add(product);
                _dbContext.SaveChanges();


                return new Success<Models.Product>(productModel);
            }
            catch (Exception ex)
            {
                return new Failure<Models.Product>(ex.Message);
            }
        }
    }
}
