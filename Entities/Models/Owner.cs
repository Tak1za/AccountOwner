using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities.Models
{
    [Table("owner")]
    class Owner
    {
        [Key]
        public Guid OwnerId { get; set; }

        [Required(ErrorMessage="Name is required")]
        [StringLength(45, ErrorMessage = "Name can't be longer than 45 charachters")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Date of Birth is required")]
        public DateTime DateOfBirth { get; set; }

        [Required(ErrorMessage = "Address is required")]
        [StringLength(100, ErrorMessage = "Address cannot be longer than 100 charachters")]
        public string Address { get; set; }
    }
}
