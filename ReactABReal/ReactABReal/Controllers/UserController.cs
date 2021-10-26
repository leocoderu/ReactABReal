using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using ReactABReal.Models;

namespace ReactABReal.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly ILogger<UserController> _logger;
        //private IUserRepository repository;
        private readonly ApplicationContext _context;

        //private bool UserExists(int id) => repository.Users.Any(e => e.Id == id);
        private bool UserExists(int id) => _context.Users.Any(e => e.Id == id);

        //public UserController(ILogger<UserController> logger, IUserRepository repo)
        public UserController(ILogger<UserController> logger, ApplicationContext context)
        {
            _logger = logger;
            //repository = repo;
            _context = context;
        }

        // GET: api/User
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUser()  // Get()
        {
            //return await repository.Users.ToListAsync();
            return await _context.Users.ToListAsync();
        }

        // GET: api/User/5
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(int id)  // Get()
        {
            //var user = await repository.Users.FirstOrDefaultAsync(i => i.Id == id);
            var user = await _context.Users.FirstOrDefaultAsync(i => i.Id == id);

            if (user == null) return NotFound();

            return user;
        }

        // PUT: api/User/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser(int id, User user)
        {
            user.Id = id;

            _context.Entry(User).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id)) return NotFound();
                    else throw;
            }

            return NoContent();
        }

        // POST: api/User
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        /*[HttpPost]
        public async Task<ActionResult<User>> PostUser(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUser", new { id = user.Id }, user);
        }*/

        [HttpPost]
        public IActionResult Post(User user)
        {
            //user.Id = Guid.NewGuid().ToString();
            //data.Add(phone);
            _context.Users.Add(user);
            return Ok(user);
        }

        // DELETE: api/DCandidate/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<User>> DeleteUser(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null) return NotFound();
            
            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return user;
        }

    }
}
