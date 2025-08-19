const fs = require("fs");
const path = require("path");

const BASE_URL = `https://raw.githubusercontent.com/${process.env.GITHUB_REPOSITORY}/main/`;

function walkDir(dir, filelist = []) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filepath = path.join(dir, file);
    const stat = fs.statSync(filepath);
    if (stat.isDirectory()) {
      walkDir(filepath, filelist);
    } else if (/\.(wav|mp3|flac)$/i.test(file)) {
      console.log("FILE",filepath)
      filelist.push(filepath);
    }
  });
  return filelist;
}

function buildGroups(files) {
  const groups = {};

  for (const file of files) {
    const rel = path.relative(".", file).replace(/\\/g, "/"); // relative path
    const parts = rel.split("/");

    if (parts.length > 1) {
      // group by first folder
      const folder = parts[0];
      groups[folder] = groups[folder] || [];
      groups[folder].push(rel);
    } else {
      // file at root level → go into _ungrouped
      groups["_ungrouped"] = groups["_ungrouped"] || [];
      groups["_ungrouped"].push(parts[0]);
    }
  }

  return groups;
}

function main() {
  const allFiles = walkDir(".");
  const grouped = buildGroups(allFiles);

  const output = { _base: BASE_URL, ...grouped };

  fs.writeFileSync("strudel.json", JSON.stringify(output, null, 2));
  console.log("✅ strudel.json generated (grouped by top-level folder)");
}

main();
