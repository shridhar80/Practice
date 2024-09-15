using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using ApplicationLauncher2.Models;
using static System.Net.Mime.MediaTypeNames;

[ApiController]
[Route("api/[controller]")]
public class LauncherController : ControllerBase
{
    [HttpGet("apps")]
    public IActionResult GetApps()
    {
        var apps = GetPredefinedApps();
        return Ok(apps);
    }

    [HttpGet("apps/icon/{appName}")]
    public IActionResult GetAppIcon(string appName)
    {
        var app = GetPredefinedApps().FirstOrDefault(a => a.Name == appName);

        if (app != null && !string.IsNullOrEmpty(app.IconPath))
        {
            var iconBytes = System.IO.File.ReadAllBytes(app.IconPath);
            return File(iconBytes, "image/png");
        }

        return NotFound();
    }

    [HttpPost("apps/launch")]
    public IActionResult LaunchApp([FromBody] string appName)
    {
        var app = GetPredefinedApps().FirstOrDefault(a => a.Name == appName);

        if (app != null && !string.IsNullOrEmpty(app.ExecutablePath))
        {
            try
            {
                var process = new Process
                {
                    StartInfo = new ProcessStartInfo
                    {
                        FileName = app.ExecutablePath,
                        UseShellExecute = true,
                    }
                };
                process.Start();
                return Ok();
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        return NotFound();
    }

    [HttpPost("apps/quit")]
    public IActionResult QuitApp([FromBody] string appName)
    {
        var app = GetPredefinedApps().FirstOrDefault(a => a.Name == appName);

        if (app != null && !string.IsNullOrEmpty(app.ProcessName))
        {
            try
            {
                var processes = Process.GetProcessesByName(app.ProcessName);
                foreach (var process in processes)
                {
                    process.Kill();
                }
                return Ok();
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        return NotFound();
    }

    [HttpPost("apps/add")]
    public IActionResult AddApp([FromBody] AppInfo newApp)
    {
        if (newApp == null || string.IsNullOrWhiteSpace(newApp.Name))
        {
            return BadRequest("Invalid app data.");
        }

        var existingApp = GetPredefinedApps().FirstOrDefault(a => a.Name == newApp.Name);
        if (existingApp != null)
        {
            return BadRequest("App with the same name already exists.");
        }

        GetPredefinedApps().Add(newApp);
        return Ok(newApp);
    }

    [HttpDelete("apps/remove/{appName}")]
    public IActionResult RemoveApp(string appName)
    {
        var app = GetPredefinedApps().FirstOrDefault(a => a.Name == appName);

        if (app == null)
        {
            return NotFound("App not found.");
        }

        GetPredefinedApps().Remove(app);
        return NoContent();
    }

    private List<AppInfo> GetPredefinedApps()
    {
        return new List<AppInfo>
        {
            new AppInfo
            {
                Name = "Google Chrome",
                IconPath = @".\Properties\wwwroot\Images\Chrome-Logo-2014.png",
                ExecutablePath = @"C:\Program Files\Google\Chrome\Application\chrome.exe",
                ProcessName = "chrome"
            },
            new AppInfo
            {
                Name = "Microsoft Edge",
              
                IconPath = @".\Properties\wwwroot\Images\msedge.jpg",
                ExecutablePath = @"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
                ProcessName = "msedge"
            },
            new AppInfo
            {
                Name = "Notepad",
                IconPath = @".\Properties\wwwroot\Images\notepads.jpg",
                ExecutablePath = @"C:\Windows\System32\notepad.exe",
                ProcessName = "notepad"
            },
            new AppInfo
            {
                Name = "Notepad++",
                IconPath = @".\Properties\wwwroot\Images\notepad++.jpg",
                ExecutablePath = @"C:\Program Files\Notepad++\notepad++.exe",
                ProcessName = "notepad++"
            },
            new AppInfo
            {
                Name = "Microsoft Teams",
                IconPath = @".\Properties\wwwroot\Images\teams.png",
                ExecutablePath = @"D:\software\Teams_windows_x64.exe",
                ProcessName = "Teams"
            },
            new AppInfo
            {
                Name = "Mozilla Firefox",
                IconPath = @".\Properties\wwwroot\Images\firefox.png",
                ExecutablePath =  @"C:\Program Files\Mozilla Firefox\firefox.exe",
                ProcessName = "firefox"
            },
            new AppInfo
            {
                Name = "Postman",
                IconPath = @".\Properties\wwwroot\Images\postman.png",
                ExecutablePath = @"C:\Users\Dell\AppData\Local\Postman\Postman.exe",
                ProcessName = "Postman"
            },
            new AppInfo
            {
                Name = "Git",
                IconPath = @".\Properties\wwwroot\Images\git.png",
                ExecutablePath = @"D:\software\git\Git\git-bash.exe",
                ProcessName = "git-bash"
            }
        };
    }

   
}
