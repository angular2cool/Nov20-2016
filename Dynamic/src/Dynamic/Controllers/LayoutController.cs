using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Dynamic.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Dynamic.Controllers
{
    [Route("api/[controller]")]
    public class LayoutController : Controller
    {
        // GET: api/values
        [HttpGet]
        [Route("SalesDataForSku/{sku}")]
        public JsonResult Get(string sku)
        {
            var item1 = new LayoutItem("col-sm-6", "visual-chart", new LayoutParameter("/api/ProductSales/ForSku/" + sku));
            var item2 = new LayoutItem("col-sm-6", "visual-table", new LayoutParameter("/api/ProductSales/ForSku/" + sku));
            return Json(new Layout(new LayoutRow[] { new LayoutRow("row", new LayoutItem[] { item1, item2 }) }));
        }
    }
}
