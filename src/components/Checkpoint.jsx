import { useAutoGradeQuiz } from "./useAutoGradeQuiz";

export const QUESTION_TYPES = {
    RADIO: "radio",
    CHECKBOX: "checkbox",
    TEXT: "text",
    NUMBER: "number"
}

function CheckpointRadioQuestion({ data, index }) {
  return (
        <div className="question" data-answer={data.answers[data.correctAnswer]}>
          {data.questionJsx}
          {
            data.answers.map( a => <div key={"radio"+index+"-"+a}><label><input type="radio" name={"q"+index} value={a} /> {a}</label></div> )
          }
          <div className="feedback"></div>
          {data.explanation && (
            <div className="explanation" style={{display: 'none'}}>
              {data.explanation}
            </div>
          )}
        </div>
  )
}

function CheckpointCheckboxQuestion({ data, index }) {

  const correctAnswers = data.correctAnswers.map( a => data.answers[a]);

  return (
        <div className="question" data-answers={correctAnswers.join(",")}>
            {data.questionJsx}
            {
                data.answers.map( a => <div key={"radio"+index+"-"+a}><label><input type="checkbox" value={a} /> {a}</label></div> )
            }
          <div className="feedback"></div>
          {data.explanation && (
            <div className="explanation" style={{display: 'none'}}>
              {data.explanation}
            </div>
          )}
        </div>
  )
}

function CheckpointTextQuestion({ data }) {

  return (
        <div className="question" data-answer={data.correctAnswer}>
            {data.questionJsx}
            <input type="text" required />
            <div className="feedback"></div>
            {data.explanation && (
              <div className="explanation" style={{display: 'none'}}>
                {data.explanation}
              </div>
            )}
        </div>
  )
}
function CheckpointNumberQuestion({ data }) {

  return (
        <div className="question" data-answer={data.correctAnswer}>
            {data.questionJsx}
            <input type="number" required />
            <div className="feedback"></div>
            {data.explanation && (
              <div className="explanation" style={{display: 'none'}}>
                {data.explanation}
              </div>
            )}
        </div>
  )
}

function Checkpoint({ questions }) {

  useAutoGradeQuiz();

  return (
    <main>
        <form className="auto-graded-quiz">
            {
                
                questions?.map( (q, i) => {
                    
                    const props = {
                        data:q,
                        index:i,
                        key:"q"+i
                    };

                    switch (q.type){
                        case QUESTION_TYPES.RADIO:
                            return <CheckpointRadioQuestion {...props} />
                        case QUESTION_TYPES.CHECKBOX:
                            return <CheckpointCheckboxQuestion {...props} />
                        case QUESTION_TYPES.NUMBER:
                            return <CheckpointNumberQuestion {...props}/>
                        case QUESTION_TYPES.TEXT:
                            return <CheckpointTextQuestion {...props}/>
                    }
                })
            }
            <button  className="code-button test-button"  type="submit">Submit</button>
        </form>
    </main>
  )
}

export default Checkpoint