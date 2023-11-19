using api.Context;
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

         

                return new Success<Models.Product>();
            }
            catch (Exception ex)
            {
                return new Failure<Models.Product>(ex.Message);
            }
        }
    }
}
