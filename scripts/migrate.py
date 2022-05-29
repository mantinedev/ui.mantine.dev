import os
import sys
import glob

### 
### This script is made to migrate from tabler-icons-react to @tabler/icons
### Built by @ajnart for Mantine
### 


def replaceInline(line: str):
    # Return if line doesn't contain a string to replace
    if "tabler-icons-react" not in line:
        return line
    try:
      # Replace 'tabler-icons-react' with '@tabler/icons'
      line = line.replace("tabler-icons-react", "@tabler/icons")
      # Extract all the words inside the brackets
      words = line.split("{")[1].split("}")[0].split(",")
      # Remove whitespace from each word
      words = [word.strip() for word in words]
      # Transform to Icon{word} as {word} for each word
      words = [f"Icon{word} as {word}" for word in words]
      # Join all the words with a comma
      new_imports = ", ".join(words)
      # Replace the old imports with the new ones
      line = line.replace(line.split("{")[1].split("}")[0], new_imports)
      return line
    except:
      return line


# Open all the files in the sys.argv[1] directory
folder = sys.argv[1]
new_lines = []

for file in glob.iglob(sys.argv[1] + "**/*.tsx", recursive=True):
    # Open the file
    with open(file, "r") as f:
        # Read the file
        lines = f.readlines()
        # Replace the lines with the new imports
        for line in lines:
            new_lines.append(replaceInline(line))
    # Write the new lines to the file
    with open(file, "w") as f:
        f.writelines(new_lines)
    # Clear the new lines
    new_lines = []
