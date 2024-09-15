using ApplicationLauncher.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

using System.Text.Json;


namespace MyWebApp.Controllers
{
    public class ApplicationController : Controller
    {
        private static readonly string ConfigFilePath = Path.Combine(Directory.GetCurrentDirectory(), "config.json");

        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public async Task<IActionResult> Launch(string name, string parameters)
        {
            try
            {
                Process.Start(new ProcessStartInfo
                {
                    FileName = name,
                    Arguments = parameters,
                    UseShellExecute = true
                });
                return Content("Application launched successfully.");
            }
            catch (Exception ex)
            {
                return Content($"Error: {ex.Message}");
            }
        }

        [HttpGet]
        public IActionResult GetConfig()
        {
            var config = LoadConfiguration();
            return Json(config);
        }

        [HttpPost]
        public async Task<IActionResult> SaveConfig([FromBody] ApplicationConfig[] config)
        {
            SaveConfiguration(config);
            return Content("Configuration saved successfully.");
        }

        private void SaveConfiguration(ApplicationConfig[] config)
        {
            var json = JsonSerializer.Serialize(config);
            System.IO.File.WriteAllText(ConfigFilePath, json);
        }

        private ApplicationConfig[] LoadConfiguration()
        {
            if (System.IO.File.Exists(ConfigFilePath))
            {
                var json = System.IO.File.ReadAllText(ConfigFilePath);
                return JsonSerializer.Deserialize<ApplicationConfig[]>(json);
            }
            return new ApplicationConfig[] { };
        }
    }

    
}
