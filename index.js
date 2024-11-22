const fs = require("fs");

// Write to a file
fs.writeFileSync(`${__dirname}/demo.js`, "demo file ban gyi h bro welcome");

// Append to a file
fs.appendFile(`${__dirname}/demo.js`, " heybro", (err) => {
  if (err) return console.error("Error appending:", err);
  console.log("Data appended successfully!");
});

// Copy file
fs.copyFile(`${__dirname}/demo.js`, `${__dirname}/anc.txt`, (err) => {
  if (err) return console.error("Error copying:", err);
  console.log("File copied successfully!");
});

// Rename file if exists
if (fs.existsSync(`${__dirname}/anc.txt`)) {
  fs.rename(`${__dirname}/anc.txt`, `${__dirname}/renamed.txt`, (err) => {
    if (err) return console.error("Error renaming:", err);
    console.log("File renamed successfully!");
  });
} else {
  console.log("File anc.txt does not exist. Skipping rename.");
}

// Delete file if exists
if (fs.existsSync(`${__dirname}/renamed.txt`)) {
  fs.unlink(`${__dirname}/renamed.txt`, (err) => {
    if (err) return console.error("Error deleting:", err);
    console.log("File deleted successfully!");
  });
} else {
  console.log("File renamed.txt does not exist. Skipping delete.");
}

// Create directory
fs.mkdir(`${__dirname}/new-folder`, { recursive: true }, (err) => {
  if (err) return console.error("Error creating directory:", err);
  console.log("Directory created successfully!");
});

// Read directory contents
fs.readdir(`new-folder`, (err, files) => {
  if (err) return console.error("Error reading directory:", err);
  console.log("Directory contents:", files);
});

// Read file asynchronously
fs.readFile(`${__dirname}/demo.js`, "utf-8", (err, data) => {
  if (err) return console.error("Error reading file:", err);
  console.log("File content:", data);
});

const os = require("os");

console.log("=== OS Module Examples ===");

// Get the hostname of the system
console.log("Hostname:", os.hostname());

// Get the platform (e.g., 'win32', 'linux', 'darwin')
console.log("Platform:", os.platform());

// Get the OS architecture (e.g., 'x64', 'arm64')
console.log("Architecture:", os.arch());

// Get the total system memory in bytes
console.log("Total Memory:", os.totalmem(), "bytes");

// Get the free system memory in bytes
console.log("Free Memory:", os.freemem(), "bytes");

// Get the operating system's default directory for temporary files
console.log("Temp Directory:", os.tmpdir());

// Get the network interfaces and their details
console.log("Network Interfaces:", os.networkInterfaces());

// Get the CPU information
console.log("CPU Info:", os.cpus());

// Get the system's endianness (e.g., 'LE' for little-endian)
console.log("Endianness:", os.endianness());

// Get the home directory of the current user
console.log("Home Directory:", os.homedir());

// Get the system uptime in seconds
console.log("Uptime:", os.uptime(), "seconds");

// Get the user information
console.log("User Info:", os.userInfo());

// Get the type of operating system (e.g., 'Windows_NT', 'Linux', 'Darwin')
console.log("OS Type:", os.type());

// Get the release version of the operating system
console.log("OS Release:", os.release());

// Get load averages (1, 5, and 15-minute intervals; Linux/Mac only)
if (os.platform() !== "win32") {
  console.log("Load Averages:", os.loadavg());
}

// Get the number of CPUs available
console.log("Number of CPUs:", os.cpus().length);

// Get the priority of the current process
try {
  console.log("Process Priority:", os.getPriority());
} catch (err) {
  console.error("Error getting priority:", err);
}

// Output Explanation:
// os.hostname(): Returns the system's hostname.
// os.platform(): Provides the OS platform (e.g., linux, win32).
// os.arch(): Returns the system's architecture (e.g., x64 for 64-bit systems).
// os.totalmem(): The total amount of system memory in bytes.
// os.freemem(): The amount of free system memory in bytes.
// os.tmpdir(): The directory used for temporary files.
// os.networkInterfaces(): Network interfaces with details like IP and MAC addresses.
// os.cpus(): Information about each CPU core (model, speed, times, etc.).
// os.endianness(): Indicates endianness (byte order) of the system (e.g., LE for little-endian).
// os.homedir(): The current user's home directory.
// os.uptime(): The system uptime in seconds.
// os.userInfo(): Details about the current user, like username and home directory.
// os.type(): The operating system's name.
// os.release(): The OS release version.
// os.loadavg(): Load averages for the last 1, 5, and 15 minutes (not available on Windows).
// os.getPriority(): Current process priority.
