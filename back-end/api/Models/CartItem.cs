using System;
namespace api.Models
{

    public class AddCartItem    
    {
        public int ProductID { get; set; }
        public int UserID { get; set; }
        public string ProductName { get; set; }
    }
}
