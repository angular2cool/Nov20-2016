using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

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
            var item1 = new LayoutItem("col-sm-4", "visual-chart", new LayoutParameter("/api/ProductSales/ForSku/" + sku));
            var item2 = new LayoutItem("col-sm-4", "visual-table", new LayoutParameter("/api/ProductSales/ForSku/" + sku));
            return Json(new Layout(new LayoutRow[] { new LayoutRow("row", new LayoutItem[] { item1, item2 }) }));
        }
    }
}

public class Layout
{
    public LayoutRow[] rows { get; set; }

    public Layout(LayoutRow[] rows)
    {
        this.rows = rows;
    }
};

public class LayoutRow
{
    public string className { get; set; }
    public LayoutItem[] items { get; set; }

    public LayoutRow(string className, LayoutItem[] items)
    {
        this.className = className;
        this.items = items;
    }
};

public class LayoutItem
{
    public string className { get; set; }
    public string visual { get; set; }
    public LayoutParameter parameters { get; set; }

    public LayoutItem(string className, string visual, LayoutParameter parameters)
    {
        this.className = className;
        this.visual = visual;
        this.parameters = parameters;
    }
};

public class LayoutParameter
{
    public string url { get; set; }

    public LayoutParameter(string url)
    {
        this.url = url;
    }
};