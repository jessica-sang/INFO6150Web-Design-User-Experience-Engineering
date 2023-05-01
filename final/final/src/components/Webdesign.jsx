import '../static/css/BlogDetail.css'
import Comment from './Comment';
import logo192 from '../static/images/logo192.png'
function RectLearningDetail({ darkModeClass, isLogin, user, loginFormRef }) {
    return (
        <div className={`blog-detail ${darkModeClass}`}>
            <div className={`detail-container ${darkModeClass}`}>
                <div className='detail-title' aria-label='Blog detail title'>
                    Web Development
                </div>
                <div className='detail-content' aria-label='Blog detail content'>
                    <dl>
                        <dt><strong>HTML:</strong></dt>
                        <dd>HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/behavior (JavaScript).</dd>
                        <dd>
                            <blockquote className={`detail-blockquote detail-shadow ${darkModeClass}`}>
                                <dt><strong>Element:</strong></dt>
                                HTML markup includes special "elements" such as "head", "title", "body", "header", "footer", "article", "section", "p" and many others.                  
                            </blockquote>
                        </dd>

                        <dt><strong>CSS:</strong></dt>

                        <dd>Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.
                            <br /><br />
                            With our knowledge so far, the only way to update the UI is to create a new element, and pass it to root.render().</dd>
                    </dl>

                    <dl>
                        <dt><strong>React:</strong></dt>
                        
                        <dd> React is a library for building user interfaces. React is not a framework – it's not even exclusive to the web. It's used with other libraries to render to certain environments. For instance, React Native can be used to build mobile applications.</dd>
                    </dl>
                    <img className='detail-img' src={logo192} alt="React" />
                    <dl>
                        <dd>create-react-app takes one argument: the name you'd like to give your app. create-react-app uses this name to make a new directory, then creates the necessary files inside it. Make sure you cd to the place you'd like your app to live on your hard drive, then run the following in your terminal:</dd>
                        <dd>
                            <blockquote className={`detail-blockquote detail-shadow ${darkModeClass}`}>
                                <dt><strong>npx create-react-app moz-todo-react</strong></dt>
                                <dt>This creates a moz-todo-react directory, and does several things inside it:</dt>
                                <dt>Installs some npm packages essential to the functionality of the app.
                                Writes scripts for starting and serving the application.
                                Creates a structure of files and directories that define the basic app architecture.
                                Initializes the directory as a git repository, if you have git installed on your computer.</dt>
                            </blockquote>
                        </dd>
                    </dl>
            
                    <br/><br/>
                </div>
            </div>
            <Comment darkModeClass={darkModeClass} isLogin={isLogin} user={user} loginFormRef={loginFormRef} ></Comment>
        </div>
    );
}

export default RectLearningDetail;