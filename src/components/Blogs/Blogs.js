import React from 'react';

const Blogs = () => {
    return (
        <div className='w-11/12 m-auto grid grid-cols-1 gap-20 mt-20'>
            <div>
                <h1>How Does React Work?</h1>
                <p>React basically maintains a tree. This tree is able to do efficient diff computations on the nodes.

                    Think of HTML code as a tree. In fact, that is exactly how the browser treats DOM . React allows to effectively re-construct my DOM in JavaScript and push only those changes to the DOM which have actually occurred.</p>
            </div>
            <div>
                <h1>Difference between props and state.</h1>
                <p>
                    <li>Props: Props are read only.</li>
                    <li>Props: Props can not be modified.</li>
                    <li>State: State changes can be asynchronous.</li>
                    <li>State: State can be modified using <code>this.setState()</code></li>
                </p>
            </div>
            <div>
                <h1>Use case of useEffect hook</h1>
                <p>
                    <li>1. Side Effect Runs After Every Render</li>
                    <li>2. Side Effect Runs Only Once After Initial Render</li>
                    <li>4. Side Effect Runs After Props Value Change</li>
                    <li>5. Side Effect Runs After Props and State Value Change</li>
                </p>
            </div>
        </div>
    );
};

export default Blogs;