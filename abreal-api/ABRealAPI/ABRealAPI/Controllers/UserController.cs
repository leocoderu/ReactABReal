using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using ABRealAPI.Models;
using Microsoft.AspNetCore.Cors;

namespace ABRealAPI.Controllers
{
    //[ApiController]
    [Route("api/[controller]")]
    [EnableCors("Policy1")]

    public class UserController : Controller
    {
        //private IUserRepository repository;
        private ApplicationContext _context;
        public UserController(ApplicationContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<User> Get()
        {
            return _context.Users.ToArray();
        }


        [HttpPost]
        public IActionResult Post(User user)
        {
            //user.Id = 8;
            _context.Users.Add(user);
            _context.SaveChanges();
            return Ok(user);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            User user = _context.Users.FirstOrDefault(x => x.Id == id);
            if (user == null) return NotFound();
            
            _context.Users.Remove(user);
            _context.SaveChanges();

            return Ok(user);
        }

    }
}
