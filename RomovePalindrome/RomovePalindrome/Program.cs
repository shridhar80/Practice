/*for(int i=5; i >= 1; i--)
{
    for(int j=0; j<i; j++)
    {
        Console.Write("*");
    }
    Console.WriteLine();
}
Console.WriteLine("-----------------------------------------");
for (int i = 1; i <= 5; i++)
{
    for (int j = 0; j < i; j++)
    {
        Console.Write("*");
    }
    Console.WriteLine();
}
Console.WriteLine("-----------------------------------------");*/

/*
int a = 1, spaces, k = 6, i = 0, j = 0;
spaces = k - 1;
for (i = 1; i < k*2; i++)
{
    for (j = 1; j <= spaces; j++)
    { Console.Write(" "); }
    for (j = 1; j < a * 2; j++)
    {
        Console.Write('*');
    }
    Console.WriteLine("");
    if (i < k)
    {
        spaces--; a++;
    }
    else
    {
        spaces++; a--;
    }
}
Console.WriteLine("-----------------------------------------"); */



/*
 // Function to check if a word is a palindrome
    static bool IsPalindrome(string word)
    {
        int left = 0;
        int right = word.Length - 1;

        while (left < right)
        {
            if (word[left] != word[right])
                return false;

            left++;
            right--;
        }

        return true;
    }

string input = "HI MOM I AM WITH MY MADAM IN SCHOOL AND DAD IS HERE.";

// Split the input into words (including punctuation)
var words = input.Split(new[] { ' ', '.', ',', '!', '?' }, StringSplitOptions.RemoveEmptyEntries);

// Filter out palindromes
var filteredWords = words.Where(word => !IsPalindrome(word)).ToArray();

// Reconstruct the statement without palindromes
var result = string.Join(" ", filteredWords);

// Print the result
Console.WriteLine("Statement without palindromes:");
Console.WriteLine(result);
 
 */




    // Function to check if a word is a palindrome
    static bool IsPalindrome(string word)
    {
        int left = 0;
        int right = word.Length - 1;

        while (left < right)
        {
            if (word[left] != word[right])
                return false;

            left++;
            right--;
        }

        return true;
    }

   
        // Input statement
        string input = "HI MOM I AM WITH MY MADAM IN SCHOOL AND DAD IS HERE.";

        // Initialize variables
        string result = "";
        string currentWord = "";

        // Traverse each character in the input string
        for (int i = 0; i < input.Length; i++)
        {
            char c = input[i];

            // Check if the character is a letter or digit
            if (Char.IsLetterOrDigit(c))
            {
                // Build the current word
                currentWord += c;
            }
            else
            {
                // When a non-letter character is encountered, check the current word
                if (currentWord.Length > 0)
                {
                    // Check if the word is not a palindrome
                    if (!IsPalindrome(currentWord))
                    {
                        // Add the non-palindrome word to the result with a space
                        result += currentWord + " ";
                    }
                    // Reset the current word
                    currentWord = "";
                }

                // Add non-letter characters to the result as well
                result += c;
            }
        }

        // Handle the last word if there's any left
        if (currentWord.Length > 0 && !IsPalindrome(currentWord))
        {
            result += currentWord;
        }

        // Print the result
        Console.WriteLine("Statement without palindromes:");
        Console.WriteLine(result.Trim());
    



