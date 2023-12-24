using System;
namespace api.Entities
{

    public class Cart    
    {
        public int UserId { get; set; }
        public int Total{ get; set; }

        public List <Product> Products { get; set; }

        public Cart()
        {
            Products = new List<Product>();
        }
    }
}
