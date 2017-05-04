using AngularJS_Demo.Interface;
using AngularJS_Demo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularJS_Demo.Repositories
{

    public class ProductRepository : IProductRepository
    {
        SampleEntities ProductDB = new SampleEntities();

        public IEnumerable<TblProductList> GetAll()
        {
            // TO DO : Code to get the list of all the records in database
            return ProductDB.TblProductLists;
        }

        public TblProductList Get(int id)
        {
            // TO DO : Code to find a record in database
            return ProductDB.TblProductLists.Find(id);
        }

        public TblProductList Add(TblProductList item)
        {
            if (item == null)
            {
                throw new ArgumentNullException("item");
            }

            // TO DO : Code to save record into database
            ProductDB.TblProductLists.Add(item);
            ProductDB.SaveChanges();
            return item;
        }

        public bool Update(TblProductList item)
        {
            if (item == null)
            {
                throw new ArgumentNullException("item");
            }

            // TO DO : Code to update record into database
            var products = ProductDB.TblProductLists.Single(a => a.Id == item.Id);
            products.Name = item.Name;
            products.Category = item.Category;
            products.Price = item.Price;
            ProductDB.SaveChanges();

            return true;
        }

        public bool Delete(int id)
        {
            // TO DO : Code to remove the records from database
            TblProductList products = ProductDB.TblProductLists.Find(id);
            ProductDB.TblProductLists.Remove(products);
            ProductDB.SaveChanges();
            return true;
        }
    }
}
