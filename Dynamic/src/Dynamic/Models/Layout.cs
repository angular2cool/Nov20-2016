using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dynamic.Models
{
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
}
