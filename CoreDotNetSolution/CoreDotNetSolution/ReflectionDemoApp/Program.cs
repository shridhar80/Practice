
using System.Reflection;


Assembly assembly= Assembly.GetExecutingAssembly();
Console.WriteLine("Location : "+assembly.Location);
Console.WriteLine("full name : " + assembly.FullName);
MethodInfo  mainInfo=assembly.EntryPoint;
if (mainInfo != null)
{
    Console.WriteLine(mainInfo.Name);
    Console.WriteLine("public ="+ mainInfo.IsPublic);
    Console.WriteLine("Static =" + mainInfo.IsStatic);
    Type mainType = mainInfo.ReturnType;
    Console.WriteLine("Main entry Point return type= "+mainType.Name);
}

Console.WriteLine("------------------------------------------");

Type [] allTypes=assembly.GetTypes();
foreach (Type t in allTypes)
{
    Console.WriteLine(t.Name);
    Console.WriteLine(t.FullName);
     
    MethodInfo[] methods=t.GetMethods();
    Console.WriteLine("All methods belong to Type " + t.Name);
    foreach (MethodInfo m in methods)
    {
        Console.WriteLine(m.Name);
    }
}





Console.ReadLine();


 