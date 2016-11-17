using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dynamic.Models
{
    public class Sales
    {
        public String Date { get; set; }
        public decimal Revenue { get; set; }
        public int UnitSales { get; set; }

        public Sales(String date, decimal revenue, int unitSales)
        {
            this.Date = date;
            this.Revenue = revenue;
            this.UnitSales = unitSales;
        }
    }
}
