using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Certification
    {
        public int InventoryID { get; set; }

        public int TagNumber { get; set; }

        public string SerialNumber { get; set; }

        public string Make { get; set; }

        public string Model { get; set; }

        public string Description { get; set; }

        public string BelongsTo { get; set; }

        public string Certification1 { get; set; }


    }
}
