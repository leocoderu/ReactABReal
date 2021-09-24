using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace ReactABReal.Models
{
    [DisplayName("Users")]
    public class User
    {
        [Key]
        //[HiddenInput(DisplayValue = false)]
        public int Id { get; set; }

        [Required(ErrorMessage = "User name necessary", AllowEmptyStrings = false)]
        [Display(Name = "User name")]
        [StringLength(50)]
        public string Name { get; set; }

        [Required]
        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:yyyy-MM-dd}")]
        [Display(Name = "Date Registration")]
        public DateTime? DateReg { get; set; }

        [Required]
        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:yyyy-MM-dd}")]
        [Display(Name = "Date Last Action")]
        public DateTime? DateLast { get; set; }

    }
}
