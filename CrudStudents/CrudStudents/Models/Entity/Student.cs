namespace CrudStudents.Models.Entity
{
    public class Student
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public DateTime BirthDate { get; set; }
        public bool  IsPass { get; set; }
    }
}
