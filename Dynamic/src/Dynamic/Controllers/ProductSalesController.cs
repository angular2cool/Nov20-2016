using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Dynamic.Models;
using Newtonsoft.Json.Linq;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Dynamic.Controllers
{
    [Route("api/[controller]")]
    public class ProductSalesController : Controller
    {
        [HttpGet]
        [Route("ForSku/{sku}")]
        public JsonResult ForSku(string sku)
        {
            return Json(GetSalesData());
        }

        private List<Sales> GetSalesData()
        {
            decimal price = 2.99m;
            Random rnd = new Random(1234);
            List<Sales> retval = new List<Sales>();
            for (int m = 1; m < 3; m++)
            {
                for (int d = 1; d < 30; d++)
                {
                    var s = rnd.Next() % 500;
                    retval.Add(new Sales(new DateTime(2016, m, d).ToString("yyyy-MM-dd"), s * price, s));
                }
            }
            return retval;
        }
    }
}
