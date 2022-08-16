import cliordledemo from '../images/cliordledemo.gif';
import feliciabotdemo from '../images/feliciabotdemo.gif';
import markdemo from '../images/markdemo.gif';
import stronglanguagedemo from '../images/stronglanguagedemo.gif';

const projects = [
    {
        description: (
            <>
                <h3>Cli-ordle</h3>
                <p>A command-line interface version of everyone's favourite 5-letter-word-guessing game</p>
                <p><em>Technologies used: Golang, BoltDB</em></p>
            </>
        ),
        image: (
           <img className='projectDemo' src={cliordledemo} alt='Project Demo' /> 
        )
    },
    {
        description: (
            <>
                <h3>Strong Language Detector</h3>
                <p>A Google Chrome extension which leverages an API based on an NLP model to censor strong language on webpages</p>
                <p><em>Technologies used: pandas, scikit-learn, Flask, JavaScript</em></p>
            </>
        ),
        image: (
            <img className='projectDemo' src={stronglanguagedemo} alt='Project Demo' />
        ),
    },
    {
        description: (
            <>
                <h3>Mark the Grade Tracker</h3>
                <p>A minimalist grade-tracking application inspired by Notion</p>
                <p><em>Technologies used: MongoDB, Mongoose, Node.js, Express.js, React</em></p>
            </>
        ),
        image: (
            <img className='projectDemo' src={markdemo} alt='Project Demo' />
        ),
    },
    {
        description: (
            <>
                <h3>FeliciaBot</h3>
                <p>A Discord bot study buddy/assistant that handles translations, Wikipedia searches, dictionary/thesaurus lookups, and to-do lists</p>
                <p><em>Technologies used: MongoDB, Discord.js, Node.js</em></p>
            </>
        ),
        image: (
            <img className='projectDemo' src={feliciabotdemo} alt='Project Demo' />
        ),
    },
];

export default projects;
