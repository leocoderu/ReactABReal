using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactABReal.Models
{
    public class EFUserRepository : IUserRepository
    {
        private ApplicationContext context;

        public EFUserRepository(ApplicationContext ctx) => context = ctx;
        
        public IQueryable<User> Users => context.Users;
    }
}
