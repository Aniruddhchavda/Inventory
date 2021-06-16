using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Inventory
    {
        public int InventoryID { get; set; }

        public int TagNumber { get; set; }

        public string SerialNumber { get; set; }

        public string Make { get; set; }

        public string Model { get; set; }

        public string Description { get; set; }

        public string BelongsTo { get; set; }

        public string Room { get; set; }

        public string Missing { get; set; }

        public string DateAcquired { get; set; }

        public string Cost { get; set; }

        public string PO { get; set; }

        public string Doc { get; set; }

        public string Type { get; set; }

        public string OriginalTag { get; set; }

        public string Condition { get; set; }

    }
}
