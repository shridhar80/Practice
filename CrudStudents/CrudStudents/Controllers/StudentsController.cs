using CrudStudents.Data;
using CrudStudents.Models;
using CrudStudents.Models.Entity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CrudStudents.Controllers
{
    public class StudentsController : Controller
    {
        private readonly ApplicationDbContext dbContext;

        public StudentsController(ApplicationDbContext dbContext)
        {
           this.dbContext = dbContext;
        }
        [HttpGet]
        public IActionResult Add()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Add(AddStudent addStudent)
        {
            var student = new Student
            {
                Name = addStudent.Name,
                Email = addStudent.Email,
                BirthDate = addStudent.BirthDate,
                IsPass = addStudent.IsPass,
            };
            await dbContext.Students.AddAsync(student);
            await dbContext.SaveChangesAsync();
            return View();
        }

        [HttpGet]
        public async Task<IActionResult> List()
        {
            var students = await dbContext.Students.ToListAsync();
            return View(students);
        }

        [HttpGet]
        public async Task<IActionResult> Details(Guid id)
        {
            var student = await dbContext.Students.FindAsync(id);
            return View(student);
        }

        [HttpGet]
        public async Task<IActionResult> Edit(Guid id)
        {
            var student = await dbContext.Students.FindAsync(id);
            return View(student);
        }

        [HttpPost]
        public async Task<IActionResult> Edit(Student stud)
        {
            var student = await dbContext.Students.FindAsync(stud.Id);
            if(student != null)
            {
                student.Name = stud.Name;
                student.Email = stud.Email;
                student.BirthDate = stud.BirthDate;
                student.IsPass = stud.IsPass;
                await dbContext.SaveChangesAsync();
            }
            return RedirectToAction("List");
        }

        [HttpPost]
        public async Task<IActionResult> Delete (Student stud)
        {
            var student = await dbContext.Students.FirstOrDefaultAsync(x => x.Id == stud.Id);
            if(student != null)
            {
                dbContext.Students.Remove(stud);
                await dbContext.SaveChangesAsync();
            }
            return RedirectToAction("List");
        }


    }
}
