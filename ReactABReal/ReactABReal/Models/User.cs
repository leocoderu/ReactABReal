using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ReactABReal.Models
{
    [DisplayName("Users")]
    public class User
    {
        [Key]
        public int Id { get; set; }

        [Column(TypeName = "character(50)")]
        [Required(ErrorMessage = "User name necessary", AllowEmptyStrings = false)]
        [Display(Name = "User name")]
        [StringLength(50)]
        public string Name { get; set; }

        [Required]
        [Column(TypeName = "timestamp without time zone")]
        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:yyyy-MM-dd}")]
        [Display(Name = "Date Registration")]
        public DateTime? DateReg { get; set; }

        [Required]
        [Column(TypeName = "timestamp without time zone")]
        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:yyyy-MM-dd}")]
        [Display(Name = "Date Last Action")]
        public DateTime? DateLast { get; set; }

    }
}
