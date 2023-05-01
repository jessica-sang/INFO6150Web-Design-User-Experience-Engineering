
import Comment from './Comment'
import '../static/css/BlogDetail.css'
import question from '../static/images/questions_candidats.png'
import summary from '../static/images/summary.png'
import thankyou from '../static/images/thank_you_note.jpg'

function JavaLearningDetail({ darkModeClass, isLogin, user, loginFormRef }) {
    return (
        <div className={`blog-detail ${darkModeClass}`}>
            <div className={`detail-container ${darkModeClass}`}>
                <div className='detail-title' aria-label='Blog detail title'>
                    Interview Tips
                </div>
                <div className='detail-content' aria-label='Blog detail content'>
                    <dl>
                        <dd>
                            <blockquote className={`detail-blockquote detail-shadow ${darkModeClass}`}>
                                <dt><strong>Overview:</strong></dt>
                                Develop your LinkedIn and GitHub presence and practice your interviewing skills. Experience data structure and algorithm mock-up interviews. Open to anyone seeking extra help and an edge in securing their first job. 
                                
                            </blockquote>
                        </dd>
                        <dt><strong>Use the Three-C’s method for interviewing: </strong></dt>
                        <dd>
                            - Clarify the information that the interviewer is after. Ask follow up questions as necessary to identify the specific competencies or knowledge sets that the interviewer is interested in.
                            <br />
                            - Communicate your value proposition by confirming the information requested or, when applicable, by telling how you used the competency to achieve results for a former employer.
                            <br />
                            - Confirm that you have answered the question, or provided the information requested. Don’t assume; ask: “Did that answer your question [name of interviewer]?” “Is that what you are looking for in this position?” “Are those the sorts of results you are seeking here?”
                        </dd>
                        <br></br>
                        <img className='detail-img' src={question} alt="interview_img" />
                        <br></br><br></br>

                        <br/>                       
                        <dt><strong>Prepare questions:</strong></dt>
                        <dd>
                            1.Situational questions regarding why the position is open; they can be specific or general (i.e., relevant to all job types).
                            <br />
                            2.Job-specific questions that deal with how the job functions and relates to others positions in the company.
                            <br />
                            3.Performance-measurement questions that help you to understand how the position operates and will be evaluated.
                            <br />
                            4.Support-related questions that deal with the people and resources that will make your job possible.
                            <br />
                            5.Career-path questions that will provide a sense of where the position might lead.
                            <br />
                            6.Personal and growth questions related to how the company will support your development over time. 
                        </dd>
                        <br></br>
                        <img className='detail-img' src={summary} alt="interview_img_summary" />
                        <br></br><br></br>
                        <dt><strong>Always summarize.</strong></dt>
                        <dd>
                        “Before we conclude, let me recap what I believe we have identified as the skills/competencies that you are looking for in a successful candidate for this position.”
                        </dd>

                        <br></br>
                        <img className='detail-img' src={thankyou} alt="interview_img_thankyou" />
                        <br></br><br></br>

                        <dt><strong>Thank-you note.</strong></dt>
                        <dd>
                        Send an e-mail or hand-written thank-you note the same day, if possible, to everyone you met with. Mention something specific that was discussed. Then do what you promised: Stay in touch as the process moved forward.
                        </dd>

                        <br></br>
                    </dl>

                </div>
            </div>
            <Comment darkModeClass={darkModeClass} isLogin={isLogin} user={user} loginFormRef={loginFormRef} ></Comment>
        </div>
    );
}

export default JavaLearningDetail;