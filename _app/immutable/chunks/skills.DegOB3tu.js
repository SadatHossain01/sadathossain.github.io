import{A as e}from"./assets.CF6y1XnJ.js";const d=(o,...r)=>{const i={...o};return Object.keys(i).forEach(s=>{r.includes(s)&&delete i[s]}),i},t=o=>o,u=[t({name:"Programming Languages",slug:"pro-lang"}),t({name:"Frameworks",slug:"framework"}),t({name:"Libraries",slug:"library"}),t({name:"Langauges",slug:"lang"}),t({name:"Databases",slug:"db"}),t({name:"ORMs",slug:"orm"}),t({name:"DevOps",slug:"devops"}),t({name:"Testing",slug:"test"}),t({name:"Dev Tools",slug:"devtools"}),t({name:"Security Tools",slug:"security"}),t({name:"Markup & Style",slug:"markup-style"}),t({name:"Design",slug:"design"}),t({name:"Soft Skills",slug:"soft"})],a=o=>{const r=d(o,"category");return o.category&&(r.category=u.find(i=>i.slug===o.category)),r},h=(...o)=>l.filter(r=>o.length===0?!0:o.includes(r.slug)),y=o=>{const r=[],i=[];return l.forEach(s=>{if(o.trim()&&!s.name.toLowerCase().includes(o.trim().toLowerCase()))return;if(!s.category){i.push(s);return}let n=r.find(g=>{var c;return g.category.slug===((c=s.category)==null?void 0:c.slug)});n||(n={items:[],category:s.category},r.push(n)),n.items.push(s)}),i.length!==0&&r.push({category:{name:"Others",slug:"others"},items:i}),r},p="Skills",l=[a({slug:"c",color:"blue",description:"C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system. By design, C provides constructs that map efficiently to typical machine instructions. It has found lasting use in applications previously coded in assembly language. Such applications include operating systems and various application software for computer architectures that range from supercomputers to PLCs and embedded systems.",logo:e.C,name:"C",category:"pro-lang"}),a({slug:"cpp",color:"blue",description:'C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or "C with Classes". The language has expanded significantly over time, and modern C++ now has object-oriented, generic, and functional features in addition to facilities for low-level memory manipulation. It is almost always implemented as a compiled language, and many vendors provide C++ compilers, including the Free Software Foundation, Microsoft, Intel, and IBM.',logo:e.Cpp,name:"C++",category:"pro-lang"}),a({slug:"java",color:"red",description:"Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let application developers write once, run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.",logo:e.Java,name:"Java",category:"pro-lang"}),a({slug:"python",color:"blue",description:"Python is an interpreted high-level general-purpose programming language. Python's design philosophy emphasizes code readability with its notable use of significant indentation. Its language constructs and object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.",logo:e.Python,name:"Python",category:"pro-lang"}),a({slug:"js",color:"yellow",description:"JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.",logo:e.JavaScript,name:"Javascript",category:"pro-lang"}),a({slug:"ts",color:"blue",description:"TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. TypeScript is designed for the development of large applications and transcompiles to JavaScript. As TypeScript is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs.",logo:e.TypeScript,name:"Typescript",category:"pro-lang"}),a({slug:"bash",color:"black",description:"Bash is a Unix shell and command language written by Brian Fox for the GNU Project as a free software replacement for the Bourne shell. First released in 1989, it has been used as the default login shell for most Linux distributions.",logo:e.Bash,name:"Bash",category:"pro-lang"}),a({slug:"assembly-8086",color:"black",description:"x86 assembly language is a family of backward-compatible assembly languages that provide some level of compatibility all the way back to the Intel 8008 introduced in April 1972. x86 assembly languages are used to produce object code for the x86 class of processors. Like all assembly languages, it uses short mnemonics to represent the fundamental instructions that the CPU in a computer can understand and follow.",logo:e.Unknown,name:"Assembly 8086",category:"pro-lang"}),a({slug:"tex",color:"black",description:"TeX is a typesetting system designed and written by Donald Knuth. TeX is popular in academia, especially in mathematics, computer science, economics, engineering, physics, statistics, and quantitative psychology.",logo:e.TeX,name:"TeX",category:"pro-lang"}),a({slug:"svelte",color:"orange",description:"Svelte is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members. Svelte is not a monolithic JavaScript library imported by applications: instead, Svelte compiles HTML templates to specialized code that manipulates the DOM directly, which may reduce the size of transferred files and give better client performance. Application code is also processed by the compiler, inserting calls to automatically recompute data and re-render UI elements when the data they depend on is modified. This also avoids the overhead associated with runtime intermediate representations, such as virtual DOM, unlike traditional frameworks (such as React and Vue) which carry out the bulk of their work at runtime, i.e. in the browser.",logo:e.Svelte,name:"Svelte",category:"framework"}),a({slug:"sveltekit",color:"orange",description:"SvelteKit is a framework for building web applications of all sizes, with a beautiful development experience and flexible filesystem-based routing.",logo:e.Svelte,name:"SvelteKit",category:"framework"}),a({slug:"nodejs",color:"green",description:"Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.",logo:e.NodeJs,name:"Node.js",category:"framework"}),a({slug:"expressjs",color:"green",description:"Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.",logo:e.ExpressJs,name:"Express.js",category:"framework"}),a({slug:"pytorch",color:"orange",description:"PyTorch is an open-source machine learning library based on the Torch library, used for applications such as computer vision and natural language processing, primarily developed by Facebook's AI Research lab (FAIR). It is free and open-source software released under the Modified BSD license.",logo:e.PyTorch,name:"PyTorch",category:"library"}),a({slug:"numpy",color:"blue",description:"NumPy is a library for the Python programming language, adding support for large, multi-dimensional arrays and matrices, along with a large collection of high-level mathematical functions to operate on these arrays.",logo:e.Numpy,name:"Numpy",category:"library"}),a({slug:"pandas",color:"blue",description:"Pandas is a software library written for the Python programming language for data manipulation and analysis. In particular, it offers data structures and operations for manipulating numerical tables and time series.",logo:e.Pandas,name:"Pandas",category:"library"}),a({slug:"scikit-learn",color:"blue",description:"Scikit-learn is a free software machine learning library for the Python programming language. It features various classification, regression, and clustering algorithms, including support vector machines, random forests, gradient boosting, k-means, and DBSCAN, and is designed to interoperate with the Python numerical and scientific libraries NumPy and SciPy.",logo:e.Scikitlearn,name:"Scikit-learn",category:"library"}),a({slug:"transformers",color:"orange",description:"Transformers is a library released by the Hugging Face team that provides thousands of pre-trained models for Natural Language Processing (NLP) tasks. The library is built on top of PyTorch and TensorFlow.",logo:e.Transformers,name:"Transformers",category:"library"}),a({slug:"vllm",color:"orange",description:"vLLM is a fast and easy-to-use library for LLM inference and serving. vLLM is fast with: State-of-the-art serving throughput, Efficient management of attention key and value memory with PagedAttention, Continuous batching of incoming requests, Fast model execution with CUDA/HIP graph, Quantization: GPTQ, AWQ, INT4, INT8, and FP8, Optimized CUDA kernels, including integration with FlashAttention and FlashInfer, Speculative decoding, Chunked prefill.",logo:e.vLLM,name:"vLLM",category:"library"}),a({slug:"BeautifulSoup",color:"orange",description:"Beautiful Soup is a Python library for pulling data out of HTML and XML files. It creates parse trees that are helpful to extract the data easily.",logo:e.Unknown,name:"Beautiful Soup",category:"library"}),a({slug:"opengl",color:"black",description:"OpenGL (Open Graphics Library) is a cross-language, cross-platform application programming interface for rendering 2D and 3D vector graphics. The API is typically used to interact with a graphics processing unit (GPU), to achieve hardware-accelerated rendering.",logo:e.OpenGL,name:"OpenGL",category:"library"}),a({slug:"postgres",color:"blue",description:"PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance. It was originally named POSTGRES, referring to its origins as a successor to the Ingres database developed at the University of California, Berkeley. PostgreSQL features transactions with Atomicity, Consistency, Isolation, Durability properties, automatically updatable views, materialized views, triggers, foreign keys, and stored procedures.",logo:e.PostgreSQL,name:"PostgreSQL",category:"db"}),a({slug:"oracle",color:"red",description:"Oracle Database is a multi-model database management system produced and marketed by Oracle Corporation. It is a database commonly used for running online transaction processing, data warehousing, and mixed database workloads.",logo:e.Oracle,name:"Oracle",category:"db"}),a({slug:"docker",color:"blue",description:"Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. Containers are isolated from one another and bundle their software, libraries, and configuration files; they can communicate with each other through well-defined channels.",logo:e.Docker,name:"Docker",category:"devops"}),a({slug:"github-actions",color:"green",description:"GitHub Actions is a CI/CD service that makes it easy to automate all your software workflows. You can build, test, and deploy your code right from GitHub. Make code reviews, branch management, and issue triaging work the way you want.",logo:e.GithubActions,name:"GitHub Actions",category:"devops"}),a({slug:"selenium",color:"green",description:"Selenium is a portable framework for testing web applications. Selenium provides a playback tool for authoring functional tests without the need to learn a test scripting language.",logo:e.Selenium,name:"Selenium",category:"test"}),a({slug:"postman",color:"orange",description:"Postman is a collaboration platform for API development. Postman simplifies each step of the API lifecycle and streamlines collaboration so you can create better APIs—faster.",logo:e.Postman,name:"Postman",category:"test"}),a({slug:"git",color:"red",description:"Git is a distributed version-control system for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files.",logo:e.Git,name:"Git",category:"devtools"}),a({slug:"github",color:"black",description:"GitHub is a web-based platform for version control using Git. It is also where users can collaborate on or adopt open-source projects, fork code, share ideas, and more.",logo:e.Github,name:"GitHub",category:"devtools"}),a({slug:"flex",color:"black",description:"Flex is a tool for generating scanners: programs that recognize lexical patterns in text. Flex reads the given input files, or its standard input if no file names are given, for a description of a scanner to generate. The description is in the form of pairs of regular expressions and C code, called rules.",logo:e.Unknown,name:"Flex",category:"devtools"}),a({slug:"bison",color:"black",description:"Bison is a general-purpose parser generator that converts a grammar description for an LALR context-free grammar into a C program to parse that grammar. Once you are proficient with Bison, you can use it to develop a wide range of language parsers, from those used in simple desk calculators to complex programming languages.",logo:e.Unknown,name:"Bison",category:"devtools"}),a({slug:"javafx",color:"orange",description:"JavaFX is a software platform for creating and delivering desktop applications, as well as rich internet applications that can run across a wide variety of devices. JavaFX is intended to replace Swing as the standard GUI library for Java SE, but both will be included for the foreseeable future.",logo:e.JavaFX,name:"JavaFX",category:"devtools"}),a({slug:"wazuh",color:"red",description:"Wazuh is a free, open-source and enterprise-ready security monitoring solution for threat detection, integrity monitoring, incident response, and compliance.",logo:e.Wazuh,name:"Wazuh",category:"security"}),a({slug:"css",color:"blue",description:"Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",logo:e.CSS,name:"CSS",category:"markup-style"}),a({slug:"html",color:"orange",description:"HyperText Markup Language is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.",logo:e.HTML,name:"HTML",category:"markup-style"}),a({slug:"tailwind",color:"blue",description:"Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces. It provides low-level utility classes that let you build completely custom designs without ever leaving your HTML.",logo:e.Tailwind,name:"Tailwind CSS",category:"markup-style"}),a({slug:"markdown",color:"black",description:"Markdown is a lightweight markup language with plain-text-formatting syntax. Its design allows it to be converted to many output formats, but the original tool by the same name only supports HTML.",logo:e.Markdown,name:"Markdown",category:"markup-style"})],f={title:p,items:l};export{f as S,y as a,h as g};
