import React from 'react';
import UserTitle from '../UserTitle/UserTitle';

const Blog = () => {

    UserTitle('Blogs-pages');
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
                <p className="mt-4 mb-8 dark:text-gray-400">Sagittis tempor donec id vestibulum viverra. Neque condimentum primis orci at lacus amet bibendum.</p>
                <div className="space-y-4">
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 cursor-pointer">Difference between SQL and NoSQL?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">SQL stands for ‘Structured Query Language’. It is the most common programming language used for executing queries, and handling data by using CRUD (create, read, update and delete) operation on a Relational Database Management System (RDMS) like MySQL, PostgreSQL, etc.</p>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">NoSQL stands for ‘Not-Only SQL’. These types of databases are Non-Relational or non-tabular. A No-SQL database does not require a specific schema and hence is schema-less, and all the entries/documents are JSON documents. Examples − MongoDB, DynamoDB, Redis, etc.</p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 cursor-pointer">What is JWT, and how does it work?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as a JSON object. It is compact, readable, and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.Basically, the identity provider(IdP) generates a JWT certifying user identity and the Resource server decodes and verifies the authenticity of the token using secret salt / public key.</p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 cursor-pointer">What is the difference between javascript and NodeJS?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">It is an accessible, bridge, parsed, lightweight, reactive, and web apps programming language.It's a programming language, after all. Any browser with a competent browser engine will operate. It's most commonly used on client-side servers. The node community does not care about JavaScript.It's made for creating network-centric apps. It's a new release of the ECMA script that works on the C++-based V8 engine.TypedJS, RamdaJS, and other JavaScript frameworks are examples.</p>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">It's a bridge, open-source Js runtime environment for executing Js on the server. It's a JavaScript translator and environment that includes some valuable libraries for JavaScript programming. It's mainly popular on the server side. All node projects represent the JavaScript community. It's made for real-time data-intensive apps that run on multiple platforms.C++, C, and JavaScript are used. Nodejs modules include Lodash and Express. All of these modules must be imported from npm.</p>
                       
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 cursor-pointer">How does NodeJS handle multiple requests at the same time?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for EventQueue. If NodeJS can process the request without I/O blocking then the event loop would process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default Blog;