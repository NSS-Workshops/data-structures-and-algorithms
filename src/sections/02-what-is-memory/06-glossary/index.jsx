import { formatGlossary } from "@nss-workshops/nss-core";

const data = [
  { term: "Binary", definition: "A two-value number system (0 and 1) that reflects the two physical states of a computer's hardware switches — off or on.", week: "1" },
  { term: "Bit", definition: "The smallest unit of data in a computer — a single binary digit with a value of 0 or 1.", week: "1" },
  { term: "Byte", definition: "A group of 8 bits. A byte can represent 256 distinct values and is the basic addressable unit of RAM.", week: "1" },
  { term: "RAM (Random Access Memory)", definition: "The computer's working memory — volatile storage that holds data currently in use. Any address can be accessed in the same amount of time.", week: "1" },
  { term: "Volatile", definition: "Describes storage that requires power to retain data. RAM is volatile; hard drives and SSDs are not.", week: "1" },
  { term: "Memory Address", definition: "A unique number identifying a specific byte's location in RAM. The CPU uses addresses to find data directly, without searching.", week: "1" },
  { term: "Value", definition: "Data stored directly at a variable's memory location. Primitive types in JavaScript (numbers, strings, booleans) are stored by value — each variable gets its own copy.", week: "1" },
  { term: "Reference", definition: "A memory address stored in a variable, pointing to where the actual data lives. Objects and arrays in JavaScript are stored by reference — multiple variables can point to the same data.", week: "1" },
  { term: "Contiguous Memory", definition: "Memory locations that are sequential and adjacent with no gaps between them. Arrays use contiguous memory, which allows any element's address to be calculated directly from its index, without searching.", week: "1" },
];

export default {
  id: "what-is-memory-glossary",
  title: "Glossary: What Is Memory?",
  description: "Key terms from the memory foundations section.",
  previousChapterId: "what-is-memory-bridge",
  nextChapterId: "what-is-memory-checkpoint",
  content: `These terms describe how computers store and locate data. You will encounter them throughout the course, especially when analyzing why data structures perform the way they do.
${formatGlossary(data)}`,
  exercises: [],
  quiz: null
}
