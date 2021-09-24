using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactABReal.Models
{
    public interface IUserRepository
    {
        IQueryable<User> Users { get; }
    }
}
