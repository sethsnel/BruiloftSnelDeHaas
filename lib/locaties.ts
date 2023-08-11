import fs from "fs";
import path from "path";
import matter from "gray-matter";

const locatiesDirectory = path.join(process.cwd(), "locaties");
const fotosDirectory = path.join(process.cwd(), "public/locaties");

export function getPathsLocaties() {
  const fileNames = fs.readdirSync(locatiesDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        locatie: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export function getLocatieData(locatie: string) {
  const fullPath = path.join(locatiesDirectory, `${locatie}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  return {
    locatie,
    content: matterResult.content,
    ...matterResult.data,
  };
}

export function getLocatieFotosPaden() {
  return fs.readdirSync(fotosDirectory);
}

export function getPathsFotos() {
  return getLocatieFotosPaden().map((fileName) => {
    return {
      params: {
        locatie: fileName,
      },
    };
  });
}

export function getLocatieFotos(locatie: string) {
  const fullPath = path.join(fotosDirectory, locatie);
  const fileNames = fs.readdirSync(fullPath);
  return fileNames.map(fileName => `/locaties/${locatie}/${fileName}`);
}