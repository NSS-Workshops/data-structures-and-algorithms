/**
 * Utility functions for formatting structured content
 */

/**
 * Get a formatted markup string based on an array of content
 * @param {String} data The array of content, each an object with term, definition, and week properties
 * @returns {String} The formatted markup string
 */
export function formatGlossary(data) {
    let output = `| Term | Definition | Week |
|------|------------|------|`;

    data.forEach(d => {
        output += `
| ${d.term} |  ${d.definition} | ${d.week} |`
    });

    return output;
}

/**
 * Get a formatted markup string based on an array of content
 * @param {String} data The array of content, each an object with category, module, name and level
 * @returns {String} The formatted markup string
 */
export function formatObjectives(data) {
    let output = `| Category | Module | Learning Objective Name | Bloom Level |
|----------|--------|------------------------|-------------|`;
    
    data.forEach(d => {
        output += `
| ${d.category} | ${d.module} | ${d.name} | ${d.level} |`;
    });

    return output;
}