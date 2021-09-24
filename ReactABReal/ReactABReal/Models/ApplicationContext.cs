﻿using Microsoft.EntityFrameworkCore;

namespace ReactABReal.Models
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options) :base (options){}

        public DbSet<User> Users { get; set; }

    }
}
