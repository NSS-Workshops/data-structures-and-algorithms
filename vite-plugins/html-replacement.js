/**
 * HTML replacement plugin - replaces placeholders in HTML with dynamic values
 * Replaces %COURSE_NAME% and %COURSE_URL% placeholders in index.html
 */
export const createHtmlReplacementPlugin = (courseName, courseUrl) => ({
  name: 'html-replacement',
  transformIndexHtml(html) {
    return html
      .replace(/%COURSE_NAME%/g, courseName)
      .replace(/%COURSE_URL%/g, courseUrl)
  }
})