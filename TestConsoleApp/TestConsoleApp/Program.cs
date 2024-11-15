// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");
string inputFile = @"D:\Practice\Practice\input.txt";
string outputFile = @"D:\Practice\Practice\output.txt";

try
{

    string[] lines = File.ReadAllLines(inputFile);

  
    Dictionary<string, int> fileTypeCounts = new Dictionary<string, int>();

    foreach (string line in lines)
    {
        
        string[] fields = line.Split(',');


       
        string fileType = fields[1].Trim();

        
        if (fileTypeCounts.ContainsKey(fileType))
        {
            fileTypeCounts[fileType]++;
        }
        else
        {
            fileTypeCounts[fileType] = 1;
        }
    }

   
    string mostCommonType = null;
    int maxCount = 0;

    foreach (var entry in fileTypeCounts)
    {
        if (entry.Value > maxCount)
        {
            mostCommonType = entry.Key;
            maxCount = entry.Value;
        }
    }

    
    if (mostCommonType != null)
    {
        File.WriteAllText(outputFile, $"{mostCommonType}:{maxCount}");
        Console.WriteLine($"{mostCommonType}:{maxCount}");
    }
    else
    {
        Console.WriteLine("No data to process.");
    }
}
catch (Exception ex)
{
    Console.WriteLine($"An error occurred: {ex.Message}");
}