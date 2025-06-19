// Auto‑grade quiz React hook (JSX / Vite‑ready)
// --------------------------------------------------
// Save as src/useAutoGradeQuiz.jsx (plain JS, no TypeScript).
// Supports:
//   • data-answer="value"   → single‑answer (radio, text, etc.)
//   • data-answers="v1,v2"  → multi‑answer (checkbox set)
// --------------------------------------------------
import { useEffect } from "react";

export function useAutoGradeQuiz(formSelector = "form.auto-graded-quiz") {
  useEffect(() => {
    const forms = Array.from(document.querySelectorAll(formSelector));
    if (!forms.length) return;

    const listeners = [];

    forms.forEach((form) => {
      const handler = (e) => {
        e.preventDefault();
        const questions = form.querySelectorAll(".question");
        let correct = 0;

        questions.forEach((q) => {
          const feedback = q.querySelector(".feedback");
          const expected = q.dataset.answer;
          const expectedSet = q.dataset.answers?.split(",").map((s) => s.trim());

          // --------------------
          // SINGLE‑ANSWER LOGIC
          // --------------------
          if (expected !== undefined) {
            // Get value from the selected/entered control
            const selectedControl =
              q.querySelector(
                "input[type=radio]:checked, input[type=checkbox]:checked, input:not([type=radio]):not([type=checkbox]), select, textarea"
              );
            const userValue = selectedControl?.value?.trim() ?? "";
            const isCorrect = userValue === expected;
            if (isCorrect) correct += 1;

            if (feedback) {
              feedback.textContent = isCorrect
                ? "✔ Correct"
                : `✖ Incorrect (answer: ${expected})`;
              feedback.className = `feedback ${isCorrect ? "correct" : "incorrect"}`;
            }
          }
          // --------------------
          // MULTI‑ANSWER LOGIC (checkbox set)
          // --------------------
          else if (expectedSet) {
            const selectedVals = Array.from(
              q.querySelectorAll("input[type=checkbox]:checked, input[type=radio]:checked")
            ).map((el) => el.value.trim());

            const correctSet = expectedSet.sort().join(",");
            const userSet = selectedVals.sort().join(",");
            const isCorrect = userSet === correctSet;
            if (isCorrect) correct += 1;

            if (feedback) {
              feedback.textContent = isCorrect ? "✔ Correct" : "✖ Incorrect";
              feedback.className = `feedback ${isCorrect ? "correct" : "incorrect"}`;
            }
          }
        });

        const scoreText = `You scored ${correct} / ${questions.length}.`;
        const scoreEl = form.querySelector(".quiz-score");
        if (scoreEl) {
          scoreEl.textContent = scoreText;
        } else {
          const p = document.createElement("p");
          p.className = "quiz-score";
          p.textContent = scoreText;
          form.appendChild(p);
        }
      };

      form.addEventListener("submit", handler);
      listeners.push({ form, handler });
    });

    return () => {
      listeners.forEach(({ form, handler }) => form.removeEventListener("submit", handler));
    };
  }, [formSelector]);
}