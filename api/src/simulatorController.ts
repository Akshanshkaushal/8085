import { Request, Response } from 'express';
import { exec } from 'child_process';
import path from 'path';

const executablePath = path.resolve(__dirname, '..', '..', 'backend', 'build', 'Micro8085');

export const runCode = (req: Request, res: Response, next: Function) => {
  const { code } = req.body;

  // Execute the Micro8085 program with the 'run' command
  const child = exec(`${executablePath} run`, (error, stdout, stderr) => {
    if (error) {
      return res.status(500).json({ error: stderr || error.message });
    }
    res.json({ output: stdout });
  });

  // Pass the assembly code to stdin of the Micro8085 process
  if (child.stdin) {
    child.stdin.write(code);
    child.stdin.end();
  } else {
    res.status(500).json({ error: "Failed to start child process" });
  }
};

export const stepSimulator = (req: Request, res: Response, next: Function) => {
  // Execute the Micro8085 program with the 'step' command
  exec(`${executablePath} step`, (error, stdout, stderr) => {
    if (error) {
      return res.status(500).json({ error: stderr || error.message });
    }
    res.json({ output: stdout });
  });
};

export const getState = (req: Request, res: Response) => {
  // Execute the Micro8085 program with the 'state' command
  exec(`${executablePath} state`, (error, stdout, stderr) => {
    if (error) {
      return res.status(500).json({ error: stderr || error.message });
    }
    res.send(stdout);
  });
};

export const getMemory = (req: Request, res: Response) => {
  // Execute the Micro8085 program with the 'memory' command
  exec(`${executablePath} memory`, (error, stdout, stderr) => {
    if (error) {
      return res.status(500).json({ error: stderr || error.message });
    }
    res.json({ memory: stdout });
  });
};