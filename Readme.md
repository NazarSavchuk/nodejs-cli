# NodeJS File Manager CLI

**You can start using this cli with next command**

> npm run start -- --username=[YOUR_USERNAME] > **OR**
> npm start [YOUR_USERNAME]

- After starting the program displays the following text in the console (`Username` is equal to value that was passed on application start in `--username` CLI argument)  
  `Welcome to the File Manager, Username!`
- After program work finished (`ctrl + c` pressed or user sent `.exit` command into console) the program displays the following text in the console  
  `Thank you for using File Manager, Username, goodbye!`

List of operations and their syntax:

- Navigation & working directory
  - Go upper from current directory
    > up
  - Go to dedicated folder from current directory
    > cd path_to_directory
  - Print in console list of all files and folders in current directory
    > ls
- Basic operations with files
  - Read file and print it's content in console
    > cat path_to_file
  - Create empty file in current working directory
    > add new_file_name
  - Move file
    > mv path_to_file path_to_new_directory
  - Delete file
    > rm path_to_file
- Operating system info
  - Get EOL (default system End-Of-Line) and print it to console
    > os --EOL
  - Get host machine CPUs info
    > os --cpus
  - Get home directory and print it to console
    > os --homedir
  - Get current _system user name_
    > os --username
  - Get CPU architecture
    > os --architecture
- Hash calculation
  - Calculate hash for file and print it into console
    > hash path_to_file
- Compress and decompress operations
  - Compress file
    > compress path_to_file path_to_destination
  - Decompress file
    > decompress path_to_file path_to_destination

## Technologies:

- LTS NodeJS 18.\*.
- Utilize Streams API
- No external dependencies
