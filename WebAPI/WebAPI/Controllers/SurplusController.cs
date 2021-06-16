using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SurplusController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public SurplusController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                    select SurplusID, TagNumber, SerialNumber, Make, Model, Description, BelongsTo, Room, Missing , DateAcquired, Cost, PO , Doc, Type, OriginalTag, Condition from dbo.Surplus";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }


        [HttpPost]
        public JsonResult Post(Surplus inv)
        {
            string query = @"
                    insert into dbo.Surplus (TagNumber, SerialNumber, Make, Model, Description, BelongsTo, Room, Missing , DateAcquired, Cost, PO , Doc, Type, OriginalTag, Condition)
                    values 
                    (
                    '" + inv.TagNumber + @"'
                    ,'" + inv.SerialNumber + @"'
                    ,'" + inv.Make + @"'
                    ,'" + inv.Model + @"'
                    ,'" + inv.Description + @"'
                    ,'" + inv.BelongsTo + @"'
                    ,'" + inv.Room + @"'
                    ,'" + inv.Missing + @"'
                    ,'" + inv.DateAcquired + @"'
                    ,'" + inv.Cost + @"'
                    ,'" + inv.PO + @"'
                    ,'" + inv.Doc + @"'
                    ,'" + inv.Type + @"'
                    ,'" + inv.OriginalTag + @"'
                    ,'" + inv.Condition + @"'
                    )
                    ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Added");
        }


        [HttpPut]
        public JsonResult Put(Surplus inv)
        {
            string query = @"
                    update dbo.Inventory set 
                    TagNumber = '" + inv.TagNumber + @"',
                    SerialNumber = '" + inv.SerialNumber + @"',
                    Make = '" + inv.Make + @"',
                    Model = '" + inv.Model + @"',
                    Description = '" + inv.Description + @"',
                    BelongsTo = '" + inv.BelongsTo + @"',
                    Room = '" + inv.Room + @"',
                    Missing = '" + inv.Missing + @"',
                    DateAcquired = '" + inv.DateAcquired + @"',
                    Cost = '" + inv.Cost + @"',
                    PO = '" + inv.PO + @"',
                    Doc = '" + inv.Doc + @"',
                    Type = '" + inv.Type + @"',
                    OriginalTag = '" + inv.OriginalTag + @"',
                    Condition = '" + inv.Condition + @"',
                    where SurplusID = " + inv.SurplusID + @" 
                    ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Updated Successfully");
        }


        [HttpDelete("{SurplusID}")]
        public JsonResult Delete(int SurplusID)
        {
            string query = @"
                    delete from dbo.Surplus
                    where TagNumber = " + SurplusID + @" 
                    ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Deleted Successfully");
        }
    }
}
