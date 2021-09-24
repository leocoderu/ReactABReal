using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ReactABReal.Models;

namespace ReactABReal.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly ILogger<UserController> _logger;
        private IUserRepository repository;

        public UserController(ILogger<UserController> logger, IUserRepository repo)
        {
            _logger = logger;
            repository = repo;
        }

        [HttpGet]
        public IEnumerable<User> Get()
        {
            return repository.Users.ToArray();
        }
    }
}
