using System.Collections.Generic;
using System.Web.Mvc;
using Tenken.Models;

namespace Tenken.Controllers
{
    public class SearchController : Controller
    {
        public ActionResult Search(string productName)
        {
            IList<Product> products = ProductAPIController.GetProductByName(productName);
            ViewBag.ProductList = products;
            ViewBag.Size = products.Count;
            return View();
        }
    }
}