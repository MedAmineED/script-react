@echo off
setlocal

:: Set the path to your script
set SCRIPT_PATH= D:\Users\Amine\dev\script\cr-react-ts.js

:: Check if a project name was provided
if "%1"=="" (
    set PROJECT_NAME=your-project-name
) else (
    set PROJECT_NAME=%1
)

:: Run the script with the project name
node %SCRIPT_PATH% %PROJECT_NAME%

endlocal
